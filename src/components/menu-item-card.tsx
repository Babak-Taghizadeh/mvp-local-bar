"use client";

import { motion } from "framer-motion";

interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  isSpicy?: boolean;
  isVegan?: boolean;
  isPopular?: boolean;
}

export default function MenuItemCard({ item }: { item: MenuItem }) {
  return (
    <motion.div
      className="relative w-56 h-56 bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-full border-4 border-[#8B4513]
        p-8 text-center shadow-2xl group cursor-pointer"
      whileHover={{
        rotate: 3,
        scale: 1.08,
        boxShadow: "0 0 30px rgba(139, 69, 19, 0.4)",
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
    >
      <div className="absolute inset-0 rounded-full bg-[#8B4513] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />

      {item.isPopular && (
        <div className="absolute -top-2 -right-2 z-20">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="bg-[#8B4513] text-white text-xs font-bold px-2 py-1 rounded-full border border-amber-300 shadow-lg"
          >
            🔥 BEST
          </motion.div>
        </div>
      )}

      <div
        className="absolute top-1/2 left-1/2 w-16 h-16 -mt-8 -ml-8 bg-gradient-to-br from-black to-gray-900 
        rounded-full border-2 border-gold shadow-inner"
      >
        <div className="absolute top-2 left-2 w-2 h-2 bg-white/30 rounded-full blur-sm" />
      </div>

      <motion.div
        className="absolute top-1/2 left-1/2 -mt-3 -ml-8 text-foreground font-bold 
        text-base w-16 text-center drop-shadow-[0_0_8px_rgba(251,191,36,0.3)]"
        whileHover={{ scale: 1.1 }}
      >
        {item.price} T
      </motion.div>

      <div className="absolute top-9 left-0 right-0 px-4">
        <motion.h3
          className="text-lg font-black font-neon uppercase tracking-wider 
          text-foreground
          drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]"
          whileHover={{ scale: 1.05 }}
        >
          {item.name}
        </motion.h3>
      </div>

      <motion.div
        className="absolute bottom-10 left-0 right-0 px-6"
        initial={{ opacity: 0.8 }}
        whileHover={{ opacity: 1 }}
      >
        <p className="text-xs text-gray-200 leading-tight font-medium">
          {item.description}
        </p>
      </motion.div>

      <motion.div
        className="absolute top-18 left-0 right-0 flex justify-center space-x-3"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {item.isSpicy && (
          <motion.span
            className="text-red-500 text-sm drop-shadow-[0_0_6px_rgba(239,68,68,0.4)]"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🌶️
          </motion.span>
        )}
        {item.isVegan && (
          <motion.span
            className="text-green-400 text-sm drop-shadow-[0_0_6px_rgba(34,197,94,0.4)]"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            🌿
          </motion.span>
        )}
      </motion.div>

      <div className="absolute inset-4 rounded-full border border-amber-600/30 animate-pulse-slow" />
      <div className="absolute inset-6 rounded-full border border-amber-500/20" />
      <div className="absolute inset-8 rounded-full border border-amber-400/10" />

      <motion.div
        className="absolute bottom-4 right-4 w-2 h-2 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100"
        animate={{ rotate: 360 }}
        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
      />
    </motion.div>
  );
}
