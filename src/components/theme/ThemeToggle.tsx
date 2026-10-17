"use client";

import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/cn";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();

  if (!mounted) {
    return (
      <button
        type="button"
        className={cn(
          "rounded-md border border-border px-3 py-2 text-sm font-medium text-text-secondary",
          className,
        )}
        aria-label="Toggle color theme"
        disabled
      >
        Theme
      </button>
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "rounded-md border border-border px-3 py-2 text-sm font-medium text-text-secondary transition-colors hover:border-border-strong hover:text-text-primary",
        className,
      )}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {isDark ? "Light" : "Dark"}
    </button>
  );
}
