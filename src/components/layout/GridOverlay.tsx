"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function GridOverlay() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleToggle = () => {
      setIsVisible((prev) => !prev);
    };

    window.addEventListener("toggle-grid", handleToggle);
    return () => window.removeEventListener("toggle-grid", handleToggle);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 pointer-events-none z-[100] flex justify-center container mx-auto px-6 h-screen"
        >
          <div className="w-full h-full grid grid-cols-12 gap-6 opacity-[0.03] dark:opacity-[0.05]">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-full w-full border-x border-blue-500/50 bg-blue-500/10" />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
