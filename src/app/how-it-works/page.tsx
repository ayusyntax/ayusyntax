import type { Metadata } from "next";
import { PageShell } from "@/components/layout/PageShell";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { howItWorksContent } from "@/content/approach";

export const metadata: Metadata = {
  title: "How we help",
  description: howItWorksContent.intro,
};

export default function HowItWorksPage() {
  return (
    <>
      <PageShell
        title="How we help"
        description={howItWorksContent.intro}
      />
      <ApproachSection
        showHeading={false}
        linkToDetail={false}
        className="pb-20"
      />
    </>
  );
}
