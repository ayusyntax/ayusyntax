"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/components/i18n/LanguageProvider";
import { withBasePath } from "@/lib/base-path";
import { cn } from "@/lib/cn";

const LOGO_PATH = "/brand/ayusyntax.png";

type LogoProps = {
  size?: "sm" | "md" | "lg";
  priority?: boolean;
  className?: string;
};

const sizes = {
  sm: { height: 32, width: 148 },
  md: { height: 40, width: 185 },
  lg: { height: 48, width: 222 },
} as const;

export function Logo({
  size = "sm",
  priority = false,
  className,
}: LogoProps) {
  const { height, width } = sizes[size];
  const { messages } = useLanguage();

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex shrink-0 items-center transition-opacity hover:opacity-90",
        className,
      )}
      aria-label={messages.common.logoHome}
    >
      <Image
        src={withBasePath(LOGO_PATH)}
        alt={messages.common.ayusyntax}
        width={width}
        height={height}
        priority={priority}
        className="h-[var(--logo-h)] w-auto"
        style={{ "--logo-h": `${height}px` } as React.CSSProperties}
      />
    </Link>
  );
}
