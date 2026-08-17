"use client";

import HeroSection from "@/components/HeroSection";
import PromoBanner from "@/components/PromoBanner";
import ProductSection from "@/components/ProductSection";


export default function Home() {
  return (
    <main className="pt-20 pb-32">
      <div id="home">
        <HeroSection />
      </div>
      
      <div id="menu">
        <ProductSection />
        <PromoBanner />
      </div>


    </main>
  );
}
