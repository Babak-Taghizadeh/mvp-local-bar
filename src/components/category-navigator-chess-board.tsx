"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CategoryNavigatorProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const categories: Category[] = [
  { id: "coffee", name: "Espresso Bar", icon: "♔" },
  { id: "brew", name: "Slow Bar", icon: "♕" },
  { id: "tea", name: "Tea & Herbal Tea", icon: "♘" },
  { id: "matcha", name: "Matcha", icon: "♗" },
  { id: "chocolate", name: "Chocolate Bar", icon: "♙" },
  { id: "milkshakes", name: "Milk Shakes", icon: "♖" },
  { id: "icecream", name: "Ice Cream", icon: "♖" },
  { id: "cold", name: "Cold Drinks", icon: "♘" },
  { id: "dessert", name: "Cake & Dessert", icon: "♗" },
];

export default function CategoryNavigatorChessBoard({
  selectedCategory,
  onCategoryChange,
}: CategoryNavigatorProps) {
  return (
    <div className="relative max-w-[400px] aspect-square mx-auto border-2 rounded-xl shadow-2xl overflow-hidden">
      <div className="relative flex flex-col h-full">
        <div className="grid grid-cols-3 flex-grow">
          {categories.map((category, index) => (
            <motion.button
              key={category.id}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "flex flex-col items-center justify-center text-center p-2 m-[2px] rounded-md border text-xs font-semibold transition-all duration-300",
                selectedCategory === category.id
                  ? "bg-black/80 text-neon-red border-neon-red shadow-[0_0_12px_var(--neon-red)]"
                  : index % 2 !== 0
                  ? "bg-foreground text-background border-gray-600 hover:bg-black/70 hover:text-yellow-300"
                  : "bg-background text-foreground border-gray-600 hover:bg-black/70 hover:text-yellow-300"
              )}
              onClick={() => onCategoryChange(category.id)}
            >
              <span className="text-4xl">{category.icon}</span>
              <span className="mt-1">{category.name}</span>
            </motion.button>
          ))}
        </div>

        <motion.button
          whileTap={{ scale: 0.97 }}
          className={cn(
            "mt-auto flex items-center justify-center gap-3 p-3 rounded-md border text-base font-bold transition-all duration-300",
            selectedCategory === "meal"
              ? "bg-black/80 text-red-500 border-red-500 shadow-[0_0_12px_#ff0000]"
              : "bg-black/60 text-gray-200 border-gray-600 hover:bg-black/70 hover:text-yellow-300"
          )}
          onClick={() => onCategoryChange("meal")}
        >
          <span className="text-2xl">♕</span>
          <span>Burger & Fries</span>
        </motion.button>
      </div>
    </div>
  );
}
