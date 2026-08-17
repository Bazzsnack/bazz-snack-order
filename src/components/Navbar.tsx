"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useCartSidebar } from "@/context/CartSidebarContext";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Menu", href: "#menu" },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const { openSidebar } = useCartSidebar();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      id="navbar"
      className="fixed top-0 w-full z-50 glass-nav"
    >
      <div className="flex justify-between items-center h-20 px-6 max-w-7xl mx-auto w-full font-headline tracking-tight relative bg-transparent">
        {/* Logo */}
        <Link
          href="#home"
          className="relative flex items-center shrink-0 w-40 sm:w-52 h-14 origin-left transition-transform active:scale-95 z-10"
        >
          <Image
            src="/images/logo-new.png"
            alt="Bazz Snack Logo"
            fill
            className="object-contain object-left"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 z-10">
          {NAV_LINKS.map((link) => {
            // For a single page app, active state based on pathname isn't very useful unless we track scroll.
            // Removing strict border-b-2 for now to avoid it always being stuck on Beranda.
            return (
              <Link
                key={link.href}
                href={link.href}
                className="text-on-surface hover:text-primary font-bold transition-all text-sm uppercase tracking-wider"
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Actions (Cart + Hamburger) */}
        <div className="flex items-center gap-4 z-10">          <button
            onClick={openSidebar}
            className="relative p-2 text-gray-700 hover:text-primary transition-colors flex items-center justify-center bg-gray-100 rounded-full"
            aria-label="Keranjang Belanja"
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

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 text-gray-700"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {isMobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-xl transition-all duration-300 origin-top overflow-hidden z-40 ${
          isMobileMenuOpen ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-6 py-8">
          {NAV_LINKS.map((link) => {
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-bold text-on-surface hover:text-primary transition-colors border-b border-outline-variant pb-2 uppercase"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
