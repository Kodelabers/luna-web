// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
	site: "https://luna.med",
	// "server" so the contact-form API route (src/pages/api/contact.ts) can run
	// on-demand on Cloudflare Workers. Every other page opts back into static
	// prerendering via `export const prerender = true`.
	output: "server",
	integrations: [mdx(), sitemap()],
	i18n: {
		defaultLocale: "hr",
		locales: ["hr", "en", "sl", "de"],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	vite: {
		plugins: [tailwindcss()],
	},
	adapter: cloudflare({
		platformProxy: {
			enabled: true,
		},
	}),
});
