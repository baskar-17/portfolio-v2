"use client";

import React, { useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { useIsTouchDevice } from '@/hooks/useMediaQuery';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { spring } from '@/lib/animations';

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number;
  className?: string;
}

export default function ParallaxLayer({
  children,
  speed = 0.05,
  className = ""
}: ParallaxLayerProps) {
  const isTouchDevice = useIsTouchDevice();
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Fallback if spring.gentle is not fully defined yet, provide safe defaults
  const springConfig = spring?.gentle || { stiffness: 100, damping: 20 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      mouseX.set(distanceX * speed);
      mouseY.set(distanceY * speed);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY, speed, isTouchDevice, prefersReducedMotion]);

  if (isTouchDevice || prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x, y }}
    >
      {children}
    </motion.div>
  );
}
