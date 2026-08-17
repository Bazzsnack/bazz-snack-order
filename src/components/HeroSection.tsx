"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full">
      {/* Hero Banner Image */}
      <div className="relative w-full aspect-[16/5.5] sm:aspect-[16/6] lg:aspect-[16/5]">
        <Image
          src="/HERO-SECTION.jpg"
          alt="Bazz Snack - Pilih Jajanan Favorit Kamu Sekarang!"
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />

        {/* Clickable overlay for "Pesan Sekarang" area */}
        <a
          href="#menu"
          className="absolute bottom-[8%] left-1/2 -translate-x-1/2 inline-flex justify-center items-center h-12 sm:h-14 px-8 sm:px-10 rounded-full bg-white/90 text-primary font-headline font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-white hover:scale-105 transition-all shadow-xl backdrop-blur-sm"
        >
          PESAN SEKARANG
          <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
        </a>
      </div>
    </section>
  );
}
