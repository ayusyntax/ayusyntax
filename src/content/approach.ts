export const approachPillars = [
  {
    id: "presence",
    badge: "For every clinic",
    badgeTone: "amber" as const,
    title: "A professional presence online",
    summary:
      "We help clinics launch clear, fast websites that explain who you are and how to reach you, and that offer reliable health information to your community.",
    points: [
      "No patient records or intake forms on your public site",
      "A credible first impression for families and referring physicians",
      "Offered at no cost to qualifying partner clinics",
    ],
  },
  {
    id: "coordination",
    badge: "When you are ready",
    badgeTone: "blue" as const,
    title: "Secure tools for day-to-day care",
    summary:
      "As your needs grow to include appointments, registration, and digital health IDs, we add these capabilities with strict privacy controls while your team stays in charge.",
    points: [
      "Sensitive information is protected before it leaves the patient’s device",
      "Your hospital retains control of access and encryption keys",
      "Infrastructure hosted in India to support local data expectations",
    ],
  },
] as const;

export const howItWorksContent = {
  intro:
    "We start from your current situation. Our first step is to improve how patients find and trust your clinic, and we introduce deeper digital workflows only once your leadership is ready.",
} as const;
