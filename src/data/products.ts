export interface Product {
  id: string;
  name: string;
  price: number;
  displayPrice: string;
  description: string;
  image: string;
  badge?: string;
  badgeColor?: string;
}

export const products: Product[] = [
  {
    id: "risol-coklat",
    name: "Risoles Coklat",
    price: 3000,
    displayPrice: "Rp 3k",
    description: "Lumeran coklat premium dalam balutan kulit krispi yang gurih.",
    image: "/gambar_produk/risol_coklat.jpeg",
    badge: "Baru",
    badgeColor: "bg-primary",
  },
  {
    id: "risol-mayo",
    name: "Risoles Mayo",
    price: 3000,
    displayPrice: "Rp 3k",
    description:
      "Perpaduan creamy mayonnaise, smoked beef, dan telur berkualitas pilihan.",
    image: "/gambar_produk/risol_mayo.jpeg",
    badge: "Terlaris",
    badgeColor: "bg-secondary",
  },
  {
    id: "risol-mentai",
    name: "Risoles Mentai",
    price: 3000,
    displayPrice: "Rp 3k",
    description:
      "Dilumuri saus mentai spesial yang di-torch sempurna untuk rasa smokey unik.",
    image: "/gambar_produk/risol_mentai.jpeg",
  },
  {
    id: "risol-matcha",
    name: "Risoles Matcha",
    price: 3000,
    displayPrice: "Rp 3k",
    description:
      "Rasa teh hijau Jepang otentik yang dibalut balutan kulit manis dan renyah.",
    image: "/gambar_produk/risol_matcha.png",
  },
  {
    id: "dimsum-box",
    name: "Dimsum Box",
    price: 10000,
    displayPrice: "Rp 10k",
    description:
      "Paket praktis Dimsum Box isi 10 pcs, include dengan 2 saus lezat dan sumpit, siap disajikan dan dinikmati.",
    image: "/gambar_produk/dimsum-box.jpg",
  },
];
