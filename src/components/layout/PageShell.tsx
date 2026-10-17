import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/cn";

type PageShellProps = {
  title: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
};

export function PageShell({
  title,
  description,
  children,
  className,
}: PageShellProps) {
  return (
    <>
      <div className="border-b border-border bg-bg-elevated">
        <Container className="py-3">
          <nav aria-label="Breadcrumb" className="text-xs text-text-muted">
            <Link href="/" className="hover:text-brand-green">Home</Link>
            <span className="mx-2" aria-hidden>/</span>
            <span className="text-text-secondary">{title}</span>
          </nav>
        </Container>
        <div className="grid-infrastructure border-t border-border">
          <Container className="py-12 sm:py-16">
            <p className="text-sm font-medium tracking-wide text-brand-green uppercase">
              Ayusyntax
            </p>
            <h1
              className="mt-3 max-w-3xl font-display text-4xl font-semibold tracking-tight text-text-primary sm:text-5xl"
            >
              {title}
            </h1>
            {description ? (
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-text-secondary">
                {description}
              </p>
            ) : null}
          </Container>
        </div>
      </div>
      {children ? (
        <Container className={cn("py-14 sm:py-20", className)}>
          {children}
        </Container>
      ) : null}
    </>
  );
}
