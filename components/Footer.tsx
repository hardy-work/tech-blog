import Image from "next/image";

export default function Footer() {
  const sections = [
    {
      title: "Content",
      links: [
        { label: "My Stack", href: "/stack" },
        { label: "Blog", href: "/blog" },
        { label: "Tools", href: "/tools" },
        { label: "About", href: "/about" },
      ],
    },
    {
      title: "Categories",
      links: [
        { label: "Laptops", href: "/blog" },
        { label: "DevOps", href: "/blog" },
        { label: "Productivity", href: "/blog" },
        { label: "Hosting", href: "/tools" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "ngvinh.work@gmail.com", href: "mailto:ngvinh.work@gmail.com" },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/nguyen-vinh-243142327" },
      ],
    },
  ];

  return (
    <footer className="mt-auto" style={{ borderTop: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* brand */}
          <div className="col-span-2 lg:col-span-1">
            <a href="/" className="inline-block mb-3">
              <Image
                src="/logo.png"
                alt="CHAEI PUEI Tech"
                width={120}
                height={120}
                className="h-14 w-auto object-contain"
              />
            </a>
            <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
              Independent tech reviews for developers and enthusiasts who want
              honest opinions, not paid placements.
            </p>
            {/* social */}
            <div className="flex items-center gap-3 mt-5">
              <a
                href="mailto:ngvinh.work@gmail.com"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm transition-colors hover:bg-white/5"
                style={{ border: "1px solid var(--border)" }}
                aria-label="Email"
              >
                📧
              </a>
              <a
                href="https://www.linkedin.com/in/nguyen-vinh-243142327"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold transition-colors hover:bg-white/5"
                style={{ border: "1px solid var(--border)", color: "#0a66c2" }}
                aria-label="LinkedIn"
              >
                in
              </a>
            </div>
          </div>

          {sections.map((sec) => (
            <div key={sec.title}>
              <h4
                className="text-xs font-semibold uppercase tracking-wider mb-4"
                style={{ color: "#a1a1aa" }}
              >
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
          <p>© 2026 CHAEI PUEI Tech. All rights reserved.</p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Next.js
            </a>{" "}
            &{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
