import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import { CartProvider } from "@/context/CartContext";
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
  title: "Bazz Snack — The Modern Snack Hub | Premium Risoles",
  description:
    "Order premium risoles online from Bazz Snack. Coklat, Mayo, Mentai, and Matcha flavors. Trusted by 200+ community members. Fast WhatsApp ordering.",
  keywords: [
    "bazz snack",
    "risoles",
    "risoles coklat",
    "risoles mayo",
    "risoles mentai",
    "risoles matcha",
    "snack premium",
    "order online",
    "whatsapp order",
  ],
  openGraph: {
    title: "Bazz Snack — The Modern Snack Hub",
    description:
      "Premium editorial street food. Order risoles online via WhatsApp.",
    type: "website",
    locale: "id_ID",
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
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
