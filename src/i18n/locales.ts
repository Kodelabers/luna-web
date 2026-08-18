// Single source of truth for the supported locales. `astro.config.mjs`
// (i18n.locales/defaultLocale) and `src/i18n/utils.ts` both import from here
// so the list only ever needs to change in one place. (M7)
export const locales = ["hr", "en", "sl", "de"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "hr";

/** Type guard — narrows an arbitrary path segment to `Locale` instead of casting. */
export function isLocale(value: string): value is Locale {
	return (locales as readonly string[]).includes(value);
}
