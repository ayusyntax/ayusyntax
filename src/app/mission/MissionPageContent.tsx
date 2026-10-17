"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { PageShell } from "@/components/layout/PageShell";
import { Card } from "@/components/ui/Card";

export function MissionPageContent() {
  const { messages } = useLanguage();
  const mission = messages.mission;

  return (
    <PageShell title={mission.title} description={mission.description}>
      <div className="max-w-3xl space-y-10">
        <p className="text-lg leading-relaxed text-text-secondary">
          {mission.vision}
        </p>

        <div>
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            {mission.structureTitle}
          </h2>
          <div className="mt-6 grid gap-4">
            {mission.structure.map((item) => (
              <Card key={item.heading}>
                <h3 className="font-semibold text-text-primary">{item.heading}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.body}
                </p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            {messages.common.operatingPrinciples}
          </h2>
          <ul className="mt-4 space-y-3">
            {mission.principles.map((principle) => (
              <li
                key={principle}
                className="flex gap-3 text-text-secondary leading-relaxed"
              >
                <span className="text-brand-green" aria-hidden>—</span>
                {principle}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </PageShell>
  );
}
