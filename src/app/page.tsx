import React from "react";
import Link from "next/link";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectIndex } from "@/components/projects/ProjectIndex";
import ParallaxLayer from "@/components/interactions/ParallaxLayer";
import SectionReveal from "@/components/interactions/SectionReveal";
import MagneticButton from "@/components/interactions/MagneticButton";
import { UserFlowCard, AutoLayoutCard, ComponentCard, VariablesCard, ColumnGridCard, PrototypeCard } from "@/components/interactions/WorkspaceCards";

import { getFeaturedProjects, getAllProjects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";

export default async function Homepage() {
  const featuredProjects = getFeaturedProjects();
  const allProjects = getAllProjects();

  return (
    <div className="w-full flex flex-col items-center">
      
      {/* Hero Section */}
      <section 
        id="hero" 
        className="relative w-full min-h-screen flex items-center pt-24 overflow-hidden bg-dot-pattern"
      >
        {/* Abstract background interactive elements */}
        <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
          <ParallaxLayer speed={0.03} className="absolute top-[8%] right-[6%] pointer-events-auto z-10">
            <UserFlowCard />
          </ParallaxLayer>
          <ParallaxLayer speed={0.08} className="absolute top-[28%] right-[28%] pointer-events-auto z-10">
            <ComponentCard />
          </ParallaxLayer>
          <ParallaxLayer speed={-0.05} className="absolute bottom-[28%] right-[25%] pointer-events-auto z-10">
            <ColumnGridCard />
          </ParallaxLayer>
          <ParallaxLayer speed={0.06} className="absolute top-[48%] right-[3%] pointer-events-auto z-10">
            <PrototypeCard />
          </ParallaxLayer>
          <ParallaxLayer speed={-0.02} className="absolute bottom-[8%] right-[8%] pointer-events-auto z-10">
            <AutoLayoutCard />
          </ParallaxLayer>
          <ParallaxLayer speed={0.04} className="absolute top-[58%] right-[29%] pointer-events-auto z-10">
            <VariablesCard />
          </ParallaxLayer>
        </div>

        <div className="content-container w-full relative z-10">
          <SectionReveal>
            <div className="max-w-3xl flex flex-col gap-8 md:gap-12">
              <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] leading-[1.1] font-heading font-medium tracking-[-0.03em] text-[var(--text-primary)]">
                I design complex products that feel simple.
              </h1>
              
              <p className="text-xl md:text-2xl leading-relaxed text-[var(--text-secondary)] font-body max-w-2xl">
                Product designer focused on turning complicated workflows, business requirements, and product systems into intuitive experiences across SaaS, web, and mobile products.
              </p>

              <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-wider text-[var(--text-tertiary)]">
                <span>Chennai, India</span>
                <span className="w-1 h-1 rounded-full bg-[var(--border-strong)]" />
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[var(--success)] relative">
                    <span className="absolute inset-0 rounded-full bg-[var(--success)] animate-ping opacity-75" />
                  </span>
                  Available for Product Design opportunities
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-4">
                <MagneticButton>
                  <Link href="#work" className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-[var(--text-primary)] text-[var(--bg-primary)] font-medium transition-transform hover:scale-[1.02]">
                    View selected work
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-[var(--border-strong)] text-[var(--text-primary)] font-medium transition-colors hover:bg-[var(--bg-secondary)]">
                    About me
                  </Link>
                </MagneticButton>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Selected Work Section */}
      <section id="work" className="w-full section-gap bg-[var(--bg-primary)]">
        <div className="content-container w-full">
          <SectionReveal>
            <SectionHeader 
              label="Selected Work" 
              heading="Projects" 
              className="mb-16 md:mb-24"
            />
          </SectionReveal>

          <div className="flex flex-col gap-12 md:gap-32">
            {featuredProjects.map((project, index) => (
              <SectionReveal key={project.slug} delay={0.1}>
                <div className={`w-full md:w-[85%] ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                  <ProjectCard project={project} />
                </div>
              </SectionReveal>
            ))}
          </div>

          <SectionReveal delay={0.2}>
            <div className="mt-24 flex justify-center">
              <Link href="/work" className="inline-flex items-center gap-2 text-lg font-medium text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors">
                View all work 
                <span className="text-xl">→</span>
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Interactive Project Index Section */}
      <section className="w-full section-gap bg-[var(--bg-secondary)]">
        <div className="content-container w-full">
          <SectionReveal>
            <SectionHeader 
              label="Archive" 
              heading="Project Index" 
              className="mb-16 md:mb-24"
            />
            <ProjectIndex projects={allProjects} />
          </SectionReveal>
        </div>
      </section>

      {/* Design Philosophy Section */}
      <section id="philosophy" className="w-full section-gap">
        <div className="content-container w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            <SectionReveal delay={0.1}>
              <div className="flex flex-col gap-6">
                <span className="text-5xl md:text-6xl font-heading font-light text-[var(--accent-subtle)] md:text-[var(--border-strong)]">01</span>
                <h3 className="text-2xl font-heading font-medium tracking-tight text-[var(--text-primary)]">
                  Clarity over decoration
                </h3>
                <p className="text-[var(--text-secondary)] font-body leading-relaxed">
                  Great interfaces reduce the amount users have to think.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.2}>
              <div className="flex flex-col gap-6">
                <span className="text-5xl md:text-6xl font-heading font-light text-[var(--accent-subtle)] md:text-[var(--border-strong)]">02</span>
                <h3 className="text-2xl font-heading font-medium tracking-tight text-[var(--text-primary)]">
                  Systems over screens
                </h3>
                <p className="text-[var(--text-secondary)] font-body leading-relaxed">
                  Products scale when patterns and rules work together.
                </p>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.3}>
              <div className="flex flex-col gap-6">
                <span className="text-5xl md:text-6xl font-heading font-light text-[var(--accent-subtle)] md:text-[var(--border-strong)]">03</span>
                <h3 className="text-2xl font-heading font-medium tracking-tight text-[var(--text-primary)]">
                  Edge cases matter
                </h3>
                <p className="text-[var(--text-secondary)] font-body leading-relaxed">
                  The quality of a product becomes visible when something doesn't go according to plan.
                </p>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* How I Work Section */}
      <section id="process" className="w-full section-gap bg-[var(--bg-primary)]">
        <div className="content-container w-full">
          <SectionReveal>
            <SectionHeader 
              label="Process" 
              heading="How I work" 
              className="mb-16 md:mb-24"
            />
          </SectionReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {[
              { num: '01', title: 'Understand the system', desc: 'Business requirements, users, constraints and edge cases.' },
              { num: '02', title: 'Structure the experience', desc: 'Information architecture, workflows and interaction logic.' },
              { num: '03', title: 'Explore', desc: 'Wireframes and solution alternatives.' },
              { num: '04', title: 'Design the system', desc: 'Reusable components and scalable patterns.' },
              { num: '05', title: 'Prototype', desc: 'Validate complex interactions.' },
              { num: '06', title: 'Ship together', desc: 'Collaborate closely with product and engineering.' },
            ].map((step, idx) => (
              <SectionReveal key={step.num} delay={idx * 0.1}>
                <div className="flex flex-col gap-4">
                  <span className="mono-label text-[var(--accent)] font-mono text-sm uppercase tracking-wider">
                    {step.num}
                  </span>
                  <h4 className="text-2xl font-heading font-semibold text-[var(--text-primary)] tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-[var(--text-secondary)] font-body text-lg">
                    {step.desc}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="w-full section-gap">
        <div className="content-container w-full max-w-4xl">
          <SectionReveal>
            <SectionHeader 
              label="Experience" 
              heading="Where I've worked" 
              className="mb-16"
            />
          </SectionReveal>

          <div className="flex flex-col">
            {experiences.map((exp, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1}>
                <div className="py-8 md:py-12 border-b border-[var(--border)] group hover:border-[var(--border-strong)] transition-colors">
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                    <h3 className="text-2xl md:text-3xl font-heading font-medium tracking-tight text-[var(--text-primary)]">
                      {exp.company}
                    </h3>
                    <span className="text-[var(--text-tertiary)] font-mono text-sm tracking-wider uppercase">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mb-6">
                    <span className="text-lg text-[var(--text-secondary)] font-medium">
                      {exp.role}
                    </span>
                    <span className="hidden md:block w-1 h-1 rounded-full bg-[var(--border-strong)]" />
                    <span className="text-[var(--text-tertiary)]">
                      {exp.location}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {exp.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex gap-3 text-[var(--text-secondary)] font-body">
                        <span className="text-[var(--accent)] opacity-60 mt-1.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="w-full section-gap bg-[var(--bg-primary)]">
        <div className="content-container w-full">
          <SectionReveal>
            <SectionHeader 
              label="Capabilities" 
              heading="What I bring" 
              className="mb-16 md:mb-24"
            />
          </SectionReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
            {skillCategories.map((category, idx) => (
              <SectionReveal key={category.title} delay={idx * 0.1}>
                <div className="flex flex-col gap-6">
                  <h4 className="text-xl font-heading font-semibold text-[var(--text-primary)]">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map(skill => (
                      <span 
                        key={skill}
                        className="px-4 py-2 rounded-full border border-[var(--border)] bg-[var(--bg-elevated)] text-[var(--text-secondary)] text-sm font-body hover:border-[var(--border-strong)] transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="w-full section-gap bg-[var(--bg-secondary)] border-t border-[var(--border)]">
        <div className="content-container w-full text-center flex flex-col items-center">
          <SectionReveal>
            <h2 className="text-4xl md:text-6xl font-heading font-medium tracking-tight text-[var(--text-primary)] mb-6 max-w-2xl mx-auto">
              Have something interesting to build?
            </h2>
            <p className="text-xl text-[var(--text-secondary)] font-body mb-12">
              Let's talk about your next product.
            </p>
            <MagneticButton>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[var(--accent)] text-white font-medium text-lg transition-transform hover:scale-[1.02] hover:bg-[var(--accent-hover)]"
              >
                Start a conversation
              </Link>
            </MagneticButton>
          </SectionReveal>
        </div>
      </section>

    </div>
  );
}
