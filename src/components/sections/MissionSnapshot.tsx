import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/home";

export function MissionSnapshot() {
  const { missionSnapshot } = homeContent;

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <SectionHeading
            eyebrow={missionSnapshot.eyebrow}
            title={missionSnapshot.title}
            description={missionSnapshot.body}
          />
          <Card variant="light">
            <p className="text-sm font-semibold text-text-on-surface">
              Why Ayusyntax
            </p>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-text-on-surface/80">
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
