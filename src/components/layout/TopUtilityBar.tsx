import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/constants";

export function TopUtilityBar() {
  return (
    <div className="border-b border-border bg-bg-header-utility text-xs sm:text-sm">
      <Container className="flex flex-wrap items-center justify-between gap-2 py-2.5">
        <p className="text-text-muted">
          Charitable health technology · United States & India
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="font-medium text-text-secondary transition-colors hover:text-brand-green"
          >
            {siteConfig.contactEmail}
          </a>
          <Link
            href="/contact"
            className="hidden font-medium text-brand-green hover:text-brand-green-hover sm:inline"
          >
            Request support →
          </Link>
        </div>
      </Container>
    </div>
  );
}
