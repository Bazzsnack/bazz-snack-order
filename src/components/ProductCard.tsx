"use client";

import { useState } from "react";
import Image from "next/image";
import { useCart, FROZEN_MIN_QTY, type Product, type VariantType } from "@/context/CartContext";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const { getQuantity, increment, decrement, addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState<VariantType>("ori");

  const quantity = getQuantity(product.id, selectedVariant);
  const isFrozen = selectedVariant === "frozen";

  return (
    <div className="bg-surface-container-low rounded-3xl p-6 pt-0 relative group snack-card-shadow transition-all duration-300 hover:translate-y-[-8px]">
      {/* Product Image — overflows top */}
      <div className="h-40 -mt-10 mb-6 relative z-10">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover rounded-2xl shadow-xl transform group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        {product.badge && (
          <div
            className={`absolute top-2 right-2 ${product.badgeColor ?? "bg-primary"} px-3 py-1 rounded-full text-on-primary font-bold text-xs uppercase tracking-tighter`}
          >
            {product.badge}
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="space-y-4">
        <div className="flex justify-between items-start">
          <h3 className="font-headline font-bold text-xl">{product.name}</h3>
          <span className="text-primary font-black text-lg shrink-0 ml-2">
            {product.displayPrice}
          </span>
        </div>

        <p className="text-on-surface-variant text-sm line-clamp-2">
          {product.description}
        </p>

        {/* Variant Selector */}
        <div className="space-y-2 pt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelectedVariant("ori")}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-colors border cursor-pointer ${
                selectedVariant === "ori"
                  ? "bg-primary text-on-primary border-primary"
                  : "bg-surface-container-highest text-on-surface-variant border-transparent hover:border-outline-variant/30"
              }`}
            >
              Original
            </button>
            <button
              onClick={() => setSelectedVariant("frozen")}
              className={`flex-1 py-1.5 px-3 rounded-xl text-xs font-bold transition-colors border cursor-pointer ${
                selectedVariant === "frozen"
                  ? "bg-secondary text-secondary-container border-secondary"
                  : "bg-surface-container-highest text-on-surface-variant border-transparent hover:border-outline-variant/30"
              }`}
            >
              ❄️ Frozen
            </button>
          </div>

          {/* Frozen info badge — only shows when Frozen is selected */}
          <div
            className={`overflow-hidden transition-all duration-300 ease-out ${
              isFrozen ? "max-h-12 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-secondary/10 border border-secondary/20">
              <span className="material-symbols-outlined text-secondary text-sm">
                info
              </span>
              <span className="text-[11px] text-secondary font-medium">
                Min. {FROZEN_MIN_QTY} pcs · Mulai Rp {((FROZEN_MIN_QTY * 3000) / 1000).toFixed(0)}k
              </span>
            </div>
          </div>
        </div>

        {/* Quantity Controls + Add to Cart */}
        <div className="flex items-center justify-between pt-1">
          {/* Stepper */}
          <div className="flex items-center bg-surface-container-highest rounded-full p-1 border border-outline-variant/10">
            <button
              onClick={() => decrement(product.id, selectedVariant)}
              className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors cursor-pointer"
              aria-label={`Decrease ${product.name} ${selectedVariant}`}
            >
              <span className="material-symbols-outlined text-sm">
                {/* Show delete icon when at frozen min qty to hint removal */}
                {isFrozen && quantity === FROZEN_MIN_QTY ? "delete" : "remove"}
              </span>
            </button>
            <span className="w-8 text-center text-sm font-bold tabular-nums">
              {quantity}
            </span>
            <button
              onClick={() => increment(product.id, selectedVariant)}
              className="w-8 h-8 flex items-center justify-center hover:text-primary transition-colors cursor-pointer"
              aria-label={`Increase ${product.name} ${selectedVariant}`}
            >
              <span className="material-symbols-outlined text-sm">add</span>
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={() => addToCart(product.id, selectedVariant)}
            className="bg-primary/10 hover:bg-primary text-primary hover:text-on-primary w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 active:scale-90 cursor-pointer"
            aria-label={`Add ${product.name} ${selectedVariant} to cart`}
          >
            <span className="material-symbols-outlined">add_shopping_cart</span>
          </button>
        </div>
      </div>
    </div>
  );
}
