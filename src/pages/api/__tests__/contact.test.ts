import { afterEach, describe, expect, it, vi } from "vitest";
import { POST } from "../contact";

const VALID_BODY = { name: "Ana", email: "ana@example.com", locale: "hr", turnstileToken: "tok" };

function request(body: unknown) {
	return new Request("https://luna.med/api/contact", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
	});
}

function context(env: Record<string, unknown>, body: unknown = VALID_BODY) {
	return {
		request: request(body),
		locals: { runtime: { env } },
	} as unknown as Parameters<typeof POST>[0];
}

const ENV = { RESEND_API_KEY: "key", TURNSTILE_SECRET_KEY: "secret" };

/** A 200 response whose JSON body is the Turnstile siteverify outcome under test. */
function turnstileResponse(body: unknown) {
	return new Response(JSON.stringify(body), { status: 200 });
}

async function errorOf(res: Response): Promise<string | undefined> {
	return ((await res.json()) as { error?: string }).error;
}

afterEach(() => {
	vi.restoreAllMocks();
});

describe("POST /api/contact", () => {
	it("returns 400 on invalid JSON", async () => {
		const ctx = {
			request: new Request("https://luna.med/api/contact", { method: "POST", body: "not json" }),
			locals: { runtime: { env: ENV } },
		} as unknown as Parameters<typeof POST>[0];
		const res = await POST(ctx);
		expect(res.status).toBe(400);
		expect(await errorOf(res)).toBe("Invalid JSON");
	});

	it("returns 400 when required fields are missing", async () => {
		const res = await POST(context(ENV, { locale: "hr" }));
		expect(res.status).toBe(400);
		expect(await errorOf(res)).toBe("Missing or invalid fields");
	});

	it("returns 500 without calling the network when RESEND_API_KEY is missing", async () => {
		const fetchSpy = vi.spyOn(globalThis, "fetch");
		const res = await POST(context({ TURNSTILE_SECRET_KEY: "secret" }));
		expect(res.status).toBe(500);
		expect(fetchSpy).not.toHaveBeenCalled();
	});

	it("returns 500 without calling the network when TURNSTILE_SECRET_KEY is missing", async () => {
		const fetchSpy = vi.spyOn(globalThis, "fetch");
		const res = await POST(context({ RESEND_API_KEY: "key" }));
		expect(res.status).toBe(500);
		expect(fetchSpy).not.toHaveBeenCalled();
	});

	it("returns 429 and skips everything else when the rate limiter rejects the request", async () => {
		const fetchSpy = vi.spyOn(globalThis, "fetch");
		const limit = vi.fn().mockResolvedValue({ success: false });
		const res = await POST(context({ ...ENV, CONTACT_RATE_LIMITER: { limit } }));
		expect(res.status).toBe(429);
		expect(fetchSpy).not.toHaveBeenCalled();
	});

	it("returns 400 and never calls Resend when Turnstile reports failure", async () => {
		const fetchSpy = vi
			.spyOn(globalThis, "fetch")
			.mockResolvedValueOnce(turnstileResponse({ success: false }));
		const res = await POST(context(ENV));
		expect(res.status).toBe(400);
		expect(await errorOf(res)).toBe("Captcha verification failed");
		expect(fetchSpy).toHaveBeenCalledTimes(1); // only the siteverify call
	});

	it("returns 502 (not 400) when the Turnstile request itself fails — a network error isn't a bot", async () => {
		vi.spyOn(globalThis, "fetch").mockRejectedValueOnce(new Error("network down"));
		const res = await POST(context(ENV));
		expect(res.status).toBe(502);
	});

	it("returns 400 when the token's hostname doesn't match this request's host", async () => {
		vi.spyOn(globalThis, "fetch").mockResolvedValueOnce(
			turnstileResponse({ success: true, hostname: "evil.example" }),
		);
		const res = await POST(context(ENV));
		expect(res.status).toBe(400);
	});

	it("returns 502 when Resend rejects the notification e-mail", async () => {
		vi.spyOn(globalThis, "fetch")
			.mockResolvedValueOnce(turnstileResponse({ success: true, hostname: "luna.med", action: "contact_form" }))
			.mockResolvedValueOnce(new Response("nope", { status: 500 }));
		const res = await POST(context(ENV));
		expect(res.status).toBe(502);
		expect(await errorOf(res)).toBe("Failed to send email");
	});

	it("returns 200 even when only the best-effort confirmation e-mail fails", async () => {
		vi.spyOn(globalThis, "fetch")
			.mockResolvedValueOnce(turnstileResponse({ success: true, hostname: "luna.med", action: "contact_form" }))
			.mockResolvedValueOnce(new Response("ok", { status: 200 }))
			.mockResolvedValueOnce(new Response("nope", { status: 500 }));
		const res = await POST(context(ENV));
		expect(res.status).toBe(200);
	});

	it("returns 200 and sends both e-mails on a fully successful submission", async () => {
		const fetchSpy = vi
			.spyOn(globalThis, "fetch")
			.mockResolvedValueOnce(turnstileResponse({ success: true, hostname: "luna.med", action: "contact_form" }))
			.mockResolvedValueOnce(new Response("ok", { status: 200 }))
			.mockResolvedValueOnce(new Response("ok", { status: 200 }));
		const res = await POST(context(ENV));
		expect(res.status).toBe(200);
		expect(fetchSpy).toHaveBeenCalledTimes(3);
	});

	it("sends the confirmation e-mail in the submitter's locale, not a hardcoded language", async () => {
		vi.spyOn(globalThis, "fetch")
			.mockResolvedValueOnce(turnstileResponse({ success: true, hostname: "luna.med", action: "contact_form" }))
			.mockResolvedValueOnce(new Response("ok", { status: 200 }))
			.mockResolvedValueOnce(new Response("ok", { status: 200 }));
		const fetchSpy = vi.mocked(globalThis.fetch);
		await POST(context(ENV, { ...VALID_BODY, locale: "de" }));
		const confirmationCall = fetchSpy.mock.calls[2];
		const confirmationBody = JSON.parse(confirmationCall[1]!.body as string);
		expect(confirmationBody.subject).toBe("Wir haben Ihre Anfrage für eine Luna-Demo erhalten");
	});
});
