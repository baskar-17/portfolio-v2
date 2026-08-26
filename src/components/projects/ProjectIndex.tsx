"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useMotionValue, useSpring } from "motion/react";
import type { Project } from "@/types/project";

export function ProjectIndex({ projects }: { projects: Project[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Motion values for cursor tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <div className="w-full flex flex-col border-t border-[var(--border)]">
      {projects.map((project, idx) => (
        <Link 
          href={`/work/${project.slug}`}
          key={project.slug}
          className="group relative flex items-center justify-between py-6 md:py-10 border-b border-[var(--border)] transition-colors hover:bg-[var(--bg-primary)] px-4 -mx-4 overflow-visible"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
          onMouseMove={handleMouseMove}
        >
          <div className="flex items-baseline gap-4 md:gap-8 z-10 pointer-events-none">
            <span className="mono-label text-[var(--text-tertiary)] font-mono text-sm md:text-base group-hover:text-[var(--accent)] transition-colors">
              {project.order.toString().padStart(2, '0')}
            </span>
            <h3 className="text-3xl md:text-6xl font-heading tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              {project.title}
            </h3>
          </div>
          
          <div className="hidden md:flex items-center gap-6 z-10 text-[var(--text-secondary)] pointer-events-none">
            <span className="text-sm font-body">{project.industry}</span>
            <div className="w-12 h-12 rounded-full border border-[var(--border)] flex items-center justify-center transition-transform duration-300 group-hover:-rotate-45 group-hover:bg-[var(--accent)] group-hover:text-white group-hover:border-transparent">
              →
            </div>
          </div>

          {/* Hover Image Preview (Desktop only) - Tracks cursor */}
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                  x: springX,
                  y: springY,
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                className="absolute pointer-events-none z-20 left-0 top-0 w-80 h-48 rounded-2xl overflow-hidden shadow-2xl hidden lg:block border border-[var(--border)]"
              >
                {/* Background Solid Theme */}
                <div 
                  className="absolute inset-0 opacity-90"
                  style={{ backgroundColor: project.theme.primary }}
                />

                {/* Subtle Grid overlay */}
                <div className="absolute inset-0 opacity-15 bg-dot-pattern pointer-events-none" 
                  style={{ 
                    backgroundImage: "radial-gradient(var(--text-primary) 1px, transparent 1px)", 
                    backgroundSize: "12px 12px" 
                  }}
                />

                {/* Project Image */}
                {project.heroImage && (
                  <div 
                    className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay" 
                    style={{ backgroundImage: `url(${project.heroImage})` }} 
                  />
                )}

                {/* Inner visual annotations */}
                <div className="absolute inset-x-4 bottom-4 flex justify-between items-center text-[9px] font-mono text-white/80">
                  <span>PREVIEW BOARD</span>
                  <span>{project.industry}</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </Link>
      ))}
    </div>
  );
}
