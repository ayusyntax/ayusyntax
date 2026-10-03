import { cn } from "@/lib/cn";

type BadgeTone = "green" | "amber" | "blue" | "neutral";

const toneClasses: Record<BadgeTone, string> = {
  green: "border-brand-green/40 bg-brand-green-muted text-brand-green",
  amber: "border-accent-amber/40 bg-accent-amber/10 text-accent-amber",
  blue: "border-accent-blue/40 bg-accent-blue/10 text-accent-blue",
  neutral: "border-border bg-bg-elevated text-text-secondary",
};

type BadgeProps = {
  children: React.ReactNode;
  tone?: BadgeTone;
  className?: string;
};

export function Badge({ children, tone = "neutral", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide uppercase",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
