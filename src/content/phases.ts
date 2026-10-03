export const phases = [
  {
    id: "phase-1",
    badge: "Phase 1",
    badgeTone: "amber" as const,
    title: "Free public clinic presence",
    summary:
      "Static, fast websites for local clinics—doctor directories, hours, and health awareness content.",
    points: [
      "No patient data collected or stored",
      "Low security liability while building local reputation",
      "Professional design that reflects the quality of care inside",
    ],
  },
  {
    id: "phase-2",
    badge: "Phase 2",
    badgeTone: "blue" as const,
    title: "Encrypted routing, not warehousing",
    summary:
      "When clinics need scheduling, intake, or ABHA integration, Ayusyntax routes encrypted payloads—keys stay with the hospital and patient.",
    points: [
      "Client-side encryption before data leaves the device",
      "Localized cloud in India (AWS/GCP regions) for DPDP alignment",
      "HL7 FHIR mappings for ABDM sandbox and production APIs",
    ],
  },
] as const;

export const howItWorksContent = {
  intro:
    "Ayusyntax grows with each partner: we prove value in public, then introduce advanced capabilities only when governance and infrastructure are ready.",
  diagramCaption:
    "Conceptual flow—Ayusyntax connects systems without becoming a central data warehouse.",
} as const;
