import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
import { CartSidebarProvider } from "@/context/CartSidebarContext";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-headline",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bazz Snack — Pusat Jajanan Kekinian",
  description:
    "Pesan risoles kekinian dari Bazz Snack. Tersedia varian Coklat Lumer, Mayo, Mentai, dan Matcha. Rasakan cita rasa premium yang bikin nagih!",
  keywords: [
    "bazz snack",
    "risoles",
    "risoles coklat",
    "risoles mayo",
    "risoles mentai",
    "risoles matcha",
    "snack kekinian",
    "order online",
    "jajanan mojokerto",
  ],
  openGraph: {
    title: "Bazz Snack — Pusat Jajanan Kekinian",
    description:
      "Nikmati berbagai varian risoles premium dari Bazz Snack. Langsung siap antar!",
    type: "website",
    locale: "id_ID",
    url: "https://bazzsnack.com", // Assuming or placeholder, helps SEO
    images: [
      {
        url: "/images/logo_bazzsnack.jpeg", // Features the logo on link share
        width: 800,
        height: 600,
        alt: "Logo Bazz Snack",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${plusJakarta.variable} ${manrope.variable} dark antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
        <CartProvider>
          <CartSidebarProvider>{children}</CartSidebarProvider>
        </CartProvider>
      </body>
    </html>
  );
}
