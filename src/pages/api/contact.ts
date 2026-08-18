import type { APIRoute } from "astro";
import { z } from "zod";
import { CONTACT_EMAIL } from "../../consts";
import {
	demoRequestConfirmationHtml,
	demoRequestNotificationHtml,
} from "../../lib/emailTemplates";

export const prerender = false;

// Server-side validation. Deliberately stricter than kodelab-web's Lambda
// (which only did truthy checks) — this actually enforces shape/length limits.
const payloadSchema = z.object({
	name: z.string().trim().min(1).max(200),
	email: z.string().trim().email().max(200),
	org: z.string().trim().max(200).optional(),
	headcount: z.string().trim().max(50).optional(),
	scope: z.string().trim().max(200).optional(),
	problem: z.string().trim().max(4000).optional(),
});

function jsonResponse(status: number, body: Record<string, string>) {
	return new Response(JSON.stringify(body), {
		status,
		headers: { "Content-Type": "application/json" },
	});
}

export const POST: APIRoute = async ({ request, locals }) => {
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

	const { name, email, org, headcount, scope, problem } = result.data;

	const apiKey = locals.runtime?.env?.RESEND_API_KEY;
	if (!apiKey) {
		console.error("RESEND_API_KEY is not configured");
		return jsonResponse(500, { error: "Internal server error" });
	}

	const subject = org ? `Luna demo — ${org}` : "Luna demo";
	const lines = [
		`Ime i prezime: ${name}`,
		`Email: ${email}`,
		org && `Ustanova: ${org}`,
		headcount && `Broj djelatnika: ${headcount}`,
		scope && `Što raspoređuju: ${scope}`,
		problem && `Najveći problem: ${problem}`,
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
				html: demoRequestNotificationHtml({
					name,
					email,
					org,
					headcount,
					scope,
					problem,
				}),
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
				subject: "Primili smo vaš zahtjev za demo Lune",
				html: demoRequestConfirmationHtml(name),
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
