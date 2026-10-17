export const trustPillars = [
  {
    id: "privacy-law",
    title: "Data protection in India",
    description:
      "Our programs are designed with India’s personal data protection requirements in mind, including where health information is processed and stored.",
  },
  {
    id: "national-health",
    title: "National digital health programs",
    description:
      "We help providers participate in India’s digital health ecosystem—such as ABHA health IDs and streamlined check-in—without compromising your governance policies.",
  },
  {
    id: "architecture",
    title: "Privacy-first architecture",
    description:
      "When handling sensitive workflows, we minimize what we see: information stays encrypted in transit, and access stays with your facility and the patient.",
  },
  {
    id: "interop",
    title: "Fits your existing systems",
    description:
      "We integrate using widely adopted health data standards so your EHR, specialty workflows, and hospital systems can exchange information responsibly.",
  },
] as const;

export const trustPageContent = {
  title: "Trust & security",
  description:
    "Hospital administrators, compliance officers, and clinical leaders should understand our commitments before any deployment. These principles guide how we build, host, and support your programs.",
  hosting:
    "Production and testing environments use enterprise cloud in India so processing and audit trails align with common expectations for health data residency.",
  liability:
    "Public websites share only information you choose to publish. Deeper capabilities are rolled out with written agreements, security review, and clear roles for who controls patient data.",
} as const;
