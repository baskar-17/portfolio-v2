import React from "react";
import type { Metadata } from "next";
import SectionReveal from "@/components/interactions/SectionReveal";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
  description: "Product designer focused on bringing clarity to complex systems. Discover my design approach, process, and tools.",
};

const workSteps = [
  {
    title: "Understand the system",
    description: "Business requirements, users, constraints and edge cases.",
  },
  {
    title: "Structure the experience",
    description: "Information architecture, workflows and interaction logic.",
  },
  {
    title: "Explore",
    description: "Wireframes and solution alternatives.",
  },
  {
    title: "Design the system",
    description: "Reusable components and scalable patterns.",
  },
  {
    title: "Prototype",
    description: "Validate complex interactions.",
  },
  {
    title: "Ship together",
    description: "Collaborate closely with product and engineering.",
  },
];

const tools = [
  "Figma",
  "Miro",
  "Photoshop",
  "Illustrator",
  "Jira",
  "Notion",
  "HTML/CSS/JS",
  "React",
  "Webflow",
];

export default function AboutPage() {
  return (
    <main className="content-container pt-32 pb-24 lg:pt-48 lg:pb-32 section-gap">
      {/* Hero & Intro */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        <div className="lg:col-span-8">
          <SectionReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading tracking-tight mb-8">
              Designing clarity into complicated products.
            </h1>
          </SectionReveal>
          
          <SectionReveal delay={0.1}>
            <div className="space-y-6 text-lg text-secondary max-w-3xl">
              <p>
                I enjoy understanding complicated systems. I work closely with product and engineering teams to translate complex business logic into intuitive user experiences.
              </p>
              <p>
                To me, design is about more than just the happy paths. I care deeply about edge cases, error states, and the underlying rules that govern a product. Strong UX comes from understanding these rules and designing reusable systems instead of isolated screens.
              </p>
              <p>
                I also embrace modern product-design workflows, using AI tools to explore ideas faster and refine solutions with higher fidelity.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* How I Work */}
      <section>
        <SectionReveal>
          <h2 className="text-2xl md:text-3xl font-heading tracking-tight mb-12">How I Work</h2>
        </SectionReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workSteps.map((step, index) => (
            <SectionReveal key={index} delay={index * 0.1}>
              <div className="card-surface p-8 h-full flex flex-col group relative overflow-hidden rounded-2xl">
                <span className="font-mono text-xs uppercase tracking-wide text-tertiary mb-6 block">
                  Step 0{index + 1}
                </span>
                <h3 className="text-xl font-heading font-medium mb-3 group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-secondary text-sm">
                  {step.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5">
          <SectionReveal>
            <h2 className="text-2xl md:text-3xl font-heading tracking-tight mb-8">Tools</h2>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 rounded-full border border-[var(--border)] text-sm text-secondary bg-[var(--bg-elevated)]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>
        
        <div className="lg:col-span-7">
          <SectionReveal>
            <h2 className="text-2xl md:text-3xl font-heading tracking-tight mb-8">Capabilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {skillCategories.map((category, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="font-mono text-xs uppercase tracking-wide text-tertiary">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="text-secondary text-sm">
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>
    </main>
  );
}
