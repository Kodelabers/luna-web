// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";
import { locales, defaultLocale } from "./src/i18n/locales.ts";

// https://astro.build/config
export default defineConfig({
	site: "https://luna.med",
	// "server" so the contact-form API route (src/pages/api/contact.ts) can run
	// on-demand on Cloudflare Workers. Every other page opts back into static
	// prerendering via `export const prerender = true`.
	output: "server",
	integrations: [sitemap()],
	i18n: {
		defaultLocale,
		locales: [...locales],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
		build: {
			// Without this, Vite inlines small client scripts directly into the
			// HTML instead of emitting them as separate /_astro/*.js files. That
			// breaks under our CSP (script-src has no 'unsafe-inline'): inlined
			// scripts get silently blocked by the browser in production even
			// though nothing errors locally, where `astro dev` never applies the
			// CSP from public/_headers.
			assetsInlineLimit: 0,
		},
	},
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
