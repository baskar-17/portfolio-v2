import React from "react";

interface SectionHeaderProps {
  label: string;
  heading: string;
  description?: string;
  className?: string;
}

export function SectionHeader({
  label,
  heading,
  description,
  className = "",
}: SectionHeaderProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <span className="mono-label text-text-tertiary uppercase text-xs tracking-wider font-mono">
        {label}
      </span>
      <h2 className="text-3xl md:text-5xl font-heading tracking-tight text-text-primary">
        {heading}
      </h2>
      {description && (
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl font-body">
          {description}
        </p>
      )}
    </div>
  );
}
