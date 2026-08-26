"use client";

import Link from "next/link";
import { socialLinks } from "@/data/navigation";
import MagneticButton from "@/components/interactions/MagneticButton";

// Custom SVG Icons for Footer
function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function EmailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleToggleGrid = () => {
    window.dispatchEvent(new CustomEvent("toggle-grid"));
  };

  return (
    <footer className="w-full relative overflow-hidden bg-[var(--bg-primary)] border-t border-[var(--border)] pt-20 pb-12 mt-24">
      {/* Background radial overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-40 mix-blend-overlay"
        style={{
          background: "radial-gradient(circle at 50% 100%, var(--accent-subtle), transparent 60%)"
        }}
      />

      <div className="mx-auto max-w-[1100px] px-6 relative z-10">
        
        {/* Cofounder-inspired Glassmorphic CTA Card */}
        <div className="w-full border border-[var(--border)] rounded-2xl overflow-hidden relative mb-16"
          style={{
            background: "linear-gradient(180deg, var(--bg-elevated) 0%, var(--bg-secondary) 100%)",
            boxShadow: "inset 0 1px 0 var(--card-inset), 0 4px 20px rgba(0,0,0,0.02)"
          }}
        >
          {/* Card Content Grid */}
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 backdrop-blur-[25px]">
            <div className="max-w-xl space-y-3">
              <span className="mono-label text-[10px] text-[var(--accent)] font-mono uppercase tracking-wider block">Available for projects</span>
              <h2 className="text-3xl md:text-4xl font-heading font-medium tracking-tight text-[var(--text-primary)] leading-[1.15]">
                Let&apos;s design complex workflows into <span className="text-[var(--accent)]">simple experiences.</span>
              </h2>
            </div>
            
            <div className="shrink-0">
              <MagneticButton>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold text-sm transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-sm cursor-pointer"
                >
                  Start a conversation
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pt-10 border-t border-[var(--border)]">
          <div className="flex flex-col gap-4">
            <span className="font-heading font-bold text-lg tracking-tight text-[var(--text-primary)]">
              Baskar Subramani
            </span>
            <p className="text-[var(--text-secondary)] text-xs max-w-xs leading-relaxed">
              Product designer turning business requirements and complex user systems into intuitive flows.
            </p>
          </div>

          <div className="flex flex-col items-start gap-2.5">
            <span className="mono-label text-[10px] text-[var(--text-tertiary)] mb-1 font-mono uppercase tracking-wider">Navigation</span>
            <Link href="/" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium">Home</Link>
            <Link href="/work" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium">Selected Work</Link>
            <Link href="/about" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium">About Me</Link>
            <Link href="/resume" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-medium">Resume</Link>
          </div>

          <div className="flex flex-col items-start gap-2.5">
            <span className="mono-label text-[10px] text-[var(--text-tertiary)] mb-1 font-mono uppercase tracking-wider">How I Think</span>
            <Link href="/#philosophy" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">Clarity over decoration</Link>
            <Link href="/#philosophy" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">Systems over screens</Link>
            <Link href="/#philosophy" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm">Edge cases matter</Link>
          </div>

          <div className="flex flex-col items-start md:items-end justify-between gap-6">
            {/* Social Icons Row */}
            <div className="flex items-center gap-3">
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedInIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/baskar17"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-colors"
                aria-label="X (formerly Twitter)"
              >
                <XIcon className="w-4 h-4" />
              </a>
              <a
                href={socialLinks.email}
                className="w-9 h-9 rounded-full border border-[var(--border)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent-subtle)] transition-colors"
                aria-label="Email"
              >
                <EmailIcon className="w-4 h-4" />
              </a>
            </div>

            {/* Bottom Actions */}
            <div className="flex items-center gap-4 text-xs font-mono text-[var(--text-tertiary)]">
              <span className="hidden sm:inline">Chennai, India</span>
              <span className="hidden sm:inline">•</span>
              <button
                onClick={handleToggleGrid}
                className="hover:text-[var(--text-primary)] transition-colors cursor-pointer"
                title="Toggle visual grid"
              >
                Grid System
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-[var(--border)] text-[10px] font-mono text-[var(--text-tertiary)]">
          <span>Designed & built with curiosity</span>
          <span>© {currentYear} Baskar Subramani</span>
        </div>
      </div>
    </footer>
  );
}
