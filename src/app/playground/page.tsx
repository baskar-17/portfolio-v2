import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playground",
  description: "Design experiments, interaction concepts, and explorations by Baskar Subramani.",
};

export default function PlaygroundPage() {
  return (
    <main className="min-h-screen pt-32 pb-24">
      <div className="content-container">
        <span className="mono-label block mb-4">Playground</span>
        <h1
          className="text-[length:var(--text-display)] font-bold mb-6"
          style={{ letterSpacing: "var(--tracking-display)" }}
        >
          Experiments
        </h1>
        <p className="text-text-secondary text-[length:var(--text-h3)] max-w-2xl mb-16">
          A space for interaction concepts, UI explorations, motion studies, and small prototypes.
        </p>

        <div className="flex items-center justify-center py-32">
          <div className="text-center">
            <div className="relative inline-block mb-8">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                className="text-text-tertiary opacity-40"
              >
                <rect
                  x="8"
                  y="8"
                  width="64"
                  height="64"
                  rx="16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                />
                <circle cx="40" cy="36" r="8" stroke="currentColor" strokeWidth="1.5" />
                <path
                  d="M28 52c0-6.627 5.373-12 12-12s12 5.373 12 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <h2
              className="text-[length:var(--text-h2)] font-bold mb-3"
              style={{ letterSpacing: "var(--tracking-tight)" }}
            >
              Experiments coming soon
            </h2>
            <p className="text-text-tertiary max-w-md">
              I&apos;m preparing a collection of interaction concepts, AI experiments, and design explorations. Check back soon.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
