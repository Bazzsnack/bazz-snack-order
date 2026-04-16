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
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCTlSOyaDKYRbiSpJQULpnsNGU4DPEVgrHTOKbEg2LhzSqxB7DaMJz504spe4f1_91UVPe-raI2VEn-rSIBFzDqEyLV6s8XRjDSwsFTGd__37VqfcGu4T0_Z8YMIvmdIKljN1gVXI6a5GC4QsfvOLRH4dU9CfR1Kq5izEgFMaf2n_b35xtizcGBq5IQB7Ir1TeB8Je5ZpCwFa-hKlWs4BpSuwFAsWiqRPWFfqAaSqrAqIGOX4zYqepY6uf23GlKMMAwzEjHZtSg5NXt",
    badge: "New",
    badgeColor: "bg-primary",
  },
  {
    id: "risoles-mayo",
    name: "Risoles Mayo",
    price: 6000,
    displayPrice: "Rp 6k",
    description:
      "Mayonnaise creamy berpadu dengan smoked beef dan telur berkualitas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBY8Ae08jgwQSGZxAnAsPs2XZbN5wFwpIOYYDNYNhGX5kKhCYFmFTthtJ0kxnWRmb6tBSSRVuNT6mHhl-ELyfH_2mmzKx0am54C6Si55AptzQ0rCQi9wBJwqqqsI032KjI6gP9bDhFeJkcB5StCh8O8oFN2XEKFTYHYhr38a9NvELv73b376q0ld0QILmFjmMINvsUK2jLqyCmYFz14ee5jDUvx2DkTEA66aAcSwdEy8pxjWskG_pKjnsVkcfTjuY8XJsMLgwab-Goq",
    badge: "Bestseller",
    badgeColor: "bg-secondary",
  },
  {
    id: "risoles-mentai",
    name: "Risoles Mentai",
    price: 7000,
    displayPrice: "Rp 7k",
    description:
      "Saus mentai spesial yang di-torch sempurna untuk rasa smokey yang unik.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBhWgwbpbDkEK0ucH0lwBx1b9fc853REqrcS2T_jy1J6UAkL4C2MHq0qTAwYN271aIqO6NqfAUUYLMnc1Cd8YLZxvR8mVztK0nahXmkHoLS-rnJ8LVZ__TCFJ8L6MzNZJf02b4HpwrmzqwgW-HisNOtwpr91bgOVC4uE8vYdNATwfDk-lCEwio7taW6Ht6k1r2qo-bUsmcDTOoa7CS5KbRe5A60uQ8JwSFPEO6aJibHkIIJGJPmmw0LOaMvO0HbOTjh2iFIP_krDKb8",
  },
  {
    id: "risoles-matcha",
    name: "Risoles Matcha",
    price: 6000,
    displayPrice: "Rp 6k",
    description:
      "Rasa teh hijau Jepang yang otentik dalam balutan risoles manis.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLjEmomHpfCnNhY3-dLzGGzghgk0FownEyVD6gQ8wLfClALIYOARssRfj7RNUmB56TI0i36aui9czVgXGQ_oDGgOO3_BGggUygiWib42d1QSf0hJ1PpJh2g1xQw0yIkF-8ddfnF7Tr3oEamvKSOa5Ne2ecYXWQvvzykaSu191I4UUB8pvvilNAgf5jMwfiAGLMbb5kzbjytNv4XCPviHOsyOFcESdEsNI16vwL5d3ZELpEEcybkwO24QIG0rxW_ETw5BcGIQ6fIzke",
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
