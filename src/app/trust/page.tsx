import type { Metadata } from "next";
import { TrustPageContent } from "@/app/trust/TrustPageContent";
import en from "@/lib/i18n/messages/en";

export const metadata: Metadata = {
  title: "Trust",
  description: en.trust.description,
};

export default function TrustPage() {
  return <TrustPageContent />;
}
