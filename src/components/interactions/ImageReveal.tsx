"use client";

import React from 'react';
import Image, { ImageProps } from 'next/image';
import { motion } from 'motion/react';

interface ImageRevealProps extends ImageProps {
  containerClassName?: string;
}

export default function ImageReveal({
  containerClassName = "",
  ...props
}: ImageRevealProps) {
  return (
    <motion.div
      initial={{ clipPath: 'inset(100% 0 0 0)' }}
      whileInView={{ clipPath: 'inset(0% 0 0 0)' }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      <motion.div
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.15 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="w-full h-full relative"
      >
        <Image {...props} />
      </motion.div>
    </motion.div>
  );
}
