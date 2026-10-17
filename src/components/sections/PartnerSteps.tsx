import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { homeContent } from "@/content/home";

export function PartnerSteps() {
  const { partnerSteps } = homeContent;

  return (
    <section className="border-y border-border bg-bg-elevated py-16 sm:py-24">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow={partnerSteps.eyebrow}
              title={partnerSteps.title}
              description={partnerSteps.description}
            />
            <Button href="/contact" className="mt-8 hidden lg:inline-flex">
              Contact us
            </Button>
          </div>
          <ol className="grid gap-4 lg:col-span-8 sm:grid-cols-3">
            {partnerSteps.steps.map((item) => (
              <li
                key={item.step}
                className="rounded-lg border border-border bg-bg-base p-6"
              >
                <span
                  className="font-display text-3xl font-semibold text-brand-green"
                  aria-hidden
                >
                  {item.step}
                </span>
                <h3 className="mt-3 font-semibold text-text-primary">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-secondary">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
        <div className="mt-8 text-center lg:hidden">
          <Button href="/contact">Contact us</Button>
        </div>
      </Container>
    </section>
  );
}
