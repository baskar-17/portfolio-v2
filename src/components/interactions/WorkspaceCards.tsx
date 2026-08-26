"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// 1. User Flow Card Illustration
export function UserFlowCard() {
  const [activeNode, setActiveNode] = useState<number | null>(null);

  return (
    <div className="w-64 p-5 card-surface noise select-none">
      <div className="flex items-center justify-between mb-4 border-b border-[var(--border)] pb-2">
        <span className="mono-label text-[10px]">User Flow</span>
        <span className="text-[9px] font-mono text-[var(--text-tertiary)]">flow_v2.json</span>
      </div>
      <div className="relative flex items-center justify-between h-20 px-2">
        {/* Connection Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M 40 40 Q 110 10 180 40"
            fill="none"
            stroke="var(--border-strong)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
          />
          {activeNode !== null && (
            <motion.path
              d="M 40 40 Q 110 10 180 40"
              fill="none"
              stroke="var(--accent)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          )}
        </svg>

        {/* Node 1 */}
        <motion.div
          onMouseEnter={() => setActiveNode(1)}
          onMouseLeave={() => setActiveNode(null)}
          whileHover={{ scale: 1.1 }}
          className={`w-10 h-10 rounded-full flex items-center justify-center border text-xs font-mono relative z-10 transition-colors duration-300 cursor-pointer
            ${activeNode === 1 ? "border-[var(--accent)] bg-[var(--accent-subtle)] text-[var(--accent)]" : "border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--text-secondary)]"}`}
        >
          IN
        </motion.div>

        {/* Node 2 */}
        <motion.div
          onMouseEnter={() => setActiveNode(2)}
          onMouseLeave={() => setActiveNode(null)}
          whileHover={{ scale: 1.1 }}
          className={`w-10 h-10 rounded-full flex items-center justify-center border text-xs font-mono relative z-10 transition-colors duration-300 cursor-pointer
            ${activeNode === 2 ? "border-[var(--accent)] bg-[var(--accent-subtle)] text-[var(--accent)]" : "border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--text-secondary)]"}`}
        >
          OUT
        </motion.div>
      </div>
      <div className="flex justify-between items-center text-[10px] font-mono mt-2 text-[var(--text-tertiary)]">
        <span>Nodes: 2</span>
        <span>Status: {activeNode !== null ? "Active" : "Idle"}</span>
      </div>
    </div>
  );
}

// 2. Interactive Auto Layout Box Control
export function AutoLayoutCard() {
  const [alignment, setAlignment] = useState<string>("center");

  const alignStyles: Record<string, string> = {
    "top-left": "justify-start items-start",
    "top-center": "justify-center items-start",
    "top-right": "justify-end items-start",
    "middle-left": "justify-start items-center",
    "center": "justify-center items-center",
    "middle-right": "justify-end items-center",
    "bottom-left": "justify-start items-end",
    "bottom-center": "justify-center items-end",
    "bottom-right": "justify-end items-end",
  };

  const positions = [
    "top-left", "top-center", "top-right",
    "middle-left", "center", "middle-right",
    "bottom-left", "bottom-center", "bottom-right"
  ];

  return (
    <div className="w-56 p-4 card-surface noise select-none">
      <div className="flex items-center justify-between mb-3 border-b border-[var(--border)] pb-2">
        <span className="mono-label text-[10px]">Auto Layout</span>
        <span className="text-[9px] font-mono text-[var(--text-tertiary)]">Gap: 12px</span>
      </div>

      <div className="grid grid-cols-2 gap-4 h-24">
        {/* Dynamic Display Area */}
        <div className="border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)]/50 p-2 flex flex-col justify-between overflow-hidden">
          <div className={`w-full h-full flex ${alignStyles[alignment]} gap-1`}>
            <motion.div layout className="w-3 h-3 rounded-sm bg-[var(--accent)]" />
            <motion.div layout className="w-3 h-3 rounded-sm bg-[var(--text-secondary)]" />
            <motion.div layout className="w-3 h-3 rounded-sm bg-[var(--text-tertiary)]" />
          </div>
        </div>

        {/* Controls Layout Selector (Figma alignment style grid) */}
        <div className="grid grid-cols-3 gap-1.5 p-1 border border-[var(--border)] rounded-lg bg-[var(--bg-elevated)] w-fit self-center mx-auto">
          {positions.map((pos) => (
            <button
              key={pos}
              onClick={() => setAlignment(pos)}
              className={`w-4 h-4 rounded-sm transition-colors cursor-pointer border-[0.5px]
                ${alignment === pos
                  ? "bg-[var(--accent)] border-[var(--accent)]"
                  : "bg-[var(--bg-secondary)] border-[var(--border)] hover:bg-[var(--border)]"}`}
              title={pos}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// 3. Components Showcase Card (interactive toggle and counter)
export function ComponentCard() {
  const [toggleActive, setToggleActive] = useState<boolean>(true);
  const [count, setCount] = useState<number>(4);

  return (
    <div className="w-60 p-4 card-surface noise select-none">
      <div className="flex items-center justify-between mb-4 border-b border-[var(--border)] pb-2">
        <span className="mono-label text-[10px]">Components</span>
        <span className="text-[9px] font-mono text-[var(--text-tertiary)]">Interactive</span>
      </div>
      <div className="space-y-4">
        {/* Switch toggler component */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--text-secondary)] font-mono">Toggle System</span>
          <button
            onClick={() => setToggleActive(!toggleActive)}
            className={`w-10 h-6 rounded-full p-0.5 transition-colors duration-300 ease-out cursor-pointer flex items-center
              ${toggleActive ? "bg-[var(--accent)]" : "bg-[var(--border-strong)]"}`}
          >
            <motion.div
              layout
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-5 h-5 rounded-full bg-white shadow-sm"
              style={{ x: toggleActive ? 14 : 0 }}
            />
          </button>
        </div>

        {/* Interactive counter component */}
        <div className="flex items-center justify-between">
          <span className="text-xs text-[var(--text-secondary)] font-mono">Elements</span>
          <div className="flex items-center gap-2 border border-[var(--border)] rounded-md bg-[var(--bg-secondary)]/50 p-1">
            <button
              onClick={() => setCount(Math.max(0, count - 1))}
              className="w-5 h-5 rounded hover:bg-[var(--bg-elevated)] transition-colors font-mono text-xs flex items-center justify-center cursor-pointer border border-transparent hover:border-[var(--border)]"
            >
              -
            </button>
            <span className="w-6 text-center font-mono text-xs text-[var(--text-primary)]">{count}</span>
            <button
              onClick={() => setCount(count + 1)}
              className="w-5 h-5 rounded hover:bg-[var(--bg-elevated)] transition-colors font-mono text-xs flex items-center justify-center cursor-pointer border border-transparent hover:border-[var(--border)]"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 4. Variables Palette Card
export function VariablesCard() {
  const [accentColor, setAccentColor] = useState<string>("blue");

  const colors = [
    { name: "blue", hex: "#2563EB" },
    { name: "emerald", hex: "#10B981" },
    { name: "purple", hex: "#8B5CF6" },
  ];

  return (
    <div className="w-56 p-4 card-surface noise select-none">
      <div className="flex items-center justify-between mb-3 border-b border-[var(--border)] pb-2">
        <span className="mono-label text-[10px]">Variables</span>
        <span className="text-[9px] font-mono text-[var(--text-tertiary)]">design_system</span>
      </div>
      <div className="space-y-4">
        <div className="flex items-center gap-1.5">
          {colors.map((color) => (
            <button
              key={color.name}
              onClick={() => setAccentColor(color.name)}
              className={`w-6 h-6 rounded-full border-2 transition-all cursor-pointer flex items-center justify-center
                ${accentColor === color.name ? "border-[var(--text-primary)] scale-110" : "border-transparent hover:scale-105"}`}
              style={{ backgroundColor: color.hex }}
            />
          ))}
        </div>
        <div className="rounded-lg p-2 bg-[var(--bg-secondary)]/50 border border-[var(--border)]">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-mono text-[var(--text-secondary)]">Token: accent</span>
            <span
              className="text-[9px] font-mono px-2 py-0.5 rounded border"
              style={{
                borderColor: colors.find((c) => c.name === accentColor)?.hex,
                color: colors.find((c) => c.name === accentColor)?.hex,
                backgroundColor: `${colors.find((c) => c.name === accentColor)?.hex}10`
              }}
            >
              {colors.find((c) => c.name === accentColor)?.hex}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

// 5. 12-Column Grid Mini Representation
export function ColumnGridCard() {
  const [hoveredCol, setHoveredCol] = useState<number | null>(null);

  return (
    <div className="w-64 p-4 card-surface noise select-none">
      <div className="flex items-center justify-between mb-3 border-b border-[var(--border)] pb-2">
        <span className="mono-label text-[10px]">Grid System</span>
        <span className="text-[9px] font-mono text-[var(--text-tertiary)]">12 Column</span>
      </div>
      <div className="flex justify-between items-stretch h-16 bg-[var(--bg-secondary)]/30 rounded-lg p-2 gap-1 border border-[var(--border)] relative overflow-hidden">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            onMouseEnter={() => setHoveredCol(i)}
            onMouseLeave={() => setHoveredCol(null)}
            className={`flex-1 transition-colors rounded-sm cursor-crosshair
              ${hoveredCol === i ? "bg-[var(--accent)]/30" : "bg-[var(--border-strong)]/20"}`}
          />
        ))}
        <AnimatePresence>
          {hoveredCol !== null && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-1 right-2 px-2 py-0.5 bg-[var(--bg-elevated)] border border-[var(--border-strong)] rounded text-[8px] font-mono text-[var(--text-secondary)]"
            >
              Col: {hoveredCol + 1}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// 6. Prototype Connections Card
export function PrototypeCard() {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  return (
    <div className="w-56 p-4 card-surface noise select-none">
      <div className="flex items-center justify-between mb-3 border-b border-[var(--border)] pb-2">
        <span className="mono-label text-[10px]">Prototype</span>
        <span className="text-[9px] font-mono text-[var(--text-tertiary)]">Spring easing</span>
      </div>
      <div className="flex items-center justify-between gap-2 p-2 border border-[var(--border)] rounded-lg bg-[var(--bg-secondary)]/50 relative overflow-hidden">
        <div className="flex items-center gap-1">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--text-tertiary)]" />
          <span className="text-[10px] font-mono text-[var(--text-secondary)]">Frame A</span>
        </div>
        
        {/* Dynamic connection path line */}
        <button
          onClick={() => setIsConnected(!isConnected)}
          className={`px-2 py-1 rounded text-[9px] font-mono transition-all z-10 cursor-pointer border
            ${isConnected 
              ? "bg-[var(--accent-subtle)] text-[var(--accent)] border-[var(--accent)]" 
              : "bg-[var(--bg-elevated)] text-[var(--text-secondary)] border-[var(--border-strong)] hover:border-[var(--text-primary)]"}`}
        >
          {isConnected ? "Linked" : "Connect"}
        </button>

        <div className="flex items-center gap-1">
          <span className="text-[10px] font-mono text-[var(--text-secondary)]">Frame B</span>
          <div className={`w-2.5 h-2.5 rounded-full transition-all duration-300
            ${isConnected ? "bg-[var(--accent)] shadow-[0_0_8px_var(--accent)]" : "bg-[var(--text-tertiary)]"}`}
          />
        </div>
      </div>
    </div>
  );
}
