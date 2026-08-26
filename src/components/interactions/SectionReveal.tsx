"use client";

import React from 'react';
import { motion } from 'motion/react';
import {
  fadeUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
} from '@/lib/animations';

const variantMap = {
  fadeUp,
  fadeIn,
  scaleIn,
  slideInLeft,
  slideInRight,
} as const;

interface SectionRevealProps {
  children: React.ReactNode;
  variant?: keyof typeof variantMap;
  delay?: number;
  className?: string;
}

export default function SectionReveal({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = ""
}: SectionRevealProps) {
  const animationVariant = variantMap[variant];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={animationVariant}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
