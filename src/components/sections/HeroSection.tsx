import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden border-b border-border bg-bg-elevated">
      <div className="absolute inset-0 grid-infrastructure opacity-40" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-green/10 via-transparent to-bg-base"
        aria-hidden
      />
      <Container as="section" className="relative py-14 sm:py-20 lg:py-24 section-fade-in">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-12">
          <div className="lg:col-span-7">
            <p className="text-sm font-medium tracking-wide text-brand-green uppercase">
              {hero.eyebrow}
            </p>
            <h1
              className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-[3.1rem]"
            >
              {hero.title}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-text-secondary">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
              <Button href={hero.secondaryCta.href} variant="secondary">
                {hero.secondaryCta.label}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <Card className="border-brand-green/25 shadow-sm">
              <p className="text-sm font-semibold text-brand-green">
                {hero.aside.title}
              </p>
              <ul className="mt-4 space-y-3 border-t border-border pt-4">
                {hero.aside.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm leading-relaxed text-text-secondary"
                  >
                    <span
                      className="mt-2 h-1 w-4 shrink-0 bg-brand-green"
                      aria-hidden
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-md border border-border bg-bg-base/60 p-4">
                <p className="text-xs font-medium uppercase tracking-wide text-text-muted">
                  Response
                </p>
                <p className="mt-1 text-sm text-text-primary">
                  We reply to partnership inquiries within a few business days.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </section>
  );
}
