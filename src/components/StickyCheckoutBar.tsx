"use client";

import { useState } from "react";
import { useCart, PRODUCTS } from "@/context/CartContext";

const WA_NUMBER = "628XXXXXXXXXX"; // Replace with actual WhatsApp number

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID").format(amount);
}

export default function StickyCheckoutBar() {
  const { items, totalItems, totalPrice } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Checkout Form State
  const [formData, setFormData] = useState({
    nama: "",
    nomor: "",
    alamat: "",
  });

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build message lines — only include items with qty > 0
    const orderLines = items
      .filter((item) => item.quantity > 0)
      .map((item) => {
        const product = PRODUCTS.find((p) => p.id === item.productId);
        const variantLabel = item.variant === "ori" ? "Original" : "Frozen";
        return `- ${item.quantity}x ${product?.name ?? item.productId} (${variantLabel})`;
      })
      .join("\n");

    const message = `Halo Bazz Snack! Saya mau order:

Rincian Pesanan:
${orderLines}

Total Belanja: Rp ${formatRupiah(totalPrice)}

Data Penerima:
Nama: ${formData.nama}
Nomor HP: ${formData.nomor || "-"}
Alamat / Titik Jemput: ${formData.alamat}`;

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    setIsModalOpen(false); // close after checking out
  };

  return (
    <>
      <div
        className={`fixed bottom-6 left-0 right-0 mx-auto w-[92%] max-w-2xl z-40 glass-dock border border-outline-variant/15 rounded-2xl shadow-[0_-10px_30px_rgba(255,120,82,0.1)] py-4 px-6 flex justify-between items-center transition-all duration-500 ${
          totalItems > 0 && !isModalOpen
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
          onClick={() => setIsModalOpen(true)}
          className="liquid-fire flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 rounded-xl text-on-primary-fixed font-bold active:scale-95 transition-all shadow-lg text-sm sm:text-base cursor-pointer"
        >
          <span className="material-symbols-outlined text-xl">payments</span>
          <span className="hidden xs:inline sm:inline">Konfirmasi Pembelian</span>
          <span className="inline xs:hidden sm:hidden">Lanjut</span>
        </button>
      </div>

      {/* Checkout Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface-container-low border border-outline-variant/15 w-full max-w-md p-6 rounded-[2rem] shadow-2xl relative animate-slide-up overflow-y-auto max-h-[90vh]">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>

            {/* Modal Header */}
            <h2 className="font-headline text-2xl font-bold mb-2">Checkout</h2>
            <p className="text-sm text-on-surface-variant mb-6 border-b border-outline-variant/10 pb-4">
              Isi data pengiriman/penjemputan di bawah untuk lanjut memproses pesanan ke WhatsApp admin.
            </p>

            {/* Form */}
            <form onSubmit={handleCheckout} className="flex flex-col gap-4">
              
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary uppercase tracking-widest">
                  Nama Pemesan <span className="text-error">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Budi Gunawan"
                  value={formData.nama}
                  onChange={(e) => setFormData({ ...formData, nama: e.target.value })}
                  className="w-full bg-surface-container-highest border border-outline-variant/15 p-3 rounded-xl focus:border-primary focus:outline-none transition-colors text-white"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                  Nomor HP <span className="text-[10px] lowercase normal-case text-gray-500 font-normal">(Opsional)</span>
                </label>
                <input
                  type="tel"
                  placeholder="08123456789"
                  value={formData.nomor}
                  onChange={(e) => setFormData({ ...formData, nomor: e.target.value })}
                  className="w-full bg-surface-container-highest border border-outline-variant/15 p-3 rounded-xl focus:border-primary focus:outline-none transition-colors text-white"
                />
              </div>

              <div className="flex flex-col gap-1.5 mb-2">
                <label className="text-xs font-bold text-primary uppercase tracking-widest">
                  Alamat / Titik Jemput <span className="text-error">*</span>
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Alamat lengkap / Titik temu (Kantin, dll)"
                  value={formData.alamat}
                  onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
                  className="w-full bg-surface-container-highest border border-outline-variant/15 p-3 rounded-xl resize-none focus:border-primary focus:outline-none transition-colors text-white"
                />
              </div>

              {/* Order Details Preview */}
              <div className="bg-surface-container-highest p-4 rounded-xl flex justify-between items-center mb-4">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Total {totalItems} items</span>
                  <span className="font-bold text-lg text-primary">Rp {formatRupiah(totalPrice)}</span>
                </div>
              </div>

              {/* Submit / WhatsApp Redirect */}
              <button
                type="submit"
                className="liquid-fire flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl text-on-primary-fixed font-bold active:scale-95 transition-all shadow-lg hover:shadow-primary/30 cursor-pointer"
              >
                <span className="material-symbols-outlined text-xl">send</span>
                Kirim via WhatsApp
              </button>

            </form>
          </div>
        </div>
      )}
    </>
  );
}
