import type { Locale, LocaleOption } from "@/lib/i18n/types";

export const LOCALE_STORAGE_KEY = "ayusyntax-locale";

export const DEFAULT_LOCALE: Locale = "en";

export const localeOptions: LocaleOption[] = [
  { code: "en", nativeLabel: "English", englishLabel: "English" },
  { code: "hi", nativeLabel: "हिन्दी", englishLabel: "Hindi" },
  { code: "kn", nativeLabel: "ಕನ್ನಡ", englishLabel: "Kannada" },
  { code: "mr", nativeLabel: "मराठी", englishLabel: "Marathi" },
  { code: "te", nativeLabel: "తెలుగు", englishLabel: "Telugu" },
  { code: "ta", nativeLabel: "தமிழ்", englishLabel: "Tamil" },
  { code: "bn", nativeLabel: "বাংলা", englishLabel: "Bengali" },
  { code: "gu", nativeLabel: "ગુજરાતી", englishLabel: "Gujarati" },
  { code: "ml", nativeLabel: "മലയാളം", englishLabel: "Malayalam" },
  { code: "pa", nativeLabel: "ਪੰਜਾਬੀ", englishLabel: "Punjabi" },
  { code: "or", nativeLabel: "ଓଡ଼ିଆ", englishLabel: "Odia" },
  { code: "ur", nativeLabel: "اردو", englishLabel: "Urdu" },
];

export function isLocale(value: string): value is Locale {
  return localeOptions.some((option) => option.code === value);
}
