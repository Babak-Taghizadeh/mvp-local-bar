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

export default function FoodItemCard({ item }: { item: MenuItem }) {
  return (
    <motion.div
      className="relative w-64 h-80 
        rounded-lg shadow-2xl group cursor-pointer border-2 
        "
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <div
        className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-4 
        bg-gradient-to-b from-gray-600 to-gray-800 rounded-t-lg 
        border-l-2 border-r-2 border-b-2 border-gray-700 z-20"
      />

      <div
        className="absolute inset-4 bg-[url('/images/paper-texture.jpg')] 
        bg-cover bg-center rounded-sm opacity-90"
      />

      {item.isPopular && (
        <motion.div
          className="absolute -top-4 -right-4 z-30"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", delay: 0.3 }}
        >
          <div
            className="bg-[#8B4513] text-amber-200 text-[10px] font-bold 
            px-3 py-1 rounded-full border-2 border-amber-400 shadow-lg 
            transform rotate-12"
          >
            🔥 HEADLINER
          </div>
        </motion.div>
      )}

      <div className="relative z-10 h-full p-6 flex flex-col">
        <motion.h3
          className="text-xl font-bold text-background uppercase tracking-wider 
          text-center mb-4 mt-2 font-grunge drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]"
          whileHover={{ scale: 1.02 }}
        >
          {item.name}
        </motion.h3>

        <div className="relative my-3">
          <div className="h-px bg-gradient-to-r from-transparent via-[#8B4513] to-transparent" />
          <div className="absolute inset-0 h-px bg-white/10 blur-sm" />
        </div>

        <motion.div
          className="flex-1 mb-4 overflow-y-auto"
          initial={{ opacity: 0.9 }}
          whileHover={{ opacity: 1 }}
        >
          <p
            className="text-[#3d2918] text-sm leading-relaxed font-handwriting 
            text-center italic"
          >
            {item.description}
          </p>
        </motion.div>

        <motion.div
          className="text-3xl font-bold text-charcoal text-center 
          drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
          whileHover={{ scale: 1.1 }}
        >
          {item.price} T
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4 mt-3"
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {item.isSpicy && (
            <motion.span
              className="text-red-600 text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🌶️
            </motion.span>
          )}
          {item.isVegan && (
            <motion.span
              className="text-green-600 text-lg drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)]"
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🌿
            </motion.span>
          )}
        </motion.div>
      </div>

      <div className="absolute bottom-2 right-2 opacity-40">
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none">
          <path
            d="M7 13C7 13 9 11 12 11C15 11 17 13 17 13"
            stroke="#8B4513"
            strokeWidth="1.5"
          />
          <path
            d="M7 17C7 17 9 15 12 15C15 15 17 17 17 17"
            stroke="#8B4513"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div
        className="absolute top-6 left-6 w-8 h-8 rounded-full 
        bg-[#8B4513] opacity-10 blur-sm"
      />

      <div
        className="absolute inset-0 rounded-lg bg-[#8B4513] opacity-0 
        group-hover:opacity-5 transition-opacity duration-300"
      />
    </motion.div>
  );
}
