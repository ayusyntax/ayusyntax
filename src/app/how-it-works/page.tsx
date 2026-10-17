import type { Metadata } from "next";
import { HowItWorksPageContent } from "@/app/how-it-works/HowItWorksPageContent";
import en from "@/lib/i18n/messages/en";

export const metadata: Metadata = {
  title: "How we help",
  description: en.approach.intro,
};

export default function HowItWorksPage() {
  return <HowItWorksPageContent />;
}
