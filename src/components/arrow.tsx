"use client";

import { motion } from "motion/react";

interface ArrowProps {
  delay?: number;
}

export default function Arrow({ delay = 0 }: ArrowProps) {
  return (
    <motion.div
      className="w-6 h-6 border-b-2 border-r-2 border-neon-red rotate-225"
      animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
      transition={{
        repeat: Infinity,
        repeatDelay: 0.2,
        duration: 0.8,
        delay,
      }}
    />
  );
}
