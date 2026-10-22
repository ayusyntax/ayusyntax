import { basePath } from "@/lib/base-path";
import { siteConfig } from "@/lib/constants";

/** HTTPS endpoint for static-site contact forms (FormSubmit). */
export const contactFormAction =
  process.env.NEXT_PUBLIC_CONTACT_FORM_ACTION ??
  `https://formsubmit.co/${encodeURIComponent(siteConfig.contactEmail)}`;

export function contactFormRedirectUrl(): string | undefined {
  const site = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (!site) return undefined;
  return `${site}${basePath}/contact/?sent=1`;
}
