"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { useCartSidebar } from "@/context/CartSidebarContext";

const NAV_LINKS = [
  { label: "Beranda", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "Ulasan", href: "/ulasan" },
];

export default function Navbar() {
  const { totalItems } = useCart();
  const { openSidebar } = useCartSidebar();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      id="navbar"
      className="fixed top-0 w-full z-50 glass-nav shadow-[0_1px_20px_rgba(255,143,112,0.05)]"
    >
      <div className="flex justify-between items-center h-20 px-6 max-w-7xl mx-auto w-full font-headline tracking-tight relative bg-transparent">
        {/* Logo */}
        <Link
          href="/"
          className="relative flex items-center shrink-0 w-48 sm:w-64 h-16 origin-left scale-110 sm:scale-125 transition-transform active:scale-95 drop-shadow-[0_0_15px_rgba(255,143,112,0.6)] z-10"
        >
          <Image
            src="/images/logo_bazzsnack.jpeg"
            alt="Bazz Snack Logo"
            fill
            className="object-contain object-left mix-blend-screen"
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8 z-10">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={
                  isActive
                    ? "text-primary font-bold border-b-2 border-primary pb-1 transition-all"
                    : "text-gray-400 hover:text-white transition-colors"
                }
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* Actions (Cart + Hamburger) */}
        <div className="flex items-center gap-4 z-10">
          {/* Cart Icon */}
          <button
            onClick={openSidebar}
            className="relative text-white hover:text-primary transition-all active:scale-90 cursor-pointer"
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

          {/* Hamburger (Mobile Only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative text-white hover:text-primary transition-all active:scale-90 cursor-pointer"
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
        className={`md:hidden absolute top-20 left-0 w-full bg-[#1A1A1A] border-b border-outline-variant/10 shadow-xl transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-64 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col px-6 gap-6">
          {NAV_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-lg font-bold transition-colors border-b border-white/5 pb-2 ${
                  isActive ? "text-primary" : "text-gray-300 hover:text-primary"
                }`}
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
