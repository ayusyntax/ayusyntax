import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { homeContent } from "@/content/home";

export function HeroSection() {
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 grid-infrastructure opacity-60" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-b from-brand-green/8 via-transparent to-bg-base"
        aria-hidden
      />
      <Container as="section" className="relative py-20 sm:py-28 section-fade-in">
        <p className="text-sm font-medium tracking-wide text-brand-green uppercase">
          {hero.eyebrow}
        </p>
        <h1
          className="mt-4 max-w-4xl font-display text-4xl font-semibold leading-tight tracking-tight text-text-primary sm:text-5xl lg:text-[3.25rem]"
        >
          {hero.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-secondary">
          {hero.description}
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Button href={hero.primaryCta.href}>{hero.primaryCta.label}</Button>
          <Button href={hero.secondaryCta.href} variant="secondary">
            {hero.secondaryCta.label}
          </Button>
        </div>
        <dl className="mt-16 grid gap-6 border-t border-border pt-10 sm:grid-cols-3">
          {[
            {
              term: "Find your clinic",
              def: "Clear websites with the information patients need—no medical records online",
            },
            {
              term: "Protect your patients",
              def: "Sensitive workflows built so your facility stays in control",
            },
            {
              term: "Built for India",
              def: "Hosting and standards aligned with national health and privacy expectations",
            },
          ].map((item) => (
            <div key={item.term}>
              <dt className="text-sm font-semibold text-text-primary">{item.term}</dt>
              <dd className="mt-1 text-sm leading-relaxed text-text-secondary">
                {item.def}
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
