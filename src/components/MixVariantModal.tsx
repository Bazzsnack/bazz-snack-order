"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { PRODUCTS } from "@/context/CartContext";

type MixVariantModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (selections: Record<string, number>) => void;
};

export default function MixVariantModal({ isOpen, onClose, onConfirm }: MixVariantModalProps) {
  // Hanya ambil produk risoles biasa (bukan mix)
  const risoles = PRODUCTS.filter((p) => p.id.startsWith("risol-") && p.id !== "risol-mix");

  // State untuk melacak jumlah tiap varian
  const [selections, setSelections] = useState<Record<string, number>>({});
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!isOpen || !mounted) return null;

  const totalSelected = Object.values(selections).reduce((a, b) => a + b, 0);
  const remaining = 5 - totalSelected;

  const handleIncrement = (id: string) => {
    if (totalSelected < 5) {
      setSelections((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    }
  };

  const handleDecrement = (id: string) => {
    if (selections[id] > 0) {
      setSelections((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in">
      <div className="bg-surface-container-low border border-outline-variant/15 w-full max-w-md rounded-[2rem] shadow-2xl relative animate-slide-up flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-6 border-b border-outline-variant/10 shrink-0">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <h2 className="font-headline text-xl font-bold mb-1">Isi Paket Mix</h2>
          <p className="text-sm text-on-surface-variant">
            Pilih 5 buah risoles untuk paket ini. (Sisa: <span className="font-bold text-primary">{remaining}</span>)
          </p>
        </div>

        {/* List Varian */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {risoles.map((risol) => (
            <div key={risol.id} className="flex items-center gap-4 bg-surface-container-highest p-3 rounded-xl">
              <div className="relative w-14 h-14 rounded-lg overflow-hidden shrink-0">
                <Image src={Array.isArray(risol.image) ? risol.image[0] : risol.image} alt={risol.name} fill className="object-cover" />
              </div>
              <div className="flex-1">
                <h4 className="font-headline font-bold text-sm">{risol.name}</h4>
              </div>
              
              {/* Stepper */}
              <div className="flex items-center bg-surface-container rounded-full p-1 border border-outline-variant/20">
                <button
                  onClick={() => handleDecrement(risol.id)}
                  disabled={!selections[risol.id]}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-highest hover:text-primary disabled:opacity-50 disabled:hover:bg-transparent transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">remove</span>
                </button>
                <span className="w-6 text-center text-sm font-bold tabular-nums">
                  {selections[risol.id] || 0}
                </span>
                <button
                  onClick={() => handleIncrement(risol.id)}
                  disabled={totalSelected >= 5}
                  className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container-highest hover:text-primary disabled:opacity-50 disabled:hover:bg-transparent transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">add</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="p-6 border-t border-outline-variant/10 shrink-0">
          <button
            onClick={() => {
              if (totalSelected === 5) {
                onConfirm(selections);
                setSelections({}); // reset
                onClose();
              }
            }}
            disabled={totalSelected < 5}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
              totalSelected === 5
                ? "liquid-fire text-on-primary-fixed cursor-pointer hover:scale-105 active:scale-95 shadow-lg"
                : "bg-surface-container-highest text-on-surface-variant cursor-not-allowed"
            }`}
          >
            {totalSelected === 5 ? (
              <>
                <span className="material-symbols-outlined text-xl">check_circle</span>
                Tambahkan ke Keranjang
              </>
            ) : (
              `Pilih ${remaining} lagi`
            )}
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
