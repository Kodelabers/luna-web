interface ContactFormEnv {
  /** Resend API key (secret) used by src/pages/api/contact.ts to send emails. */
  RESEND_API_KEY: string;
}

type Runtime = import("@astrojs/cloudflare").Runtime<Env & ContactFormEnv>;

declare namespace App {
  interface Locals extends Runtime {}
}
