"use client";

import Image from "next/image";
import { Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductCard({ product }: { product: Product }) {
  const { addToCart } = useCart();
  const isMixPackage = product.id === "risol-mix";

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isMixPackage) {
      // Trigger modal logic by simulating a click on the card, or handle it via a context
      // Since clicking the card already does this in the current setup, we just let the parent handle it
    } else {
      addToCart(product.id, "ori");
    }
  };

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-outline-variant hover:shadow-xl transition-shadow group flex flex-col h-full relative cursor-pointer">
      {/* Badge */}
      {product.badge && (
        <div className="absolute top-4 left-4 z-10 bg-primary text-white text-xs font-bold px-3 py-1 rounded-sm uppercase tracking-wider shadow-md">
          {product.badge}
        </div>
      )}

      {/* Image Area */}
      <div className="relative h-52 w-full overflow-hidden">
        {/* Decorative shadow inside the image area */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent z-10" />
        <div className="relative w-full h-full transform group-hover:scale-110 transition-transform duration-500 z-0">
          <Image
            src={Array.isArray(product.image) ? product.image[0] : product.image}
            alt={product.name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
      </div>

      {/* Text Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="font-headline font-bold text-xl text-on-surface uppercase mb-2">
          {product.name}
        </h3>
        <p className="text-on-surface-variant text-sm flex-grow mb-4 leading-relaxed">
          {product.description}
        </p>

        {/* Footer (Price & Button) */}
        <div className="flex items-center justify-between mt-auto">
          <span className="font-headline font-bold text-2xl text-primary">
            {product.displayPrice}
          </span>
          <button
            onClick={handleAdd}
            className="w-10 h-10 rounded-full border-2 border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label="Tambah ke keranjang"
          >
            <span className="material-symbols-outlined text-xl font-bold">
              {isMixPackage ? "tune" : "add"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
