import Link from "next/link";
import { getAllTools, getAllToolCategories } from "@/lib/tools";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tools — CHAEI PUEI Tech",
  description: "Tools, hosting, editors, and UI kits I use every day. Honest reviews with clearly marked affiliate links.",
};

const categoryEmoji: Record<string, string> = {
  Hosting: "🌐",
  Editor: "✏️",
  "UI Kits": "🎨",
  Analytics: "📊",
  Design: "🖌️",
  CMS: "📝",
};

const categoryColors: Record<string, string> = {
  Hosting: "#0891b2",
  Editor: "#7c3aed",
  "UI Kits": "#db2777",
  Analytics: "#059669",
  Design: "#d97706",
  CMS: "#0e7490",
};

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="text-xs"
          style={{ color: i < full || (i === full && half) ? "#f59e0b" : "#3f3f46" }}
        >
          {i < full ? "★" : i === full && half ? "★" : "☆"}
        </span>
      ))}
      <span className="text-xs ml-1" style={{ color: "#71717a" }}>
        {rating.toFixed(1)}
      </span>
    </div>
  );
}

export default function ToolsPage() {
  const tools = getAllTools();
  const categories = getAllToolCategories();

  const toolsByCategory = categories.reduce<Record<string, typeof tools>>(
    (acc, cat) => {
      acc[cat] = tools.filter((t) => t.category === cat);
      return acc;
    },
    {}
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#09090b" }}>
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <section
          className="relative overflow-hidden py-14 sm:py-20"
          style={{
            background:
              "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(8,145,178,0.18) 0%, transparent 70%)",
          }}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#0891b2" }}>
              Software & Services
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold mb-4">My Tech Stack</h1>
            <p className="text-sm max-w-lg mx-auto" style={{ color: "#71717a" }}>
              Tools I use every day to build products. Honest reviews, real pricing,
              and affiliate links clearly marked.
            </p>
            <div
              className="inline-flex items-center gap-2 mt-4 px-3 py-1.5 rounded-full text-xs"
              style={{ background: "rgba(8,145,178,0.1)", border: "1px solid rgba(8,145,178,0.25)", color: "#22d3ee" }}
            >
              <span style={{ color: "#0891b2" }}>ℹ</span>
              Links marked &quot;Affiliate&quot; may earn a commission if you sign up through them
            </div>
          </div>
        </section>

        {/* Category nav */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pt-6">
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map((cat) => {
              const color = categoryColors[cat] ?? "#0891b2";
              return (
                <a
                  key={cat}
                  href={`#cat-${cat.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-4 py-1.5 rounded-full text-sm font-medium border transition-colors"
                  style={{ borderColor: `${color}50`, color, background: `${color}12` }}
                >
                  {categoryEmoji[cat] ?? "🔧"} {cat}
                </a>
              );
            })}
          </div>
        </section>

        {/* Tools by category */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20 space-y-16">
          {categories.map((cat) => {
            const catTools = toolsByCategory[cat];
            const color = categoryColors[cat] ?? "#0891b2";
            if (!catTools?.length) return null;

            return (
              <div key={cat} id={`cat-${cat.toLowerCase().replace(/\s+/g, "-")}`}>
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-2xl">{categoryEmoji[cat] ?? "🔧"}</span>
                  <div>
                    <h2 className="text-xl font-bold" style={{ color: "#fafafa" }}>
                      {cat}
                    </h2>
                    <p className="text-xs" style={{ color: "#52525b" }}>
                      {catTools.length} {catTools.length === 1 ? "tool" : "tools"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {catTools.map((tool) => (
                    <Link
                      key={tool.slug}
                      href={`/tools/${tool.slug}`}
                      className="group block rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                      style={{ background: "#18181b", border: "1px solid #27272a" }}
                    >
                      {/* Card image area */}
                      <div
                        className="h-36 flex items-center justify-center text-4xl relative"
                        style={{
                          background: `linear-gradient(135deg, ${color}15, ${color}08)`,
                          borderBottom: `1px solid ${color}20`,
                        }}
                      >
                        <span>{categoryEmoji[tool.category] ?? "🔧"}</span>
                        {tool.badge && (
                          <span
                            className="absolute top-3 right-3 text-xs px-2 py-0.5 rounded-full font-semibold"
                            style={{ background: `${color}25`, color }}
                          >
                            {tool.badge}
                          </span>
                        )}
                        {tool.affiliate && (
                          <span
                            className="absolute top-3 left-3 text-xs px-2 py-0.5 rounded-full"
                            style={{ background: "rgba(251,191,36,0.12)", color: "#fbbf24" }}
                          >
                            Affiliate
                          </span>
                        )}
                      </div>

                      <div className="p-5">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <h3 className="font-bold text-base group-hover:text-violet-400 transition-colors" style={{ color: "#fafafa" }}>
                            {tool.name}
                          </h3>
                        </div>
                        <StarRating rating={tool.rating} />
                        <p className="text-xs mt-2 mb-3 line-clamp-2" style={{ color: "#71717a" }}>
                          {tool.tagline}
                        </p>

                        {/* Min price */}
                        <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid #27272a" }}>
                          <span className="text-xs font-semibold" style={{ color }}>
                            {tool.pricing[0]?.price ?? "—"}
                          </span>
                          <span className="text-xs font-medium" style={{ color: "#52525b" }}>
                            View details →
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>
      </main>

      <Footer />
    </div>
  );
}
