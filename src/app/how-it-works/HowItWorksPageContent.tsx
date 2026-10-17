"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { PageShell } from "@/components/layout/PageShell";
import { ApproachSection } from "@/components/sections/ApproachSection";

export function HowItWorksPageContent() {
  const { messages } = useLanguage();

  return (
    <>
      <PageShell
        title={messages.nav.howWeHelp}
        description={messages.approach.intro}
      />
      <ApproachSection
        showHeading={false}
        linkToDetail={false}
        className="pb-20"
      />
    </>
  );
}
