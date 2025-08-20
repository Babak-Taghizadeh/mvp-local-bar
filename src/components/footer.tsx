"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-gray-800 py-12 px-4 overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/guitar-scratches.png')] bg-cover mix-blend-overlay" />
      </div>

      <motion.div
        className="absolute top-12 -right-6 -translate-x-1/2"
        animate={{
          y: [0, -8, 0],
          rotate: [0, -5, 0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <Image
          src="/images/cat.png"
          alt="Cafe Cat"
          width={110}
          height={110}
          className="drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]"
        />
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h4 className="text-neon-red text-sm font-bold mb-3 uppercase tracking-widest">
              UNOFFICIAL HOURS
            </h4>
            <p className="text-gray-400 text-xs font-mono">
              11AM - 1AM (mostly)
              <br />
              2AM - 4AM (if the music&apos;s good)
              <br />
              Closed when the cat says so
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: [0, 10, -10, 0],
                textShadow: "0 0 20px #FFD700, 0 0 40px #FFD700",
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="my-6"
            >
              <Link
                href="https://www.instagram.com/local.slow.bar"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block py-4 px-6 bg-background text-neon-red font-black text-3xl font-neon rounded-full border-4 border-neon-red shadow-[0_0_15px_var(--color-neon-red)] animate-bounce"
              >
                IG
              </Link>
            </motion.div>
            <p className="text-gray-400 text-xs">
              Follow our chaos
              <br />
              (We post cat photos)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-right"
          >
            <h4 className="text-neon-cyan text-sm font-bold mb-3 uppercase tracking-widest">
              HOUSE RULES
            </h4>
            <p className="text-gray-400 text-xs font-mono">
              No bad vibes
              <br />
              Pet the cat gently
              <br />
              Headbang responsibly
            </p>
          </motion.div>
        </div>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-700" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-black px-4 text-gray-500 text-sm">⚡</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-500 text-[10px] font-mono mb-4">
            EST. 2024 • ACCIDENTALLY AWESOME SINCE DAY ONE
          </p>

          <div className="flex flex-col items-center justify-center gap-4 mb-4">
            <span className="text-neon-pink text-xs bg-black/50 px-2 py-1 rounded border border-neon-pink/20">
              COFFEE • METAL • CATS
            </span>
            <span className="text-neon-cyan text-xs bg-black/50 px-2 py-1 rounded border border-neon-cyan/20">
              ʕ•ᴥ•ʔ BROWN BEAR APPROVED
            </span>
            <span className="text-neon-purple text-xs bg-black/50 px-2 py-1 rounded border border-neon-purple/20">
              NO WI-FI • REAL TALK
            </span>
          </div>

          <p className="text-gray-600 text-[10px] font-mono mt-4">
            PS: The espresso machine is tuned to drop D. Don&apos;t ask.
            <br />
            PPS: We put Doogh in Beer. No, we won&apos;t stop.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
