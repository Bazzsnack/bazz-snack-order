import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBanner from "@/components/TrustBanner";
import ProductSection from "@/components/ProductSection";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";
import StickyCheckoutBar from "@/components/StickyCheckoutBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20 pb-32">
        <HeroSection />
        <TrustBanner />
        <ProductSection />
      </main>
      <Footer />
      <MobileNav />
      <StickyCheckoutBar />
    </>
  );
}
