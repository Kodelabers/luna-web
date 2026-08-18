import type { APIRoute } from "astro";
import { z } from "zod";
import { CONTACT_EMAIL } from "../../consts";
import { createContactSchema } from "../../lib/contactSchema";
import { translations } from "../../i18n/translations";
import {
	demoRequestConfirmationHtml,
	demoRequestNotificationHtml,
} from "../../lib/emailTemplates";

export const prerender = false;

// Server-side validation shares its shape with the client (contactSchema.ts)
// and only adds the fields the client never sends. (M2) Error messages don't
// matter here — server errors are surfaced as generic strings, not per-field. (M2)
const payloadSchema = createContactSchema({
	nameRequired: "",
	emailRequired: "",
	emailInvalid: "",
}).extend({
	turnstileToken: z.string().trim().min(1),
});

const turnstileOutcomeSchema = z.object({
	success: z.boolean(),
	hostname: z.string().optional(),
	action: z.string().optional(),
	"error-codes": z.array(z.string()).optional(),
});

type TurnstileResult =
	| { ok: true }
	| { ok: false; reason: "captcha" }
	| { ok: false; reason: "network" };

const CONTACT_FORM_ACTION = "contact_form";

/**
 * Verifies a Turnstile token and, unlike the original implementation,
 * distinguishes three different failure modes instead of collapsing them all
 * into "false": (M3)
 *  - the response shape doesn't match what siteverify is documented to return
 *  - the token is genuinely invalid/expired (a real captcha failure)
 *  - the request to Cloudflare itself failed (an outage, not a bot)
 * It also checks `hostname`/`action` so a token minted for another site using
 * the same site key can't be replayed here.
 */
async function verifyTurnstile(
	token: string,
	secretKey: string,
	remoteIp: string | null,
	expectedHostname: string,
): Promise<TurnstileResult> {
	const body = new FormData();
	body.append("secret", secretKey);
	body.append("response", token);
	if (remoteIp) body.append("remoteip", remoteIp);

	let res: Response;
	try {
		res = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
			method: "POST",
			body,
		});
	} catch (err) {
		console.error("Turnstile verification request failed (network error)", err);
		return { ok: false, reason: "network" };
	}

	let json: unknown;
	try {
		json = await res.json();
	} catch (err) {
		console.error("Turnstile verification returned a non-JSON response", res.status, err);
		return { ok: false, reason: "network" };
	}

	const parsed = turnstileOutcomeSchema.safeParse(json);
	if (!parsed.success) {
		console.error("Turnstile verification response had an unexpected shape", parsed.error, json);
		return { ok: false, reason: "network" };
	}

	const outcome = parsed.data;
	if (!outcome.success) {
		return { ok: false, reason: "captcha" };
	}

	if (outcome.hostname && outcome.hostname !== expectedHostname) {
		console.error(
			"Turnstile hostname mismatch — token minted for",
			outcome.hostname,
			"but used on",
			expectedHostname,
		);
		return { ok: false, reason: "captcha" };
	}

	if (outcome.action && outcome.action !== CONTACT_FORM_ACTION) {
		console.error("Turnstile action mismatch", outcome.action);
		return { ok: false, reason: "captcha" };
	}

	return { ok: true };
}

function jsonResponse(status: number, body: Record<string, string>) {
	return new Response(JSON.stringify(body), {
		status,
		headers: { "Content-Type": "application/json" },
	});
}

export const POST: APIRoute = async ({ request, locals }) => {
	// Public, unauthenticated endpoint that sends real mail — throttle it per
	// IP so it can't be scripted into a spam relay. Fails open (with a logged
	// warning) if the binding is ever missing, rather than taking the whole
	// form down over an infra misconfiguration. (H1)
	const remoteIp = request.headers.get("CF-Connecting-IP");
	const rateLimiter = locals.runtime?.env?.CONTACT_RATE_LIMITER;
	if (rateLimiter) {
		const { success } = await rateLimiter.limit({ key: remoteIp ?? "unknown" });
		if (!success) {
			return jsonResponse(429, { error: "Too many requests, please try again later" });
		}
	} else {
		console.warn("CONTACT_RATE_LIMITER binding is not configured — skipping rate limit");
	}

	let payload: unknown;
	try {
		payload = await request.json();
	} catch {
		return jsonResponse(400, { error: "Invalid JSON" });
	}

	const result = payloadSchema.safeParse(payload);
	if (!result.success) {
		return jsonResponse(400, { error: "Missing or invalid fields" });
	}

	const { name, email, org, headcount, scope, problem, turnstileToken, locale } = result.data;
	const t = translations[locale].email;

	const apiKey = locals.runtime?.env?.RESEND_API_KEY;
	if (!apiKey) {
		console.error("RESEND_API_KEY is not configured");
		return jsonResponse(500, { error: "Internal server error" });
	}

	const turnstileSecret = locals.runtime?.env?.TURNSTILE_SECRET_KEY;
	if (!turnstileSecret) {
		console.error("TURNSTILE_SECRET_KEY is not configured");
		return jsonResponse(500, { error: "Internal server error" });
	}

	const expectedHostname = new URL(request.url).hostname;
	const captchaOutcome = await verifyTurnstile(
		turnstileToken,
		turnstileSecret,
		remoteIp,
		expectedHostname,
	);
	if (!captchaOutcome.ok) {
		if (captchaOutcome.reason === "network") {
			return jsonResponse(502, { error: "Captcha verification unavailable, please try again" });
		}
		return jsonResponse(400, { error: "Captcha verification failed" });
	}

	// `org` is guaranteed free of CR/LF by contactSchema's regex, so it's safe
	// to interpolate directly into an e-mail subject. (M5)
	const subject = org ? t.subjectWithOrg.replace("{org}", org) : t.subject;
	const lines = [
		`${t.fieldName}: ${name}`,
		`${t.fieldEmail}: ${email}`,
		org && `${t.fieldOrg}: ${org}`,
		headcount && `${t.fieldHeadcount}: ${headcount}`,
		scope && `${t.fieldScope}: ${scope}`,
		problem && `${t.fieldProblem}: ${problem}`,
	].filter((line): line is string => Boolean(line));

	try {
		const notificationRes = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				from: "Luna <noreply@notifications.luna.med>",
				to: [CONTACT_EMAIL],
				reply_to: email,
				subject,
				text: lines.join("\n"),
				html: demoRequestNotificationHtml(
					{ name, email, org, headcount, scope, problem },
					t,
				),
			}),
		});

		if (!notificationRes.ok) {
			const errText = await notificationRes.text().catch(() => "");
			console.error("Resend API error", notificationRes.status, errText);
			return jsonResponse(502, { error: "Failed to send email" });
		}

		// Best-effort confirmation to the submitter — a failure here shouldn't
		// fail the whole request, since the team notification already went out.
		const confirmationRes = await fetch("https://api.resend.com/emails", {
			method: "POST",
			headers: {
				Authorization: `Bearer ${apiKey}`,
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				from: "Luna <noreply@notifications.luna.med>",
				to: [email],
				subject: t.confirmationSubject,
				html: demoRequestConfirmationHtml(name, t),
			}),
		});

		if (!confirmationRes.ok) {
			const errText = await confirmationRes.text().catch(() => "");
			console.error(
				"Resend API error (confirmation)",
				confirmationRes.status,
				errText,
			);
		}
	} catch (err) {
		console.error("Contact form email error", err);
		return jsonResponse(500, { error: "Internal server error" });
	}

	return jsonResponse(200, { message: "Form submitted successfully" });
};
