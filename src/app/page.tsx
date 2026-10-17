import { CTABand } from "@/components/sections/CTABand";
import { ComplianceGrid } from "@/components/sections/ComplianceGrid";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { GovernanceTeaser } from "@/components/sections/GovernanceTeaser";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSnapshot } from "@/components/sections/MissionSnapshot";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionSnapshot />
      <ApproachSection />
      <ComplianceGrid compact />
      <GovernanceTeaser />
      <CTABand />
    </>
  );
}
