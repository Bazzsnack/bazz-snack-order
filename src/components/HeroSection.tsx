"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-primary">
      {/* Blurred background to seamlessly extend the top edge */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage: 'url(/hero-section.jpg)',
          backgroundPosition: 'top center',
          backgroundSize: 'cover',
          filter: 'blur(24px)',
          transform: 'scale(1.1) translateY(-2%)',
        }}
      />
      
      {/* Subtle top gradient to ensure navbar readability */}
      <div className="absolute top-0 left-0 w-full h-28 bg-gradient-to-b from-white/40 to-transparent z-10 mix-blend-overlay" />

      {/* Hero Banner Image */}
      <a href="#menu" className="relative w-full block hover:opacity-95 transition-opacity pt-20 z-20">
        <Image
          src="/hero-section.jpg"
          alt="Bazz Snack - Pilih Jajanan Favorit Kamu Sekarang!"
          width={1920}
          height={640}
          sizes="100vw"
          className="w-full h-auto object-contain drop-shadow-xl"
          priority
        />
      </a>
    </section>
  );
}
