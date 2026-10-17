import type en from "@/lib/i18n/messages/en";

export type Messages = typeof en;

export type Locale =
  | "en"
  | "hi"
  | "kn"
  | "mr"
  | "te"
  | "ta"
  | "bn"
  | "gu"
  | "ml"
  | "pa"
  | "or"
  | "ur";

export type LocaleOption = {
  code: Locale;
  nativeLabel: string;
  englishLabel: string;
};
