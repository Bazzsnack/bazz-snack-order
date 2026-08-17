"use client";

import Image from "next/image";

export default function PromoBanner() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="relative bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center p-8 md:p-12 gap-8">
        {/* Background Texture/Pattern (optional) */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] z-0 pointer-events-none" />
        
        {/* Left Side: Images */}
        <div className="relative w-full md:w-1/2 h-48 sm:h-64 flex justify-center items-center z-10">
          <div className="relative w-40 h-40 sm:w-56 sm:h-56 transform -rotate-6 hover:rotate-0 transition-transform duration-500 z-10">
            <Image
              src="/gambar_produk/dimsum_keju.jpeg"
              alt="Dimsum Keju"
              fill
              className="object-contain drop-shadow-2xl scale-110"
            />
          </div>
          <div className="absolute top-0 right-0 md:right-10 w-32 h-32 sm:w-48 sm:h-48 transform rotate-12 z-0 opacity-80 blur-[2px]">
            <Image
              src="/gambar_produk_new/risol-new.png"
              alt="Risoles"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Side: Text & CTA */}
        <div className="w-full md:w-1/2 text-white text-center md:text-left z-10 relative">
          <h4 className="font-bold text-sm uppercase tracking-widest text-primary-fixed mb-2">
            PROMO SPESIAL!
          </h4>
          <h2 className="font-headline font-bold text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-4 tracking-tight">
            PAKET <br />
            KENYANG!
          </h2>
          <p className="text-primary-container text-lg mb-8 max-w-sm mx-auto md:mx-0">
            Pesan Risoles Mix & Dimsum Box sekaligus untuk teman ngemil seharian. Lebih hemat, lebih puas!
          </p>
          <a
            href="#menu"
            className="inline-flex justify-center items-center h-12 px-8 rounded-full bg-white text-primary font-bold text-sm uppercase tracking-wider hover:bg-gray-100 transition-colors shadow-lg"
          >
            PESAN SEKARANG <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
          </a>
          
          {/* Stamp */}
          <div className="absolute -top-6 -right-2 md:top-auto md:-bottom-4 md:right-4 w-24 h-24 sm:w-28 sm:h-28 bg-white text-primary rounded-full flex flex-col items-center justify-center shadow-2xl border-2 border-primary rotate-12">
            <span className="text-xs font-bold uppercase tracking-wider">Hemat</span>
            <span className="text-2xl font-headline font-bold leading-none">10%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
