export const approachPillars = [
  {
    id: "presence",
    badge: "For every clinic",
    badgeTone: "amber" as const,
    title: "A professional presence online",
    summary:
      "We help clinics launch clear, fast websites—who you are, how to reach you, and trusted health information for your community.",
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
      "As your needs grow—appointments, registration, digital health IDs—we add capabilities with strict privacy controls and your team in charge.",
    points: [
      "Sensitive information is protected before it leaves the patient’s device",
      "Your hospital retains control of access and encryption keys",
      "Infrastructure hosted in India to support local data expectations",
    ],
  },
] as const;

export const howItWorksContent = {
  intro:
    "We meet you where you are: strengthen how patients find and trust your clinic first, then introduce deeper digital workflows only when your leadership is ready.",
} as const;
