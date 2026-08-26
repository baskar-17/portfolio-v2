import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    slug: "sportsgravy",
    title: "SportsGravy",
    company: "BrainVault Technologies",
    logo: null,
    industry: "Sports Management",
    year: "2023 — Present",
    role: "UI/UX Designer",
    platform: ["Web", "Mobile", "SaaS"],
    shortDescription: "Complex league, scheduling, registration and operations experiences built for sports organizations.",
    longDescription: "SportsGravy is a comprehensive sports organization and league management platform. I designed end-to-end UX for complex web and SaaS workflows spanning 15+ product modules — from registration and scheduling to live scoring and team management.",
    heroImage: "/images/projects/sportsgravy/hero.webp",
    theme: {
      primary: "#1B5E20",
      secondary: "#E8F5E9",
      accent: "#4CAF50",
    },
    tags: ["Product Design", "SaaS", "Web + Mobile"],
    nda: false,
    order: 1,
    featured: true,
    categories: ["SaaS", "B2B", "Mobile"],
    sections: [
      {
        id: "overview",
        title: "Project Overview",
        type: "text",
        published: true,
        content: {
          heading: "A platform to run every aspect of youth sports",
          body: "SportsGravy is a sports organization and league management platform that helps administrators manage registrations, schedules, teams, statistics, communication, and day-to-day operations — all in one system. The platform serves a complex ecosystem of users including organization administrators, league admins, coaches, team managers, parents, players, officials, and fans.",
        },
      },
      {
        id: "role",
        title: "My Role",
        type: "two-column",
        published: true,
        content: {
          heading: "My Role",
          columns: {
            left: "As the lead UI/UX Designer, I was responsible for the end-to-end design of the platform — from understanding complex business requirements and mapping user flows, to creating wireframes, high-fidelity designs, and interactive prototypes. I worked closely with product managers, developers, and stakeholders throughout the process.",
            right: "I also built and maintained the product's design system, ensuring consistency across 15+ modules, and mentored three junior designers on the team.",
          },
        },
      },
      {
        id: "challenge",
        title: "The Challenge",
        type: "text",
        published: true,
        content: {
          heading: "Making complexity manageable",
          body: "Sports management software combines many complicated operational systems and user roles. The core challenge was designing experiences that could handle the depth required by power users (league administrators managing hundreds of teams) while remaining intuitive enough for casual users (parents registering their child).",
          bullets: [
            "Multiple user roles with different needs and permissions",
            "Complex data relationships (Organization → League → Season → Division → Team → Roster)",
            "Real-time scheduling across multiple facilities and time zones",
            "Registration workflows with conditional forms and payment processing",
            "Statistics tracking with live scoring capabilities",
          ],
        },
      },
      {
        id: "complexity",
        title: "Product Ecosystem",
        type: "diagram",
        published: true,
        content: {
          heading: "Understanding the product ecosystem",
          body: "The platform's complexity stems from deeply interconnected modules. Every design decision had to account for how changes would ripple through the system.",
          items: [
            { number: "01", title: "Organization", description: "Top-level entity managing multiple leagues" },
            { number: "02", title: "League", description: "Competition structures with rules and formats" },
            { number: "03", title: "Season", description: "Time-bound competitive periods" },
            { number: "04", title: "Division", description: "Skill and age-based groupings" },
            { number: "05", title: "Team", description: "Player groups with rosters and coaches" },
            { number: "06", title: "Schedule", description: "Game and practice coordination" },
            { number: "07", title: "Game", description: "Individual match events with scoring" },
            { number: "08", title: "Statistics", description: "Performance tracking and analytics" },
          ],
        },
      },
      {
        id: "discovery",
        title: "Discovery & Research",
        type: "process",
        published: true,
        content: {
          heading: "Understanding the problem space",
          items: [
            { number: "01", title: "Business Requirements", description: "Worked with stakeholders to document complex operational workflows and edge cases across all user types." },
            { number: "02", title: "Competitive Research", description: "Analyzed existing sports management platforms to identify common patterns and opportunities for improvement." },
            { number: "03", title: "User Flow Mapping", description: "Created detailed user flows for each role, mapping every interaction path including error states and edge cases." },
            { number: "04", title: "Information Architecture", description: "Structured the product's navigation and content hierarchy to support both depth and discoverability." },
          ],
        },
      },
      {
        id: "design-system",
        title: "Design System",
        type: "design-system",
        published: true,
        content: {
          heading: "Building for scale and consistency",
          body: "I created a comprehensive design system with reusable components that maintained visual and interaction consistency across 15+ product modules. The system included atomic components (buttons, inputs, badges), molecular patterns (data tables, forms, modals), and complete workflow templates.",
          bullets: [
            "Atomic design methodology — components, patterns, and templates",
            "Consistent spacing, typography, and color systems",
            "Responsive components adaptable across web and mobile",
            "Interactive states documented for every component",
            "Design-to-development handoff specifications",
          ],
        },
      },
      {
        id: "modules",
        title: "Key Product Areas",
        type: "text",
        published: true,
        content: {
          heading: "Designing across 15+ modules",
          body: "Each module presented unique UX challenges while needing to feel cohesive with the rest of the platform.",
          bullets: [
            "Registration — Multi-step forms with conditional logic and payment",
            "Scheduling — Complex calendar with conflict detection and facility management",
            "Team Management — Roster building, role assignments, and communication",
            "League Management — Season setup, division configuration, and tournament brackets",
            "Statistics & Live Scoring — Real-time data entry and performance dashboards",
            "Tickets & Orders — Event ticketing and merchandise management",
            "Communication — In-app messaging, notifications, and announcements",
            "Account & Organization Admin — Settings, permissions, and billing",
          ],
        },
      },
      {
        id: "outcome",
        title: "Outcome",
        type: "metrics",
        published: true,
        content: {
          heading: "Impact",
          metrics: [
            { value: "15+", label: "Product Modules", description: "Designed across the complete platform" },
            { value: "8", label: "User Roles", description: "From administrators to fans" },
            { value: "3", label: "Designers Mentored", description: "Growing the design team" },
            { value: "1", label: "Design System", description: "Reusable component library" },
          ],
        },
      },
      {
        id: "reflection",
        title: "Reflection",
        type: "text",
        published: true,
        content: {
          heading: "What I learned",
          body: "SportsGravy taught me that designing for complex B2B SaaS products requires thinking in systems, not screens. Every decision impacts multiple user types and interconnected workflows. The most valuable skill I developed was the ability to zoom out and understand the full product ecosystem while zooming in on the micro-interactions that make individual workflows feel intuitive. Building a scalable design system early saved significant time as the product grew.",
        },
      },
    ],
  },
  {
    slug: "finflow",
    title: "FinFlow",
    company: "FinFlow",
    logo: null,
    industry: "Fintech",
    year: "2023",
    role: "UI/UX Designer",
    platform: ["Web", "Dashboard"],
    shortDescription: "Financial management dashboard with data-heavy interfaces designed for clarity and trust.",
    longDescription: "FinFlow is a financial management product where I focused on creating clear, trustworthy interfaces for data-heavy financial workflows — from transaction management to reporting dashboards.",
    heroImage: "/images/projects/finflow/hero.webp",
    theme: {
      primary: "#1E3A5F",
      secondary: "#E3F2FD",
      accent: "#2196F3",
    },
    tags: ["UI Design", "Fintech", "Dashboard"],
    nda: false,
    order: 2,
    featured: true,
    categories: ["Fintech", "SaaS", "B2B"],
    sections: [
      {
        id: "overview",
        title: "Project Overview",
        type: "text",
        published: true,
        content: {
          heading: "Designing trust through clarity",
          body: "FinFlow is a financial management platform where every interface decision directly impacts user confidence. I designed data-heavy dashboards and transaction workflows that prioritize information hierarchy, visual clarity, and a sense of security.",
        },
      },
      {
        id: "challenge",
        title: "The Challenge",
        type: "text",
        published: true,
        content: {
          heading: "Making financial data approachable",
          body: "Financial products demand a higher standard of clarity. Users need to make critical decisions based on the data presented — any ambiguity erodes trust. The challenge was creating interfaces that surfaced the right information at the right time without overwhelming users.",
          bullets: [
            "Dense data that needed to remain scannable",
            "Complex transaction workflows with multiple states",
            "Dashboard designs balancing overview and detail",
            "Building visual trust through consistent, reliable patterns",
          ],
        },
      },
      {
        id: "approach",
        title: "Design Approach",
        type: "process",
        published: true,
        content: {
          heading: "Structured for financial clarity",
          items: [
            { number: "01", title: "Information Hierarchy", description: "Established clear visual priority systems for financial data — primary metrics, secondary details, and contextual actions." },
            { number: "02", title: "Data Visualization", description: "Designed chart and graph components that communicate trends and patterns at a glance." },
            { number: "03", title: "Transaction Flows", description: "Mapped complete transaction lifecycles with clear status indicators and confirmation patterns." },
            { number: "04", title: "Trust Patterns", description: "Used consistent color coding, confirmation dialogs, and visual feedback to build user confidence." },
          ],
        },
      },
      {
        id: "outcome",
        title: "Outcome",
        type: "text",
        published: true,
        content: {
          heading: "What I delivered",
          body: "Created a cohesive financial dashboard experience with clear information hierarchy, intuitive transaction workflows, and a consistent component system designed for data-dense interfaces.",
        },
      },
    ],
  },
  {
    slug: "onhand",
    title: "Onhand POS",
    company: "Onhand",
    logo: null,
    industry: "Retail & Operations",
    year: "2023",
    role: "UI/UX Designer",
    platform: ["Web", "Mobile", "POS"],
    shortDescription: "Point-of-sale and dairy operations management system designed for efficiency in daily business workflows.",
    longDescription: "Onhand encompasses both a Point of Sale system and a Dairy operations management application. I designed the complete operational UX covering product management, orders, inventory, billing, and daily workflows.",
    heroImage: "/images/projects/onhand/hero.webp",
    theme: {
      primary: "#E65100",
      secondary: "#FFF3E0",
      accent: "#FF9800",
    },
    tags: ["Product Design", "POS", "Mobile"],
    nda: false,
    order: 3,
    featured: true,
    categories: ["B2B", "Mobile"],
    sections: [
      {
        id: "overview",
        title: "Project Overview",
        type: "text",
        published: true,
        content: {
          heading: "Operational tools built for daily efficiency",
          body: "Onhand is a dual-product ecosystem: a Point of Sale (POS) system and a Dairy operations management application. Both products are designed around the principle that operational tools should disappear into the workflow — fast, reliable, and requiring minimal cognitive load during busy work hours.",
        },
      },
      {
        id: "products",
        title: "Two Products, One Ecosystem",
        type: "two-column",
        published: true,
        content: {
          heading: "Two products, one design language",
          columns: {
            left: "**POS Experience** — The point-of-sale interface focuses on speed and accuracy. Quick product lookup, streamlined checkout flows, and clear order management designed for high-volume retail environments where every second counts.",
            right: "**Dairy Operations** — The dairy management application handles inventory tracking, order processing, customer management, and billing workflows specific to dairy distribution operations with daily route-based delivery patterns.",
          },
        },
      },
      {
        id: "approach",
        title: "Design Approach",
        type: "process",
        published: true,
        content: {
          heading: "Designing for operational speed",
          items: [
            { number: "01", title: "Product Management", description: "Quick catalog browsing, search, and product configuration optimized for touch interfaces." },
            { number: "02", title: "Order Processing", description: "Streamlined checkout flows with minimal steps from product selection to payment confirmation." },
            { number: "03", title: "Inventory & Billing", description: "Real-time inventory tracking and automated billing calculations for daily operations." },
            { number: "04", title: "Mobile Workflows", description: "Mobile-first design for field operations including route management and delivery tracking." },
          ],
        },
      },
      {
        id: "outcome",
        title: "Outcome",
        type: "text",
        published: true,
        content: {
          heading: "What I delivered",
          body: "Designed a cohesive operational product ecosystem that serves both retail POS and dairy distribution needs with shared design patterns, consistent interaction models, and workflows optimized for speed and reliability during daily operations.",
        },
      },
    ],
  },
  {
    slug: "mykinderpass",
    title: "MyKinderPass",
    company: "MyKinderPass",
    logo: null,
    industry: "Child Development & Health",
    year: "2022 — 2023",
    role: "UI/UX Designer",
    platform: ["Web", "Mobile", "Admin"],
    shortDescription: "Child development platform connecting parents with therapists through guided experiences and booking workflows.",
    longDescription: "MyKinderPass is a child development platform connecting parents with therapists. I worked across web, mobile, and admin experiences — redesigning onboarding flows, consultation booking, and subscription management.",
    heroImage: "/images/projects/mykinderpass/hero.webp",
    theme: {
      primary: "#6A1B9A",
      secondary: "#F3E5F5",
      accent: "#AB47BC",
    },
    tags: ["Product Design", "Consumer", "Mobile + Web"],
    nda: false,
    order: 4,
    featured: true,
    categories: ["Consumer", "Mobile", "B2B"],
    sections: [
      {
        id: "overview",
        title: "Project Overview",
        type: "text",
        published: true,
        content: {
          heading: "Connecting parents with the right care",
          body: "MyKinderPass is a child development platform based in Singapore that connects parents with qualified therapists for consultations, sessions, and ongoing developmental support. The product serves two distinct user groups — parents seeking guidance and therapists offering services — each requiring carefully designed experiences.",
        },
      },
      {
        id: "role",
        title: "My Role",
        type: "text",
        published: true,
        content: {
          heading: "Designing across three product surfaces",
          body: "I worked as the UI/UX Designer across all product surfaces — the parent-facing mobile experience, the therapist web portal, and the internal admin dashboard. My work included UX research (SWOT analysis, user interviews, personas, journey mapping), interaction design, high-fidelity UI, prototyping, and usability testing.",
        },
      },
      {
        id: "challenge",
        title: "The Challenge",
        type: "text",
        published: true,
        content: {
          heading: "Building trust in a sensitive space",
          body: "Healthcare products for children demand exceptional levels of trust and clarity. Parents need to feel confident in the platform's recommendations, therapists need efficient tools, and the booking/subscription experience must be seamless enough that administrative friction never becomes a barrier to accessing care.",
          bullets: [
            "Sensitive user context requiring empathetic design",
            "Complex booking workflows with therapist availability matching",
            "Subscription management with multiple plan tiers",
            "Onboarding that needed to educate while collecting necessary information",
          ],
        },
      },
      {
        id: "onboarding",
        title: "Onboarding Redesign",
        type: "process",
        published: true,
        content: {
          heading: "Reimagining the first experience",
          body: "The original onboarding was a single long form that overwhelmed new users. I redesigned it as a guided stepper-based experience that broke the process into digestible steps while maintaining all the necessary data collection.",
          items: [
            { number: "01", title: "Child Information", description: "Age, developmental milestones, and areas of concern — presented as conversational prompts." },
            { number: "02", title: "Parent Preferences", description: "Language, location, session format preferences, and scheduling availability." },
            { number: "03", title: "Therapist Matching", description: "Algorithm-assisted recommendations based on child needs and parent preferences." },
            { number: "04", title: "First Booking", description: "Integrated booking flow that converts onboarding into an immediate action." },
          ],
        },
      },
      {
        id: "research",
        title: "UX Research",
        type: "text",
        published: true,
        content: {
          heading: "Research-informed decisions",
          body: "I conducted structured UX research to inform design decisions throughout the project.",
          bullets: [
            "SWOT analysis of the existing platform",
            "User interviews with parents and therapists",
            "Persona development for primary user types",
            "Journey mapping to identify friction points",
            "Usability testing on onboarding and booking flows",
          ],
        },
      },
      {
        id: "outcome",
        title: "Outcome",
        type: "text",
        published: true,
        content: {
          heading: "What I delivered",
          body: "Redesigned the complete user journey across three product surfaces. The new stepper-based onboarding significantly improved the first-time user experience by reducing cognitive load and creating a clearer path from registration to first booking. Built consistent design patterns that work across parent mobile, therapist web, and admin dashboard contexts.",
        },
      },
    ],
  },
  {
    slug: "mudrex",
    title: "Mudrex",
    company: "Mudrex",
    logo: null,
    industry: "Fintech / Web3",
    year: "2021 — 2022",
    role: "UI/UX Design Intern",
    platform: ["Web"],
    shortDescription: "Crypto trading product with marketing experiences and interactive prototypes for a Web3 fintech platform.",
    longDescription: "Mudrex is a crypto trading and investment platform. As a design intern, I contributed to the web product UI, marketing pages, wireframes, interactive prototypes, and campaign-aligned design work.",
    heroImage: "/images/projects/mudrex/hero.webp",
    theme: {
      primary: "#1A237E",
      secondary: "#E8EAF6",
      accent: "#536DFE",
    },
    tags: ["UI Design", "Fintech", "Web3"],
    nda: false,
    order: 5,
    featured: false,
    categories: ["Fintech"],
    sections: [
      {
        id: "overview",
        title: "Project Overview",
        type: "text",
        published: true,
        content: {
          heading: "Early career in fintech product design",
          body: "Mudrex is a crypto trading and investment platform that simplifies cryptocurrency investing for retail users. As a UI/UX Design Intern based in Bangalore, I worked on the web product interface, marketing experiences, and design exploration — gaining foundational product design experience in a fast-paced fintech environment.",
        },
      },
      {
        id: "contribution",
        title: "My Contribution",
        type: "text",
        published: true,
        content: {
          heading: "What I worked on",
          body: "My role covered a range of design activities that gave me exposure to different aspects of product design in a professional setting.",
          bullets: [
            "Web product UI design for crypto trading interfaces",
            "Marketing page design aligned with campaign goals",
            "Wireframing and low-fidelity exploration",
            "Interactive prototypes for user journey validation",
            "User journey mapping and flow documentation",
          ],
        },
      },
      {
        id: "learning",
        title: "What I Learned",
        type: "text",
        published: true,
        content: {
          heading: "Foundation of product thinking",
          body: "Mudrex was my introduction to professional product design. Working in fintech — where trust, clarity, and precision are non-negotiable — taught me the importance of every design decision. I learned how to translate complex business requirements into user-facing interfaces, how to work within a design team's processes, and how to iterate quickly based on feedback.",
        },
      },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getAllProjects(): Project[] {
  return [...projects].sort((a, b) => a.order - b.order);
}

export function getProjectsByCategory(category: string): Project[] {
  if (category === "All") return getAllProjects();
  return projects.filter((p) => p.categories.includes(category)).sort((a, b) => a.order - b.order);
}

export function getNextProject(currentSlug: string): Project | undefined {
  const sorted = getAllProjects();
  const currentIndex = sorted.findIndex((p) => p.slug === currentSlug);
  if (currentIndex === -1) return undefined;
  return sorted[(currentIndex + 1) % sorted.length];
}
