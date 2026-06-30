export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  image: string;
  featured?: boolean;
}

export const blogs: BlogPost[] = [
  {
    slug: "macbook-pro-m4-review",
    title: "MacBook Pro M4 Review: Is It Worth the Upgrade?",
    excerpt:
      "After 3 months of daily use, here's my honest take on Apple's latest M4 chip — from compile times to battery life in the real world.",
    category: "Laptop",
    readTime: "8 min",
    date: "2026-06-15",
    image: "/images/macbook-m4.jpg",
    featured: true,
  },
  {
    slug: "sony-wh1000xm6-review",
    title: "Sony WH-1000XM6: Still the ANC King in 2026?",
    excerpt:
      "Sony's flagship noise-cancelling headphones get a serious upgrade. I tested them on 12 flights — here's what changed and what didn't.",
    category: "Audio",
    readTime: "6 min",
    date: "2026-06-08",
    image: "/images/sony-xm6.jpg",
    featured: true,
  },
  {
    slug: "notion-vs-obsidian-2026",
    title: "Notion vs Obsidian in 2026: Which One Should You Use?",
    excerpt:
      "I've used both tools for 2 years. This is the definitive breakdown for developers, writers, and knowledge workers.",
    category: "Productivity",
    readTime: "10 min",
    date: "2026-05-28",
    image: "/images/notion-obsidian.jpg",
    featured: true,
  },
  {
    slug: "logitech-mx-master-3s-review",
    title: "Logitech MX Master 3S Long-Term Review",
    excerpt:
      "Six months with the MX Master 3S as my daily driver. Spoiler: the quiet clicks are worth every penny.",
    category: "Peripherals",
    readTime: "5 min",
    date: "2026-05-10",
    image: "/images/mx-master.jpg",
  },
  {
    slug: "ipad-pro-m4-vs-surface-pro",
    title: "iPad Pro M4 vs Surface Pro 11 for Developers",
    excerpt:
      "Can you actually code on these tablets in 2026? I tried both for a month and the answer might surprise you.",
    category: "Tablet",
    readTime: "9 min",
    date: "2026-04-22",
    image: "/images/tablet-comparison.jpg",
  },
  {
    slug: "best-mechanical-keyboards-2026",
    title: "Best Mechanical Keyboards for Programmers (2026 Edition)",
    excerpt:
      "After testing 8 keyboards over 6 months, these are the ones that passed the cut for typing-heavy workloads.",
    category: "Peripherals",
    readTime: "7 min",
    date: "2026-04-05",
    image: "/images/keyboards.jpg",
  },
];
