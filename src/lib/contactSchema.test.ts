import { describe, expect, it } from "vitest";
import { createContactSchema } from "./contactSchema";
import { z } from "zod";

const messages = { nameRequired: "name required", emailRequired: "email required", emailInvalid: "email invalid" };
const schema = createContactSchema(messages);
const valid = { name: "Ana", email: "ana@example.com", locale: "hr" as const };

describe("createContactSchema", () => {
	it("accepts a minimal valid payload", () => {
		expect(schema.safeParse(valid).success).toBe(true);
	});

	it("rejects an unknown locale", () => {
		const result = schema.safeParse({ ...valid, locale: "fr" });
		expect(result.success).toBe(false);
	});

	// M2: the client and server used to validate with two independently
	// hand-written schemas that had already drifted apart (no length limits on
	// the client). Sharing one schema makes that divergence structurally
	// impossible — this just pins the limits down.
	it("enforces the same length limits the server relies on", () => {
		const tooLong = { ...valid, problem: "x".repeat(4001) };
		expect(schema.safeParse(tooLong).success).toBe(false);
		expect(schema.safeParse({ ...valid, problem: "x".repeat(4000) }).success).toBe(true);
	});

	// M5: `org` is interpolated into the e-mail subject server-side — reject
	// CR/LF so it can never be used for header injection there.
	it("rejects CR/LF in the org field", () => {
		const result = schema.safeParse({ ...valid, org: "Clinic\r\nBcc: victim@evil.com" });
		expect(result.success).toBe(false);
	});

	it("accepts an org without control characters", () => {
		expect(schema.safeParse({ ...valid, org: "General Hospital" }).success).toBe(true);
	});

	it("rejects a payload missing the required name/email", () => {
		expect(schema.safeParse({ locale: "hr" }).success).toBe(false);
	});

	it("is the same shape the server extends with turnstileToken", () => {
		const serverSchema = schema.extend({ turnstileToken: z.string().trim().min(1) });
		expect(serverSchema.safeParse({ ...valid, turnstileToken: "token" }).success).toBe(true);
		expect(serverSchema.safeParse(valid).success).toBe(false);
	});
});
