"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { useTheme } from "@/components/theme/ThemeProvider";
import { cn } from "@/lib/cn";

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme, mounted } = useTheme();
  const { messages } = useLanguage();

  if (!mounted) {
    return (
      <button
        type="button"
        className={cn(
          "rounded-md border border-border px-3 py-2 text-sm font-medium text-text-secondary",
          className,
        )}
        aria-label={messages.common.theme}
        disabled
      >
        {messages.common.theme}
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
      aria-label={
        isDark ? messages.common.switchToLight : messages.common.switchToDark
      }
      title={isDark ? messages.common.lightMode : messages.common.darkMode}
    >
      {isDark ? messages.common.light : messages.common.dark}
    </button>
  );
}
