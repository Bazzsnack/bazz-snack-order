import ReviewsSection from "@/components/ReviewsSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ulasan Pelanggan",
  description: "Apa kata mereka tentang Bazz Snack? Baca testimoni dan ulasan jujur dari ratusan pelanggan setia kami di Mojokerto.",
  alternates: {
    canonical: "https://bazz-snack.vercel.app/ulasan",
  },
};

export default function UlasanPage() {
  return (
    <main className="pt-24 pb-32">
      <ReviewsSection />
    </main>
  );
}
