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
      const product = PRODUCTS.find((p) => p.id === action.productId);
      const minQty = product?.frozenBundle?.minQty ?? FROZEN_MIN_QTY;
      // First add — frozen starts at FROZEN_MIN_QTY, ori starts at 1
      const startQty = action.variant === "frozen" ? minQty : 1;
      return {
        items: [
          ...state.items,
          { productId: action.productId, variant: action.variant, quantity: startQty },
        ],
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
          // Frozen items get removed if they drop below min qty; ori removed at 0
          .filter((i) => {
            if (i.variant === "frozen") {
              const product = PRODUCTS.find((p) => p.id === i.productId);
              const minQty = product?.frozenBundle?.minQty ?? FROZEN_MIN_QTY;
              return i.quantity >= minQty;
            }
            return i.quantity > 0;
          }),
      };
    }
    case "ADD_TO_CART": {
      const exists = state.items.find(
        (i) => i.productId === action.productId && i.variant === action.variant
      );
      if (exists) {
        // For frozen, increment by 1 if already at/above min
        return {
          items: state.items.map((i) =>
            i.productId === action.productId && i.variant === action.variant
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        };
      }
      const product = PRODUCTS.find((p) => p.id === action.productId);
      const minQty = product?.frozenBundle?.minQty ?? FROZEN_MIN_QTY;
      // First add — frozen starts at FROZEN_MIN_QTY
      const startQty = action.variant === "frozen" ? minQty : 1;
      return {
        items: [
          ...state.items,
          { productId: action.productId, variant: action.variant, quantity: startQty },
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
      if (!product) return sum;

      if (i.variant === "frozen" && product.frozenBundle) {
        const minQty = product.frozenBundle.minQty;
        const packs = Math.floor(i.quantity / minQty);
        const remainder = i.quantity % minQty;
        return sum + packs * product.frozenBundle.packPrice + remainder * product.price;
      }
      return sum + product.price * i.quantity;
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
