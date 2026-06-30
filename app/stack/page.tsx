import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "My Stack",
  description:
    "A curated list of tools, services, and products I personally use and recommend — with honest setup guides and real-world tips.",
  alternates: { canonical: `${siteConfig.url}/stack` },
  openGraph: {
    title: "My Stack — CHAEI PUEI Tech",
    description:
      "A curated list of tools, services, and products I personally use and recommend.",
    url: `${siteConfig.url}/stack`,
    type: "website",
  },
};

const categories = [
  {
    id: "hosting",
    icon: "🚀",
    title: "Hosting & Deployment",
    description: "Platforms I trust for shipping web apps and APIs.",
  },
  {
    id: "editors",
    icon: "🖊️",
    title: "Code Editors & AI Coding",
    description: "The editors and AI tools that live in my daily workflow.",
  },
  {
    id: "design",
    icon: "🎨",
    title: "Design & Prototyping",
    description: "Everything from wireframing to shipping pixel-perfect UIs.",
  },
  {
    id: "ui-kits",
    icon: "🧩",
    title: "UI Component Libraries",
    description: "Open-source and premium component systems worth your time.",
  },
  {
    id: "devops",
    icon: "⚙️",
    title: "DevOps & Infrastructure",
    description: "Containers, CI/CD, monitoring, and everything in between.",
  },
  {
    id: "analytics",
    icon: "📊",
    title: "Analytics & SEO",
    description: "Privacy-friendly analytics and tools I use to grow this blog.",
  },
];

function ComingSoonCard() {
  return (
    <div
      className="relative flex items-center gap-4 p-4 rounded-xl"
      style={{
        background: "#111113",
        border: "1px dashed #27272a",
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex-shrink-0"
        style={{ background: "#1c1c1f" }}
      />
      <div className="flex-1 min-w-0">
        <div
          className="h-3 w-28 rounded mb-2"
          style={{ background: "#27272a" }}
        />
        <div className="h-2.5 w-40 rounded" style={{ background: "#1c1c1f" }} />
      </div>
      <span
        className="text-xs px-2 py-0.5 rounded-full flex-shrink-0"
        style={{
          background: "#1c1c1f",
          color: "#52525b",
          border: "1px solid #27272a",
        }}
      >
        Soon
      </span>
    </div>
  );
}

function CategorySection({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="rounded-2xl p-6"
      style={{ background: "#18181b", border: "1px solid #27272a" }}
    >
      <div className="flex items-start gap-4 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
          style={{ background: "#1c1c1f" }}
        >
          {icon}
        </div>
        <div>
          <h3 className="font-semibold text-base" style={{ color: "#fafafa" }}>
            {title}
          </h3>
          <p className="text-sm mt-0.5" style={{ color: "#71717a" }}>
            {description}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <ComingSoonCard />
        <ComingSoonCard />
      </div>
    </div>
  );
}

export default function StackPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pt-16 pb-12">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest mb-4 px-3 py-1.5 rounded-full"
              style={{
                background: "#1c1c1f",
                color: "#7c3aed",
                border: "1px solid #2d2060",
              }}
            >
              ⭐ Curated picks
            </div>
            <h1
              className="text-3xl sm:text-4xl font-bold leading-tight mb-4"
              style={{ color: "#fafafa" }}
            >
              My Stack
            </h1>
            <p
              className="text-base leading-relaxed mb-6"
              style={{ color: "#a1a1aa" }}
            >
              Everything I actually use to build products, run this blog, and get
              things done as a developer. Some links are affiliate links — I&apos;ll
              always call that out clearly, and I only list things I&apos;d genuinely
              recommend.
            </p>
            <div
              className="flex items-start gap-3 p-4 rounded-xl text-sm"
              style={{
                background: "#111827",
                border: "1px solid #1e3a5f",
                color: "#93c5fd",
              }}
            >
              <span className="text-base flex-shrink-0 mt-0.5">🔔</span>
              <p>
                I&apos;m currently vetting tools to add here. Subscribe below to get
                notified when I publish new picks, setup guides, and brand tutorials.
              </p>
            </div>
          </div>
        </section>

        {/* Disclosure */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-10">
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center gap-3 p-4 rounded-xl text-sm"
            style={{ background: "#18181b", border: "1px solid #27272a" }}
          >
            <span className="text-base flex-shrink-0">📢</span>
            <p style={{ color: "#71717a" }}>
              <strong style={{ color: "#a1a1aa" }}>Affiliate Disclosure:</strong>{" "}
              Some links on this page are affiliate links. If you click through and
              make a purchase, I may earn a small commission at no extra cost to
              you. This helps keep the blog running. I only recommend tools I
              genuinely use or find valuable.
            </p>
          </div>
        </section>

        {/* Categories */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => (
              <CategorySection
                key={cat.id}
                icon={cat.icon}
                title={cat.title}
                description={cat.description}
              />
            ))}
          </div>

          <div
            className="mt-12 text-center p-10 rounded-2xl"
            style={{ background: "#18181b", border: "1px solid #27272a" }}
          >
            <p
              className="text-2xl font-bold mb-2"
              style={{ color: "#fafafa" }}
            >
              More picks coming soon
            </p>
            <p className="text-sm mb-6" style={{ color: "#71717a" }}>
              I&apos;m building detailed guides for each tool — setup walkthroughs,
              real-world tips, and honest takes. Subscribe to be the first to
              know.
            </p>
            <a
              href="#newsletter"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              }}
            >
              Notify me when new tools are added →
            </a>
          </div>
        </section>

        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
