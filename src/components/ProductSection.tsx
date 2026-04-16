"use client";

import { useRef } from "react";
import { PRODUCTS } from "@/context/CartContext";
import ProductCard from "./ProductCard";

export default function ProductSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <h2 className="font-headline font-extrabold text-4xl md:text-5xl tracking-tight mb-4 text-white">
            Our Signature{" "}
            <span className="text-primary italic">Risoles</span>
          </h2>
          <p className="text-on-surface-variant max-w-lg">
            Hand-crafted with the finest ingredients and our secret neon-pantry
            recipes.
          </p>
        </div>

        {/* Scroll Arrows (Desktop) */}
        <div className="hidden lg:flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
            aria-label="Scroll left"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all"
            aria-label="Scroll right"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Product Grid — scrollable on mobile, grid on desktop */}
      <div
        ref={scrollRef}
        className="flex lg:grid lg:grid-cols-4 gap-x-8 gap-y-16 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 snap-x snap-mandatory scrollbar-hide pt-10"
        style={{ scrollbarWidth: "none" }}
      >
        {PRODUCTS.map((product) => (
          <div
            key={product.id}
            className="min-w-[260px] sm:min-w-[280px] lg:min-w-0 snap-start"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}
