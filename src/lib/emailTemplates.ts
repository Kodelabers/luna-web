import type { TranslationKeys } from "../i18n/translations";

const LOGO_URL = "https://app.luna.med/logo.svg";

/** Escapes user-supplied text before it's interpolated into HTML email bodies. */
function escapeHtml(value: string): string {
	return value
		.replace(/&/g, "&amp;")
		.replace(/</g, "&lt;")
		.replace(/>/g, "&gt;")
		.replace(/"/g, "&quot;")
		.replace(/'/g, "&#39;");
}

/** Shared shell: dark header with logo, white card body, light footer. */
function emailShell(bodyHtml: string): string {
	return `<div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
  <div style="background: #111827; padding: 24px; text-align: center;">
    <img src="${LOGO_URL}" alt="Luna HR" style="height: 40px;" />
  </div>
  <div style="padding: 40px 32px;">
    ${bodyHtml}
  </div>
  <div style="background: #f9fafb; padding: 16px 32px; text-align: center; border-top: 1px solid #e5e7eb;">
    <p style="margin: 0; font-size: 12px; color: #9ca3af;">Luna HR</p>
  </div>
</div>`;
}

export interface DemoRequestDetails {
	name: string;
	email: string;
	org?: string;
	headcount?: string;
	scope?: string;
	problem?: string;
}

/** The subset of translation strings the e-mails are built from — sent in the submitter's own locale. (H4) */
export type EmailStrings = TranslationKeys["email"];

/** Confirmation e-mail sent to the person who submitted the demo request form. */
export function demoRequestConfirmationHtml(name: string, strings: EmailStrings): string {
	const safeName = escapeHtml(name);
	const title = strings.confirmationTitle.replace("{name}", safeName);
	return emailShell(`
    <h1 style="margin: 0 0 8px; font-size: 22px; color: #111827;">${title}</h1>
    <p style="margin: 0 0 32px; font-size: 15px; color: #6b7280;">${escapeHtml(strings.confirmationBody)}</p>
    <p style="margin: 0; font-size: 13px; color: #9ca3af; text-align: center;">${escapeHtml(strings.confirmationFooterNote)}</p>
  `);
}

/** Internal notification sent to the Luna team when a demo request form is submitted. */
export function demoRequestNotificationHtml(details: DemoRequestDetails, strings: EmailStrings): string {
	const rows: Array<[string, string | undefined]> = [
		[strings.fieldName, details.name],
		[strings.fieldEmail, details.email],
		[strings.fieldOrg, details.org],
		[strings.fieldHeadcount, details.headcount],
		[strings.fieldScope, details.scope],
		[strings.fieldProblem, details.problem],
	];

	const rowsHtml = rows
		.filter(([, value]) => Boolean(value))
		.map(
			([label, value]) => `
        <tr>
          <td style="padding: 8px 0; font-size: 13px; color: #9ca3af; vertical-align: top; white-space: nowrap; padding-right: 16px;">${escapeHtml(label)}</td>
          <td style="padding: 8px 0; font-size: 15px; color: #111827;">${escapeHtml(value as string)}</td>
        </tr>`,
		)
		.join("");

	return emailShell(`
    <h1 style="margin: 0 0 8px; font-size: 22px; color: #111827;">${escapeHtml(strings.notificationTitle)}</h1>
    <p style="margin: 0 0 24px; font-size: 15px; color: #6b7280;">${escapeHtml(strings.notificationLead)}</p>
    <table style="width: 100%; border-collapse: collapse; margin-bottom: 8px;">
      ${rowsHtml}
    </table>
  `);
}
