import Link from "next/link";

const highlights = [
  { icon: "⚡", label: "5+ years", sub: "Frontend experience" },
  { icon: "📦", label: "React ecosystem", sub: "React, Next.js, React Native" },
  { icon: "🏢", label: "MOR Software → Freelance", sub: "Led teams, shipped products" },
  { icon: "🎓", label: "FPT University", sub: "Software Engineering, 2022" },
];

export default function HomeAboutSection() {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        {/* Left */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#7c3aed" }}>
            The person behind this blog
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Hi, I&apos;m Vinh</h2>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#a1a1aa" }}>
            Senior frontend developer with 5+ years building React and Next.js products.
            I started CHAEI PUEI Tech because I was tired of reading reviews that felt like marketing copy.
          </p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#71717a" }}>
            Everything here is based on tools I actually use — no sponsored posts, no filler.
            Just honest takes from someone who builds with this stuff every day.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/about"
              className="inline-flex px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
            >
              Read more about me
            </Link>
            <a
              href="mailto:ngvinh.work@gmail.com"
              className="inline-flex px-5 py-2.5 rounded-lg text-sm font-medium border transition-colors hover:bg-white/5"
              style={{ borderColor: "#27272a", color: "#a1a1aa" }}
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="grid grid-cols-2 gap-4">
          {highlights.map((h) => (
            <div
              key={h.label}
              className="p-4 rounded-2xl flex flex-col gap-2"
              style={{ background: "#18181b", border: "1px solid #27272a" }}
            >
              <span className="text-2xl">{h.icon}</span>
              <p className="text-sm font-semibold leading-tight" style={{ color: "#fafafa" }}>{h.label}</p>
              <p className="text-xs" style={{ color: "#52525b" }}>{h.sub}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
