import { describe, expect, it } from "vitest";
import { translations } from "./translations";
import { locales } from "./locales";

// Structural parity across locales is currently correct only because of
// discipline (see PR review M7/M10) — this pins it down so a future edit that
// adds a key (or a features/roles/how item) to one locale but not another
// fails CI instead of shipping a silently blank section in production.

function keyPaths(value: unknown, prefix = ""): string[] {
	if (Array.isArray(value)) {
		return [`${prefix}[]=${value.length}`, ...(value[0] ? keyPaths(value[0], `${prefix}[0]`) : [])];
	}
	if (value && typeof value === "object") {
		return Object.keys(value as Record<string, unknown>)
			.sort()
			.flatMap((key) => keyPaths((value as Record<string, unknown>)[key], prefix ? `${prefix}.${key}` : key));
	}
	return [];
}

describe("translations structural parity", () => {
	const [reference, ...rest] = locales;
	const referencePaths = keyPaths(translations[reference]);

	it.each(rest)("%s has the same key paths and array lengths as the reference locale", (locale) => {
		expect(keyPaths(translations[locale])).toEqual(referencePaths);
	});

	it.each(locales)("%s features.items has exactly 6 entries (one per FeatureIconName)", (locale) => {
		expect(translations[locale].features.items).toHaveLength(6);
	});
});
