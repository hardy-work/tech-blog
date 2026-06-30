import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Blog",
  description: "All articles on tech reviews, DevOps, productivity, and everything I've learned from hours of testing.",
  alternates: { canonical: `${siteConfig.url}/blog` },
  openGraph: {
    title: "Blog — CHAEI PUEI Tech",
    description: "All articles on tech reviews, DevOps, productivity, and everything I've learned from hours of testing.",
    url: `${siteConfig.url}/blog`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — CHAEI PUEI Tech",
    description: "All articles on tech reviews, DevOps, productivity, and everything I've learned from hours of testing.",
  },
};

const categoryColors: Record<string, string> = {
  DevOps: "#0e7490",
  "Cloud & VPS": "#7c3aed",
  Laptop: "#7c3aed",
  Audio: "#0891b2",
  Productivity: "#059669",
  Peripherals: "#d97706",
  Tablet: "#db2777",
};

const categoryEmoji: Record<string, string> = {
  DevOps: "🐳",
  "Cloud & VPS": "☁️",
  Laptop: "💻",
  Audio: "🎧",
  Productivity: "⚡",
  Peripherals: "🖱️",
  Tablet: "📱",
};

export default function BlogListPage() {
  const articles = getAllArticles();
  const allCategories = ["All", ...Array.from(new Set(articles.map((a) => a.category)))];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#09090b" }}>
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative overflow-hidden py-14 sm:py-20"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.2) 0%, transparent 70%)",
          }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#7c3aed" }}>
              CHAEI PUEI Tech Blog
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">All Articles</h1>
            <p className="text-sm max-w-md mx-auto" style={{ color: "#71717a" }}>
              Product reviews, technical guides, DevOps, and everything I&apos;ve learned after hours of hands-on testing.
            </p>
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-8">
            {allCategories.map((cat) => {
              const color = cat === "All" ? "#7c3aed" : (categoryColors[cat] ?? "#7c3aed");
              return (
                <span
                  key={cat}
                  className="px-4 py-1.5 rounded-full text-sm font-medium border cursor-default"
                  style={{ borderColor: `${color}50`, color, background: `${color}12` }}
                >
                  {cat === "All" ? "All" : `${categoryEmoji[cat] ?? "📄"} ${cat}`}
                </span>
              );
            })}
          </div>

          <p className="text-xs mb-8" style={{ color: "#52525b" }}>
            {articles.length} {articles.length === 1 ? "article" : "articles"}
          </p>

          {/* Featured — first article */}
          {articles[0] && (
            <Link
              href={`/blog/${articles[0].slug}`}
              className="group block rounded-2xl overflow-hidden mb-8 transition-all hover:-translate-y-1"
              style={{ background: "#18181b", border: "1px solid #3f3f46" }}
            >
              <div className="flex flex-col sm:flex-row">
                <div
                  className="sm:w-64 h-48 sm:h-auto shrink-0 flex items-center justify-center text-5xl"
                  style={{ background: "linear-gradient(135deg, #1c1c2e, #27272a)" }}
                >
                  {categoryEmoji[articles[0].category] ?? "📄"}
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: `${categoryColors[articles[0].category] ?? "#7c3aed"}18`,
                        color: categoryColors[articles[0].category] ?? "#7c3aed",
                      }}
                    >
                      {articles[0].category}
                    </span>
                    <span
                      className="text-xs px-2.5 py-1 rounded-full font-semibold"
                      style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa" }}
                    >
                      ✦ Latest
                    </span>
                    {articles[0].tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="text-xs" style={{ color: "#52525b" }}>
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-lg sm:text-xl font-bold mb-2 leading-snug group-hover:text-violet-400 transition-colors">
                    {articles[0].title}
                  </h2>
                  <p className="text-sm leading-relaxed mb-4 line-clamp-2" style={{ color: "#71717a" }}>
                    {articles[0].excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs" style={{ color: "#52525b" }}>
                    <time>
                      {new Date(articles[0].date).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{articles[0].readTime} read</span>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {articles.slice(1).map((article) => {
              const accent = categoryColors[article.category] ?? "#7c3aed";
              const emoji = categoryEmoji[article.category] ?? "📄";
              return (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group block rounded-xl overflow-hidden transition-all hover:-translate-y-1"
                  style={{ background: "#18181b", border: "1px solid #3f3f46" }}
                >
                  <div
                    className="h-40 flex items-center justify-center text-4xl"
                    style={{ background: "linear-gradient(135deg, #1c1c2e, #27272a)" }}
                  >
                    {emoji}
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: `${accent}18`, color: accent }}
                      >
                        {article.category}
                      </span>
                      <span className="text-xs" style={{ color: "#52525b" }}>
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="font-semibold text-sm leading-snug mb-2 line-clamp-2 group-hover:text-violet-400 transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-xs leading-relaxed line-clamp-2 mb-3" style={{ color: "#71717a" }}>
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <time className="text-xs" style={{ color: "#52525b" }}>
                        {new Date(article.date).toLocaleDateString("en-US", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </time>
                      <div className="flex gap-1">
                        {article.tags.slice(0, 2).map((tag) => (
                          <span key={tag} className="text-xs" style={{ color: "#3f3f46" }}>
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
