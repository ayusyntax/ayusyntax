import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { PageShell } from "@/components/layout/PageShell";
import { ComplianceGrid } from "@/components/sections/ComplianceGrid";
import { trustPageContent } from "@/content/trust";

export const metadata: Metadata = {
  title: "Trust",
  description: trustPageContent.description,
};

export default function TrustPage() {
  return (
    <>
      <PageShell
        title={trustPageContent.title}
        description={trustPageContent.description}
      />
      <ComplianceGrid compact={false} />
      <section className="border-t border-border pb-20">
        <div className="mx-auto max-w-[var(--container-max)] space-y-6 px-5 sm:px-8">
          <Card>
            <h2 className="text-lg font-semibold text-text-primary">Hosting</h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {trustPageContent.hosting}
            </p>
          </Card>
          <Card>
            <h2 className="text-lg font-semibold text-text-primary">
              Liability posture
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-text-secondary">
              {trustPageContent.liability}
            </p>
          </Card>
        </div>
      </section>
    </>
  );
}
