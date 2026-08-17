"use client";

import { useRef, useState } from "react";
import { PRODUCTS } from "@/context/CartContext";
import ProductCard from "./ProductCard";
import MixVariantModal from "./MixVariantModal";
import ScrollReveal from "./ScrollReveal";
import { useCart } from "@/context/CartContext";

export default function ProductSection({ limit }: { limit?: number }) {
  const [isMixModalOpen, setIsMixModalOpen] = useState(false);
  const { addToCart } = useCart();
  const displayProducts = PRODUCTS.filter(p => !p.isHidden);

  return (
    <section id="menu" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <ScrollReveal>
        <div className="flex flex-col items-center justify-center mb-16 text-center">
          <h2 className="font-headline font-bold text-4xl md:text-5xl tracking-tight text-on-surface uppercase flex items-center gap-4">
            MENU FAVORIT
          </h2>
        </div>
      </ScrollReveal>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {(limit ? displayProducts.slice(0, limit) : displayProducts).map((product, index) => (
          <ScrollReveal key={product.id} delay={index * 100}>
            <ProductCard 
              product={product} 
              onMixClick={product.id === "risol-mix" ? () => setIsMixModalOpen(true) : undefined}
            />
          </ScrollReveal>
        ))}
      </div>



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
