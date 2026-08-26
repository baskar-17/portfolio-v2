export interface Experience {
  company: string;
  project?: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    company: "BrainVault Technologies",
    project: "SportsGravy",
    role: "UI/UX Designer",
    period: "Nov 2023 — Present",
    location: "Remote",
    highlights: [
      "Sports-management SaaS platform design",
      "Complex workflows across 15+ product modules",
      "Built and maintained product design system",
      "Close collaboration with product and engineering",
      "Mentoring three junior designers",
    ],
  },
  {
    company: "MyKinderPass",
    role: "UI/UX Designer",
    period: "Apr 2022 — May 2023",
    location: "Singapore · Remote",
    highlights: [
      "Mobile, web, and admin product surfaces",
      "Parent and therapist experience design",
      "UX research including user interviews and personas",
      "Booking and subscription workflow design",
      "Usability testing and iteration",
    ],
  },
  {
    company: "Mudrex",
    role: "UI/UX Design Intern",
    period: "Nov 2021 — Mar 2022",
    location: "Bangalore",
    highlights: [
      "Fintech and Web3 product design",
      "Crypto trading web product UI",
      "Wireframes and interactive prototypes",
      "Marketing page design",
      "User journey documentation",
    ],
  },
];
