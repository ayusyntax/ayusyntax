"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { PageShell } from "@/components/layout/PageShell";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { formFieldClass, formLabelClass } from "@/components/ui/fieldStyles";
import { siteConfig } from "@/lib/constants";

function openMailto(form: HTMLFormElement) {
  const data = new FormData(form);
  const name = String(data.get("name") ?? "").trim();
  const email = String(data.get("email") ?? "").trim();
  const organization = String(data.get("organization") ?? "").trim();
  const bodyText = String(data.get("body") ?? "").trim();

  const lines: string[] = [];
  if (name) lines.push(`Name: ${name}`);
  if (email) lines.push(`Email: ${email}`);
  if (organization) lines.push(`Organization: ${organization}`);
  lines.push("", bodyText);

  const params = new URLSearchParams();
  if (name) {
    params.set("subject", `Partnership inquiry from ${name}`);
  } else {
    params.set("subject", "Partnership inquiry");
  }
  params.set("body", lines.join("\n"));

  window.location.href = `mailto:${siteConfig.contactEmail}?${params.toString()}`;
}

export function ContactPageContent() {
  const { messages } = useLanguage();
  const contact = messages.contact;

  return (
    <PageShell title={contact.title} description={contact.description}>
      <div className="grid gap-10 lg:grid-cols-2">
        <Card className="order-2 lg:order-1">
          <form
            className="space-y-5"
            onSubmit={(event) => {
              event.preventDefault();
              openMailto(event.currentTarget);
            }}
          >
            <div>
              <label htmlFor="name" className={formLabelClass}>
                {messages.common.formName}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className={formFieldClass}
              />
            </div>
            <div>
              <label htmlFor="email" className={formLabelClass}>
                {messages.common.formEmail}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className={formFieldClass}
              />
            </div>
            <div>
              <label htmlFor="organization" className={formLabelClass}>
                {messages.common.formOrganization}
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                className={formFieldClass}
              />
            </div>
            <div>
              <label htmlFor="message" className={formLabelClass}>
                {messages.common.formMessage}
              </label>
              <textarea
                id="message"
                name="body"
                rows={5}
                required
                className={formFieldClass}
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              {messages.common.sendViaEmail}
            </Button>
            <p className="text-xs text-text-muted">
              {messages.common.formDisclaimer}{" "}
              <span className="text-text-secondary">{siteConfig.contactEmail}</span>
            </p>
          </form>
        </Card>

        <div className="order-1 space-y-6 lg:order-2">
          <Card>
            <h2 className="font-semibold text-text-primary">
              {messages.common.whoWeWorkWith}
            </h2>
            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              {contact.whoWeWorkWith.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Card>
          <Card>
            <h2 className="font-semibold text-text-primary">
              {messages.common.directEmail}
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="text-brand-green hover:text-brand-green-hover"
              >
                {siteConfig.contactEmail}
              </a>
            </p>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}
