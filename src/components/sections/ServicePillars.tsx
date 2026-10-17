"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { navHrefs } from "@/lib/nav";

export function ServicePillars() {
  const { messages } = useLanguage();

  return (
    <section className="border-b border-border bg-bg-base py-12 sm:py-16">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {messages.home.servicePillars.map((pillar, index) => (
            <Card key={pillar.title} className="h-full">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-green-muted text-sm font-semibold text-brand-green"
                aria-hidden
              >
                {index + 1}
              </span>
              <h2 className="mt-4 text-lg font-semibold text-text-primary">
                {pillar.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-text-secondary">
          <Link
            href={navHrefs.howWeHelp}
            className="font-medium text-brand-green hover:text-brand-green-hover"
          >
            {messages.common.seeHowWeSupport}
          </Link>
        </p>
      </Container>
    </section>
  );
}
