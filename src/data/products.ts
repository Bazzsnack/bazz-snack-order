export interface Product {
  id: string;
  name: string;
  price: number;
  displayPrice: string;
  description: string;
  image: string | string[];
  badge?: string;
  badgeColor?: string;
  hasFrozen?: boolean;
  onlyFrozen?: boolean;
  frozenBundle?: {
    minQty: number;
    packPrice: number;
  };
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
    hasFrozen: true,
    frozenBundle: { minQty: 5, packPrice: 15000 },
  },
  /*
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
    hasFrozen: true,
    frozenBundle: { minQty: 5, packPrice: 15000 },
  },
  {
    id: "risol-mentai",
    name: "Risoles Mentai",
    price: 3000,
    displayPrice: "Rp 3k",
    description:
      "Dilumuri saus mentai spesial yang di-torch sempurna untuk rasa smokey unik.",
    image: "/gambar_produk/risol_mentai.jpeg",
    hasFrozen: true,
    frozenBundle: { minQty: 5, packPrice: 15000 },
  },
  {
    id: "risol-matcha",
    name: "Risoles Matcha",
    price: 3000,
    displayPrice: "Rp 3k",
    description:
      "Rasa teh hijau Jepang otentik yang dibalut balutan kulit manis dan renyah.",
    image: "/gambar_produk/risol_matcha.png",
    hasFrozen: true,
    frozenBundle: { minQty: 5, packPrice: 15000 },
  },
  {
    id: "risol-mix",
    name: "Paket Mix Risoles (Isi 5)",
    price: 15000,
    displayPrice: "Rp 15k / Box",
    description: "Pilih sendiri 5 varian risoles favoritmu dalam satu box.",
    image: [
      "/gambar_produk/risol_mentai.jpeg",
      "/gambar_produk/risol_coklat.jpeg",
      "/gambar_produk/risol_mayo.jpeg",
    ],
    badge: "Spesial",
    badgeColor: "bg-tertiary",
    hasFrozen: true,
    frozenBundle: { minQty: 5, packPrice: 15000 },
  },
  */
  {
    id: "kebab",
    name: "Kebab",
    price: 10000,
    displayPrice: "Rp 10k",
    description:
      "Kebab lezat dengan isian daging gurih dan saus spesial, dibalut tortilla lembut. Harga Rp 10.000 dapat 3 kebab.",
    image: "/gambar_produk/kebab.png",
    badge: "Baru",
    badgeColor: "bg-primary",
    hasFrozen: true,
  },
  {
    id: "dimsum-box",
    name: "Dimsum Box",
    price: 10000,
    displayPrice: "Rp 10k",
    description:
      "Paket praktis Dimsum Box isi 10 pcs, include dengan 2 saus lezat dan sumpit, siap disajikan dan dinikmati.",
    image: "/gambar_produk/dimsum-box.png",
    hasFrozen: true,
    frozenBundle: {
      minQty: 1,
      packPrice: 10000,
    },
  },
  {
    id: "dimsum-keju",
    name: "Dimsum Keju",
    price: 10000,
    displayPrice: "Rp 10k",
    description:
      "Dimsum ayam gurih dengan topping keju leleh yang lumer di mulut. Harga Rp 10.000 dapat 5 pcs include sauce.",
    image: "/gambar_produk/dimsum-keju.png",
    badge: "Populer",
    badgeColor: "bg-primary",
    hasFrozen: true,
  },
  {
    id: "dimsum-mentai",
    name: "Dimsum Mentai",
    price: 25000,
    displayPrice: "Rp 25k",
    description:
      "Dimsum ayam kukus premium yang diselimuti saus mentai racikan rahasia, dibakar (di-torch) hingga menghasilkan aroma smokey yang wangi dan lumer di mulut.",
    image: "/gambar_produk/dimsum-mentai.png",
    badge: "Populer",
    badgeColor: "bg-secondary",
  },
  {
    id: "bakaran",
    name: "Bakaran",
    price: 10000,
    displayPrice: "Rp 10k",
    description:
      "Harga Rp 10.000 dapat 4 tusuk bakaran kenyal yang dibakar di atas arang hingga gosong sempurna, dilumuri bumbu kacang dan kecap manis.",
    image: "/gambar_produk/bakaran.png",
  },
];
