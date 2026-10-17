"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { navHrefs } from "@/lib/nav";

export function GovernanceTeaser() {
  const { messages } = useLanguage();
  const governance = messages.home.governance;

  return (
    <section className="border-y border-border bg-bg-elevated py-16 sm:py-20">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={governance.eyebrow}
            title={governance.title}
            description={governance.description}
            className="max-w-2xl"
          />
          <Link
            href={navHrefs.mission}
            className="shrink-0 text-sm font-medium text-brand-green hover:text-brand-green-hover"
          >
            {messages.common.missionStructure}
          </Link>
        </div>
      </Container>
    </section>
  );
}
