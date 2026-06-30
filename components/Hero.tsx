export default function Hero() {
  const stats = [
    { value: "120+", label: "Products Reviewed" },
    { value: "3M+", label: "Words Written" },
    { value: "50k+", label: "Monthly Readers" },
  ];

  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      {/* background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.25) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* eyebrow */}
        <span
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-6 border"
          style={{
            borderColor: "rgba(124,58,237,0.4)",
            background: "rgba(124,58,237,0.1)",
            color: "#a78bfa",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          Honest, independent reviews
        </span>

        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight leading-tight mb-6">
          Tech reviews you can{" "}
          <span className="gradient-text">actually trust</span>
        </h1>

        <p className="max-w-xl mx-auto text-lg mb-10" style={{ color: "var(--muted)" }}>
          By <span style={{ color: "#22d3ee" }}>CHAEI PUEI Tech</span> — in-depth reviews,
          head-to-head comparisons, and curated tool picks for developers and tech enthusiasts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16">
          <a
            href="/blog"
            className="px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
          >
            Read Latest Reviews
          </a>
          <a
            href="/tools"
            className="px-6 py-3 rounded-xl text-sm font-semibold border transition-colors hover:bg-white/5"
            style={{ borderColor: "var(--border)", color: "#a1a1aa" }}
          >
            My Tool Stack →
          </a>
        </div>

        {/* stats */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold gradient-text">{s.value}</div>
              <div className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
