"use client";

import { useRef, useState } from "react";
import { PRODUCTS } from "@/context/CartContext";
import ProductCard from "./ProductCard";
import MixVariantModal from "./MixVariantModal";
import { useCart } from "@/context/CartContext";

export default function ProductSection({ limit }: { limit?: number }) {
  const [isMixModalOpen, setIsMixModalOpen] = useState(false);
  const { addToCart } = useCart();
  const displayProducts = PRODUCTS.filter(p => !p.isHidden);

  return (
    <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center justify-center mb-16 text-center">
        <h2 className="font-headline font-bold text-4xl md:text-5xl tracking-tight text-on-surface uppercase flex items-center gap-4">
          <span className="text-primary text-3xl hidden md:inline">➔</span>
          MENU FAVORIT
          <span className="text-primary text-3xl hidden md:inline">🡄</span>
        </h2>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {(limit ? displayProducts.slice(0, limit) : displayProducts).map((product) => (
          <div
            key={product.id}
            onClick={() => {
              if (product.id === "risol-mix") {
                setIsMixModalOpen(true);
              }
            }}
            className={product.id === "risol-mix" ? "cursor-pointer" : ""}
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      {!limit && (
        <div className="mt-16 flex justify-center">
          <a
            href="#home"
            className="inline-flex justify-center items-center h-14 px-8 rounded-full bg-primary text-white font-bold text-sm uppercase tracking-wider hover:bg-primary-dim transition-colors shadow-lg"
          >
            KEMBALI KE ATAS <span className="material-symbols-outlined ml-2 text-sm">arrow_upward</span>
          </a>
        </div>
      )}

      {/* Modal for Mix Packages */}
      <MixVariantModal
        isOpen={isMixModalOpen}
        onClose={() => setIsMixModalOpen(false)}
        onConfirm={(selections) => {
          const mixProduct = PRODUCTS.find((p) => p.id === "risol-mix");
          if (mixProduct) {
            // Reconstruct selections to pass as notes or items if needed
            // Our current CartContext allows adding original or frozen.
            // For now, default to ori for mix to match previous simplified logic.
            addToCart(mixProduct.id, "ori");
          }
          setIsMixModalOpen(false);
        }}
      />
    </section>
  );
}
