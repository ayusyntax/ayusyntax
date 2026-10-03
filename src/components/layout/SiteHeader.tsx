"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/brand/Logo";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";
import { navLinks } from "@/lib/constants";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-base/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[var(--container-max)] items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Logo priority size="sm" />

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  active
                    ? "text-brand-green"
                    : "text-text-secondary hover:text-text-primary",
                )}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" size="sm">Partner with us</Button>
        </div>

        <button
          type="button"
          className="rounded-md border border-border px-3 py-2 text-sm text-text-primary md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-border bg-bg-elevated px-5 py-4 md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-md px-3 py-2.5 text-sm font-medium text-text-primary hover:bg-bg-base"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-3 w-full" size="sm">
              Partner with us
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
