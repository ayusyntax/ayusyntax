import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { trustPillars } from "@/content/trust";

type ComplianceGridProps = {
  compact?: boolean;
};

export function ComplianceGrid({ compact = false }: ComplianceGridProps) {
  return (
    <section className={compact ? "py-12" : "border-b border-border py-16 sm:py-24"}>
      <Container>
        <SectionHeading
          eyebrow="Trust"
          title={
            compact
              ? "Security and compliance you can explain to your board"
              : "Security and compliance you can explain to your board"
          }
          description={
            compact
              ? "We design for hospital governance, patient trust, and India’s regulatory landscape—without unnecessary jargon."
              : "We design for hospital governance, patient trust, and India’s regulatory landscape—without unnecessary jargon."
          }
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {trustPillars.map((pillar) => (
            <Card key={pillar.id}>
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
              href="/trust"
              className="font-medium text-brand-green hover:text-brand-green-hover"
            >
              Read more about trust & security →
            </Link>
          </p>
        ) : null}
      </Container>
    </section>
  );
}
