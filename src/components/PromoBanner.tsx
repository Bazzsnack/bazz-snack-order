"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function PromoBanner() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="relative w-full max-w-5xl mx-auto bg-white group">
          
          {/* Full Image with Multiply blend mode to remove dirty background */}
          <img
            src="/images/komunitas.jpg"
            alt="Bazz Snack Community"
            className="w-full h-auto block object-cover mix-blend-multiply"
          />

          {/* Absolute Positioned Join Now Button */}
          {/* Posisi disesuaikan agar rata kanan (right-aligned) mengikuti ujung teks */}
          <div className="absolute top-[78%] sm:top-[72%] lg:top-[70%] right-[5%] sm:right-[6%] lg:right-[7%] transform -translate-y-1/2">
            <a
              href="https://chat.whatsapp.com/KEXZCHCEJTU6OdCBpKPjQb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center h-10 sm:h-12 lg:h-14 px-6 sm:px-8 lg:px-10 rounded-full bg-primary text-white font-bold text-xs sm:text-sm lg:text-base uppercase tracking-wider hover:bg-orange-600 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg shadow-primary/30"
            >
              JOIN NOW
            </a>
          </div>

        </div>
      </ScrollReveal>
    </section>
  );
}
