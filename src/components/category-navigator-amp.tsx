"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import {
  Coffee,
  Clock,
  Leaf,
  Sparkles,
  GlassWater,
  IceCream,
  Beer,
  Cake,
  Beef,
} from "lucide-react";
import Image from "next/image";

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

interface CategoryNavigatorProps {
  selectedCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

const categories: Category[] = [
  {
    id: "coffee",
    name: "Espresso Bar",
    icon: <Coffee className="w-6 h-6" />,
  },
  {
    id: "brew",
    name: "Brew Bar",
    icon: <Clock className="w-6 h-6" />,
  },
  {
    id: "tea",
    name: "Tea & Herbal",
    icon: <Leaf className="w-6 h-6" />,
  },
  {
    id: "matcha",
    name: "Matcha",
    icon: <Sparkles className="w-6 h-6" />,
  },
  {
    id: "chocolate",
    name: "Chocolate Bar",
    icon: <GlassWater className="w-6 h-6" />,
  },
  {
    id: "milkshakes",
    name: "Milk Shakes",
    icon: <IceCream className="w-6 h-6" />,
  },
  {
    id: "icecream",
    name: "Ice Cream",
    icon: <IceCream className="w-6 h-6" />,
  },
  {
    id: "cold",
    name: "Cold Drinks",
    icon: <Beer className="w-6 h-6" />,
  },
  {
    id: "dessert",
    name: "Cake & Dessert",
    icon: <Cake className="w-6 h-6" />,
  },
];

export default function CategoryNavigatorAMP({
  selectedCategory,
  onCategoryChange,
}: CategoryNavigatorProps) {
  return (
    <div className="relative max-w-[400px] mx-auto p-6 bg-gradient-to-br from-gray-900 to-black rounded-2xl border-2 border-amber-600 shadow-2xl shadow-amber-500/10">
      {/* Amplifier Texture */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <Image
          src="/images/metal-texture.jpg"
          alt="Brushed metal texture"
          fill
          loading="lazy"
          quality={10}
          className="object-cover opacity-20"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaUMk9faA5IauPkYqBv/9k="
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Metal Grill */}
      <div className="absolute inset-2 rounded-xl border border-amber-800/50 pointer-events-none" />

      <div className="relative flex flex-col h-full">
        {/* Control Panel Label */}
        <div className="text-center mb-6">
          <h3 className="text-amber-300 font-bold text-lg uppercase tracking-widest border-b border-amber-600 pb-2">
            MENU Amplifier
          </h3>
        </div>

        {/* Effect Pedals Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "relative flex flex-col items-center justify-center p-4 rounded-lg border-2 transition-all duration-300 group",
                "bg-gradient-to-b from-gray-800 to-gray-900",
                selectedCategory === category.id
                  ? "border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.5)]"
                  : "border-gray-600 hover:border-amber-400"
              )}
              onClick={() => onCategoryChange(category.id)}
            >
              {/* LED Indicator */}
              <div
                className={cn(
                  "absolute -top-1 -right-1 w-3 h-3 rounded-full border border-gray-500 transition-all",
                  selectedCategory === category.id
                    ? "bg-red-500 shadow-[0_0_10px_#ff0000]"
                    : "bg-gray-700"
                )}
              />

              {/* Icon */}
              <div
                className={cn(
                  "mb-2 transition-all duration-300",
                  selectedCategory === category.id
                    ? "text-amber-300"
                    : "text-gray-400 group-hover:text-amber-200"
                )}
              >
                {category.icon}
              </div>

              {/* Label */}
              <span
                className={cn(
                  "text-xs font-semibold text-center leading-tight transition-all",
                  selectedCategory === category.id
                    ? "text-amber-300"
                    : "text-gray-400 group-hover:text-amber-200"
                )}
              >
                {category.name}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Main Volume (Burger & Fries) */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={cn(
            "relative flex items-center justify-center gap-3 p-4 rounded-xl border-2 transition-all duration-300 group",
            "bg-gradient-to-b from-gray-900 to-gray-800",
            selectedCategory === "meal"
              ? "border-amber-400 shadow-[0_0_25px_rgba(245,158,11,0.6)]"
              : "border-gray-600 hover:border-amber-400"
          )}
          onClick={() => onCategoryChange("meal")}
        >
          {/* Large LED */}
          <div
            className={cn(
              "absolute -top-2 -right-2 w-4 h-4 rounded-full border border-gray-500 transition-all",
              selectedCategory === "meal"
                ? "bg-red-600 shadow-[0_0_15px_#ff0000]"
                : "bg-gray-700"
            )}
          />

          <Beef
            className={cn(
              "w-8 h-8 transition-all",
              selectedCategory === "meal"
                ? "text-amber-200"
                : "text-amber-100 group-hover:text-amber-200"
            )}
          />

          <span
            className={cn(
              "text-lg font-bold uppercase tracking-wide",
              selectedCategory === "meal"
                ? "text-amber-100"
                : "text-amber-100 group-hover:text-amber-100"
            )}
          >
            Meals
          </span>
        </motion.button>
      </div>
    </div>
  );
}
