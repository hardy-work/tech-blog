import type { Article } from "@/lib/articles";
import fs from "fs";
import path from "path";

function getFeaturedAffiliates(limit = 2): Article[] {
  const dir = path.join(process.cwd(), "content/articles");
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf-8")) as Article)
    .filter((a) => !!a.affiliateCta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

function SponsorCard({ article }: { article: Article }) {
  const { affiliateCta } = article;
  if (!affiliateCta) return null;

  return (
    <div
      className="relative flex flex-col justify-between gap-5 p-6 rounded-2xl overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(79,70,229,0.12) 100%)",
        border: "1px solid rgba(124,58,237,0.35)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute -top-8 -right-8 w-32 h-32 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "#7c3aed" }}
      />

      {/* Badge */}
      <div className="flex items-center gap-2">
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide"
          style={{ background: "rgba(124,58,237,0.3)", color: "#c4b5fd" }}
        >
          Sponsored
        </span>
        <span className="text-xs" style={{ color: "#3f3f46" }}>
          Affiliate partner
        </span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <p className="text-base font-bold leading-snug mb-2" style={{ color: "#fafafa" }}>
          {article.title}
        </p>
        {affiliateCta.description && (
          <p className="text-xs leading-relaxed" style={{ color: "#71717a" }}>
            {affiliateCta.description}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-2">
        <a
          href={affiliateCta.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold text-white transition-all hover:brightness-110"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            boxShadow: "0 0 20px rgba(124,58,237,0.45)",
          }}
        >
          {affiliateCta.label}
        </a>
        <a
          href={`/blog/${article.slug}`}
          className="text-xs text-center transition-colors hover:text-violet-400"
          style={{ color: "#52525b" }}
        >
          Read full article →
        </a>
      </div>
    </div>
  );
}

export default function HomeSponsorBanner() {
  const articles = getFeaturedAffiliates(2);
  if (articles.length === 0) return null;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-4">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span
          className="text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide"
          style={{ background: "rgba(124,58,237,0.15)", color: "#7c3aed", border: "1px solid rgba(124,58,237,0.3)" }}
        >
          ⭐ Partner spotlight
        </span>
      </div>

      <div className={`grid gap-4 ${articles.length === 1 ? "grid-cols-1" : "grid-cols-1 sm:grid-cols-2"}`}>
        {articles.map((article) => (
          <SponsorCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
