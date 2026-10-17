"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navHrefs } from "@/lib/nav";

export function CTABand() {
  const { messages } = useLanguage();
  const cta = messages.home.cta;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div
          className="rounded-lg border border-border bg-gradient-to-br from-bg-elevated to-bg-base p-8 sm:p-12 lg:flex lg:items-center lg:justify-between lg:gap-10"
        >
          <div className="max-w-xl">
            <h2 className="font-display text-2xl font-semibold text-text-primary sm:text-3xl">
              {cta.title}
            </h2>
            <p className="mt-3 text-text-secondary leading-relaxed">
              {cta.description}
            </p>
          </div>
          <Button href={navHrefs.contact} className="mt-8 shrink-0 lg:mt-0">
            {cta.button}
          </Button>
        </div>
      </Container>
    </section>
  );
}
