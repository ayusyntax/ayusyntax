import { CTABand } from "@/components/sections/CTABand";
import { ComplianceGrid } from "@/components/sections/ComplianceGrid";
import { GovernanceTeaser } from "@/components/sections/GovernanceTeaser";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSnapshot } from "@/components/sections/MissionSnapshot";
import { PhaseCards } from "@/components/sections/PhaseCards";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSnapshot />
      <PhaseCards />
      <ComplianceGrid compact />
      <GovernanceTeaser />
      <CTABand />
    </>
  );
}
