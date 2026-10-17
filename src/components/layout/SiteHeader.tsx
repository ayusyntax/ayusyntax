"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";
import { TopUtilityBar } from "@/components/layout/TopUtilityBar";
import { getNavLinks, navHrefs } from "@/lib/nav";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const { messages } = useLanguage();
  const navLinks = getNavLinks(messages);

  return (
    <header className="sticky top-0 z-50">
      <TopUtilityBar />
      <div className="border-b border-border bg-bg-header-nav">
        <Container className="flex items-center justify-between gap-4 py-4">
          <Logo priority size="md" />

          <nav
            className="hidden items-center gap-0.5 lg:flex"
            aria-label={messages.common.mainNavigation}
          >
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "border-b-2 px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "border-brand-green text-text-primary"
                      : "border-transparent text-text-secondary hover:border-border-strong hover:text-text-primary",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <Button href={navHrefs.contact} size="sm">
              {messages.common.partnerWithUs}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="rounded-md border border-border px-3 py-2 text-sm text-text-primary"
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? messages.common.close : messages.common.menu}
            </button>
          </div>
        </Container>

        {open ? (
          <div
            id="mobile-nav"
            className="border-t border-border bg-bg-header-nav px-5 py-4 lg:hidden"
          >
            <nav
              className="flex flex-col gap-1"
              aria-label={messages.common.mobileNavigation}
            >
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-md px-3 py-2.5 text-sm font-medium text-text-primary hover:bg-bg-base/40"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button href={navHrefs.contact} className="mt-3 w-full" size="sm">
                {messages.common.partnerWithUs}
              </Button>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}
