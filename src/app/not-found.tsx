"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="content-container text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Animated flow node */}
          <motion.div
            variants={staggerItem}
            className="inline-block mb-8"
          >
            <svg
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
              className="text-text-tertiary"
            >
              {/* Flow nodes */}
              <motion.rect
                x="35"
                y="10"
                width="50"
                height="28"
                rx="8"
                stroke="currentColor"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              <motion.line
                x1="60"
                y1="38"
                x2="60"
                y2="52"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              />
              <motion.rect
                x="35"
                y="52"
                width="50"
                height="28"
                rx="8"
                stroke="currentColor"
                strokeWidth="1.5"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              <motion.line
                x1="60"
                y1="80"
                x2="60"
                y2="94"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeDasharray="3 3"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              />
              {/* Dead end X */}
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                <circle cx="60" cy="102" r="10" stroke="currentColor" strokeWidth="1.5" />
                <line
                  x1="55"
                  y1="97"
                  x2="65"
                  y2="107"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <line
                  x1="65"
                  y1="97"
                  x2="55"
                  y2="107"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </motion.g>
              {/* Text labels */}
              <text
                x="60"
                y="28"
                textAnchor="middle"
                fill="currentColor"
                fontSize="9"
                fontFamily="var(--font-mono)"
                opacity="0.5"
              >
                PAGE
              </text>
              <text
                x="60"
                y="70"
                textAnchor="middle"
                fill="currentColor"
                fontSize="9"
                fontFamily="var(--font-mono)"
                opacity="0.5"
              >
                ROUTE
              </text>
            </svg>
          </motion.div>

          <motion.span variants={staggerItem} className="mono-label block mb-4">
            404
          </motion.span>

          <motion.h1
            variants={staggerItem}
            className="text-[length:var(--text-display)] font-bold mb-4"
            style={{ letterSpacing: "var(--tracking-display)" }}
          >
            This flow doesn&apos;t go anywhere
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="text-text-secondary text-[length:var(--text-body)] mb-10 max-w-md mx-auto"
          >
            Looks like this path wasn&apos;t part of the user journey.
          </motion.p>

          <motion.div variants={staggerItem}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-text-primary text-bg-primary font-medium hover:opacity-90 transition-opacity"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M10 12L6 8l4-4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Return home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
