"use client";

import Link from "next/link";
import { Logo } from "@/components/brand/Logo";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";
import { getNavLinks, navHrefs } from "@/lib/nav";

export function SiteFooter() {
  const year = new Date().getFullYear();
  const { messages } = useLanguage();
  const navLinks = getNavLinks(messages);

  return (
    <footer className="border-t border-border bg-bg-elevated">
      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo size="lg" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-text-secondary">
              {messages.site.description}
            </p>
            <Button href={navHrefs.contact} className="mt-6" size="sm">
              {messages.common.partnerWithUs}
            </Button>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7 lg:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-text-primary">
                {messages.common.explore}
              </p>
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
              <p className="text-sm font-semibold text-text-primary">
                {messages.nav.contact}
              </p>
              <dl className="mt-3 space-y-4 text-sm">
                <div>
                  <dt className="text-text-muted">{messages.common.email}</dt>
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
                  <dt className="text-text-muted">{messages.common.regions}</dt>
                  <dd className="mt-0.5 text-text-secondary">
                    {messages.common.regionsBody}
                  </dd>
                </div>
                <div>
                  <dt className="text-text-muted">{messages.common.note}</dt>
                  <dd className="mt-0.5 text-text-secondary">
                    {messages.site.nonprofitNote}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-8 text-xs text-text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {siteConfig.name}. {messages.common.allRightsReserved}
          </p>
          <p>{messages.site.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}
