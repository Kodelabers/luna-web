import { translations } from "./translations";

export type Locale = "hr" | "en" | "sl";

export const locales: Locale[] = ["hr", "en", "sl"];
export const defaultLocale: Locale = "hr";

export const localeLabels: Record<Locale, string> = {
	hr: "HR",
	en: "EN",
	sl: "SL",
};

export function getLocaleFromUrl(url: URL): Locale {
	const [, lang] = url.pathname.split("/");
	if (locales.includes(lang as Locale)) return lang as Locale;
	return defaultLocale;
}

export function useTranslations(locale: Locale) {
	return translations[locale];
}

export function getLocalizedUrl(locale: Locale, path: string = "/"): string {
	if (locale === defaultLocale) return path;
	return `/${locale}${path}`;
}

export function getAlternateLocales(currentLocale: Locale): Locale[] {
	return locales.filter((l) => l !== currentLocale);
}
