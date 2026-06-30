import Image from "next/image";

export default function Navbar() {
  const links = [
    { label: "My Stack", href: "/stack" },
    { label: "Blog", href: "/blog" },
    { label: "Tools", href: "/tools" },
    { label: "About", href: "/about" },
  ];

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md border-b"
      style={{ borderColor: "var(--border)", background: "rgba(9,9,11,0.85)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="CHAEI PUEI Tech"
            width={100}
            height={100}
            className="h-10 w-auto object-contain"
            priority
          />
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm transition-colors hover:text-white"
              style={{ color: "var(--muted)" }}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#newsletter"
          className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
          style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
        >
          Subscribe
        </a>
      </div>
    </header>
  );
}
