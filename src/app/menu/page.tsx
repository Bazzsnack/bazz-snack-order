import ProductSection from "@/components/ProductSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu Jajanan",
  description: "Lihat daftar lengkap menu Bazz Snack. Ada Risoles, Dimsum, dan Baso Bakar yang bisa kamu pesan secara online. Tersedia varian Original siap makan dan Frozen.",
  alternates: {
    canonical: "https://bazz-snack.vercel.app/menu",
  },
};

export default function MenuPage() {
  return (
    <main className="pt-24 pb-32">
      <ProductSection />
    </main>
  );
}
