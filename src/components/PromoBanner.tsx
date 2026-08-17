"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

export default function PromoBanner() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <ScrollReveal>
        <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-center p-8 md:p-12 gap-8 border border-gray-100">
          
          {/* Left Side: Community Image (Cropped to show phone) */}
          <div className="relative w-full md:w-1/2 h-72 sm:h-80 md:h-[400px] overflow-hidden rounded-2xl bg-[#fdf5f1]">
            <Image
              src="/images/komunitas.jpg"
              alt="Bazz Snack Community"
              fill
              className="object-cover object-left sm:object-[left_-2rem] lg:object-[left_-1rem]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>

          {/* Right Side: Text & Join Now Button */}
          <div className="w-full md:w-1/2 text-center md:text-left z-10 flex flex-col items-center md:items-start md:pl-4">
            <h2 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-primary mb-4 tracking-tight leading-tight">
              Ayo Gabung Komunitas
            </h2>
            <p className="text-gray-800 text-base sm:text-lg lg:text-xl mb-8 font-medium max-w-md leading-relaxed">
              Dan dapatkan kesempatan memenangkan undian bulanan dari Bazz Snack
            </p>
            <a
              href="#"
              className="inline-flex justify-center items-center h-14 px-10 rounded-full bg-primary text-white font-bold text-sm sm:text-base uppercase tracking-wider hover:bg-orange-600 hover:scale-105 hover:shadow-xl transition-all duration-300 shadow-lg shadow-primary/30"
            >
              JOIN NOW
            </a>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
