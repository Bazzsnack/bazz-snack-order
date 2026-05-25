export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: "risol-coklat",
    name: "Risoles Coklat",
    price: 5000,
    description: "Lumeran coklat premium dalam balutan kulit krispi yang gurih.",
    image: "/gambar_produk/risol_coklat.jpeg",
    badge: "New",
  },
  {
    id: "risol-mayo",
    name: "Risoles Mayo",
    price: 6000,
    description:
      "Mayonnaise creamy berpadu dengan smoked beef dan telur berkualitas.",
    image: "/gambar_produk/risol_mayo.jpeg",
    badge: "Bestseller",
  },
  {
    id: "risol-mentai",
    name: "Risoles Mentai",
    price: 7000,
    description:
      "Saus mentai spesial yang di-torch sempurna untuk rasa smokey yang unik.",
    image: "/gambar_produk/risol_mentai.jpeg",
  },
  {
    id: "risol-matcha",
    name: "Risoles Matcha",
    price: 6000,
    description:
      "Rasa teh hijau Jepang yang otentik dalam balutan risoles manis.",
    image: "/gambar_produk/risol_matcha.png",
  },
  {
    id: "dimsum-box",
    name: "Dimsum Box",
    price: 10000,
    description:
      "Paket praktis Dimsum Box isi 10 pcs , include dengan 2 saus lezat dan sumpit, siap disajikan dan dinikmati oleh semua kalangan.",
    image: "/gambar_produk/dimsum-box.jpg",
  },
];
