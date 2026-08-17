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
    id: "risoles",
    name: "Risoles",
    price: 15000,
    displayPrice: "Rp 15k / 5 pcs",
    description: "Nikmati berbagai pilihan rasa risoles favoritmu (bisa di-mix) dalam satu box yang menggugah selera.",
    image: "/gambar_produk/risol-new.png",
    badge: "Spesial",
    badgeColor: "bg-tertiary",
    hasFrozen: true,
  },
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
