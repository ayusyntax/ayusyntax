import { cn } from "@/lib/cn";

type CardProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "dark" | "light";
};

export function Card({ children, className, variant = "dark" }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border p-6 sm:p-8",
        variant === "dark" &&
          "border-border bg-bg-elevated",
        variant === "light" &&
          "border-border-strong bg-bg-surface text-text-on-surface",
        className,
      )}
    >
      {children}
    </div>
  );
}
