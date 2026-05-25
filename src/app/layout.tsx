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
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Bazz Snack",
    url: "https://bazz-snack.vercel.app",
    logo: "https://bazz-snack.vercel.app/images/logo_bazzsnack.jpeg",
    description:
      "Pusat jajanan kekinian — Risoles, Dimsum, dan Baso Bakar premium di Mojokerto.",
    sameAs: ["https://www.instagram.com/bazzsnack"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      availableLanguage: "Indonesian",
    },
  };

  const jsonLdWebSite = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Bazz Snack",
    url: "https://bazz-snack.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://bazz-snack.vercel.app/?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "Bazz Snack",
    image: "https://bazz-snack.vercel.app/images/logo_bazzsnack.jpeg",
    url: "https://bazz-snack.vercel.app",
    description:
      "Jajanan kekinian premium — Risoles, Dimsum, dan Baso Bakar. Tersedia Original & Frozen. Pesan langsung via WhatsApp!",
    servesCuisine: "Indonesian Snacks",
    priceRange: "Rp 2.000 - Rp 23.000",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mojokerto",
      addressRegion: "Jawa Timur",
      addressCountry: "ID",
    },
    hasMenu: {
      "@type": "Menu",
      name: "Menu Bazz Snack",
      hasMenuSection: [
        {
          "@type": "MenuSection",
          name: "Risoles",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Risoles Coklat",
              description: "Lumeran coklat premium dalam balutan kulit krispi yang gurih.",
              offers: { "@type": "Offer", price: "3000", priceCurrency: "IDR" },
            },
            {
              "@type": "MenuItem",
              name: "Risoles Mayo",
              description: "Perpaduan creamy mayonnaise, smoked beef, dan telur.",
              offers: { "@type": "Offer", price: "3000", priceCurrency: "IDR" },
            },
            {
              "@type": "MenuItem",
              name: "Risoles Mentai",
              description: "Dilumuri saus mentai spesial yang di-torch sempurna.",
              offers: { "@type": "Offer", price: "3000", priceCurrency: "IDR" },
            },
            {
              "@type": "MenuItem",
              name: "Risoles Matcha",
              description: "Rasa teh hijau Jepang otentik yang manis dan renyah.",
              offers: { "@type": "Offer", price: "3000", priceCurrency: "IDR" },
            },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Dimsum",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Dimsum Box",
              description: "Paket praktis Dimsum Box isi 10 pcs dengan 2 saus.",
              offers: { "@type": "Offer", price: "10000", priceCurrency: "IDR" },
            },
            {
              "@type": "MenuItem",
              name: "Dimsum Keju",
              description: "Dimsum ayam gurih dengan topping keju leleh.",
              offers: { "@type": "Offer", price: "2000", priceCurrency: "IDR" },
            },
            {
              "@type": "MenuItem",
              name: "Dimsum Mentai",
              description: "Dimsum premium diselimuti saus mentai dan di-torch.",
              offers: { "@type": "Offer", price: "23000", priceCurrency: "IDR" },
            },
          ],
        },
        {
          "@type": "MenuSection",
          name: "Baso",
          hasMenuItem: [
            {
              "@type": "MenuItem",
              name: "Baso Bakar",
              description: "Satu tusuk 4 baso kenyal dibakar dengan bumbu kacang.",
              offers: { "@type": "Offer", price: "3000", priceCurrency: "IDR" },
            },
          ],
        },
      ],
    },
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebSite) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }}
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
