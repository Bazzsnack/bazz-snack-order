"use client";

import React, { createContext, useContext, useReducer, useMemo } from "react";

// ─── Product Data ────────────────────────────────────────────────────────────
export type Product = {
  id: string;
  name: string;
  price: number;
  displayPrice: string;
  description: string;
  image: string;
  badge?: string;
  badgeColor?: string;
};

export const PRODUCTS: Product[] = [
  {
    id: "risoles-coklat",
    name: "Risoles Coklat",
    price: 5000,
    displayPrice: "Rp 5k",
    description: "Lumeran coklat premium dalam balutan kulit krispi yang gurih.",
    image: "/images/risol_coklat.jpeg",
    badge: "Baru",
    badgeColor: "bg-primary",
  },
  {
    id: "risoles-mayo",
    name: "Risoles Mayo",
    price: 6000,
    displayPrice: "Rp 6k",
    description:
      "Perpaduan creamy mayonnaise, smoked beef, dan telur berkualitas pilihan.",
    image: "/images/risol_mayo.jpeg",
    badge: "Terlaris",
    badgeColor: "bg-secondary",
  },
  {
    id: "risoles-mentai",
    name: "Risoles Mentai",
    price: 7000,
    displayPrice: "Rp 7k",
    description:
      "Dilumuri saus mentai spesial yang di-torch sempurna untuk rasa smokey unik.",
    image: "/images/risol_mentai.jpeg",
  },
  {
    id: "risoles-matcha",
    name: "Risoles Matcha",
    price: 6000,
    displayPrice: "Rp 6k",
    description:
      "Rasa teh hijau Jepang otentik yang dibalut balutan kulit manis dan renyah.",
    image: "/images/risol_matcha.jpeg",
  },
];

// ─── Cart State Type ─────────────────────────────────────────────────────────
export type CartItem = {
  productId: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

// ─── Actions ─────────────────────────────────────────────────────────────────
type CartAction =
  | { type: "INCREMENT"; productId: string }
  | { type: "DECREMENT"; productId: string }
  | { type: "ADD_TO_CART"; productId: string }
  | { type: "RESET" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "INCREMENT": {
      const exists = state.items.find(
        (i) => i.productId === action.productId
      );
      if (exists) {
        return {
          items: state.items.map((i) =>
            i.productId === action.productId
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        items: [...state.items, { productId: action.productId, quantity: 1 }],
      };
    }
    case "DECREMENT": {
      return {
        items: state.items
          .map((i) =>
            i.productId === action.productId
              ? { ...i, quantity: i.quantity - 1 }
              : i
          )
          .filter((i) => i.quantity > 0),
      };
    }
    case "ADD_TO_CART": {
      const exists = state.items.find(
        (i) => i.productId === action.productId
      );
      if (exists) {
        return {
          items: state.items.map((i) =>
            i.productId === action.productId
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        items: [...state.items, { productId: action.productId, quantity: 1 }],
      };
    }
    case "RESET":
      return { items: [] };
    default:
      return state;
  }
}

// ─── Context ─────────────────────────────────────────────────────────────────
type CartContextType = {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  getQuantity: (productId: string) => number;
  increment: (productId: string) => void;
  decrement: (productId: string) => void;
  addToCart: (productId: string) => void;
  reset: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const value = useMemo(() => {
    const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = state.items.reduce((sum, i) => {
      const product = PRODUCTS.find((p) => p.id === i.productId);
      return sum + (product ? product.price * i.quantity : 0);
    }, 0);

    return {
      items: state.items,
      totalItems,
      totalPrice,
      getQuantity: (productId: string) =>
        state.items.find((i) => i.productId === productId)?.quantity ?? 0,
      increment: (productId: string) =>
        dispatch({ type: "INCREMENT", productId }),
      decrement: (productId: string) =>
        dispatch({ type: "DECREMENT", productId }),
      addToCart: (productId: string) =>
        dispatch({ type: "ADD_TO_CART", productId }),
      reset: () => dispatch({ type: "RESET" }),
    };
  }, [state.items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
