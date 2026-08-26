import React from "react";
import type { Metadata } from "next";
import SectionReveal from "@/components/interactions/SectionReveal";
import { experiences } from "@/data/experience";
import { skillCategories } from "@/data/skills";

export const metadata: Metadata = {
  title: "Resume",
  description: "Baskar Subramani's Resume - UI/UX Designer / Product Designer.",
};

export default function ResumePage() {
  return (
    <main className="content-container pt-32 pb-24 lg:pt-48 lg:pb-32">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-heading tracking-tight mb-2">
                Baskar Subramani
              </h1>
              <p className="text-xl text-secondary">
                UI/UX Designer / Product Designer
              </p>
            </div>
            
            <a 
              href="/resume/baskar-subramani-resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-11 px-6 rounded-full bg-primary text-[var(--bg-primary)] font-medium text-sm bg-[var(--text-primary)] hover:bg-[var(--text-secondary)] transition-colors focus:ring-2 focus:ring-accent focus:outline-none"
            >
              Download Resume
            </a>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="card-surface p-8 md:p-12 space-y-12 text-secondary">
            {/* Contact Info Header */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm border-b border-[var(--border)] pb-8">
              <span>Chennai, India</span>
              <span className="text-[var(--border-strong)] hidden sm:inline">•</span>
              <a href="mailto:baskars739@gmail.com" className="hover:text-accent transition-colors">
                baskars739@gmail.com
              </a>
              <span className="text-[var(--border-strong)] hidden sm:inline">•</span>
              <a href="tel:+918637632727" className="hover:text-accent transition-colors">
                +91 8637632727
              </a>
              <span className="text-[var(--border-strong)] hidden lg:inline">•</span>
              <a href="https://www.linkedin.com/in/baskar17/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors block w-full lg:w-auto mt-2 lg:mt-0">
                linkedin.com/in/baskar17
              </a>
            </div>

            {/* Summary */}
            <section>
              <h2 className="mono-label mb-4">Summary</h2>
              <p className="text-primary text-base leading-relaxed">
                Product designer with ~4 years of experience designing SaaS, web, mobile applications, design systems, and complex workflows. Passionate about understanding the underlying logic of complicated systems and collaborating closely with engineering and product teams to deliver cohesive, scalable solutions.
              </p>
            </section>

            {/* Experience */}
            <section>
              <h2 className="mono-label mb-6">Experience</h2>
              <div className="space-y-10">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="relative pl-4 border-l border-[var(--border-strong)]">
                    <div className="absolute w-2 h-2 rounded-full bg-[var(--border-strong)] -left-[4.5px] top-1.5" />
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-2">
                      <h3 className="text-lg font-heading font-semibold text-primary">
                        {exp.role} <span className="text-secondary font-normal">at {exp.company}</span>
                        {exp.project && <span className="text-secondary font-normal"> ({exp.project})</span>}
                      </h3>
                      <span className="text-sm text-tertiary whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                    <div className="text-sm text-tertiary mb-4">{exp.location}</div>
                    
                    <ul className="list-disc list-outside pl-4 space-y-2 text-sm">
                      {exp.highlights.map((highlight, hIdx) => (
                        <li key={hIdx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <h2 className="mono-label mb-6">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skillCategories.map((category, idx) => (
                  <div key={idx}>
                    <h3 className="text-primary font-medium text-sm mb-2">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, sIdx) => (
                        <span key={sIdx} className="text-xs bg-[var(--bg-primary)] px-2 py-1 rounded border border-[var(--border)]">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="mono-label mb-4">Education</h2>
              <div>
                <h3 className="text-base font-heading font-semibold text-primary mb-1">
                  University of Madras
                </h3>
                <p className="text-sm">Bachelor of Commerce (B.Com) • 2015 — 2018</p>
              </div>
            </section>

          </div>
        </SectionReveal>
      </div>
    </main>
  );
}
