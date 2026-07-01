import Link from "next/link";

const preview = [
  { icon: "💰", label: "Finance & Crypto", live: true, image: "/images/nexo/nexo-logo.png" },
  { icon: "🚀", label: "Hosting & Deployment", live: false },
  { icon: "🖊️", label: "Code Editors & AI", live: false },
  { icon: "🎨", label: "Design & Prototyping", live: false },
  { icon: "🧩", label: "UI Component Libraries", live: false },
  { icon: "⚙️", label: "DevOps & Infra", live: false },
];

export default function HomeStackSection() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#7c3aed" }}
          >
            Curated picks
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">My Stack</h2>
          <p className="text-sm mt-2 max-w-md" style={{ color: "#a1a1aa" }}>
            Tools, services, and products I actually use — with honest setup
            guides and real-world tips.
          </p>
        </div>
        <Link
          href="/stack"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-white flex-shrink-0"
          style={{ color: "#7c3aed" }}
        >
          See full stack →
        </Link>
      </div>

      {/* Category grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
        {preview.map((cat) => (
          <Link
            key={cat.label}
            href="/stack"
            className="relative flex flex-col items-center gap-2 p-4 rounded-2xl text-center transition-all hover:border-zinc-600 group"
            style={{
              background: cat.live ? "rgba(124,58,237,0.08)" : "#18181b",
              border: cat.live ? "1px solid rgba(124,58,237,0.3)" : "1px solid #27272a",
            }}
          >
            {cat.live && (
              <span
                className="absolute -top-1.5 -right-1.5 text-xs px-1.5 py-0.5 rounded-full font-semibold"
                style={{ background: "#4ade80", color: "#052e16", fontSize: "9px" }}
              >
                LIVE
              </span>
            )}
            {cat.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={cat.image}
                alt={cat.label}
                className="w-8 h-8 object-contain"
                style={{ filter: "invert(1) brightness(0.85)" }}
              />
            ) : (
              <span className="text-2xl">{cat.icon}</span>
            )}
            <span
              className="text-xs font-medium leading-tight"
              style={{ color: cat.live ? "#e4e4e7" : "#a1a1aa" }}
            >
              {cat.label}
            </span>
          </Link>
        ))}
      </div>

      {/* Coming soon callout */}
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-5 rounded-2xl"
        style={{ background: "#111827", border: "1px solid #1e3a5f" }}
      >
        <span className="text-2xl flex-shrink-0">⭐</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold mb-0.5" style={{ color: "#93c5fd" }}>
            Curated recommendations coming soon
          </p>
          <p className="text-xs" style={{ color: "#4b6a9b" }}>
            I&apos;m vetting the tools to feature here — only the ones I genuinely use
            make the cut. Subscribe to get notified when new picks go live.
          </p>
        </div>
        <a
          href="#newsletter"
          className="text-xs px-4 py-2 rounded-lg font-semibold flex-shrink-0 transition-opacity hover:opacity-90 text-white"
          style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
        >
          Notify me
        </a>
      </div>
    </section>
  );
}
