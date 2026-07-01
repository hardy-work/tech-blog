import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";
import { getAllTools } from "@/lib/tools";
import { siteConfig } from "@/lib/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${base}/blog`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${base}/stack`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/tools`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
  ];

  const nexoSlugs = new Set(["nexo-review-earn-crypto", "nexo-vs-competitors-2026"]);
  const allArticles = getAllArticles();
  const articleRoutes: MetadataRoute.Sitemap = [
    ...allArticles.filter((a) => nexoSlugs.has(a.slug)),
    ...allArticles.filter((a) => !nexoSlugs.has(a.slug)),
  ].map((a) => ({
    url: `${base}/blog/${a.slug}`,
    lastModified: new Date(a.date),
    changeFrequency: "monthly",
    priority: nexoSlugs.has(a.slug) ? 0.95 : 0.8,
  }));

  const toolRoutes: MetadataRoute.Sitemap = getAllTools().map((t) => ({
    url: `${base}/tools/${t.slug}`,
    lastModified: new Date(t.date),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...staticRoutes, ...articleRoutes, ...toolRoutes];
}
