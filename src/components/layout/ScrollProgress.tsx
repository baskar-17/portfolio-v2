"use client";

import { motion, useScroll } from "motion/react";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-[var(--accent)] origin-left z-[51]"
      style={{ scaleX: scrollYProgress }}
    />
  );
}
