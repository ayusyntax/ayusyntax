import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/home";

export function GovernanceTeaser() {
  const { governance } = homeContent;

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
            href="/mission"
            className="shrink-0 text-sm font-medium text-brand-green hover:text-brand-green-hover"
          >
            Our mission & structure →
          </Link>
        </div>
      </Container>
    </section>
  );
}
