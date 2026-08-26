"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "motion/react";
import type { Project } from "@/types/project";

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Spring physics for smooth follow
  const springX = useSpring(mouseX, { stiffness: 300, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 40 });

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    
    // Normalize coordinates from -1 to 1 for tilt
    const normX = (x / width) * 2 - 1;
    const normY = (y / height) * 2 - 1;
    
    mouseX.set(x);
    mouseY.set(y);
    tiltX.set(-normY * 2); // Max 2 degrees
    tiltY.set(normX * 2);
  }

  const tiltX = useSpring(0, { stiffness: 300, damping: 40 });
  const tiltY = useSpring(0, { stiffness: 300, damping: 40 });
  
  function handleMouseLeave() {
    tiltX.set(0);
    tiltY.set(0);
  }

  const transform = useMotionTemplate`perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform }}
      className="group relative block w-full rounded-3xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4 md:p-6 transition-colors hover:border-[var(--border-hover)]"
    >
      {/* Radial glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${springX}px ${springY}px,
              var(--card-glow),
              transparent 40%
            )
          `,
        }}
      />
      
      <Link href={`/work/${project.slug}`} className="flex flex-col h-full z-10 relative">
        <div className="flex justify-between items-start mb-6">
          <span className="mono-label text-[var(--text-tertiary)] font-mono text-xs uppercase tracking-wider">
            {project.order.toString().padStart(2, '0')}
          </span>
          <div className="flex gap-2 flex-wrap justify-end">
            {project.platform.map(p => (
              <span key={p} className="text-[10px] uppercase font-mono tracking-wider border border-[var(--border)] rounded-full px-2 py-1 text-[var(--text-secondary)]">
                {p}
              </span>
            ))}
          </div>
        </div>
        
        <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-8 border border-[var(--border)] bg-gradient-to-br from-[var(--bg-secondary)] to-[var(--bg-primary)] flex items-center justify-center">
          {/* Subtle Grid Backdrop */}
          <div className="absolute inset-0 opacity-15 bg-dot-pattern pointer-events-none" 
            style={{ 
              backgroundImage: "radial-gradient(var(--text-tertiary) 1px, transparent 1px)", 
              backgroundSize: "16px 16px" 
            }}
          />
          
          {/* Crosshair Corner Markers */}
          <span className="absolute top-3 left-3 font-mono text-[9px] text-[var(--text-tertiary)] opacity-65 select-none">[+]</span>
          <span className="absolute top-3 right-3 font-mono text-[9px] text-[var(--text-tertiary)] opacity-65 select-none">[+]</span>
          <span className="absolute bottom-3 left-3 font-mono text-[9px] text-[var(--text-tertiary)] opacity-65 select-none">[+]</span>
          <span className="absolute bottom-3 right-3 font-mono text-[9px] text-[var(--text-tertiary)] opacity-65 select-none">[+]</span>

          {/* Design Specs (Figma board style metadata) */}
          <div className="absolute top-4 left-8 right-8 flex justify-between items-center opacity-40 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none select-none">
            <span className="font-mono text-[8px] tracking-wider uppercase">Frame: {project.slug}_screen</span>
            <span className="font-mono text-[8px] tracking-wider">1280 × 960 (4:3)</span>
          </div>

          <div className="absolute bottom-4 left-8 flex items-center gap-1.5 opacity-40 group-hover:opacity-85 transition-opacity duration-300 pointer-events-none select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
            <span className="font-mono text-[8px] tracking-wider uppercase">Scale: 100%</span>
          </div>

          {/* Animated Center Symbol */}
          <div className="relative z-10 flex flex-col items-center gap-2 select-none pointer-events-none">
            <div className="w-12 h-12 rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] flex items-center justify-center shadow-sm group-hover:border-[var(--accent)] group-hover:bg-[var(--accent-subtle)] transition-all duration-300">
              <span className="text-lg font-bold font-mono text-[var(--text-secondary)] group-hover:text-[var(--accent)]">
                {project.title[0]}
              </span>
            </div>
            <span className="font-mono text-[8px] uppercase tracking-widest text-[var(--text-tertiary)] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              Inspect Case Study
            </span>
          </div>

          {/* Placeholder for image backdrop */}
          <motion.div 
            className="absolute inset-0 w-full h-full bg-cover bg-center origin-center transition-transform duration-500 group-hover:scale-105"
            style={{ 
              backgroundImage: project.heroImage ? `url(${project.heroImage})` : 'none',
              backgroundColor: !project.heroImage ? project.theme.primary : 'transparent',
              opacity: 0.05
            }} 
          />
        </div>
        
        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col gap-2 max-w-[80%]">
            <h3 className="text-2xl md:text-3xl font-heading tracking-tight text-[var(--text-primary)]">
              {project.title}
            </h3>
            <p className="text-[var(--text-secondary)] font-body text-sm md:text-base line-clamp-2">
              {project.shortDescription}
            </p>
          </div>
          <div className="w-10 h-10 rounded-full border border-[var(--border)] flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 group-hover:bg-[var(--bg-secondary)] text-[var(--text-primary)]">
            →
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
