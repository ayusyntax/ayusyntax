export const trustPillars = [
  {
    id: "dpdp",
    title: "DPDP Act alignment",
    description:
      "Architecture and hosting choices respect India’s Digital Personal Data Protection requirements, with data localization on enterprise cloud in Indian regions.",
  },
  {
    id: "abdm",
    title: "ABDM-ready",
    description:
      "Integrations target the Ayushman Bharat Digital Mission framework, including pathways for ABHA and Scan & Share at the clinic edge.",
  },
  {
    id: "zk",
    title: "Zero-knowledge posture",
    description:
      "Sensitive payloads are encrypted on the patient device before transit. Ayusyntax routes ciphertext; hospitals and patients retain keys.",
  },
  {
    id: "fhir",
    title: "HL7 FHIR",
    description:
      "Interop with modern health systems uses FHIR-oriented APIs so orthopedic, Ayurvedic, and hospital EHR contexts can share structured data safely.",
  },
] as const;

export const trustPageContent = {
  title: "Trust & compliance",
  description:
    "Stakeholders should see how Ayusyntax thinks about privacy before any product demo. These principles guide engineering, hosting, and partnerships.",
  hosting:
    "Development and staging environments run on AWS or GCP regions physically located in India (for example Mumbai or Hyderabad) so routing and audit trails respect localization expectations.",
  liability:
    "Phase 1 properties are informational only. Phase 2 features are introduced with explicit data agreements, encryption review, and hospital-controlled key custody.",
} as const;
