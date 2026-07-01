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

interface StackTool {
  name: string;
  icon: string;
  logoImage?: string;
  tagline: string;
  stat?: string;
  url: string;
  articleUrl?: string;
  isAffiliate?: boolean;
}

interface Category {
  id: string;
  icon: string;
  title: string;
  description: string;
  tools?: StackTool[];
}

const categories: Category[] = [
  {
    id: "finance",
    icon: "💰",
    title: "Finance & Crypto",
    description: "Tools I use to manage and grow my crypto holdings.",
    tools: [
      {
        name: "Nexo",
        icon: "💎",
        logoImage: "/images/nexo/nexo-logo.png",
        tagline: "Earn up to 14% APY on crypto & stablecoins. No lock-up.",
        stat: "14% APY",
        url: "https://nexo.sjv.io/c/7446760/918878/12544",
        articleUrl: "/blog/nexo-review-earn-crypto",
        isAffiliate: true,
      },
    ],
  },
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
      style={{ background: "#111113", border: "1px dashed #27272a" }}
    >
      <div className="w-10 h-10 rounded-lg shrink-0" style={{ background: "#1c1c1f" }} />
      <div className="flex-1 min-w-0">
        <div className="h-3 w-28 rounded mb-2" style={{ background: "#27272a" }} />
        <div className="h-2.5 w-40 rounded" style={{ background: "#1c1c1f" }} />
      </div>
      <span
        className="text-xs px-2 py-0.5 rounded-full shrink-0"
        style={{ background: "#1c1c1f", color: "#52525b", border: "1px solid #27272a" }}
      >
        Soon
      </span>
    </div>
  );
}

function ToolCard({ tool }: { tool: StackTool }) {
  return (
    <div
      className="flex items-start gap-4 p-4 rounded-xl"
      style={{ background: "#111113", border: "1px solid #27272a" }}
    >
      {/* Icon / Logo */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl shrink-0 overflow-hidden"
        style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.25)" }}
      >
        {tool.logoImage ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={tool.logoImage}
            alt={tool.name}
            className="w-6 h-6 object-contain"
            style={{ filter: "invert(1) brightness(0.9)" }}
          />
        ) : (
          tool.icon
        )}
      </div>

      {/* Info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-0.5">
          <span className="text-sm font-semibold" style={{ color: "#fafafa" }}>
            {tool.name}
          </span>
          {tool.stat && (
            <span
              className="text-xs px-1.5 py-0.5 rounded font-medium"
              style={{ background: "rgba(34,197,94,0.12)", color: "#4ade80", border: "1px solid rgba(34,197,94,0.2)" }}
            >
              {tool.stat}
            </span>
          )}
          {tool.isAffiliate && (
            <span
              className="text-xs px-1.5 py-0.5 rounded font-medium"
              style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa" }}
            >
              Affiliate
            </span>
          )}
        </div>
        <p className="text-xs leading-relaxed" style={{ color: "#71717a" }}>
          {tool.tagline}
        </p>
        {tool.articleUrl && (
          <a
            href={tool.articleUrl}
            className="text-xs mt-1 inline-block transition-colors hover:text-violet-400"
            style={{ color: "#52525b" }}
          >
            Read full review →
          </a>
        )}
      </div>

      {/* CTA */}
      <a
        href={tool.url}
        target="_blank"
        rel={tool.isAffiliate ? "noopener noreferrer sponsored" : "noopener noreferrer"}
        className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-bold text-white transition-all hover:brightness-110"
        style={{
          background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
          boxShadow: "0 0 12px rgba(124,58,237,0.35)",
        }}
      >
        Try it →
      </a>
    </div>
  );
}

function CategorySection({ cat }: { cat: Category }) {
  const hasTools = cat.tools && cat.tools.length > 0;

  return (
    <div
      className="rounded-2xl p-6"
      style={{
        background: "#18181b",
        border: hasTools ? "1px solid rgba(124,58,237,0.3)" : "1px solid #27272a",
      }}
    >
      <div className="flex items-start gap-4 mb-5">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
          style={{
            background: hasTools ? "rgba(124,58,237,0.15)" : "#1c1c1f",
            border: hasTools ? "1px solid rgba(124,58,237,0.25)" : "none",
          }}
        >
          {cat.icon}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-semibold text-base" style={{ color: "#fafafa" }}>
              {cat.title}
            </h3>
            {hasTools && (
              <span
                className="text-xs px-1.5 py-0.5 rounded-full font-medium"
                style={{ background: "rgba(34,197,94,0.12)", color: "#4ade80" }}
              >
                {cat.tools!.length} live
              </span>
            )}
          </div>
          <p className="text-sm mt-0.5" style={{ color: "#71717a" }}>
            {cat.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {hasTools
          ? cat.tools!.map((tool) => <ToolCard key={tool.name} tool={tool} />)
          : <><ComingSoonCard /><ComingSoonCard /></>}
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
              style={{ background: "#1c1c1f", color: "#7c3aed", border: "1px solid #2d2060" }}
            >
              ⭐ Curated picks
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4" style={{ color: "#fafafa" }}>
              My Stack
            </h1>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#a1a1aa" }}>
              Everything I actually use to build products, run this blog, and get
              things done as a developer. Some links are affiliate links — I&apos;ll
              always call that out clearly, and I only list things I&apos;d genuinely
              recommend.
            </p>
            <div
              className="flex items-start gap-3 p-4 rounded-xl text-sm"
              style={{ background: "#111827", border: "1px solid #1e3a5f", color: "#93c5fd" }}
            >
              <span className="text-base shrink-0 mt-0.5">🔔</span>
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
            <span className="text-base shrink-0">📢</span>
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
              <CategorySection key={cat.id} cat={cat} />
            ))}
          </div>

          <div
            className="mt-12 text-center p-10 rounded-2xl"
            style={{ background: "#18181b", border: "1px solid #27272a" }}
          >
            <p className="text-2xl font-bold mb-2" style={{ color: "#fafafa" }}>
              More picks coming soon
            </p>
            <p className="text-sm mb-6" style={{ color: "#71717a" }}>
              I&apos;m building detailed guides for each tool — setup walkthroughs,
              real-world tips, and honest takes. Subscribe to be the first to know.
            </p>
            <a
              href="#newsletter"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
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
