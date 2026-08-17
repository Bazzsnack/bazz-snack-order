"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function PromoBanner() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl bg-[#fdf5f1] group">
          
          {/* Full Image */}
          <img
            src="/images/komunitas.jpg"
            alt="Bazz Snack Community"
            className="w-full h-auto block object-cover"
          />

          {/* Absolute Positioned Join Now Button */}
          {/* Posisi disesuaikan agar pas di bawah teks bawaan gambar */}
          <div className="absolute top-[78%] sm:top-[70%] lg:top-[68%] right-[8%] sm:right-[12%] lg:right-[15%] transform -translate-y-1/2">
            <a
              href="#"
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
