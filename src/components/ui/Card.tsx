import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border border-border bg-bg-elevated p-6 text-text-primary sm:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
}
