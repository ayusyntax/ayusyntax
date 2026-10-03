import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        align === "center" && "text-center",
        className,
      )}
    >
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium tracking-wide text-brand-green uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "font-display text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl",
          align === "center" && "mx-auto max-w-2xl",
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-relaxed text-text-secondary",
            align === "center" && "mx-auto",
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
