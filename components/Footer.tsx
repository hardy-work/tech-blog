export default function Footer() {
  const sections = [
    {
      title: "Content",
      links: [
        { label: "All Reviews", href: "#reviews" },
        { label: "Comparisons", href: "#compare" },
        { label: "Recommended Tools", href: "#tools" },
        { label: "Blog", href: "#blog" },
      ],
    },
    {
      title: "Categories",
      links: [
        { label: "Laptops", href: "#" },
        { label: "Audio", href: "#" },
        { label: "Peripherals", href: "#" },
        { label: "AI Tools", href: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { label: "About Me", href: "#" },
        { label: "Review Process", href: "#" },
        { label: "Affiliate Disclosure", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ];

  return (
    <footer className="mt-auto" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 font-bold text-lg mb-3">
              <span className="text-2xl">🔭</span>
              <span className="gradient-text">TechLens</span>
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Independent tech reviews for developers and enthusiasts who want
              honest opinions, not paid placements.
            </p>
            {/* social */}
            <div className="flex items-center gap-3 mt-5">
              {["𝕏", "📧", "📡"].map((icon) => (
                <button
                  key={icon}
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-colors hover:bg-white/5"
                  style={{ border: "1px solid var(--border)" }}
                  aria-label="social link"
                >
                  {icon}
                </button>
              ))}
            </div>
          </div>

          {sections.map((sec) => (
            <div key={sec.title}>
              <h4 className="text-xs font-semibold uppercase tracking-wider mb-4" style={{ color: "#a1a1aa" }}>
                {sec.title}
              </h4>
              <ul className="space-y-2.5">
                {sec.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors hover:text-white"
                      style={{ color: "var(--muted)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs"
          style={{ borderTop: "1px solid var(--border)", color: "var(--muted)" }}
        >
          <p>© 2026 TechLens. All rights reserved.</p>
          <p>
            Built with{" "}
            <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer"
              className="hover:text-white transition-colors">
              Next.js
            </a>{" "}
            &{" "}
            <a href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer"
              className="hover:text-white transition-colors">
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
