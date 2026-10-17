"use client";

import { useLanguage } from "@/components/i18n/LanguageProvider";
import { localeOptions } from "@/lib/i18n/locales";
import type { Locale } from "@/lib/i18n/types";
import { cn } from "@/lib/cn";

type LanguageSelectProps = {
  className?: string;
};

export function LanguageSelect({ className }: LanguageSelectProps) {
  const { locale, setLocale, mounted, messages } = useLanguage();

  return (
    <label
      className={cn(
        "inline-flex items-center gap-1.5 text-text-secondary",
        className,
      )}
    >
      <span className="sr-only">{messages.common.selectLanguage}</span>
      <select
        value={mounted ? locale : "en"}
        onChange={(event) => setLocale(event.target.value as Locale)}
        className="max-w-[9.5rem] cursor-pointer rounded-md border border-border bg-bg-input py-1 pl-2 pr-7 text-xs font-medium text-text-primary sm:max-w-none sm:text-sm"
        aria-label={messages.common.selectLanguage}
      >
        {localeOptions.map((option) => (
          <option key={option.code} value={option.code}>
            {option.nativeLabel}
          </option>
        ))}
      </select>
    </label>
  );
}
