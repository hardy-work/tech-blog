import { getAllArticles } from "@/lib/articles";
import type { Article } from "@/lib/articles";
import fs from "fs";
import path from "path";

function getFeaturedAffiliate(): (Article) | null {
  const files = fs
    .readdirSync(path.join(process.cwd(), "content/articles"))
    .filter((f) => f.endsWith(".json"));

  const articles = files
    .map((f) => {
      const raw = fs.readFileSync(
        path.join(process.cwd(), "content/articles", f),
        "utf-8"
      );
      return JSON.parse(raw) as Article;
    })
    .filter((a) => !!a.affiliateCta)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return articles[0] ?? null;
}

export default function HomeSponsorBanner() {
  const article = getFeaturedAffiliate();
  if (!article || !article.affiliateCta) return null;

  const { affiliateCta } = article;

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-4">
      <a
        href={affiliateCta.url}
        target="_blank"
        rel="noopener noreferrer sponsored"
        className="group relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 sm:p-8 rounded-2xl overflow-hidden transition-all hover:brightness-110"
        style={{
          background:
            "linear-gradient(135deg, rgba(124,58,237,0.22) 0%, rgba(79,70,229,0.22) 50%, rgba(16,14,40,0.9) 100%)",
          border: "1px solid rgba(124,58,237,0.4)",
        }}
      >
        {/* Glow blob */}
        <div
          className="absolute -top-10 -left-10 w-48 h-48 rounded-full blur-3xl opacity-30 pointer-events-none"
          style={{ background: "#7c3aed" }}
        />

        {/* Left */}
        <div className="relative flex items-start gap-4 min-w-0">
          <div
            className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
            style={{ background: "rgba(124,58,237,0.25)", border: "1px solid rgba(124,58,237,0.4)" }}
          >
            💰
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span
                className="text-xs font-semibold px-2 py-0.5 rounded-full uppercase tracking-wide"
                style={{ background: "rgba(124,58,237,0.35)", color: "#c4b5fd" }}
              >
                Sponsored
              </span>
              <span className="text-xs" style={{ color: "#52525b" }}>
                Affiliate partner
              </span>
            </div>
            <p className="text-base sm:text-lg font-bold leading-tight mb-1" style={{ color: "#fafafa" }}>
              {article.title}
            </p>
            {affiliateCta.description && (
              <p className="text-sm" style={{ color: "#a1a1aa" }}>
                {affiliateCta.description}
              </p>
            )}
          </div>
        </div>

        {/* Right: CTA */}
        <div className="relative flex flex-col items-start sm:items-end gap-2 shrink-0">
          <span
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold text-white transition-transform group-hover:scale-105 shadow-lg"
            style={{
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              boxShadow: "0 0 24px rgba(124,58,237,0.5)",
            }}
          >
            {affiliateCta.label}
          </span>
          <span className="text-xs" style={{ color: "#52525b" }}>
            Read full review →
          </span>
        </div>
      </a>
    </section>
  );
}
