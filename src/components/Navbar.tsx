"use client";

import { useCart } from "@/context/CartContext";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
  { label: "Reviews", href: "#reviews" },
  { label: "Partners", href: "#partners" },
];

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav
      id="navbar"
      className="fixed top-0 w-full z-50 glass-nav shadow-[0_1px_20px_rgba(255,143,112,0.05)]"
    >
      <div className="flex justify-between items-center h-20 px-6 max-w-7xl mx-auto w-full font-headline tracking-tight">
        {/* Logo */}
        <a
          href="#home"
          className="text-2xl font-bold tracking-tighter text-primary"
        >
          Bazz Snack
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className={
                idx === 0
                  ? "text-primary font-bold border-b-2 border-primary pb-1 transition-all"
                  : "text-gray-400 hover:text-white transition-colors"
              }
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Cart Icon */}
        <button
          className="relative text-white hover:text-primary transition-all active:scale-90"
          aria-label="Shopping Cart"
        >
          <span className="material-symbols-outlined text-2xl">
            shopping_cart
          </span>
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full liquid-fire text-[10px] font-bold text-black flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
