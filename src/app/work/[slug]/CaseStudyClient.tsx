"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { Project } from "@/types/project";
import { fadeUp, staggerContainer, staggerItem, easing, duration } from "@/lib/animations";

interface CaseStudyClientProps {
  project: Project;
  nextProject?: Project;
}

export default function CaseStudyClient({ project, nextProject }: CaseStudyClientProps) {
  const publishedSections = project.sections.filter((s) => s.published);

  return (
    <main className="min-h-screen">
      {/* Project Hero */}
      <section
        className="relative min-h-[70vh] flex items-end pb-16 md:pb-24"
        style={{
          background: `linear-gradient(135deg, ${project.theme.secondary}22, var(--bg-primary))`,
        }}
      >
        <div className="content-container w-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.span
              variants={staggerItem}
              className="mono-label block mb-4"
            >
              {project.industry} · {project.year}
            </motion.span>

            <motion.h1
              variants={staggerItem}
              className="text-[length:var(--text-display)] font-bold mb-6"
              style={{ letterSpacing: "var(--tracking-display)" }}
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={staggerItem}
              className="text-[length:var(--text-h3)] text-text-secondary max-w-2xl mb-8"
            >
              {project.longDescription}
            </motion.p>

            <motion.div
              variants={staggerItem}
              className="flex flex-wrap gap-3"
            >
              <span className="px-4 py-2 rounded-full border border-border text-text-secondary text-[length:var(--text-small)]">
                {project.role}
              </span>
              {project.platform.map((p) => (
                <span
                  key={p}
                  className="px-4 py-2 rounded-full border border-border text-text-secondary text-[length:var(--text-small)]"
                >
                  {p}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Sidebar Navigation + Content */}
      <div className="content-container">
        <div className="flex gap-16 py-16 md:py-24 relative">
          {/* Sidebar Nav (Desktop) */}
          <aside className="hidden lg:block w-48 shrink-0">
            <nav className="sticky top-28">
              <ul className="space-y-3">
                {publishedSections.map((section, i) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="mono-label block py-1 text-text-tertiary hover:text-text-primary transition-colors duration-200"
                    >
                      {String(i + 1).padStart(2, "0")} {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 min-w-0 space-y-20 md:space-y-32">
            {publishedSections.map((section) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={fadeUp}
                className="scroll-mt-28"
              >
                {section.content.heading && (
                  <h2
                    className="text-[length:var(--text-h2)] font-bold mb-6"
                    style={{ letterSpacing: "var(--tracking-tight)" }}
                  >
                    {section.content.heading}
                  </h2>
                )}

                {section.content.body && (
                  <p className="text-text-secondary text-[length:var(--text-body)] leading-relaxed mb-6 max-w-3xl">
                    {section.content.body}
                  </p>
                )}

                {section.content.bullets && (
                  <ul className="space-y-3 mb-6 max-w-3xl">
                    {section.content.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-text-secondary text-[length:var(--text-body)]"
                      >
                        <span className="text-accent mt-1.5 shrink-0">
                          <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor">
                            <circle cx="3" cy="3" r="3" />
                          </svg>
                        </span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}

                {section.type === "two-column" && section.content.columns && (
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-text-secondary text-[length:var(--text-body)] leading-relaxed">
                      {section.content.columns.left}
                    </div>
                    <div className="text-text-secondary text-[length:var(--text-body)] leading-relaxed">
                      {section.content.columns.right}
                    </div>
                  </div>
                )}

                {section.type === "process" && section.content.items && (
                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    {section.content.items.map((item) => (
                      <motion.div
                        key={item.number}
                        variants={staggerItem}
                        className="p-6 rounded-2xl border border-border bg-bg-elevated"
                      >
                        <span className="mono-label text-accent block mb-3">
                          {item.number}
                        </span>
                        <h3 className="text-[length:var(--text-h3)] font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-text-secondary text-[length:var(--text-small)]">
                          {item.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                )}

                {section.type === "diagram" && section.content.items && (
                  <div className="mt-8 space-y-1">
                    {section.content.items.map((item, i) => (
                      <motion.div
                        key={item.number}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: i * 0.1,
                          duration: duration.normal,
                          ease: easing.outExpo,
                        }}
                        className="flex items-center gap-6 p-4 rounded-xl hover:bg-bg-elevated transition-colors group"
                      >
                        <span className="mono-label text-accent w-8 shrink-0">
                          {item.number}
                        </span>
                        <div className="flex-1">
                          <h3 className="font-semibold text-text-primary">
                            {item.title}
                          </h3>
                          <p className="text-text-tertiary text-[length:var(--text-small)]">
                            {item.description}
                          </p>
                        </div>
                        {i < section.content.items!.length - 1 && (
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            className="text-text-tertiary shrink-0"
                          >
                            <path
                              d="M8 2v12M4 10l4 4 4-4"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              fill="none"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        )}
                      </motion.div>
                    ))}
                  </div>
                )}

                {section.type === "metrics" && section.content.metrics && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                    {section.content.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="p-6 rounded-2xl border border-border bg-bg-elevated text-center"
                      >
                        <span
                          className="text-[length:var(--text-display)] font-bold block mb-2"
                          style={{
                            letterSpacing: "var(--tracking-display)",
                            color: "var(--accent)",
                          }}
                        >
                          {metric.value}
                        </span>
                        <span className="font-semibold text-text-primary block mb-1">
                          {metric.label}
                        </span>
                        {metric.description && (
                          <span className="text-text-tertiary text-[length:var(--text-caption)]">
                            {metric.description}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {section.type === "design-system" && (
                  <div className="mt-8 p-8 rounded-2xl border border-border bg-bg-elevated">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="space-y-4">
                        <h4 className="mono-label text-accent">Colors</h4>
                        <div className="flex gap-2">
                          {["#2563EB", "#111111", "#555555", "#F5F5F2", "#DC2626", "#16A34A"].map(
                            (color) => (
                              <div
                                key={color}
                                className="w-8 h-8 rounded-lg border border-border"
                                style={{ background: color }}
                              />
                            )
                          )}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="mono-label text-accent">Typography</h4>
                        <div className="space-y-2">
                          <p className="font-bold text-lg">Heading Style</p>
                          <p className="text-text-secondary text-sm">Body text style</p>
                          <p className="mono-label">Label Style</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="mono-label text-accent">Components</h4>
                        <div className="space-y-2">
                          <button className="px-4 py-2 rounded-lg bg-accent text-white text-sm">
                            Primary Button
                          </button>
                          <div className="px-3 py-1 rounded-full border border-border text-xs inline-block ml-2">
                            Badge
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.section>
            ))}
          </div>
        </div>
      </div>

      {/* Next Project */}
      {nextProject && (
        <section className="border-t border-border py-16 md:py-24">
          <div className="content-container">
            <span className="mono-label block mb-4">Next Project</span>
            <Link
              href={`/work/${nextProject.slug}`}
              className="group flex items-center justify-between"
            >
              <div>
                <h2
                  className="text-[length:var(--text-display)] font-bold group-hover:text-accent transition-colors"
                  style={{ letterSpacing: "var(--tracking-display)" }}
                >
                  {nextProject.title}
                </h2>
                <p className="text-text-secondary mt-2">
                  {nextProject.shortDescription}
                </p>
              </div>
              <motion.svg
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                className="text-text-primary shrink-0"
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <path
                  d="M10 24h28M30 16l8 8-8 8"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </motion.svg>
            </Link>
          </div>
        </section>
      )}

      {/* Back to Work */}
      <div className="content-container pb-16">
        <Link
          href="/work"
          className="mono-label text-text-tertiary hover:text-text-primary transition-colors"
        >
          ← Back to all work
        </Link>
      </div>
    </main>
  );
}
