import type { Metadata } from "next";
import { Card } from "@/components/ui/Card";
import { PageShell } from "@/components/layout/PageShell";
import { missionContent } from "@/content/mission";

export const metadata: Metadata = {
  title: "Mission",
  description: missionContent.description,
};

export default function MissionPage() {
  return (
    <PageShell title={missionContent.title} description={missionContent.description}>
      <div className="max-w-3xl space-y-10">
        <p className="text-lg leading-relaxed text-text-secondary">
          {missionContent.vision}
        </p>

        <div>
          <h2 className="font-display text-2xl font-semibold text-text-primary">
            {missionContent.structure.title}
          </h2>
          <div className="mt-6 grid gap-4">
            {missionContent.structure.items.map((item) => (
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
            Operating principles
          </h2>
          <ul className="mt-4 space-y-3">
            {missionContent.principles.map((principle) => (
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
