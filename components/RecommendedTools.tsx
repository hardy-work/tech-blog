"use client";

import { useState } from "react";
import { tools, toolCategories } from "@/data/tools";

const categoryColors: Record<string, string> = {
  Development: "#7c3aed",
  Design: "#db2777",
  Productivity: "#059669",
  Hardware: "#d97706",
  "AI Tools": "#0891b2",
};

export default function RecommendedTools() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? tools : tools.filter((t) => t.category === active);

  return (
    <section id="tools" className="py-16" style={{ background: "rgba(124,58,237,0.03)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#7c3aed" }}>
            Curated Picks
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">My Recommended Tools</h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: "var(--muted)" }}>
            Everything I actually use. Sorted by how much I&apos;d miss it if it disappeared tomorrow.
          </p>
        </div>

        {/* filter tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {toolCategories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="px-4 py-1.5 rounded-full text-sm font-medium transition-all"
                style={
                  isActive
                    ? {
                        background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                        color: "#fff",
                      }
                    : {
                        background: "var(--card)",
                        color: "var(--muted)",
                        border: "1px solid var(--border)",
                      }
                }
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* tools grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((tool) => {
            const accentColor = categoryColors[tool.category] ?? "#7c3aed";
            return (
              <a
                key={tool.name}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="card p-5 flex gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0"
                  style={{ background: `${accentColor}18` }}
                >
                  {tool.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-0.5">
                    <h3 className="font-semibold text-sm group-hover:text-violet-400 transition-colors">
                      {tool.name}
                    </h3>
                    {tool.affiliate && (
                      <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "rgba(251,191,36,0.12)", color: "#fbbf24" }}>
                        aff
                      </span>
                    )}
                  </div>
                  <p className="text-xs mb-2 italic" style={{ color: "#a78bfa" }}>
                    &ldquo;{tool.tagline}&rdquo;
                  </p>
                  <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--muted)" }}>
                    {tool.description}
                  </p>
                  <div className="flex items-center justify-between mt-3">
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{ background: `${accentColor}15`, color: accentColor }}
                    >
                      {tool.category}
                    </span>
                    <span className="text-xs font-semibold" style={{ color: "#71717a" }}>
                      {tool.price}
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
