"use client";

import { useState, useEffect, useCallback } from "react";
import { useCart, PRODUCTS } from "@/context/CartContext";

const WA_NUMBER = "6285852590376";

type DeliveryOption = "pickup" | "delivery";

function formatRupiah(amount: number): string {
  return new Intl.NumberFormat("id-ID").format(amount);
}

const ORDER_CUTOFF_HOUR = 12; // Batas order jam 12 siang WIB

/**
 * Returns the earliest orderable date based on current time.
 * - Before 12:00 PM → tomorrow (H-1)
 * - After 12:00 PM  → day after tomorrow (H-2), tomorrow is closed
 */
function getMinOrderDate(): { dateStr: string; isCutoff: boolean } {
  const now = new Date();
  const currentHour = now.getHours();
  const isPastCutoff = currentHour >= ORDER_CUTOFF_HOUR;

  const minDate = new Date();
  minDate.setDate(minDate.getDate() + (isPastCutoff ? 2 : 1));

  const yyyy = minDate.getFullYear();
  const mm = String(minDate.getMonth() + 1).padStart(2, "0");
  const dd = String(minDate.getDate()).padStart(2, "0");

  return {
    dateStr: `${yyyy}-${mm}-${dd}`,
    isCutoff: isPastCutoff,
  };
}

/**
 * Format a YYYY-MM-DD date string to a human-readable Indonesian format.
 * e.g. "2026-04-20" → "Minggu, 20 April 2026"
 */
function formatTanggalIndo(dateStr: string): string {
  const date = new Date(dateStr + "T00:00:00");
  return date.toLocaleDateString("id-ID", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function StickyCheckoutBar() {
  const { items, totalItems, totalPrice } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Checkout Form State
  const [formData, setFormData] = useState({
    nama: "",
    nomor: "",
    alamat: "",
    tanggal: "",
  });

  const [deliveryOption, setDeliveryOption] = useState<DeliveryOption>("pickup");

  // Real-time min date — recalculates every minute to detect cutoff live
  const [minDateInfo, setMinDateInfo] = useState(() => getMinOrderDate());

  const refreshMinDate = useCallback(() => {
    const info = getMinOrderDate();
    setMinDateInfo(info);
    // If the user already picked a date that's now invalid, clear it
    setFormData((prev) => {
      if (prev.tanggal && prev.tanggal < info.dateStr) {
        return { ...prev, tanggal: "" };
      }
      return prev;
    });
  }, []);

  useEffect(() => {
    refreshMinDate();
    const interval = setInterval(refreshMinDate, 60_000); // check every minute
    return () => clearInterval(interval);
  }, [refreshMinDate]);

  // Clear alamat when switching to pickup
  useEffect(() => {
    if (deliveryOption === "pickup") {
      setFormData((prev) => ({ ...prev, alamat: "" }));
    }
  }, [deliveryOption]);

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

    const tanggalFormatted = formData.tanggal
      ? formatTanggalIndo(formData.tanggal)
      : "-";

    const pengirimanInfo =
      deliveryOption === "pickup"
        ? "🏪 Ambil di Tempat"
        : `🚚 Diantar\nAlamat: ${formData.alamat}`;

    const ongkirNote =
      deliveryOption === "delivery"
        ? "\n\n⚠️ *Harga belum termasuk ongkir (akan dikonfirmasi via chat)*"
        : "";

    const message = `Halo Bazz Snack! Saya mau order:

Rincian Pesanan:
${orderLines}

Total Belanja: Rp ${formatRupiah(totalPrice)}${ongkirNote}

📅 Tanggal Pesanan: ${tanggalFormatted}

Data Pemesan:
Nama: ${formData.nama}
Nomor HP: ${formData.nomor || "-"}

Metode Pengambilan:
${pengirimanInfo}`;

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
              Isi data berikut untuk lanjut memproses pesanan ke WhatsApp admin.
            </p>

            {/* Form */}
            <form onSubmit={handleCheckout} className="flex flex-col gap-4">

              {/* Tanggal Pesanan — prominent placement */}
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary uppercase tracking-widest">
                  Tanggal Pesanan <span className="text-error">*</span>
                </label>
                <div className="relative">
                  <input
                    required
                    type="date"
                    min={minDateInfo.dateStr}
                    value={formData.tanggal}
                    onChange={(e) =>
                      setFormData({ ...formData, tanggal: e.target.value })
                    }
                    className="w-full bg-surface-container-highest border border-outline-variant/15 p-3 rounded-xl focus:border-primary focus:outline-none transition-colors text-white appearance-none [color-scheme:dark]"
                  />
                </div>
                {minDateInfo.isCutoff ? (
                  <span className="text-[11px] text-secondary flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-sm">schedule</span>
                    Order untuk besok sudah ditutup (lewat jam 12 siang). Pesanan mulai dari lusa.
                  </span>
                ) : (
                  <span className="text-[11px] text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-secondary text-sm">info</span>
                    Pre-order minimal H-1, batas order jam 12:00 siang
                  </span>
                )}
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-primary uppercase tracking-widest">
                  Nama Pemesan <span className="text-error">*</span>
                </label>
                <input
                  required
                  type="text"
                  placeholder="Nama lengkap"
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

              {/* ── Metode Pengambilan ── */}
              <div className="flex flex-col gap-2.5 mb-1">
                <label className="text-xs font-bold text-primary uppercase tracking-widest">
                  Metode Pengambilan <span className="text-error">*</span>
                </label>

                <div className="grid grid-cols-2 gap-3">
                  {/* Option 1: Pickup */}
                  <button
                    type="button"
                    onClick={() => setDeliveryOption("pickup")}
                    className={`relative flex flex-col items-center gap-2.5 p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer group ${
                      deliveryOption === "pickup"
                        ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(255,120,82,0.15)]"
                        : "border-outline-variant/20 bg-surface-container-highest hover:border-outline-variant/40"
                    }`}
                  >
                    {deliveryOption === "pickup" && (
                      <span className="absolute top-2 right-2 material-symbols-outlined text-primary text-base">
                        check_circle
                      </span>
                    )}
                    <span
                      className={`material-symbols-outlined text-2xl transition-colors ${
                        deliveryOption === "pickup"
                          ? "text-primary"
                          : "text-on-surface-variant group-hover:text-primary"
                      }`}
                    >
                      storefront
                    </span>
                    <div className="text-center">
                      <p
                        className={`text-sm font-bold transition-colors ${
                          deliveryOption === "pickup" ? "text-white" : "text-on-surface-variant"
                        }`}
                      >
                        Ambil di Tempat
                      </p>
                      <p className="text-[11px] text-green-400 font-semibold mt-0.5">
                        Gratis
                      </p>
                    </div>
                  </button>

                  {/* Option 2: Delivery */}
                  <button
                    type="button"
                    onClick={() => setDeliveryOption("delivery")}
                    className={`relative flex flex-col items-center gap-2.5 p-4 rounded-2xl border-2 transition-all duration-200 cursor-pointer group ${
                      deliveryOption === "delivery"
                        ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(255,120,82,0.15)]"
                        : "border-outline-variant/20 bg-surface-container-highest hover:border-outline-variant/40"
                    }`}
                  >
                    {deliveryOption === "delivery" && (
                      <span className="absolute top-2 right-2 material-symbols-outlined text-primary text-base">
                        check_circle
                      </span>
                    )}
                    <span
                      className={`material-symbols-outlined text-2xl transition-colors ${
                        deliveryOption === "delivery"
                          ? "text-primary"
                          : "text-on-surface-variant group-hover:text-primary"
                      }`}
                    >
                      local_shipping
                    </span>
                    <div className="text-center">
                      <p
                        className={`text-sm font-bold transition-colors ${
                          deliveryOption === "delivery" ? "text-white" : "text-on-surface-variant"
                        }`}
                      >
                        Diantar
                      </p>
                      <p className="text-[11px] text-secondary font-semibold mt-0.5">
                        + Ongkir
                      </p>
                    </div>
                  </button>
                </div>

                {/* Address field — only visible when Delivery is selected */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-out ${
                    deliveryOption === "delivery"
                      ? "max-h-[200px] opacity-100 mt-1"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <textarea
                    required={deliveryOption === "delivery"}
                    rows={3}
                    placeholder="Alamat lengkap pengiriman"
                    value={formData.alamat}
                    onChange={(e) =>
                      setFormData({ ...formData, alamat: e.target.value })
                    }
                    className="w-full bg-surface-container-highest border border-outline-variant/15 p-3 rounded-xl resize-none focus:border-primary focus:outline-none transition-colors text-white"
                  />
                  <span className="text-[11px] text-secondary flex items-center gap-1 mt-1">
                    <span className="material-symbols-outlined text-secondary text-sm">info</span>
                    Ongkir akan dikonfirmasi via WhatsApp
                  </span>
                </div>
              </div>

              {/* Order Details Preview */}
              <div className="bg-surface-container-highest p-4 rounded-xl flex justify-between items-center mb-4">
                <div className="flex flex-col">
                  <span className="text-xs text-gray-400">Total {totalItems} items</span>
                  <span className="font-bold text-lg text-primary">Rp {formatRupiah(totalPrice)}</span>
                  {deliveryOption === "delivery" && (
                    <span className="text-[10px] text-secondary font-medium mt-0.5">
                      * belum termasuk ongkir
                    </span>
                  )}
                </div>
                {formData.tanggal && (
                  <div className="flex items-center gap-1.5 text-right">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-400 uppercase tracking-widest">Untuk tanggal</span>
                      <span className="text-xs font-bold text-secondary">
                        {formatTanggalIndo(formData.tanggal)}
                      </span>
                    </div>
                  </div>
                )}
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
