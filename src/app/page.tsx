"use client";

import HeroSection from "@/components/HeroSection";
import TrustBanner from "@/components/TrustBanner";
import ProductSection from "@/components/ProductSection";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-20 pb-32">
      <HeroSection />
      <TrustBanner />
      
      <ProductSection limit={4} />

      {/* Quick Link to Menu */}
      <div className="max-w-7xl mx-auto px-6 mt-4 text-center animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <h2 className="font-headline font-bold text-3xl mb-6">Pesan Jajanan Favoritmu Sekarang!</h2>
        <Link 
          href="/menu"
          className="inline-flex items-center gap-2 bg-primary text-on-primary font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform ambient-shadow"
        >
          Lihat Semua Menu
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </main>
  );
}
