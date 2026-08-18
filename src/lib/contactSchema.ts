import { z } from "zod";

export interface ContactErrorMessages {
	nameRequired: string;
	emailRequired: string;
	emailInvalid: string;
}

export function createContactSchema(messages: ContactErrorMessages) {
	return z.object({
		name: z.string().trim().min(1, messages.nameRequired),
		email: z
			.string()
			.trim()
			.min(1, messages.emailRequired)
			.email(messages.emailInvalid),
		org: z.string().trim().optional(),
		headcount: z.string().trim().optional(),
		scope: z.string().trim().optional(),
		problem: z.string().trim().optional(),
	});
}

export type ContactSchema = ReturnType<typeof createContactSchema>;
export type ContactValues = z.infer<ContactSchema>;
export type ContactField = keyof ContactValues;
