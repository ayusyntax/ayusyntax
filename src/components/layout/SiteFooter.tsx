import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/constants";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-elevated">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo size="lg" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-text-secondary">
              {siteConfig.description}
            </p>
            <Button href="/contact" className="mt-6" size="sm">
              Partner with us
            </Button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-text-primary">Explore</p>
              <ul className="mt-3 space-y-2">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-text-secondary transition-colors hover:text-brand-green"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="sm:col-span-1 lg:col-span-2">
              <p className="text-sm font-semibold text-text-primary">Contact</p>
              <dl className="mt-3 space-y-4 text-sm">
                <div>
                  <dt className="text-text-muted">Email</dt>
                  <dd className="mt-0.5">
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="font-medium text-text-primary transition-colors hover:text-brand-green"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-text-muted">Regions</dt>
                  <dd className="mt-0.5 text-text-secondary">
                    India (clinical partners) · United States (nonprofit
                    operations)
                  </dd>
                </div>
                <div>
                  <dt className="text-text-muted">Note</dt>
                  <dd className="mt-0.5 text-text-secondary">
                    This site is informational only and does not collect patient
                    health data.
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>{siteConfig.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
