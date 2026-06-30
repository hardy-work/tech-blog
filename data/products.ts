export interface Review {
  slug: string;
  name: string;
  brand: string;
  category: string;
  price: string;
  rating: number;
  badge?: "Editor's Pick" | "Best Value" | "Top Rated";
  summary: string;
  pros: string[];
  cons: string[];
  image: string;
}

export interface ComparedProduct {
  name: string;
  brand: string;
  price: string;
  image: string;
  features: Record<string, string | boolean>;
}

export const reviews: Review[] = [
  {
    slug: "macbook-pro-m4",
    name: "MacBook Pro 14\" M4 Pro",
    brand: "Apple",
    category: "Laptop",
    price: "$1,999",
    rating: 4.8,
    badge: "Editor's Pick",
    summary:
      "The M4 Pro chip makes this the fastest laptop I've ever tested. Incredible performance-per-watt, outstanding display, but the price remains a tough pill to swallow.",
    pros: [
      "M4 Pro chip dominates benchmarks",
      "20-hour real-world battery life",
      "Liquid Retina XDR display is stunning",
      "Silent under light-moderate workloads",
    ],
    cons: [
      "Expensive starting price",
      "Only 2 Thunderbolt ports on base model",
      "No SD card slot upgrade since M2",
    ],
    image: "/images/macbook-m4.jpg",
  },
  {
    slug: "dell-xps-15-2026",
    name: "Dell XPS 15 (2026)",
    brand: "Dell",
    category: "Laptop",
    price: "$1,599",
    rating: 4.3,
    badge: "Best Value",
    summary:
      "The XPS 15 remains a Windows powerhouse — upgradeable RAM, excellent keyboard, and a gorgeous OLED panel. Thermal throttling under sustained loads is still a concern.",
    pros: [
      "Upgradeable RAM and SSD",
      "Gorgeous OLED display option",
      "Great keyboard and trackpad",
      "More ports than MacBook",
    ],
    cons: [
      "Thermal throttling under load",
      "Fan noise under heavy workloads",
      "Mediocre battery (compared to MacBook)",
    ],
    image: "/images/dell-xps.jpg",
  },
  {
    slug: "sony-wh1000xm6",
    name: "WH-1000XM6",
    brand: "Sony",
    category: "Headphones",
    price: "$399",
    rating: 4.9,
    badge: "Top Rated",
    summary:
      "Sony's best headphones yet. The new ANC processor is genuinely jaw-dropping — on a crowded flight you'd swear the engines shut off. Sound quality and comfort are class-leading.",
    pros: [
      "Industry-best ANC in 2026",
      "30-hour battery with ANC on",
      "Incredibly comfortable for long sessions",
      "Multipoint Bluetooth (3 devices)",
    ],
    cons: ["Touch controls take getting used to", "No IP rating for sweat/rain"],
    image: "/images/sony-xm6.jpg",
  },
];

export const comparedProducts: ComparedProduct[] = [
  {
    name: 'MacBook Pro 14" M4 Pro',
    brand: "Apple",
    price: "$1,999",
    image: "/images/macbook-m4.jpg",
    features: {
      "Processor": "Apple M4 Pro",
      "RAM": "24 GB (unified)",
      "Storage": "512 GB SSD",
      "Display": "14.2\" Liquid Retina XDR",
      "Battery Life": "~20 hours",
      "Weight": "1.61 kg",
      "Thunderbolt Ports": "3",
      "SD Card Slot": true,
      "HDMI Port": true,
      "Upgradeable RAM": false,
      "Windows Support": false,
    },
  },
  {
    name: "Dell XPS 15 (2026)",
    brand: "Dell",
    price: "$1,599",
    image: "/images/dell-xps.jpg",
    features: {
      "Processor": "Intel Core Ultra 9 285H",
      "RAM": "16 GB DDR5",
      "Storage": "512 GB NVMe",
      "Display": "15.6\" OLED 3.5K",
      "Battery Life": "~10 hours",
      "Weight": "1.86 kg",
      "Thunderbolt Ports": "2",
      "SD Card Slot": true,
      "HDMI Port": true,
      "Upgradeable RAM": true,
      "Windows Support": true,
    },
  },
  {
    name: "ASUS ROG Zephyrus G16",
    brand: "ASUS",
    price: "$1,799",
    image: "/images/asus-rog.jpg",
    features: {
      "Processor": "AMD Ryzen AI 9 HX 370",
      "RAM": "32 GB DDR5",
      "Storage": "1 TB NVMe",
      "Display": "16\" QHD+ 240Hz OLED",
      "Battery Life": "~8 hours",
      "Weight": "1.72 kg",
      "Thunderbolt Ports": "1",
      "SD Card Slot": false,
      "HDMI Port": true,
      "Upgradeable RAM": true,
      "Windows Support": true,
    },
  },
];
