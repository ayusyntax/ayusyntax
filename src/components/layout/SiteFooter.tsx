import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/ui/Container";
import { navLinks, siteConfig } from "@/lib/constants";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-elevated">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2">
            <Logo size="md" onLightChip />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-secondary">
              {siteConfig.description}
            </p>
            <p className="mt-4 text-xs text-text-muted">
              Ayusyntax Inc. is organized as a U.S. 501(c)(3) nonprofit in
              partnership with an Indian Section 8 company. This site is
              informational and does not collect patient health data.
            </p>
          </div>

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

          <div>
            <p className="text-sm font-semibold text-text-primary">Team</p>
            <ul className="mt-3 space-y-2 text-sm text-text-secondary">
              <li>
                <Link
                  href="/styleguide"
                  className="transition-colors hover:text-brand-green"
                >
                  Styleguide (contributors)
                </Link>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contactEmail}`}
                  className="transition-colors hover:text-brand-green"
                >
                  {siteConfig.contactEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <p>Bridging healthcare networks across India.</p>
        </div>
      </Container>
    </footer>
  );
}
