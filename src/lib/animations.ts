// Motion tokens and spring presets for consistent animations
export const duration = {
  fast: 0.2,
  normal: 0.4,
  slow: 0.7,
  cinematic: 1.0,
} as const;

export const easing = {
  outExpo: [0.16, 1, 0.3, 1] as const,
  inOut: [0.65, 0, 0.35, 1] as const,
  outBack: [0.34, 1.56, 0.64, 1] as const,
};

export const spring = {
  gentle: { type: "spring" as const, stiffness: 120, damping: 20 },
  responsive: { type: "spring" as const, stiffness: 200, damping: 24 },
  magnetic: { type: "spring" as const, stiffness: 150, damping: 15, mass: 0.1 },
  bounce: { type: "spring" as const, stiffness: 300, damping: 30 },
  snappy: { type: "spring" as const, stiffness: 400, damping: 35 },
};

export const transition = {
  fast: { duration: duration.fast, ease: easing.outExpo },
  normal: { duration: duration.normal, ease: easing.outExpo },
  slow: { duration: duration.slow, ease: easing.outExpo },
};

// Scroll reveal variants
export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.slow, ease: easing.outExpo },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: duration.normal, ease: easing.outExpo },
  },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: duration.normal, ease: easing.outExpo },
  },
};

export const slideInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.slow, ease: easing.outExpo },
  },
};

export const slideInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: duration.slow, ease: easing.outExpo },
  },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.08,
    },
  },
};

export const staggerItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: duration.normal, ease: easing.outExpo },
  },
};

// Text character reveal
export const charReveal = {
  hidden: { opacity: 0, y: 60 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.03,
      duration: duration.slow,
      ease: easing.outExpo,
    },
  }),
};

// Image mask reveal
export const maskReveal = {
  hidden: { clipPath: "inset(100% 0 0 0)" },
  visible: {
    clipPath: "inset(0% 0 0 0)",
    transition: { duration: duration.cinematic, ease: easing.outExpo },
  },
};
