"use client";

import { useState } from "react";
import CategoryNavigator from "./category-navigator";
import MenuItemCard from "./menu-item-card";
import { menuItems } from "@/lib/menu-data";
import { motion } from "motion/react";
import Image from "next/image";

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("coffee");

  const filteredItems = menuItems.filter(
    (item) => item.category === selectedCategory
  );

  return (
    <section className="relative min-h-screen bg-black py-20 px-4">
      <Image
        src="/images/pink-panther.png"
        alt="Pink Panther"
        loading="lazy"
        width={70}
        height={70}
        className="absolute -right-1 top-16 rotate-[-5deg]"
      />
      <h2
        className="text-4xl md:text-6xl font-bold text-center text-neon-red 
        mb-10 drop-shadow-[0_0_20px_#ff0000] font-neon"
      >
        THE MENU
      </h2>
      <motion.p
        className="text-gray-300 text-center text-lg md:text-xl mb-16 max-w-2xl mx-auto tracking-wide"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span className="relative inline-block">
          <span className="relative z-10">Fuel for the soul.</span>
          <motion.span
            className="absolute bottom-0 left-0 w-full h-0.5 bg-neon-red"
            initial={{ width: 0 }}
            whileInView={{ width: "100%" }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </span>{" "}
        <span className="text-white font-medium drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
          Sound for the spirit.
        </span>{" "}
        <span className="text-gold font-medium">Perfection in every cup.</span>
      </motion.p>

      <div className="mb-20">
        <CategoryNavigator
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </div>

      <div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 
  max-w-6xl mx-auto place-items-center"
      >
        {filteredItems.map((item) => (
          <MenuItemCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && (
        <div className="text-center text-gray-400 text-xl mt-16">
          No items in this category yet. Check back soon!
        </div>
      )}
    </section>
  );
}
