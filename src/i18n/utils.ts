import { translations } from "./translations";
import { locales, defaultLocale, isLocale, type Locale } from "./locales";

export { locales, defaultLocale, isLocale, type Locale };

export const localeLabels: Record<Locale, string> = {
	hr: "HR",
	en: "EN",
	sl: "SL",
	de: "DE",
};

export function getLocaleFromUrl(url: URL): Locale {
	const [, lang] = url.pathname.split("/");
	if (lang && isLocale(lang)) return lang;
	return defaultLocale;
}

export function useTranslations(locale: Locale) {
	return translations[locale];
}

/**
 * Strips the leading `/<locale>` prefix (if any) from a pathname, so it can be
 * re-combined with a *different* locale via `getLocalizedUrl`. Always returns
 * a path starting with `/`.
 */
export function stripLocaleFromPath(pathname: string): string {
	const [, maybeLocale, ...rest] = pathname.split("/");
	if (maybeLocale && isLocale(maybeLocale)) {
		const remainder = rest.join("/");
		return `/${remainder}`;
	}
	return pathname.startsWith("/") ? pathname : `/${pathname}`;
}

export function getLocalizedUrl(locale: Locale, path: string = "/"): string {
	if (locale === defaultLocale) return path;
	return `/${locale}${path}`;
}

export function getAlternateLocales(currentLocale: Locale): Locale[] {
	return locales.filter((l) => l !== currentLocale);
}
