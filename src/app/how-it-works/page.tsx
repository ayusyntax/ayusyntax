import type { Metadata } from "next";
import Image from "next/image";
import { PageShell } from "@/components/layout/PageShell";
import { PhaseCards } from "@/components/sections/PhaseCards";
import { howItWorksContent } from "@/content/phases";
import { withBasePath } from "@/lib/base-path";

export const metadata: Metadata = {
  title: "How it works",
  description: howItWorksContent.intro,
};

export default function HowItWorksPage() {
  return (
    <>
      <PageShell
        title="How it works"
        description={howItWorksContent.intro}
      />
      <PhaseCards showHeading={false} linkToDetail={false} />
      <section className="border-t border-border pb-20">
        <div className="mx-auto max-w-[var(--container-max)] px-5 sm:px-8">
          <figure className="rounded-lg border border-border bg-bg-elevated p-6 sm:p-10">
            <Image
              src={withBasePath("/diagrams/phase-diagram.svg")}
              alt={howItWorksContent.diagramCaption}
              width={720}
              height={200}
              className="w-full h-auto"
            />
            <figcaption className="mt-4 text-center text-sm text-text-muted">
              {howItWorksContent.diagramCaption}
            </figcaption>
          </figure>
        </div>
      </section>
    </>
  );
}
