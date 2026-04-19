"use client";

import { useState, useEffect, useCallback } from "react";

type Review = {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  product: string;
  date: string;
};

const REVIEWS: Review[] = [
  {
    id: 1,
    name: "Dina Rahmawati",
    avatar: "D",
    rating: 5,
    text: "Risoles coklatnya beneran LUMER di mulut! Kulit luarnya krispi banget, coklatnya premium. Udah order 3x dan nggak pernah kecewa. 🍫🔥",
    product: "Risoles Coklat",
    date: "2 minggu lalu",
  },
  {
    id: 2,
    name: "Fikri Ananda",
    avatar: "F",
    rating: 5,
    text: "Gila sih Risoles Mayo-nya! Smoked beef-nya kerasa, mayo-nya creamy, telurnya juga premium. Ini sih juara snack sore! 🏆",
    product: "Risoles Mayo",
    date: "1 bulan lalu",
  },
  {
    id: 3,
    name: "Sari Utami",
    avatar: "S",
    rating: 5,
    text: "Awalnya ragu pesen frozen, ternyata pas digoreng hasilnya sama aja kaya yang ori. Kriuk sempurna! Stok freezer jadi aman. ❄️",
    product: "Risoles Mentai",
    date: "3 minggu lalu",
  },
  {
    id: 4,
    name: "Bayu Pratama",
    avatar: "B",
    rating: 4,
    text: "Matcha-nya unik banget, nggak pasaran. Rasa teh hijau-nya authentic, nggak kemanisan. Cocok buat yang suka rasa beda. 🍵",
    product: "Risoles Matcha",
    date: "1 minggu lalu",
  },
  {
    id: 5,
    name: "Aisyah Putri",
    avatar: "A",
    rating: 5,
    text: "Langganan tiap minggu buat jajanan anak-anak. Harganya murah, rasanya nggak murahan. The best deh Bazz Snack! 💛",
    product: "Risoles Mayo",
    date: "5 hari lalu",
  },
  {
    id: 6,
    name: "Reza Mahendra",
    avatar: "R",
    rating: 5,
    text: "Mentai-nya gokil! Saus mentai-nya di-torch beneran, jadi ada rasa smokey yang bikin nagih. Auto repeat order! 🔥",
    product: "Risoles Mentai",
    date: "2 hari lalu",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-sm ${
            i < rating ? "text-secondary" : "text-surface-container-highest"
          }`}
          style={i < rating ? { fontVariationSettings: '"FILL" 1' } : {}}
        >
          star
        </span>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Show 3 cards at a time on desktop, 1 on mobile
  const visibleCount = 3;
  const maxIndex = REVIEWS.length - 1;

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goPrev = () => {
    setActiveIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  // Auto-rotate every 4s
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [isPaused, goNext]);

  // Get visible reviews (wrapping around)
  const getVisibleReviews = () => {
    const visible: Review[] = [];
    for (let i = 0; i < visibleCount; i++) {
      visible.push(REVIEWS[(activeIndex + i) % REVIEWS.length]);
    }
    return visible;
  };

  return (
    <section id="reviews" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-highest border border-outline-variant/15 mb-6">
            <span className="material-symbols-outlined text-secondary text-sm">
              reviews
            </span>
            <span className="text-xs font-label uppercase tracking-widest text-secondary">
              Apa Kata Mereka
            </span>
          </div>

          <h2 className="font-headline font-extrabold text-4xl md:text-5xl tracking-tight mb-4 text-white">
            Cerita dari{" "}
            <span className="text-primary italic">Pelanggan</span> Kami
          </h2>
          <p className="text-on-surface-variant max-w-lg">
            Nggak percaya? Baca sendiri ulasan jujur dari ratusan pelanggan
            setia Bazz Snack.
          </p>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-2">
          <button
            onClick={() => {
              goPrev();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 8000);
            }}
            className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all cursor-pointer"
            aria-label="Previous review"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button
            onClick={() => {
              goNext();
              setIsPaused(true);
              setTimeout(() => setIsPaused(false), 8000);
            }}
            className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:text-primary hover:border-primary transition-all cursor-pointer"
            aria-label="Next review"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>

      {/* Review Cards — Desktop Grid */}
      <div
        className="hidden md:grid md:grid-cols-3 gap-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {getVisibleReviews().map((review, i) => (
          <div
            key={`${review.id}-${activeIndex}-${i}`}
            className="bg-surface-container-low rounded-3xl p-8 flex flex-col gap-5 transition-all duration-500 animate-fade-in-card hover:translate-y-[-4px]"
          >
            {/* Rating + Product */}
            <div className="flex items-center justify-between">
              <StarRating rating={review.rating} />
              <span className="text-[10px] font-label uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                {review.product}
              </span>
            </div>

            {/* Review Text */}
            <p className="text-on-surface-variant text-sm leading-relaxed flex-1">
              &ldquo;{review.text}&rdquo;
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 pt-2 border-t border-outline-variant/10">
              <div className="w-10 h-10 rounded-full liquid-fire flex items-center justify-center text-sm font-bold text-black shrink-0">
                {review.avatar}
              </div>
              <div>
                <p className="text-sm font-bold">{review.name}</p>
                <p className="text-xs text-on-surface-variant">
                  {review.date}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Review Cards — Mobile (single card carousel) */}
      <div
        className="md:hidden"
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => {
          setTimeout(() => setIsPaused(false), 6000);
        }}
      >
        <div className="bg-surface-container-low rounded-3xl p-8 flex flex-col gap-5 animate-fade-in-card">
          {/* Rating + Product */}
          <div className="flex items-center justify-between">
            <StarRating rating={REVIEWS[activeIndex].rating} />
            <span className="text-[10px] font-label uppercase tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
              {REVIEWS[activeIndex].product}
            </span>
          </div>

          {/* Review Text */}
          <p className="text-on-surface-variant text-sm leading-relaxed">
            &ldquo;{REVIEWS[activeIndex].text}&rdquo;
          </p>

          {/* Author */}
          <div className="flex items-center gap-3 pt-2 border-t border-outline-variant/10">
            <div className="w-10 h-10 rounded-full liquid-fire flex items-center justify-center text-sm font-bold text-black shrink-0">
              {REVIEWS[activeIndex].avatar}
            </div>
            <div>
              <p className="text-sm font-bold">{REVIEWS[activeIndex].name}</p>
              <p className="text-xs text-on-surface-variant">
                {REVIEWS[activeIndex].date}
              </p>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {REVIEWS.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === activeIndex
                  ? "w-8 bg-primary"
                  : "w-1.5 bg-surface-container-highest"
              }`}
              aria-label={`Go to review ${i + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-16 grid grid-cols-3 gap-4">
        <div className="text-center p-6 rounded-2xl bg-surface-container-low">
          <p className="font-headline font-extrabold text-3xl md:text-4xl text-primary">
            200+
          </p>
          <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mt-2">
            Pelanggan Puas
          </p>
        </div>
        <div className="text-center p-6 rounded-2xl bg-surface-container-low">
          <p className="font-headline font-extrabold text-3xl md:text-4xl text-secondary">
            4.9
          </p>
          <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mt-2">
            Rating Rata-Rata
          </p>
        </div>
        <div className="text-center p-6 rounded-2xl bg-surface-container-low">
          <p className="font-headline font-extrabold text-3xl md:text-4xl text-tertiary">
            3th+
          </p>
          <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant mt-2">
            Dipercaya Sejak
          </p>
        </div>
      </div>
    </section>
  );
}
