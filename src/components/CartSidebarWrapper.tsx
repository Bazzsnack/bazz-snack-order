"use client";

import { useCartSidebar } from "@/context/CartSidebarContext";
import CartSidebar from "./CartSidebar";

export default function CartSidebarWrapper() {
  const { isSidebarOpen, closeSidebar } = useCartSidebar();
  
  return <CartSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />;
}
