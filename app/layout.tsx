import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: "%s — CHAEI PUEI Tech",
  },
  description: siteConfig.description,
  keywords: ["tech reviews", "developer tools", "Next.js", "hosting", "productivity", "DevOps", "software"],
  authors: [{ name: "CHAEI PUEI Tech", url: siteConfig.url }],
  creator: "CHAEI PUEI Tech",
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: "nhbsy8R6dVLKySUOUxOeoRqbCqdkK2bG4KL3vx6IBCY" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.twitterHandle,
  },
  alternates: { canonical: siteConfig.url },
  other: {
    "impact-site-verification": "49795dc3-e9b4-49d3-aa8d-d5e4bd2a50fe",
    // Add Bing verification: go to bing.com/webmasters → add site → copy the content value below
    // "msvalidate.01": "YOUR_BING_VERIFICATION_CODE",
    // Add Google Search Console: go to search.google.com/search-console → add property → HTML tag method
    // Then use: verification: { google: "YOUR_GOOGLE_CODE" } in metadata
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
