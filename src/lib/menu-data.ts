export interface MenuItem {
  id: string;
  name: string;
  description?: string;
  price: number;
  category: string;
  isSpicy?: boolean;
  isVegan?: boolean;
  isPopular?: boolean;
}

export const menuItems: MenuItem[] = [
  // KING'S BREW (Coffee/Tea)
  {
    id: "1",
    name: "Espresso",
    price: 110,
    category: "coffee",
    isPopular: true,
  },
  {
    id: "2",
    name: "Americano",
    price: 120,
    category: "coffee",
    isVegan: true,
  },
  {
    id: "3",
    name: "Capuccino",
    price: 145,
    category: "coffee",
  },
  {
    id: "4",
    name: "Latte",
    price: 145,
    category: "coffee",
  },
  {
    id: "5",
    name: "Latte",
    description: "(Caramel, Hazlenut, Coconut)",
    price: 155,
    category: "coffee",
  },
  {
    id: "6",
    name: "Mocha",
    price: 155,
    category: "coffee",
  },

  // QUEEN'S PLATE (Main Courses)
  {
    id: "7",
    name: "CLASSIC BURGER",
    description: "Angus beef with smoked gouda and bacon",
    price: 255,
    category: "meal",
    isSpicy: true,
  },
  {
    id: "8",
    name: "MAGIC MUSHROOM",
    description: "8oz ribeye with roasted vegetables",
    price: 290,
    category: "meal",
    isPopular: true,
  },

  // BISHOP'S SPECIALS
  {
    id: "11",
    name: "V60",
    price: 170,
    category: "brew",
    isPopular: true,
  },
  {
    id: "12",
    name: "CHEMEX",
    price: 190,
    category: "brew",
  },
  {
    id: "13",
    name: "TURK",
    price: 120,
    category: "brew",
  },

  // PAWN'S SWEETS (Desserts)
  {
    id: "14",
    name: "BLACK TEA",
    price: 70,
    category: "tea",
  },
  {
    id: "15",
    name: "GREE TEA",
    price: 80,
    category: "tea",
    isVegan: true,
  },
  //MATCHA
  {
    id: "16",
    name: "MATCHA LATTE",
    price: 150,
    category: "matcha",
    isVegan: true,
  },
  {
    id: "17",
    name: "MATCHA LATTE",
    price: 80,
    description: "Hazlenut, Coconut",
    category: "matcha",
    isVegan: true,
  },
  //choclate
  {
    id: "18",
    name: "CHOCLATE",
    price: 140,
    category: "chocolate",
    isVegan: true,
  },
  {
    id: "19",
    name: "MILKY",
    price: 140,
    category: "chocolate",
    isVegan: true,
  },
  //milkshakes
  {
    id: "18",
    name: "PEANUT BUTTER",
    price: 180,
    category: "milkshakes",
    isVegan: true,
  },
  {
    id: "19",
    name: "NUTELLA",
    price: 190,
    category: "milkshakes",
    isVegan: true,
  },
  // icecream
  {
    id: "20",
    name: "WALNUT",
    price: 120,
    category: "icecream",
    isVegan: true,
  },
  {
    id: "21",
    name: "SAFFRON",
    price: 120,
    category: "icecream",
    isVegan: true,
  },
  // COLD
  {
    id: "22",
    name: "ICE TEA",
    price: 150,
    category: "cold",
    isVegan: true,
  },
  {
    id: "23",
    name: "LEMONADE",
    price: 140,
    category: "cold",
    isVegan: true,
  },
  //dessert
  {
    id: "24",
    name: "TYRAMISU",
    price: 190,
    category: "dessert",
    isVegan: true,
  },
  {
    id: "25",
    name: "CHEESE CAKE",
    price: 180,
    category: "dessert",
    isVegan: true,
  },
];
