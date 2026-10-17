import type { Metadata } from "next";
import { ContactPageContent } from "@/app/contact/ContactPageContent";
import en from "@/lib/i18n/messages/en";

export const metadata: Metadata = {
  title: "Contact",
  description: en.contact.description,
};

export default function ContactPage() {
  return <ContactPageContent />;
}
