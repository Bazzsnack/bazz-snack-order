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
    price: 3000,
    displayPrice: "Rp 3k",
    description: "Lumeran coklat premium dalam balutan kulit krispi yang gurih.",
    image: "/images/risol_coklat.jpeg",
    badge: "Baru",
    badgeColor: "bg-primary",
  },
  {
    id: "risoles-mayo",
    name: "Risoles Mayo",
    price: 3000,
    displayPrice: "Rp 3k",
    description:
      "Perpaduan creamy mayonnaise, smoked beef, dan telur berkualitas pilihan.",
    image: "/images/risol_mayo.jpeg",
    badge: "Terlaris",
    badgeColor: "bg-secondary",
  },
  {
    id: "risoles-mentai",
    name: "Risoles Mentai",
    price: 3000,
    displayPrice: "Rp 3k",
    description:
      "Dilumuri saus mentai spesial yang di-torch sempurna untuk rasa smokey unik.",
    image: "/images/risol_mentai.jpeg",
  },
  {
    id: "risoles-matcha",
    name: "Risoles Matcha",
    price: 3000,
    displayPrice: "Rp 3k",
    description:
      "Rasa teh hijau Jepang otentik yang dibalut balutan kulit manis dan renyah.",
    image: "/images/risol_matcha.jpeg",
  },
];

// ─── Cart State Type ─────────────────────────────────────────────────────────
export type VariantType = "ori" | "frozen";

export type CartItem = {
  productId: string;
  variant: VariantType;
  quantity: number;
};

type CartState = {
  items: CartItem[];
};

// ─── Actions ─────────────────────────────────────────────────────────────────
type CartAction =
  | { type: "INCREMENT"; productId: string; variant: VariantType }
  | { type: "DECREMENT"; productId: string; variant: VariantType }
  | { type: "ADD_TO_CART"; productId: string; variant: VariantType }
  | { type: "RESET" };

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "INCREMENT": {
      const exists = state.items.find(
        (i) => i.productId === action.productId && i.variant === action.variant
      );
      if (exists) {
        return {
          items: state.items.map((i) =>
            i.productId === action.productId && i.variant === action.variant
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        items: [...state.items, { productId: action.productId, variant: action.variant, quantity: 1 }],
      };
    }
    case "DECREMENT": {
      return {
        items: state.items
          .map((i) =>
            i.productId === action.productId && i.variant === action.variant
              ? { ...i, quantity: i.quantity - 1 }
              : i
          )
          .filter((i) => i.quantity > 0),
      };
    }
    case "ADD_TO_CART": {
      const exists = state.items.find(
        (i) => i.productId === action.productId && i.variant === action.variant
      );
      if (exists) {
        return {
          items: state.items.map((i) =>
            i.productId === action.productId && i.variant === action.variant
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        items: [...state.items, { productId: action.productId, variant: action.variant, quantity: 1 }],
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
  getQuantity: (productId: string, variant: VariantType) => number;
  increment: (productId: string, variant: VariantType) => void;
  decrement: (productId: string, variant: VariantType) => void;
  addToCart: (productId: string, variant: VariantType) => void;
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
      getQuantity: (productId: string, variant: VariantType) =>
        state.items.find((i) => i.productId === productId && i.variant === variant)?.quantity ?? 0,
      increment: (productId: string, variant: VariantType) =>
        dispatch({ type: "INCREMENT", productId, variant }),
      decrement: (productId: string, variant: VariantType) =>
        dispatch({ type: "DECREMENT", productId, variant }),
      addToCart: (productId: string, variant: VariantType) =>
        dispatch({ type: "ADD_TO_CART", productId, variant }),
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
