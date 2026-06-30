import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TechLens — Honest Tech Reviews",
  description:
    "In-depth reviews, product comparisons, and my personal recommended tools for developers and tech enthusiasts.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
