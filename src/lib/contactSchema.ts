import { z } from "zod";
import { locales } from "../i18n/locales";

export interface ContactErrorMessages {
	nameRequired: string;
	emailRequired: string;
	emailInvalid: string;
}

/**
 * Single source of truth for the contact-form shape, shared by the client
 * (`CTA.astro`) and the server (`src/pages/api/contact.ts`, which `.extend()`s
 * this with `turnstileToken`). Keeping one schema means the two can no longer
 * silently drift apart. (M2)
 *
 * Length limits apply on both sides; `org` additionally rejects CR/LF so it
 * can't be used to inject headers into the e-mail built from it. (M5)
 */
export function createContactSchema(messages: ContactErrorMessages) {
	return z.object({
		name: z.string().trim().min(1, messages.nameRequired).max(200, messages.nameRequired),
		email: z
			.string()
			.trim()
			.min(1, messages.emailRequired)
			.max(200, messages.emailInvalid)
			.email(messages.emailInvalid),
		org: z
			.string()
			.trim()
			.max(200)
			.regex(/^[^\r\n]*$/, "no line breaks")
			.optional(),
		headcount: z.string().trim().max(50).optional(),
		scope: z.string().trim().max(200).optional(),
		problem: z.string().trim().max(4000).optional(),
		/** Language the confirmation/notification e-mails should be sent in. (H4) */
		locale: z.enum(locales),
	});
}

export type ContactSchema = ReturnType<typeof createContactSchema>;
export type ContactValues = z.infer<ContactSchema>;
export type ContactField = keyof ContactValues;
