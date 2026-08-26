"use client";

import React from 'react';
import { motion } from 'motion/react';

interface TextRevealProps {
  text: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  delay?: number;
}

export default function TextReveal({
  text,
  as = 'p',
  className = "",
  delay = 0
}: TextRevealProps) {
  const words = text.split(" ");
  // Using motion[as] is a common pattern to create dynamic motion tags
  const MotionTag = (motion as any)[as] || motion.p;

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: delay },
    },
  };

  const child = {
    visible: {
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      y: "100%",
    },
  };

  return (
    <MotionTag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      style={{ display: 'flex', flexWrap: 'wrap' }}
    >
      {words.map((word, index) => (
        <span key={index} className="overflow-hidden inline-flex mr-[0.25em] last:mr-0">
          <motion.span variants={child} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  );
}
