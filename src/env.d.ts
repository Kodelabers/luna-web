interface ContactFormEnv {
  // Optional (not `string`): these are Cloudflare secrets that may genuinely be
  // unbound (e.g. a preview deployment without them configured). The handler
  // in src/pages/api/contact.ts guards with `if (!apiKey)` — making the type
  // optional turns "someone removes that guard" into a compile error instead
  // of a silent `Bearer undefined` in production. (M1)
  /** Resend API key (secret) used by src/pages/api/contact.ts to send emails. */
  RESEND_API_KEY?: string;
  /** Cloudflare Turnstile secret key (secret) used to verify captcha tokens server-side. */
  TURNSTILE_SECRET_KEY?: string;
  /** Rate Limiting binding (wrangler.json `ratelimits`) that throttles POST /api/contact per IP. (H1) */
  CONTACT_RATE_LIMITER?: RateLimit;
}

type Runtime = import("@astrojs/cloudflare").Runtime<Env & ContactFormEnv>;

declare namespace App {
  interface Locals extends Runtime {}
}
