"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { getAllProjects, getProjectsByCategory } from "@/data/projects";
import { fadeUp, staggerContainer, staggerItem } from "@/lib/animations";

const categories = ["All", "SaaS", "Fintech", "Mobile", "B2B", "Consumer"];

export default function WorkArchiveClient() {
  const [activeCategory, setActiveCategory] = useState("All");
  const projects = getProjectsByCategory(activeCategory);

  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="content-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-16"
        >
          <motion.span variants={staggerItem} className="mono-label block mb-4">
            Work
          </motion.span>
          <motion.h1
            variants={staggerItem}
            className="text-[length:var(--text-display)] font-bold mb-6"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            Selected projects
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="text-text-secondary text-[length:var(--text-h3)] max-w-2xl"
          >
            A collection of product design work across SaaS platforms, fintech applications, and mobile experiences.
          </motion.p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-[length:var(--text-small)] font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-text-primary text-bg-primary"
                  : "border border-border text-text-secondary hover:border-border-hover hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={staggerContainer}
            className="space-y-12"
          >
            {projects.map((project, i) => (
              <motion.div key={project.slug} variants={fadeUp}>
                <Link
                  href={`/work/${project.slug}`}
                  className="group block"
                >
                  <article className="card-surface p-8 md:p-12 transition-all duration-300 hover:border-border-hover">
                    <div className="flex flex-col md:flex-row md:items-start gap-8">
                      <div className="flex-1 min-w-0">
                        <span className="mono-label text-accent block mb-4">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <h2
                          className="text-[length:var(--text-h1)] font-bold mb-3 group-hover:text-accent transition-colors"
                          style={{ letterSpacing: "var(--tracking-tight)" }}
                        >
                          {project.title}
                        </h2>
                        <p className="text-text-secondary mb-6 max-w-lg">
                          {project.shortDescription}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full border border-border text-text-tertiary text-[length:var(--text-caption)]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Visual preview placeholder */}
                      <div
                        className="w-full md:w-80 h-48 md:h-56 rounded-xl overflow-hidden shrink-0"
                        style={{
                          background: `linear-gradient(135deg, ${project.theme.secondary}40, ${project.theme.primary}20)`,
                        }}
                      >
                        <div className="w-full h-full flex items-center justify-center">
                          <span
                            className="text-[length:var(--text-h2)] font-bold opacity-20"
                            style={{ color: project.theme.primary }}
                          >
                            {project.title[0]}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Arrow */}
                    <div className="flex justify-end mt-6">
                      <motion.svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className="text-text-tertiary group-hover:text-accent transition-colors"
                        whileHover={{ rotate: 45 }}
                      >
                        <path
                          d="M7 17L17 7M17 7H7M17 7V17"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </motion.svg>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
