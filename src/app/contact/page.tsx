import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { PageShell } from "@/components/layout/PageShell";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description: "Partner with Ayusyntax for Phase 1 clinic sites or pilot deployments.",
};

export default function ContactPage() {
  return (
    <PageShell
      title="Partner with us"
      description="Hospitals, clinic owners, and advisors: tell us about your site and we will follow up. This form does not transmit patient health information."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <Card variant="light" className="order-2 lg:order-1">
          <form
            className="space-y-5"
            action={`mailto:${siteConfig.contactEmail}`}
            method="post"
            encType="text/plain"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-text-on-surface"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="mt-1.5 w-full rounded-md border border-border-strong bg-white px-3 py-2 text-sm text-text-on-surface"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-text-on-surface"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-1.5 w-full rounded-md border border-border-strong bg-white px-3 py-2 text-sm text-text-on-surface"
              />
            </div>
            <div>
              <label
                htmlFor="organization"
                className="block text-sm font-medium text-text-on-surface"
              >
                Organization
              </label>
              <input
                id="organization"
                name="organization"
                type="text"
                className="mt-1.5 w-full rounded-md border border-border-strong bg-white px-3 py-2 text-sm text-text-on-surface"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-text-on-surface"
              >
                Message
              </label>
              <textarea
                id="message"
                name="body"
                rows={5}
                required
                className="mt-1.5 w-full rounded-md border border-border-strong bg-white px-3 py-2 text-sm text-text-on-surface"
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Send via email client
            </Button>
            <p className="text-xs text-text-muted">
              Submissions open your default mail app addressed to{" "}
              {siteConfig.contactEmail}. A hosted form can be added later.
            </p>
          </form>
        </Card>

        <div className="order-1 space-y-6 lg:order-2">
          <Card>
            <h2 className="font-semibold text-text-primary">Who we work with</h2>
            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              <li>Single-specialty and multi-site clinics in India</li>
              <li>Hospital networks exploring ABDM pilots</li>
              <li>Student engineers joining the open-source effort</li>
            </ul>
          </Card>
          <Card>
            <h2 className="font-semibold text-text-primary">Direct email</h2>
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
