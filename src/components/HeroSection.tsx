"use client";

import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 px-6 overflow-hidden bg-background">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        {/* Abstract Red Splash (Burger Bite style) */}
        <div className="absolute top-0 right-0 w-full lg:w-[60%] h-full bg-primary/10 rounded-bl-[100px] lg:rounded-bl-[300px] transform rotate-12 scale-150 origin-top-right blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[70vh]">
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left pt-10">
            {/* Tagline */}
            <div className="inline-block text-primary font-bold tracking-widest text-sm uppercase mb-4 animate-slide-up">
              Jajanan Kekinian, Harga Teman.
            </div>

            {/* Headline */}
            <h1 className="font-headline font-bold text-6xl sm:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-tighter mb-6 text-on-surface uppercase animate-slide-up" style={{ animationDelay: "0.1s" }}>
              PUSAT <span className="text-primary">JAJANAN</span><br />
              KEKINIAN!
            </h1>

            {/* Subtitle */}
            <p className="text-on-surface-variant text-lg max-w-md leading-relaxed mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              Nikmati ragam pilihan jajanan kekinian lezat yang siap memanjakan lidahmu. Dibuat fresh, khusus untukmu.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center lg:justify-start mb-12 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="#menu"
                className="inline-flex justify-center items-center h-14 px-8 rounded-full bg-primary text-white font-bold text-sm uppercase tracking-wider hover:bg-primary-dim transition-colors shadow-lg shadow-primary/30"
              >
                Order Sekarang <span className="material-symbols-outlined ml-2 text-sm">arrow_forward</span>
              </a>
              <a
                href="#menu"
                className="inline-flex justify-center items-center h-14 px-8 rounded-full border-2 border-primary text-primary font-bold text-sm uppercase tracking-wider hover:bg-primary-container transition-colors"
              >
                Lihat Menu
              </a>
            </div>

            {/* Features */}
            <div className="flex items-center justify-center lg:justify-start gap-8 lg:gap-12 animate-slide-up w-full" style={{ animationDelay: "0.4s" }}>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-3xl text-primary">local_fire_department</span>
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface">Selalu Hangat</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-3xl text-primary">local_dining</span>
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface">Bahan Premium</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="material-symbols-outlined text-3xl text-primary">delivery_dining</span>
                <span className="text-xs font-bold uppercase tracking-wider text-on-surface">Pesan Antar</span>
              </div>
            </div>
          </div>

          {/* Image Content */}
          <div className="relative w-full flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            {/* Red brush/blob behind image */}
            <div className="absolute inset-0 bg-primary/90 transform rotate-[-5deg] rounded-[40px] scale-90 lg:scale-95 origin-center z-0" />
            
            <div className="relative w-full max-w-lg aspect-square z-10 flex items-center justify-center p-8">
              <Image
                src="/gambar_produk/risol_coklat.jpeg"
                alt="Signature Risoles"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain drop-shadow-2xl scale-110"
                priority
              />
              
              {/* Badge */}
              <div className="absolute -top-6 -right-6 lg:-top-10 lg:-left-10 w-32 h-32 bg-white rounded-full flex flex-col items-center justify-center shadow-xl border-4 border-dashed border-primary rotate-12 z-20">
                <span className="text-3xl font-headline font-bold text-on-surface leading-none">100%</span>
                <span className="text-sm font-bold text-primary uppercase text-center leading-tight mt-1">Enak &<br/>Halal</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
