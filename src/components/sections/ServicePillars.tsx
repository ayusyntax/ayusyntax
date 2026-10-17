import Link from "next/link";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function ServicePillars() {
  return (
    <section className="border-b border-border bg-bg-base py-12 sm:py-16">
      <Container>
        <div className="grid gap-4 md:grid-cols-3">
          {homeContent.servicePillars.map((pillar, index) => (
            <Card key={pillar.title} className="h-full">
              <span
                className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-brand-green-muted text-sm font-semibold text-brand-green"
                aria-hidden
              >
                {index + 1}
              </span>
              <h2 className="mt-4 text-lg font-semibold text-text-primary">
                {pillar.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-text-secondary">
          <Link
            href="/how-it-works"
            className="font-medium text-brand-green hover:text-brand-green-hover"
          >
            See how we support clinics and hospitals →
          </Link>
        </p>
      </Container>
    </section>
  );
}
