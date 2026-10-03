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
          title={compact ? "Built for regulated health environments" : "Compliance by design"}
          description={
            compact
              ? "Privacy and national digital health standards inform every layer—from public sites to encrypted routing."
              : "Ayusyntax is engineered for India’s regulatory landscape and hospital-grade security expectations."
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
              Explore trust & compliance →
            </Link>
          </p>
        ) : null}
      </Container>
    </section>
  );
}
