import Link from "next/link";
import { getAllArticles } from "@/lib/articles";

const categoryColors: Record<string, string> = {
  Laptop: "#7c3aed",
  Audio: "#0891b2",
  Productivity: "#059669",
  Peripherals: "#d97706",
  Tablet: "#db2777",
  DevOps: "#0e7490",
  "Cloud & VPS": "#7c3aed",
};

const categoryEmoji: Record<string, string> = {
  Laptop: "💻",
  Audio: "🎧",
  Productivity: "⚡",
  Peripherals: "🖱️",
  Tablet: "📱",
  DevOps: "🐳",
  "Cloud & VPS": "☁️",
};

export default function HomeBlogSection() {
  const articles = getAllArticles().slice(0, 3);

  return (
    <section id="blog" className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#7c3aed" }}>
            Latest Articles
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">From the Blog</h2>
          <p className="text-sm mt-1 max-w-sm" style={{ color: "#71717a" }}>
            In-depth guides, honest reviews, and things I learned the hard way.
          </p>
        </div>
        <Link
          href="/blog"
          className="hidden sm:inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-white"
          style={{ color: "#71717a" }}
        >
          All articles →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => {
          const accent = categoryColors[article.category] ?? "#7c3aed";
          const emoji = categoryEmoji[article.category] ?? "📄";
          return (
            <Link
              key={article.slug}
              href={`/blog/${article.slug}`}
              className="group block rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
              style={{ background: "#18181b", border: "1px solid #27272a" }}
            >
              <div
                className="h-40 flex items-center justify-center text-4xl"
                style={{ background: `linear-gradient(135deg, ${accent}12, ${accent}06)` }}
              >
                {emoji}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full"
                    style={{ background: `${accent}18`, color: accent }}
                  >
                    {article.category}
                  </span>
                  <span className="text-xs" style={{ color: "#52525b" }}>{article.readTime} read</span>
                </div>
                <h3 className="font-semibold text-sm leading-snug mb-2 line-clamp-2 group-hover:text-violet-400 transition-colors" style={{ color: "#fafafa" }}>
                  {article.title}
                </h3>
                <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "#71717a" }}>
                  {article.excerpt}
                </p>
                <div className="mt-4 pt-3 flex items-center justify-between" style={{ borderTop: "1px solid #27272a" }}>
                  <time className="text-xs" style={{ color: "#52525b" }}>
                    {new Date(article.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </time>
                  <span className="text-xs font-medium" style={{ color: accent }}>Read →</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link
          href="/blog"
          className="inline-flex px-5 py-2.5 rounded-lg text-sm font-medium border transition-colors"
          style={{ borderColor: "#27272a", color: "#a1a1aa" }}
        >
          All articles →
        </Link>
      </div>
    </section>
  );
}
