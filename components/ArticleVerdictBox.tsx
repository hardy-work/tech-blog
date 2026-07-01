import type { VerdictBox } from "@/lib/articles";

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: full }).map((_, i) => (
        <span key={`f${i}`} style={{ color: "#f59e0b" }}>★</span>
      ))}
      {half && <span style={{ color: "#f59e0b" }}>½</span>}
      {Array.from({ length: empty }).map((_, i) => (
        <span key={`e${i}`} style={{ color: "#3f3f46" }}>★</span>
      ))}
      <span className="text-sm font-bold ml-1.5" style={{ color: "#f59e0b" }}>
        {rating}/5
      </span>
    </div>
  );
}

export default function ArticleVerdictBox({ verdict }: { verdict: VerdictBox }) {
  return (
    <div
      className="my-10 rounded-2xl overflow-hidden"
      style={{ border: "1px solid rgba(124,58,237,0.4)" }}
    >
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center justify-between gap-4 flex-wrap"
        style={{
          background: "linear-gradient(135deg, rgba(124,58,237,0.2) 0%, rgba(79,70,229,0.2) 100%)",
          borderBottom: "1px solid rgba(124,58,237,0.3)",
        }}
      >
        <div className="flex items-center gap-3">
          <span
            className="text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-full"
            style={{ background: "rgba(124,58,237,0.3)", color: "#c4b5fd" }}
          >
            Our Verdict
          </span>
          <StarRating rating={verdict.rating} />
        </div>
        <span className="text-xs" style={{ color: "#52525b" }}>
          Reviewer: CHAEI PUEI Tech
        </span>
      </div>

      {/* Body */}
      <div className="px-6 py-5" style={{ background: "#0f0f12" }}>
        <p className="text-sm leading-relaxed mb-5" style={{ color: "#a1a1aa" }}>
          {verdict.summary}
        </p>

        {/* Highlights */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
          {verdict.highlights.map((h) => (
            <li key={h} className="flex items-start gap-2 text-sm">
              <span className="mt-0.5 shrink-0" style={{ color: "#22c55e" }}>✓</span>
              <span style={{ color: "#d4d4d8" }}>{h}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={verdict.ctaUrl}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group flex items-center justify-between gap-4 p-4 rounded-xl transition-all hover:brightness-110"
          style={{
            background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
            boxShadow: "0 0 32px rgba(124,58,237,0.4)",
          }}
        >
          <div>
            <p className="text-sm font-bold text-white">{verdict.ctaLabel}</p>
            <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.65)" }}>
              Affiliate link — I may earn a commission at no cost to you
            </p>
          </div>
          <span className="text-white text-xl transition-transform group-hover:translate-x-1 shrink-0">
            →
          </span>
        </a>
      </div>
    </div>
  );
}
