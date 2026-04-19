"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useCart, PRODUCTS, type VariantType } from "@/context/CartContext";

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID").format(amount);
}

type CartSidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { items, totalItems, totalPrice, increment, decrement } = useCart();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Lock body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Get product info by id
  const getProduct = (productId: string) =>
    PRODUCTS.find((p) => p.id === productId);

  const getVariantLabel = (variant: VariantType) =>
    variant === "ori" ? "Ori (Siap Makan)" : "Frozen";

  const getVariantColor = (variant: VariantType) =>
    variant === "ori" ? "text-primary" : "text-secondary";

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Sidebar Panel */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 z-[70] h-full w-full max-w-md bg-surface-container border-l border-outline-variant/15 shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-label="Keranjang Belanja"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-outline-variant/10">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">
              shopping_cart
            </span>
            <h2 className="font-headline font-bold text-xl">Keranjang</h2>
            {totalItems > 0 && (
              <span className="liquid-fire text-black text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            aria-label="Tutup keranjang"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-3 scrollbar-thin">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center opacity-60">
              <span className="material-symbols-outlined text-6xl text-surface-container-highest">
                shopping_cart
              </span>
              <p className="font-headline font-bold text-lg text-on-surface-variant">
                Keranjang Kosong
              </p>
              <p className="text-sm text-on-surface-variant max-w-[200px]">
                Yuk mulai pilih risoles favoritmu dari menu!
              </p>
              <button
                onClick={onClose}
                className="mt-2 px-6 py-3 rounded-xl border border-outline-variant/30 text-primary font-bold hover:bg-surface-container-low transition-all cursor-pointer"
              >
                Lihat Menu
              </button>
            </div>
          ) : (
            items.map((item) => {
              const product = getProduct(item.productId);
              if (!product) return null;

              return (
                <div
                  key={`${item.productId}-${item.variant}`}
                  className="flex gap-4 bg-surface-container-low rounded-2xl p-4 transition-all duration-200 hover:bg-surface-container-high group"
                >
                  {/* Product Image */}
                  <div className="relative w-20 h-20 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <h4 className="font-headline font-bold text-sm truncate">
                        {product.name}
                      </h4>
                      <span
                        className={`text-[10px] font-label font-bold uppercase tracking-widest ${getVariantColor(
                          item.variant
                        )}`}
                      >
                        {getVariantLabel(item.variant)}
                      </span>
                    </div>

                    {/* Quantity + Price Row */}
                    <div className="flex items-center justify-between mt-2">
                      {/* Stepper */}
                      <div className="flex items-center bg-surface-container-highest rounded-full p-0.5 border border-outline-variant/10">
                        <button
                          onClick={() =>
                            decrement(item.productId, item.variant)
                          }
                          className="w-7 h-7 flex items-center justify-center hover:text-primary transition-colors cursor-pointer"
                          aria-label={`Kurangi ${product.name}`}
                        >
                          <span className="material-symbols-outlined text-sm">
                            remove
                          </span>
                        </button>
                        <span className="w-6 text-center text-xs font-bold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            increment(item.productId, item.variant)
                          }
                          className="w-7 h-7 flex items-center justify-center hover:text-primary transition-colors cursor-pointer"
                          aria-label={`Tambah ${product.name}`}
                        >
                          <span className="material-symbols-outlined text-sm">
                            add
                          </span>
                        </button>
                      </div>

                      {/* Price */}
                      <span className="font-headline font-extrabold text-sm text-primary">
                        Rp {formatRupiah(product.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer — Total + CTA */}
        {totalItems > 0 && (
          <div className="border-t border-outline-variant/10 px-6 py-5 space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
                  Total ({totalItems} item{totalItems > 1 ? "s" : ""})
                </span>
                <span className="font-headline font-extrabold text-2xl text-white">
                  Rp {formatRupiah(totalPrice)}
                </span>
              </div>
            </div>

            {/* Checkout Button — scrolls to checkout bar & closes sidebar */}
            <button
              onClick={() => {
                onClose();
                // Small delay so sidebar closes first, then scroll to bottom
                setTimeout(() => {
                  const menu = document.getElementById("menu");
                  if (menu) {
                    menu.scrollIntoView({ behavior: "smooth" });
                  }
                }, 300);
              }}
              className="liquid-fire flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl text-on-primary-fixed font-bold active:scale-95 transition-all shadow-lg hover:shadow-primary/30 cursor-pointer"
            >
              <span className="material-symbols-outlined text-xl">
                payments
              </span>
              Lanjut Checkout
            </button>
          </div>
        )}
      </div>
    </>
  );
}
