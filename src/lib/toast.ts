export type ToastVariant = "success" | "error";

export interface ToastOptions {
	title: string;
	description?: string;
	variant?: ToastVariant;
	/** Milliseconds before the toast auto-dismisses. */
	duration?: number;
}

const VIEWPORT_ID = "toast-viewport";
const DEFAULT_DURATION = 6000;

const ICONS: Record<ToastVariant, string> = {
	success:
		'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
	error:
		'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0Z"/><path d="M12 9v4"/><path d="M12 17h.01"/></svg>',
};

function getViewport(): HTMLElement {
	let viewport = document.getElementById(VIEWPORT_ID);
	if (!viewport) {
		viewport = document.createElement("div");
		viewport.id = VIEWPORT_ID;
		viewport.className = "toast-viewport";
		document.body.appendChild(viewport);
	}
	return viewport;
}

/** Shows a single toast notification (Luna-styled, kodelab-like slide-in/position/dismiss UX). */
export function showToast({
	title,
	description,
	variant = "success",
	duration = DEFAULT_DURATION,
}: ToastOptions): void {
	const viewport = getViewport();

	const toast = document.createElement("div");
	toast.className = `toast toast-${variant}`;
	toast.setAttribute("role", variant === "error" ? "alert" : "status");

	const body = document.createElement("div");
	body.className = "toast-body";

	const titleRow = document.createElement("div");
	titleRow.className = "toast-title-row";

	const icon = document.createElement("span");
	icon.className = "toast-icon";
	icon.innerHTML = ICONS[variant];
	titleRow.appendChild(icon);

	const titleEl = document.createElement("p");
	titleEl.className = "toast-title";
	titleEl.textContent = title;
	titleRow.appendChild(titleEl);

	body.appendChild(titleRow);

	if (description) {
		const descEl = document.createElement("p");
		descEl.className = "toast-desc";
		descEl.textContent = description;
		body.appendChild(descEl);
	}

	const closeBtn = document.createElement("button");
	closeBtn.type = "button";
	closeBtn.className = "toast-close";
	closeBtn.setAttribute("aria-label", "Close");
	closeBtn.innerHTML =
		'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';

	toast.appendChild(body);
	toast.appendChild(closeBtn);
	viewport.appendChild(toast);

	let removed = false;
	const remove = () => {
		if (removed) return;
		removed = true;
		toast.dataset.closing = "true";
		toast.addEventListener(
			"animationend",
			() => {
				toast.remove();
			},
			{ once: true },
		);
	};

	closeBtn.addEventListener("click", remove);
	window.setTimeout(remove, duration);
}
