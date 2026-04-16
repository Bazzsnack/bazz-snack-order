"use client";

import { useCart } from "@/context/CartContext";

const NAV_ITEMS = [
  { icon: "home", label: "Home", href: "#home", active: true },
  { icon: "fastfood", label: "Menu", href: "#menu", active: false },
  { icon: "shopping_bag", label: "Cart", href: "#menu", active: false },
  { icon: "person", label: "Account", href: "#", active: false },
];

export default function MobileNav() {
  const { totalItems } = useCart();

  return (
    <div className="md:hidden fixed bottom-24 left-0 right-0 mx-auto w-[92%] z-50 glass-nav border border-outline-variant/15 rounded-2xl flex justify-around items-center py-4 shadow-[0_-10px_30px_rgba(255,120,82,0.1)]">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          className={`flex flex-col items-center justify-center transition-transform ${
            item.active
              ? "text-primary scale-110"
              : "text-gray-500 hover:text-primary"
          }`}
        >
          <span className="material-symbols-outlined relative">
            {item.icon}
            {item.label === "Cart" && totalItems > 0 && (
              <span className="absolute -top-1 -right-2 w-4 h-4 rounded-full liquid-fire text-[8px] font-bold text-black flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </span>
          <span className="text-[10px] font-label font-medium uppercase tracking-widest mt-1">
            {item.label}
          </span>
        </a>
      ))}
    </div>
  );
}
