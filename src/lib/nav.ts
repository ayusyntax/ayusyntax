import type { Messages } from "@/lib/i18n/types";

export const navHrefs = {
  mission: "/mission",
  howWeHelp: "/how-it-works",
  trust: "/trust",
  contact: "/contact",
} as const;

export function getNavLinks(messages: Messages) {
  return [
    { href: navHrefs.mission, label: messages.nav.mission },
    { href: navHrefs.howWeHelp, label: messages.nav.howWeHelp },
    { href: navHrefs.trust, label: messages.nav.trust },
    { href: navHrefs.contact, label: messages.nav.contact },
  ];
}
