"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { LanguageSelect } from "@/components/i18n/LanguageSelect";
import { Container } from "@/components/ui/Container";
import { navHrefs } from "@/lib/nav";
import { siteConfig } from "@/lib/constants";

export function TopUtilityBar() {
  const { messages } = useLanguage();

  return (
    <div className="border-b border-border bg-bg-header-utility text-xs sm:text-sm">
      <Container className="flex flex-wrap items-center justify-between gap-2 py-2.5">
        <p className="text-text-muted">{messages.topBar.tagline}</p>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-4">
          <LanguageSelect />
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-medium text-text-secondary transition-colors hover:text-brand-green"
          >
            {siteConfig.contactEmail}
          </a>
          <Link
            href={navHrefs.contact}
            className="hidden font-medium text-brand-green hover:text-brand-green-hover sm:inline"
          >
            {messages.topBar.requestSupport}
          </Link>
        </div>
      </Container>
    </div>
  );
}
