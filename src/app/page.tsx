"use client";

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBanner from "@/components/TrustBanner";
import ProductSection from "@/components/ProductSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import StickyCheckoutBar from "@/components/StickyCheckoutBar";
import CartSidebar from "@/components/CartSidebar";
import { useCartSidebar } from "@/context/CartSidebarContext";

export default function Home() {
  const { isSidebarOpen, closeSidebar } = useCartSidebar();

  return (
    <>
      <Navbar />
      <main className="pt-20 pb-32">
        <HeroSection />
        <TrustBanner />
        <ProductSection />
        <ReviewsSection />
      </main>
      <Footer />
      <MobileNav />
      <StickyCheckoutBar />
      <CartSidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
    </>
  );
}
