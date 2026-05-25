"use client";

import React, { createContext, useContext, useReducer, useMemo } from "react";

// ─── Constants ───────────────────────────────────────────────────────────────
export const FROZEN_MIN_QTY = 5;
export const FROZEN_PRICE = 3000; // same per-piece price, but min 5 = 15k

// ─── Product Data ────────────────────────────────────────────────────────────
import { Product as ExtProduct, products as importedProducts } from "@/data/products";
export type Product = ExtProduct;
export const PRODUCTS = importedProducts;

// ─── Cart State Type ─────────────────────────────────────────────────────────
export type VariantType = "ori" | "frozen";

export type CartItem = {
  productId: string;
  variant: VariantType;
  quantity: number;
  mixSelections?: string;
};

type CartState = {
  items: CartItem[];
};

// ─── Actions ─────────────────────────────────────────────────────────────────
type CartAction =
  | { type: "INCREMENT"; productId: string; variant: VariantType; mixSelections?: string }
  | { type: "DECREMENT"; productId: string; variant: VariantType; mixSelections?: string }
  | { type: "ADD_TO_CART"; productId: string; variant: VariantType; mixSelections?: string }
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
      const startQty = 1; // 1 piece for ori, 1 box for frozen
      return {
        items: [
          ...state.items,
          { productId: action.productId, variant: action.variant, quantity: startQty, mixSelections: action.mixSelections },
        ],
      };
    }
    case "DECREMENT": {
      return {
        items: state.items
          .map((i) =>
            i.productId === action.productId && i.variant === action.variant && i.mixSelections === action.mixSelections
              ? { ...i, quantity: i.quantity - 1 }
              : i
          )
          .filter((i) => i.quantity > 0),
      };
    }
    case "ADD_TO_CART": {
      const exists = state.items.find(
        (i) => i.productId === action.productId && i.variant === action.variant && i.mixSelections === action.mixSelections
      );
      if (exists) {
        return {
          items: state.items.map((i) =>
            i.productId === action.productId && i.variant === action.variant && i.mixSelections === action.mixSelections
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      return {
        items: [
          ...state.items,
          { productId: action.productId, variant: action.variant, quantity: 1, mixSelections: action.mixSelections },
        ],
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
  getQuantity: (productId: string, variant: VariantType, mixSelections?: string) => number;
  increment: (productId: string, variant: VariantType, mixSelections?: string) => void;
  decrement: (productId: string, variant: VariantType, mixSelections?: string) => void;
  addToCart: (productId: string, variant: VariantType, mixSelections?: string) => void;
  reset: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  const value = useMemo(() => {
    const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
    const totalPrice = state.items.reduce((sum, i) => {
      const product = PRODUCTS.find((p) => p.id === i.productId);
      if (!product) return sum;

      if (i.variant === "frozen" && product.frozenBundle) {
        return sum + i.quantity * product.frozenBundle.packPrice;
      }
      return sum + product.price * i.quantity;
    }, 0);

    return {
      items: state.items,
      totalItems,
      totalPrice,
      getQuantity: (productId: string, variant: VariantType, mixSelections?: string) =>
        state.items.find((i) => i.productId === productId && i.variant === variant && i.mixSelections === mixSelections)?.quantity ?? 0,
      increment: (productId: string, variant: VariantType, mixSelections?: string) =>
        dispatch({ type: "INCREMENT", productId, variant, mixSelections }),
      decrement: (productId: string, variant: VariantType, mixSelections?: string) =>
        dispatch({ type: "DECREMENT", productId, variant, mixSelections }),
      addToCart: (productId: string, variant: VariantType, mixSelections?: string) =>
        dispatch({ type: "ADD_TO_CART", productId, variant, mixSelections }),
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
