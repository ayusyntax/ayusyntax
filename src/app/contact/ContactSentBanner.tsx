"use client";

import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/components/i18n/LanguageProvider";

export function ContactSentBanner() {
  const searchParams = useSearchParams();
  const { messages } = useLanguage();

  if (searchParams.get("sent") !== "1") {
    return null;
  }

  return (
    <div
      className="mb-8 rounded-md border border-brand-green/35 bg-brand-green-muted px-4 py-3 text-sm text-text-primary"
      role="status"
    >
      {messages.common.responseBody}
    </div>
  );
}
