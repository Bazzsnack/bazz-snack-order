"use client";

import { useCart, PRODUCTS } from "@/context/CartContext";

const WA_NUMBER = "628XXXXXXXXXX"; // Replace with actual WhatsApp number

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID").format(amount);
}

export default function StickyCheckoutBar() {
  const { items, totalItems, totalPrice } = useCart();

  const handleCheckout = () => {
    // Build message lines — only include items with qty > 0
    const orderLines = items
      .filter((item) => item.quantity > 0)
      .map((item) => {
        const product = PRODUCTS.find((p) => p.id === item.productId);
        return `- ${item.quantity} ${product?.name ?? item.productId}`;
      })
      .join("\n");

    const message = `Halo Bazz Snack! Saya mau order:\n${orderLines}\nTotal Belanja: Rp ${formatRupiah(totalPrice)}\n\nTitik Jemput/Alamat: [Tulis detailnya di sini]`;

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
  };

  return (
    <div
      className={`fixed bottom-6 left-0 right-0 mx-auto w-[92%] max-w-2xl z-50 glass-dock border border-outline-variant/15 rounded-2xl shadow-[0_-10px_30px_rgba(255,120,82,0.1)] py-4 px-6 flex justify-between items-center transition-all duration-500 ${
        totalItems > 0
          ? "translate-y-0 opacity-100"
          : "translate-y-24 opacity-0 pointer-events-none"
      }`}
    >
      {/* Left: Total Summary */}
      <div className="flex flex-col">
        <span className="text-[10px] font-label font-medium uppercase tracking-widest text-primary">
          Total Items: {totalItems}
        </span>
        <span className="font-headline font-extrabold text-xl sm:text-2xl text-white">
          Rp {formatRupiah(totalPrice)}
        </span>
      </div>

      {/* Right: Checkout CTA */}
      <button
        onClick={handleCheckout}
        className="liquid-fire flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 rounded-xl text-on-primary-fixed font-bold active:scale-95 transition-all shadow-lg text-sm sm:text-base"
      >
        <span className="material-symbols-outlined text-xl">send</span>
        <span className="hidden xs:inline sm:inline">Checkout via WhatsApp</span>
        <span className="inline xs:hidden sm:hidden">Checkout</span>
      </button>
    </div>
  );
}
