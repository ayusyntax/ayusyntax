"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function MissionSnapshot() {
  const { messages } = useLanguage();
  const missionSnapshot = messages.home.missionSnapshot;

  return (
    <section className="border-b border-border py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow={missionSnapshot.eyebrow}
            title={missionSnapshot.title}
            description={missionSnapshot.body}
          />
          <Card>
            <p className="text-sm font-semibold text-text-primary">
              {messages.common.whyAyusyntax}
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text-secondary">
              {missionSnapshot.bullets.map((bullet) => (
                <li key={bullet} className="border-l-2 border-brand-green pl-3">
                  {bullet}
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Container>
    </section>
  );
}
