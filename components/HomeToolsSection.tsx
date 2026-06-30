import Link from "next/link";
import { getAllTools } from "@/lib/tools";

const categoryColors: Record<string, string> = {
  Hosting: "#0891b2",
  Editor: "#7c3aed",
  "UI Kits": "#db2777",
  Analytics: "#059669",
  Design: "#d97706",
};

const categoryEmoji: Record<string, string> = {
  Hosting: "🌐",
  Editor: "✏️",
  "UI Kits": "🎨",
  Analytics: "📊",
  Design: "🖌️",
};

export default function HomeToolsSection() {
  const tools = getAllTools().slice(0, 3);

  return (
    <section
      id="tools"
      className="py-16"
      style={{ background: "rgba(8,145,178,0.03)", borderTop: "1px solid #18181b", borderBottom: "1px solid #18181b" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#0891b2" }}>
              Software & Services
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold">My Tool Stack</h2>
            <p className="text-sm mt-1 max-w-sm" style={{ color: "#71717a" }}>
              Tools I use every day to build and ship products — reviewed honestly.
            </p>
          </div>
          <Link
            href="/tools"
            className="hidden sm:inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-white"
            style={{ color: "#71717a" }}
          >
            All tools →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => {
            const color = categoryColors[tool.category] ?? "#0891b2";
            const emoji = categoryEmoji[tool.category] ?? "🔧";
            const full = Math.floor(tool.rating);
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group block rounded-2xl overflow-hidden transition-all hover:-translate-y-1"
                style={{ background: "#18181b", border: "1px solid #27272a" }}
              >
                <div
                  className="h-36 flex items-center justify-center text-4xl relative"
                  style={{ background: `linear-gradient(135deg, ${color}15, ${color}08)`, borderBottom: `1px solid ${color}20` }}
                >
                  <span>{emoji}</span>
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
                  <h3 className="font-bold text-sm mb-1 group-hover:text-violet-400 transition-colors" style={{ color: "#fafafa" }}>
                    {tool.name}
                  </h3>
                  <div className="flex items-center gap-0.5 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-xs" style={{ color: i < full ? "#f59e0b" : "#3f3f46" }}>★</span>
                    ))}
                    <span className="text-xs ml-1" style={{ color: "#71717a" }}>{tool.rating.toFixed(1)}</span>
                  </div>
                  <p className="text-xs line-clamp-2 mb-3" style={{ color: "#71717a" }}>{tool.tagline}</p>
                  <div className="flex items-center justify-between pt-3" style={{ borderTop: "1px solid #27272a" }}>
                    <span className="text-xs font-semibold" style={{ color }}>
                      {tool.pricing[0]?.price ?? "—"}
                    </span>
                    <span className="text-xs font-medium" style={{ color: "#52525b" }}>View details →</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-8 text-center sm:hidden">
          <Link
            href="/tools"
            className="inline-flex px-5 py-2.5 rounded-lg text-sm font-medium border transition-colors"
            style={{ borderColor: "#27272a", color: "#a1a1aa" }}
          >
            All tools →
          </Link>
        </div>
      </div>
    </section>
  );
}
