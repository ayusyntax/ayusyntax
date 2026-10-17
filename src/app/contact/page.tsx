import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { formFieldClass, formLabelClass } from "@/components/ui/fieldStyles";
import { PageShell } from "@/components/layout/PageShell";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Partner with Ayusyntax for clinic web presence or hospital digital health programs.",
};

export default function ContactPage() {
  return (
    <PageShell
      title="Partner with us"
      description="Hospitals, clinic owners, and advisors: tell us about your site and we will follow up. This form does not transmit patient health information."
    >
      <div className="grid gap-10 lg:grid-cols-2">
        <Card className="order-2 lg:order-1">
          <form
            className="space-y-5"
            action={`mailto:${siteConfig.contactEmail}`}
            method="post"
            encType="text/plain"
          >
            <div>
              <label htmlFor="name" className={formLabelClass}>
                Name
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
                Email
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
                Organization
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
                Message
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
              <li>Single-specialty and multi-site clinics across India</li>
              <li>Hospital networks improving registration and digital health IDs</li>
              <li>Foundations and partners aligned with our nonprofit mission</li>
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
