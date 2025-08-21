"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import Arrow from "./arrow";

export default function NeonIntro() {
  const [introComplete, setIntroComplete] = useState(false);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    if (!introComplete) {
      window.scrollTo(0, 0);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });

      if ("scrollRestoration" in history) {
        history.scrollRestoration = "manual";
      }
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [introComplete]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!triggered && e.deltaY < 0) {
        setTriggered(true);
        setTimeout(() => setIntroComplete(true), 1200);
      }
    };

    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      const currentY = e.touches[0].clientY;
      if (!triggered && currentY - touchStartY < 0) {
        setTriggered(true);
        setTimeout(() => setIntroComplete(true), 1200);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [triggered]);

  return (
    <AnimatePresence>
      {!introComplete && (
        <motion.div
          className="absolute inset-0 z-40 bg-black"
          initial={{ clipPath: "circle(100% at 50% 50%)" }}
          animate={{
            clipPath: triggered
              ? "circle(0% at 50% 50%)"
              : "circle(100% at 50% 50%)",
          }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.3 }}
            animate={{ opacity: triggered ? 0 : 0.8, scale: 1 }}
            transition={{ duration: 2, ease: [0.25, 1, 0.5, 1], delay: 0.6 }}
          >
            <Image
              src="/images/smoke.png"
              alt="Smoke background"
              priority
              fill
              quality={10}
              className="object-cover"
            />
          </motion.div>

          <motion.h1
            className="absolute inset-0 flex flex-col items-center -font-roboto justify-center text-neon-red text-7xl md:text-8xl text-center font-bold tracking-wider drop-shadow-[0_0_25px_var(--color-neon-red)]"
            initial={{ opacity: 0, y: 100, scale: 0.7 }}
            animate={{ opacity: 1, y: 0, scale: triggered ? 0.2 : 1 }}
            transition={{
              duration: 2,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.6, // "easeOutBack" style
            }}
          >
            CAFE
            <br />
            ROCK
            <br />
            <p className="text-lg mt-8">
              TEHRAN&apos;S HOME OF METAL & MEALS FOR 11 YEARS
            </p>
          </motion.h1>
          <motion.div
            className="absolute bottom-16 w-full flex flex-col items-center space-y-2"
            initial={{ opacity: 1 }}
            animate={{ opacity: triggered ? 0 : 1 }}
            transition={{ duration: 0.5 }}
          >
            {[...Array(3)].map((_, i) => (
              <Arrow key={i} delay={i * 0.2} />
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
