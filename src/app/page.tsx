"use client";

import HeroSection from "@/components/HeroSection";
import PromoBanner from "@/components/PromoBanner";
import ProductSection from "@/components/ProductSection";
import ReviewsSection from "@/components/ReviewsSection";

export default function Home() {
  return (
    <main className="pt-20 pb-32">
      <div id="home">
        <HeroSection />
        <PromoBanner />
      </div>
      
      <div id="menu">
        <ProductSection />
      </div>

      <div id="ulasan">
        <ReviewsSection />
      </div>
    </main>
  );
}
