"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full">
      {/* Hero Banner Image */}
      <a href="#menu" className="relative w-full block hover:opacity-95 transition-opacity">
        <Image
          src="/hero-section.jpg"
          alt="Bazz Snack - Pilih Jajanan Favorit Kamu Sekarang!"
          width={1920}
          height={640}
          sizes="100vw"
          className="w-full h-auto object-contain"
          priority
        />
      </a>
    </section>
  );
}
