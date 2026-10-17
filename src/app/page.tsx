import { CTABand } from "@/components/sections/CTABand";
import { ComplianceGrid } from "@/components/sections/ComplianceGrid";
import { ApproachSection } from "@/components/sections/ApproachSection";
import { GovernanceTeaser } from "@/components/sections/GovernanceTeaser";
import { HeroSection } from "@/components/sections/HeroSection";
import { MissionSnapshot } from "@/components/sections/MissionSnapshot";
import { PartnerSteps } from "@/components/sections/PartnerSteps";
import { ServicePillars } from "@/components/sections/ServicePillars";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicePillars />
      <MissionSnapshot />
      <ApproachSection />
      <PartnerSteps />
      <ComplianceGrid compact />
      <GovernanceTeaser />
      <CTABand />
    </>
  );
}
