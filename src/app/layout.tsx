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
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
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
    url: "https://bazz-snack.vercel.app",
    images: [
      {
        url: "https://bazz-snack.vercel.app/images/og_preview.png",
        width: 1200,
        height: 630,
        alt: "Preview Bazz Snack",
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
