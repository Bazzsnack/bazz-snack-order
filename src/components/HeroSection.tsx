"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden px-6 max-w-7xl mx-auto pt-32 pb-20 lg:pt-20"
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        {/* Left Content */}
        <div className="z-10 space-y-8 animate-slide-up">
          {/* Heading */}
          <h1 className="font-headline font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9]">
            Pusat{" "}
            <span className="text-transparent bg-clip-text liquid-fire">
              Jajanan
            </span>
            <br />
            Kekinian
          </h1>

          {/* Subtitle */}
          <p className="text-on-surface-variant text-lg md:text-xl max-w-md leading-relaxed">
            Selamat datang di Bazz Snack! Nikmati ragam pilihan jajanan kekinian lezat yang siap memanjakan lidahmu. Terbukti memuaskan ratusan pelanggan selama lebih dari 3 tahun !
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full">
            <Link
              href="/#menu"
              className="liquid-fire w-full sm:w-auto text-center text-on-primary-fixed font-bold px-8 py-4 rounded-xl ambient-shadow hover:scale-105 active:scale-95 transition-transform"
            >
              Order Sekarang
            </Link>
            <Link
              href="/#menu"
              className="w-full sm:w-auto text-center px-8 py-4 rounded-xl border border-outline-variant/30 text-primary font-bold hover:bg-surface-container-low transition-all"
            >
              Lihat Menu
            </Link>
          </div>
        </div>

        {/* Right Hero Image */}
        <div className="relative hidden lg:block">
          {/* Image Card */}
          <div className="relative rounded-[2rem] overflow-hidden aspect-square border-4 border-surface-container-highest animate-float-hero">
            <Image
              src="/gambar_produk/risol_coklat.jpeg"
              alt="Signature Risoles"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {/* Testimonial Card */}
          <div className="absolute -bottom-10 -left-10 bg-surface-container-high/80 backdrop-blur-xl p-6 rounded-2xl border border-outline-variant/15 shadow-2xl max-w-xs animate-float">
            <p className="text-sm font-label text-secondary-fixed mb-2 italic">
              &ldquo;Risoles paling enak di kota ini. Titik.&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary-container" />
              <span className="text-xs font-bold">
                Pelanggan Setia
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
