import { comparedProducts } from "@/data/products";

const brandEmoji: Record<string, string> = {
  Apple: "🍎",
  Dell: "💻",
  ASUS: "⚡",
};

export default function ComparisonTable() {
  const featureKeys = Object.keys(comparedProducts[0].features);

  return (
    <section id="compare" className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="text-center mb-12">
        <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#7c3aed" }}>
          Side-by-Side
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Laptop Comparison 2026</h2>
        <p className="text-sm max-w-md mx-auto" style={{ color: "var(--muted)" }}>
          MacBook Pro M4 vs Dell XPS 15 vs ASUS ROG Zephyrus — which one fits your workflow?
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border" style={{ borderColor: "var(--border)" }}>
        <table className="w-full text-sm">
          <thead>
            <tr style={{ background: "var(--card)" }}>
              <th className="text-left px-5 py-4 font-semibold text-xs uppercase tracking-wider w-40"
                style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}>
                Feature
              </th>
              {comparedProducts.map((p, i) => (
                <th
                  key={p.name}
                  className="px-5 py-4 text-center"
                  style={{
                    borderBottom: "1px solid var(--border)",
                    borderLeft: "1px solid var(--border)",
                    background: i === 0 ? "rgba(124,58,237,0.06)" : "var(--card)",
                  }}
                >
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-2xl">{brandEmoji[p.brand] ?? "💻"}</span>
                    <span className="font-semibold text-xs leading-tight">{p.name}</span>
                    <span className="font-bold text-sm" style={{ color: i === 0 ? "#a78bfa" : "#60a5fa" }}>
                      {p.price}
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureKeys.map((key, rowIdx) => (
              <tr
                key={key}
                style={{
                  background: rowIdx % 2 === 0 ? "transparent" : "rgba(255,255,255,0.01)",
                }}
              >
                <td
                  className="px-5 py-3 font-medium text-xs"
                  style={{ color: "var(--muted)", borderBottom: "1px solid var(--border)" }}
                >
                  {key}
                </td>
                {comparedProducts.map((p, i) => {
                  const val = p.features[key];
                  return (
                    <td
                      key={p.name}
                      className="px-5 py-3 text-center text-xs"
                      style={{
                        borderBottom: "1px solid var(--border)",
                        borderLeft: "1px solid var(--border)",
                        background: i === 0 ? "rgba(124,58,237,0.03)" : "transparent",
                      }}
                    >
                      {typeof val === "boolean" ? (
                        val ? (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs"
                            style={{ background: "rgba(5,150,105,0.15)", color: "#34d399" }}>
                            ✓
                          </span>
                        ) : (
                          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full text-xs"
                            style={{ background: "rgba(220,38,38,0.12)", color: "#f87171" }}>
                            ✗
                          </span>
                        )
                      ) : (
                        <span style={{ color: "#e4e4e7" }}>{val}</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="text-center mt-4 text-xs" style={{ color: "var(--muted)" }}>
        * Highlighted column is the editor&apos;s pick for most users
      </p>
    </section>
  );
}
