import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHAEI PUEI Tech — Honest Tech Reviews",
  description:
    "In-depth reviews, product comparisons, and my personal recommended tools for developers and tech enthusiasts.",
  other: {
    "impact-site-verification": "2acd882b-7451-49b5-a6a4-40f1a8cbfe04",
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
