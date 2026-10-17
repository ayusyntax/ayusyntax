"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { PageShell } from "@/components/layout/PageShell";
import { ComplianceGrid } from "@/components/sections/ComplianceGrid";
import { Card } from "@/components/ui/Card";

export function TrustPageContent() {
  const { messages } = useLanguage();
  const trust = messages.trust;

  return (
    <>
      <PageShell title={trust.title} description={trust.description} />
      <ComplianceGrid compact={false} />
      <section className="border-t border-border pb-20">
        <div className="mx-auto max-w-[var(--container-max)] space-y-6 px-5 sm:px-8">
          <Card>
            <h2 className="text-lg font-semibold text-text-primary">
              {messages.common.hosting}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {trust.hosting}
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-text-primary">
              {messages.common.rollingOut}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {trust.liability}
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
