import type { Metadata } from "next";
import { MissionPageContent } from "@/app/mission/MissionPageContent";
import en from "@/lib/i18n/messages/en";

export const metadata: Metadata = {
  title: "Mission",
  description: en.mission.description,
};

export default function MissionPage() {
  return <MissionPageContent />;
}
