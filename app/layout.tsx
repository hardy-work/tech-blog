import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHAEI PUEI Tech — Honest Tech Reviews",
  description:
    "In-depth reviews, product comparisons, and my personal recommended tools for developers and tech enthusiasts.",
  other: {
    "impact-site-verification": "2d65815a-90d1-4fc9-9cd2-582abca3ef10",
  },
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
