"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'motion/react';
import { useIsTouchDevice } from '@/hooks/useMediaQuery';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type CursorVariant = 'default' | 'hover' | 'view' | 'open' | 'explore' | 'link';

interface CursorState {
  variant: CursorVariant;
  text: string;
}

interface CursorContextType {
  setCursorState: React.Dispatch<React.SetStateAction<CursorState>>;
}

const CursorContext = createContext<CursorContextType | undefined>(undefined);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [cursorState, setCursorState] = useState<CursorState>({ variant: 'default', text: '' });

  return (
    <CursorContext.Provider value={{ setCursorState }}>
      {children}
      <CustomCursor state={cursorState} />
    </CursorContext.Provider>
  );
};

export const useCursor = () => {
  const context = useContext(CursorContext);
  if (context === undefined) {
    throw new Error('useCursor must be used within a CursorProvider');
  }
  return context;
};

const CustomCursor = ({ state }: { state: CursorState }) => {
  const isTouchDevice = useIsTouchDevice();
  const prefersReducedMotion = useReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (isTouchDevice || prefersReducedMotion) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, isTouchDevice, prefersReducedMotion, isVisible]);

  if (isTouchDevice || prefersReducedMotion) return null;

  const isExpanded = state.variant !== 'default';

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] flex items-center justify-center rounded-full border border-accent bg-transparent mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          width: isExpanded ? 80 : 40,
          height: isExpanded ? 80 : 40,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          width: isExpanded ? 80 : 40,
          height: isExpanded ? 80 : 40,
        }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
      >
        {isExpanded && state.text && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-mono tracking-widest text-accent uppercase absolute"
          >
            {state.text}
          </motion.span>
        )}
      </motion.div>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-accent mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          width: 8,
          height: 8,
          translateX: '-50%',
          translateY: '-50%',
          opacity: isVisible ? 1 : 0,
        }}
      />
    </>
  );
};
