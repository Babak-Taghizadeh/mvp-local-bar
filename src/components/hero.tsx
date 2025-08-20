"use client";

import { motion } from "framer-motion";
import { ArrowRightLeft, LandPlot } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[760px] overflow-hidden flex items-center justify-center bg-black">
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          src="/images/guitar1.jpg"
          alt="Guitar texture"
          fill
          className="object-cover opacity-50"
        />
      </motion.div>

      <motion.p
        className="absolute top-1/5 left-1/2 -translate-x-1/2 text-3xl text-nowrap font-neon
             border-4 border-double border-neon-red 
             animate-flicker 
             text-neon-red drop-shadow-[0_0_25px_var(--color-neon-red)] 
             flex items-center gap-3 font-black px-4 py-2 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut", delay: 0.4 }}
      >
        11 AM
        <ArrowRightLeft />1 AM
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        className="absolute bottom-44 border z-30 border-foreground right-4 shadow-lg bg-charcoal rounded-xl"
      >
        <Link
          href="https://maps.app.goo.gl/3LxXb1Tuazuwsf719"
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground font-bold p-3 flex items-center gap-2"
        >
          Directions
          <LandPlot />
        </Link>
      </motion.div>

      <motion.div
        className="absolute w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <motion.div
          className="absolute top-[40%] right-[14%]"
          animate={{
            y: [0, -15, 0],
            rotate: [0, -2, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/coffee.png"
            alt="Ice Latte"
            width={60}
            height={60}
            className="rotate-12 opacity-90"
          />
        </motion.div>

        <motion.div
          className="absolute top-[40%] left-[14%]"
          animate={{
            y: [0, -20, 0],
            rotate: [0, 8, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/images/burger.png"
            alt="Burger"
            width={60}
            height={60}
            className="rotate-[-15deg] opacity-90"
          />
        </motion.div>

        <motion.div
          className="absolute bottom-[30%] left-[10%]"
          animate={{
            y: [0, 20, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.7,
          }}
        >
          <Image
            src="/images/vinyl.png"
            alt="Vinyl record"
            width={80}
            height={80}
            className="opacity-90"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <div className="relative group">
          <motion.div
            className="absolute -bottom-28 left-0 right-0 flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          >
            <div className="bg-background/40 px-7 py-4 rounded-full border border-white/10 backdrop-blur-sm">
              <h2 className="text-3xl md:text-4xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#42f5cb]/80 to-[#8B4513]">
                Local Like You
              </h2>
              <div className="absolute -right-2 -bottom-2 w-4 h-4 bg-[#8B4513] rounded-full animate-pulse" />
            </div>
          </motion.div>
        </div>
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-yellow-900/5 via-transparent to-red-900/5 pointer-events-none mix-blend-overlay" />
    </section>
  );
}
