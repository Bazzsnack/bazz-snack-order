"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type CartSidebarContextType = {
  isSidebarOpen: boolean;
  openSidebar: () => void;
  closeSidebar: () => void;
  toggleSidebar: () => void;
};

const CartSidebarContext = createContext<CartSidebarContextType | null>(null);

export function CartSidebarProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const openSidebar = useCallback(() => setIsSidebarOpen(true), []);
  const closeSidebar = useCallback(() => setIsSidebarOpen(false), []);
  const toggleSidebar = useCallback(
    () => setIsSidebarOpen((prev) => !prev),
    []
  );

  return (
    <CartSidebarContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar, toggleSidebar }}
    >
      {children}
    </CartSidebarContext.Provider>
  );
}

export function useCartSidebar() {
  const ctx = useContext(CartSidebarContext);
  if (!ctx)
    throw new Error("useCartSidebar must be used within CartSidebarProvider");
  return ctx;
}
