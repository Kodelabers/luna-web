import { describe, expect, it } from "vitest";
import { demoRequestConfirmationHtml, demoRequestNotificationHtml, type EmailStrings } from "./emailTemplates";

// Minimal fixture — only the strings these two functions actually read.
const strings: EmailStrings = {
	subject: "Luna demo",
	subjectWithOrg: "Luna demo — {org}",
	confirmationSubject: "We've received your Luna demo request",
	confirmationTitle: "Thanks for reaching out, {name}!",
	confirmationBody: "Body text.",
	confirmationFooterNote: "Footer note.",
	notificationTitle: "New demo request",
	notificationLead: "Lead text.",
	fieldName: "Full name",
	fieldEmail: "Email",
	fieldOrg: "Institution",
	fieldHeadcount: "Number of staff",
	fieldScope: "What they schedule",
	fieldProblem: "Biggest problem",
};

const XSS_PAYLOAD = `<script>alert('xss')</script>`;
const XSS_ESCAPED = "&lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt;";

describe("demoRequestConfirmationHtml", () => {
	it("escapes an XSS payload in the name before interpolating it", () => {
		const html = demoRequestConfirmationHtml(XSS_PAYLOAD, strings);
		expect(html).not.toContain(XSS_PAYLOAD);
		expect(html).toContain(XSS_ESCAPED);
	});

	it("substitutes {name} into the title", () => {
		const html = demoRequestConfirmationHtml("Ana", strings);
		expect(html).toContain("Thanks for reaching out, Ana!");
	});
});

describe("demoRequestNotificationHtml", () => {
	it("escapes an XSS payload in every user-supplied field", () => {
		const html = demoRequestNotificationHtml(
			{
				name: XSS_PAYLOAD,
				email: XSS_PAYLOAD,
				org: XSS_PAYLOAD,
				headcount: XSS_PAYLOAD,
				scope: XSS_PAYLOAD,
				problem: XSS_PAYLOAD,
			},
			strings,
		);
		expect(html).not.toContain(XSS_PAYLOAD);
		expect(html.split(XSS_ESCAPED).length - 1).toBe(6);
	});

	it("omits rows for fields that weren't submitted", () => {
		const html = demoRequestNotificationHtml({ name: "Ana", email: "ana@x.com" }, strings);
		expect(html).not.toContain(strings.fieldOrg);
		expect(html).toContain(strings.fieldName);
	});
});
