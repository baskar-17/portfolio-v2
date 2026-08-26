export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Product Design",
    skills: [
      "Product Thinking",
      "Interaction Design",
      "User Flows",
      "Information Architecture",
      "Responsive Design",
    ],
  },
  {
    title: "UX",
    skills: [
      "User Research",
      "Personas",
      "Journey Mapping",
      "Usability Testing",
      "Accessibility / WCAG",
    ],
  },
  {
    title: "UI Systems",
    skills: [
      "High-Fidelity UI",
      "Design Systems",
      "Component Libraries",
      "Interactive Prototyping",
      "Wireframing",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Figma",
      "Miro",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Jira",
      "Notion",
    ],
  },
  {
    title: "Development",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Webflow",
    ],
  },
  {
    title: "AI Workflow",
    skills: [
      "Claude",
      "AI Prototyping Tools",
      "AI-Assisted UX Exploration",
    ],
  },
];
