import { applyStringTable } from "@/lib/i18n/flatten";
import en from "@/lib/i18n/messages/en";
import bn from "@/lib/i18n/messages/string-tables/bn.json";
import gu from "@/lib/i18n/messages/string-tables/gu.json";
import hi from "@/lib/i18n/messages/string-tables/hi.json";
import kn from "@/lib/i18n/messages/string-tables/kn.json";
import ml from "@/lib/i18n/messages/string-tables/ml.json";
import mr from "@/lib/i18n/messages/string-tables/mr.json";
import or from "@/lib/i18n/messages/string-tables/or.json";
import pa from "@/lib/i18n/messages/string-tables/pa.json";
import ta from "@/lib/i18n/messages/string-tables/ta.json";
import te from "@/lib/i18n/messages/string-tables/te.json";
import ur from "@/lib/i18n/messages/string-tables/ur.json";
import type { Locale } from "@/lib/i18n/types";
import type { Messages } from "@/lib/i18n/types";

const catalog: Record<Locale, Messages> = {
  en,
  hi: applyStringTable(en, hi),
  kn: applyStringTable(en, kn),
  mr: applyStringTable(en, mr),
  te: applyStringTable(en, te),
  ta: applyStringTable(en, ta),
  bn: applyStringTable(en, bn),
  gu: applyStringTable(en, gu),
  ml: applyStringTable(en, ml),
  pa: applyStringTable(en, pa),
  or: applyStringTable(en, or),
  ur: applyStringTable(en, ur),
};

export function getMessages(locale: Locale): Messages {
  return catalog[locale] ?? en;
}
