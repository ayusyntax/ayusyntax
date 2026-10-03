import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";

type LogoProps = {
  size?: "sm" | "md";
  priority?: boolean;
  className?: string;
  onLightChip?: boolean;
};

const heights = { sm: 28, md: 36 } as const;

export function Logo({
  size = "sm",
  priority = false,
  className,
  onLightChip = true,
}: LogoProps) {
  const height = heights[size];
  const width = Math.round(height * 4.2);

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center rounded-md transition-opacity hover:opacity-90",
        onLightChip && "bg-bg-surface px-2.5 py-1.5",
        className,
      )}
      aria-label="Ayusyntax home"
    >
      <Image
        src="/brand/ayusyntax-logo.png"
        alt="Ayusyntax"
        width={width}
        height={height}
        priority={priority}
        className="h-auto w-auto max-h-[var(--logo-h)]"
        style={{ "--logo-h": `${height}px` } as React.CSSProperties}
      />
    </Link>
  );
}
