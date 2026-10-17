"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { navHrefs } from "@/lib/nav";

export function PartnerSteps() {
  const { messages } = useLanguage();
  const partnerSteps = messages.home.partnerSteps;

  return (
    <section className="border-y border-border bg-bg-elevated py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow={partnerSteps.eyebrow}
              title={partnerSteps.title}
              description={partnerSteps.description}
            />
            <Button href={navHrefs.contact} className="mt-8 hidden lg:inline-flex">
              {messages.common.contactUs}
            </Button>
          </div>
          <ol className="grid gap-4 lg:col-span-8 sm:grid-cols-3">
            {partnerSteps.steps.map((item, index) => (
              <li
                key={item.title}
                className="rounded-lg border border-border bg-bg-base p-6"
              >
                <span
                  className="font-display text-3xl font-semibold text-brand-green"
                  aria-hidden
                >
                  {index + 1}
                </span>
                <h3 className="mt-3 font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-8 text-center lg:hidden">
          <Button href={navHrefs.contact}>{messages.common.contactUs}</Button>
        </div>
      </Container>
    </section>
  );
}
