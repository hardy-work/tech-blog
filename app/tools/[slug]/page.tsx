import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllTools, getTool, getRelatedTools } from "@/lib/tools";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { siteConfig } from "@/lib/config";

export function generateStaticParams() {
  return getAllTools().map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) return {};
  const url = `${siteConfig.url}/tools/${slug}`;
  const title = `${tool.name} Review — Is It Worth It in 2026?`;
  return {
    title,
    description: tool.excerpt,
    keywords: [...tool.tags, tool.name, tool.category, "review"],
    alternates: { canonical: url },
    openGraph: {
      title,
      description: tool.excerpt,
      url,
      type: "article",
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: tool.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: tool.excerpt,
      images: [siteConfig.ogImage],
    },
  };
}

function StarRating({ rating }: { rating: number }) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          style={{ color: i < full || (i === full && half) ? "#f59e0b" : "#3f3f46", fontSize: "1.1rem" }}
        >
          {i < full ? "★" : i === full && half ? "★" : "☆"}
        </span>
      ))}
      <span className="text-sm font-semibold ml-1" style={{ color: "#fafafa" }}>
        {rating.toFixed(1)}
      </span>
      <span className="text-xs" style={{ color: "#52525b" }}>/ 5.0</span>
    </div>
  );
}

export default async function ToolDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getTool(slug);
  if (!tool) notFound();

  const related = getRelatedTools(tool.slug, tool.tags);
  const url = `${siteConfig.url}/tools/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    name: `${tool.name} Review`,
    description: tool.excerpt,
    url,
    author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    datePublished: tool.date,
    reviewRating: {
      "@type": "Rating",
      ratingValue: tool.rating,
      bestRating: 5,
      worstRating: 1,
    },
    itemReviewed: {
      "@type": "SoftwareApplication",
      name: tool.name,
      applicationCategory: tool.category,
      url: tool.websiteUrl,
      offers: tool.pricing.map((p) => ({
        "@type": "Offer",
        name: p.plan,
        price: p.price,
      })),
    },
  };

  return (
    <div className="min-h-screen" style={{ background: "#09090b" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Header */}
      <header
        className="sticky top-0 z-50 backdrop-blur-md border-b"
        style={{ borderColor: "#27272a", background: "rgba(9,9,11,0.85)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <Link
            href="/"
            className="text-sm transition-colors hover:text-white flex items-center gap-1.5"
            style={{ color: "#71717a" }}
          >
            ← Home
          </Link>
          <span style={{ color: "#3f3f46" }}>/</span>
          <Link href="/tools" className="text-sm transition-colors hover:text-white" style={{ color: "#71717a" }}>
            Tools
          </Link>
          <span style={{ color: "#3f3f46" }}>/</span>
          <span className="text-sm truncate" style={{ color: "#52525b" }}>
            {tool.name}
          </span>
        </div>
      </header>

      {/* Hero */}
      <div
        className="relative overflow-hidden py-12 sm:py-16"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(8,145,178,0.15) 0%, transparent 70%)",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: "rgba(8,145,178,0.15)", color: "#22d3ee" }}
            >
              {tool.category}
            </span>
            {tool.badge && (
              <span
                className="text-xs font-semibold px-2.5 py-1 rounded-full"
                style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa" }}
              >
                ✦ {tool.badge}
              </span>
            )}
            {tool.affiliate && (
              <span
                className="text-xs px-2.5 py-1 rounded-full"
                style={{ background: "rgba(251,191,36,0.1)", color: "#fbbf24", border: "1px solid rgba(251,191,36,0.2)" }}
              >
                Affiliate Link
              </span>
            )}
            {tool.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs" style={{ color: "#52525b" }}>
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold leading-tight mb-3" style={{ color: "#fafafa" }}>
            {tool.name}
          </h1>
          <p className="text-lg mb-4" style={{ color: "#a1a1aa" }}>
            {tool.tagline}
          </p>
          <StarRating rating={tool.rating} />

          <p className="text-sm mt-4" style={{ color: "#71717a" }}>
            {tool.excerpt}
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 pb-20">
        {/* Affiliate CTA + Pricing */}
        <div
          className="grid grid-cols-1 lg:grid-cols-3 gap-5 my-8"
        >
          {/* CTA card */}
          <div
            className="lg:col-span-1 p-5 rounded-2xl flex flex-col gap-4"
            style={{ background: "#18181b", border: "1px solid #27272a" }}
          >
            <div className="text-center">
              <div
                className="w-16 h-16 rounded-2xl mx-auto mb-3 flex items-center justify-center text-3xl"
                style={{ background: "rgba(8,145,178,0.12)" }}
              >
                🔧
              </div>
              <p className="font-bold text-base" style={{ color: "#fafafa" }}>
                {tool.name}
              </p>
              <p className="text-xs mt-1" style={{ color: "#71717a" }}>
                {tool.pricing.find((p) => p.highlight)?.price ?? tool.pricing[0]?.price}
              </p>
            </div>

            <a
              href={tool.affiliateUrl}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="block w-full text-center py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(135deg, #0891b2, #0e7490)" }}
            >
              Try {tool.name} →
            </a>

            <a
              href={tool.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center py-2 rounded-lg text-sm font-medium transition-colors"
              style={{ color: "#71717a", border: "1px solid #27272a" }}
            >
              Visit official site
            </a>

            {tool.affiliate && (
              <p className="text-xs text-center" style={{ color: "#3f3f46" }}>
                * Affiliate link — I earn a commission if you sign up
              </p>
            )}
          </div>

          {/* Pricing table */}
          <div
            className="lg:col-span-2 p-5 rounded-2xl"
            style={{ background: "#18181b", border: "1px solid #27272a" }}
          >
            <h3 className="text-sm font-semibold mb-4" style={{ color: "#a1a1aa" }}>
              Pricing
            </h3>
            <div className="space-y-2">
              {tool.pricing.map((p) => (
                <div
                  key={p.plan}
                  className="flex items-center justify-between p-3 rounded-xl"
                  style={{
                    background: p.highlight ? "rgba(8,145,178,0.08)" : "transparent",
                    border: p.highlight ? "1px solid rgba(8,145,178,0.25)" : "1px solid transparent",
                  }}
                >
                  <div className="flex items-center gap-2">
                    {p.highlight && (
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-semibold"
                        style={{ background: "rgba(8,145,178,0.2)", color: "#22d3ee" }}
                      >
                        Recommended
                      </span>
                    )}
                    <span className="text-sm font-medium" style={{ color: p.highlight ? "#fafafa" : "#a1a1aa" }}>
                      {p.plan}
                    </span>
                  </div>
                  <span
                    className="text-sm font-bold"
                    style={{ color: p.highlight ? "#22d3ee" : "#71717a" }}
                  >
                    {p.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pros & Cons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
          <div
            className="p-5 rounded-2xl"
            style={{ background: "rgba(5,150,105,0.06)", border: "1px solid rgba(5,150,105,0.2)" }}
          >
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: "#34d399" }}>
              <span>✓</span> Pros
            </h3>
            <ul className="space-y-2">
              {tool.pros.map((pro) => (
                <li key={pro} className="flex items-start gap-2 text-sm" style={{ color: "#a1a1aa" }}>
                  <span className="mt-0.5 shrink-0" style={{ color: "#059669" }}>✓</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>

          <div
            className="p-5 rounded-2xl"
            style={{ background: "rgba(239,68,68,0.05)", border: "1px solid rgba(239,68,68,0.15)" }}
          >
            <h3 className="text-sm font-bold mb-3 flex items-center gap-2" style={{ color: "#f87171" }}>
              <span>✗</span> Cons
            </h3>
            <ul className="space-y-2">
              {tool.cons.map((con) => (
                <li key={con} className="flex items-start gap-2 text-sm" style={{ color: "#a1a1aa" }}>
                  <span className="mt-0.5 shrink-0" style={{ color: "#ef4444" }}>✗</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Markdown content */}
        <MarkdownRenderer content={tool.content} />

        {/* Related tools */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="text-lg font-bold mb-5" style={{ color: "#fafafa" }}>
              Related Tools
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/tools/${rel.slug}`}
                  className="group block p-4 rounded-xl transition-all hover:-translate-y-1"
                  style={{ background: "#18181b", border: "1px solid #27272a" }}
                >
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ background: "rgba(8,145,178,0.12)", color: "#22d3ee" }}
                  >
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-semibold leading-snug mb-1 group-hover:text-violet-400 transition-colors" style={{ color: "#fafafa" }}>
                    {rel.name}
                  </h4>
                  <p className="text-xs line-clamp-2 mb-2" style={{ color: "#71717a" }}>
                    {rel.tagline}
                  </p>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className="text-xs" style={{ color: i < Math.floor(rel.rating) ? "#f59e0b" : "#3f3f46" }}>★</span>
                    ))}
                    <span className="text-xs ml-1" style={{ color: "#52525b" }}>{rel.rating}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Affiliate disclosure */}
        {tool.affiliate && (
          <div
            className="mt-12 p-4 rounded-xl text-xs"
            style={{ background: "rgba(251,191,36,0.05)", border: "1px solid rgba(251,191,36,0.15)", color: "#a1a1aa" }}
          >
            <strong style={{ color: "#fbbf24" }}>Affiliate Disclosure:</strong> This post contains affiliate links.
            If you sign up through my link, I may earn a commission at no extra cost to you.
            I only recommend tools I genuinely use and stand behind.
          </div>
        )}
      </main>
    </div>
  );
}
