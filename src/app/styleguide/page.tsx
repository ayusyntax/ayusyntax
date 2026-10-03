import type { Metadata } from "next";
import { Logo } from "@/components/brand/Logo";
import { PageShell } from "@/components/layout/PageShell";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Styleguide",
  description: "Design tokens and UI components for Ayusyntax contributors.",
};

const swatches = [
  { name: "brand-green", class: "bg-brand-green" },
  { name: "bg-base", class: "bg-bg-base border border-border" },
  { name: "bg-elevated", class: "bg-bg-elevated border border-border" },
  { name: "bg-surface", class: "bg-bg-surface border border-border-strong" },
  { name: "accent-amber", class: "bg-accent-amber" },
  { name: "accent-blue", class: "bg-accent-blue" },
] as const;

export default function StyleguidePage() {
  return (
    <PageShell
      title="Styleguide"
      description="Reference for colors, typography, and components. Extend ui/ before adding page-specific styles."
    >
      <div className="space-y-16">
        <section>
          <SectionHeading title="Logo" eyebrow="Brand" />
          <p className="mt-4 max-w-2xl text-sm text-text-secondary">
            Use the official PNG on a light chip or surface—the black “syntax”
            letterforms require contrast. Do not recolor the wordmark in CSS.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-6">
            <Logo size="sm" />
            <Logo size="md" />
            <div className="rounded-lg bg-bg-surface p-6">
              <Logo size="md" onLightChip={false} />
            </div>
          </div>
        </section>

        <section>
          <SectionHeading title="Color tokens" eyebrow="Theme" />
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {swatches.map((swatch) => (
              <div key={swatch.name}>
                <div className={`h-16 rounded-md ${swatch.class}`} />
                <p className="mt-2 font-mono text-xs text-text-muted">
                  {swatch.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeading title="Typography" eyebrow="Type" />
          <div className="mt-8 space-y-6">
            <p className="font-display text-4xl font-semibold text-text-primary">
              Display — Source Serif 4
            </p>
            <p className="text-lg text-text-secondary">
              Body — IBM Plex Sans. Use display for page titles and section
              headings; sans for UI, labels, and long copy.
            </p>
          </div>
        </section>

        <section>
          <SectionHeading title="Components" eyebrow="UI" />
          <div className="mt-8 flex flex-wrap gap-3">
            <Button>Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            <Badge tone="green">Phase active</Badge>
            <Badge tone="amber">Phase 1</Badge>
            <Badge tone="blue">Phase 2</Badge>
            <Badge>Neutral</Badge>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Card>
              <p className="text-sm text-text-secondary">Dark card on base background.</p>
            </Card>
            <Card variant="light">
              <p className="text-sm text-text-on-surface/80">
                Light card for forms and logo placement.
              </p>
            </Card>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
