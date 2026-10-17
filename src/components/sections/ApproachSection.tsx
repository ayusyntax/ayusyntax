import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { approachPillars } from "@/content/approach";
import { homeContent } from "@/content/home";
import { cn } from "@/lib/cn";

type ApproachSectionProps = {
  showHeading?: boolean;
  linkToDetail?: boolean;
  className?: string;
};

export function ApproachSection({
  showHeading = true,
  linkToDetail = true,
  className,
}: ApproachSectionProps) {
  const teaser = homeContent.approachTeaser;

  return (
    <section
      className={cn(
        "border-b border-border bg-bg-elevated/50 py-16 sm:py-24",
        className,
      )}
    >
      <Container>
        {showHeading ? (
          <SectionHeading
            eyebrow={teaser.eyebrow}
            title={teaser.title}
            description={teaser.description}
          />
        ) : null}
        <div className={showHeading ? "mt-12" : ""}>
          <div className="grid gap-6 lg:grid-cols-2">
            {approachPillars.map((pillar) => (
              <Card key={pillar.id} className="flex flex-col">
                <Badge tone={pillar.badgeTone} className="w-fit normal-case">
                  {pillar.badge}
                </Badge>
                <h3 className="mt-4 text-xl font-semibold text-text-primary">
                  {pillar.title}
                </h3>
                <p className="mt-2 leading-relaxed text-text-secondary">
                  {pillar.summary}
                </p>
                <ul className="mt-6 flex-1 space-y-2 text-sm text-text-secondary">
                  {pillar.points.map((point) => (
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
                Learn how we work with partners →
              </Link>
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
