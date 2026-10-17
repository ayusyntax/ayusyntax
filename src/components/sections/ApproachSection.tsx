"use client";

import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";
import { navHrefs } from "@/lib/nav";

const badgeToneById: Record<string, "amber" | "blue"> = {
  presence: "amber",
  coordination: "blue",
};

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
  const { messages } = useLanguage();
  const teaser = messages.home.approachTeaser;
  const pillars = messages.approach.pillars;

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
            {pillars.map((pillar) => (
              <Card key={pillar.id} className="flex flex-col">
                <Badge
                  tone={badgeToneById[pillar.id] ?? "amber"}
                  className="w-fit normal-case"
                >
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
                href={navHrefs.howWeHelp}
                className="font-medium text-brand-green hover:text-brand-green-hover"
              >
                {messages.common.learnPartners}
              </Link>
            </p>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
