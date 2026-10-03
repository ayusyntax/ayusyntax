import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { phases } from "@/content/phases";
import { homeContent } from "@/content/home";

type PhaseCardsProps = {
  showHeading?: boolean;
  linkToDetail?: boolean;
};

export function PhaseCards({
  showHeading = true,
  linkToDetail = true,
}: PhaseCardsProps) {
  const teaser = homeContent.phasesTeaser;

  return (
    <section className="border-b border-border bg-bg-elevated/50 py-16 sm:py-24">
      <Container>
        {showHeading ? (
          <SectionHeading
            eyebrow={teaser.eyebrow}
            title={teaser.title}
            description={teaser.description}
          />
        ) : null}
        <div
          className={showHeading ? "mt-12" : ""}
        >
          <div className="grid gap-6 lg:grid-cols-2">
            {phases.map((phase) => (
              <Card key={phase.id} className="flex flex-col">
                <Badge tone={phase.badgeTone} className="w-fit">
                  {phase.badge}
                </Badge>
                <h3 className="mt-4 text-xl font-semibold text-text-primary">
                  {phase.title}
                </h3>
                <p className="mt-2 text-text-secondary leading-relaxed">
                  {phase.summary}
                </p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-text-secondary">
                  {phase.points.map((point) => (
                    <li key={point} className="flex gap-2">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-green"
                        aria-hidden
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
          {linkToDetail ? (
            <p className="mt-8 text-sm">
              <Link
                href="/how-it-works"
                className="font-medium text-brand-green hover:text-brand-green-hover"
              >
                Read the full two-phase model →
              </Link>
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
