"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { navHrefs } from "@/lib/nav";

type ComplianceGridProps = {
  compact?: boolean;
};

export function ComplianceGrid({ compact = false }: ComplianceGridProps) {
  const { messages } = useLanguage();
  const compliance = messages.compliance;
  const pillars = messages.trust.pillars;

  return (
    <section className={compact ? "py-12" : "border-b border-border py-16 sm:py-24"}>
      <Container>
        <SectionHeading
          eyebrow={compliance.eyebrow}
          title={compliance.title}
          description={compliance.description}
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {pillars.map((pillar) => (
            <Card key={pillar.title}>
              <h3 className="text-lg font-semibold text-text-primary">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
        {compact ? (
          <p className="mt-8 text-sm">
            <Link
              href={navHrefs.trust}
              className="font-medium text-brand-green hover:text-brand-green-hover"
            >
              {messages.common.readTrust}
            </Link>
          </p>
        ) : null}
      </Container>
    </section>
  );
}
