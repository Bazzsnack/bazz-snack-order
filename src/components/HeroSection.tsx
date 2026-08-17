"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full">
      {/* Hero Banner Image */}
      <div className="relative w-full">
        <Image
          src="/hero-section.jpg"
          alt="Bazz Snack - Pilih Jajanan Favorit Kamu Sekarang!"
          width={1920}
          height={640}
          sizes="100vw"
          className="w-full h-auto object-contain"
          priority
        />

        {/* Clickable overlay for "Pesan Sekarang" area */}
        <a
          href="#menu"
          className="absolute bottom-[10%] sm:bottom-[15%] left-1/2 -translate-x-1/2 inline-flex justify-center items-center h-10 sm:h-14 px-6 sm:px-10 rounded-full bg-white/95 text-primary font-headline font-bold text-xs sm:text-base uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-xl backdrop-blur-sm"
        >
          PESAN SEKARANG
          <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
        </a>
      </div>
    </section>
  );
}
