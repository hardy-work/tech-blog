import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, getArticle, getRelatedArticles } from "@/lib/articles";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { siteConfig } from "@/lib/config";

export function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  const url = `${siteConfig.url}/blog/${slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author, url: siteConfig.url }],
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      type: "article",
      publishedTime: article.date,
      authors: [article.author],
      tags: article.tags,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: article.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [siteConfig.ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.slug, article.tags);
  const url = `${siteConfig.url}/blog/${slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    author: { "@type": "Person", name: article.author, url: siteConfig.url },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    datePublished: article.date,
    dateModified: article.date,
    url,
    keywords: article.tags.join(", "),
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
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
        <div className="max-w-3xl mx-auto px-4 sm:px-6 h-14 flex items-center gap-3">
          <Link
            href="/"
            className="text-sm transition-colors hover:text-white flex items-center gap-1.5"
            style={{ color: "#71717a" }}
          >
            ← Home
          </Link>
          <span style={{ color: "#3f3f46" }}>/</span>
          <Link href="/blog" className="text-sm transition-colors hover:text-white" style={{ color: "#71717a" }}>
            Blog
          </Link>
          <span style={{ color: "#3f3f46" }}>/</span>
          <span className="text-sm truncate" style={{ color: "#52525b" }}>
            {article.title}
          </span>
        </div>
      </header>

      {/* Hero */}
      <div
        className="relative overflow-hidden py-12 sm:py-16"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(124,58,237,0.2) 0%, transparent 70%)",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa" }}
            >
              {article.category}
            </span>
            {article.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full"
                style={{ background: "#18181b", color: "#71717a", border: "1px solid #27272a" }}
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-2xl sm:text-4xl font-bold leading-tight mb-5" style={{ color: "#fafafa" }}>
            {article.title}
          </h1>

          <p className="text-base mb-6" style={{ color: "#71717a" }}>
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between flex-wrap gap-3 pt-5" style={{ borderTop: "1px solid #27272a" }}>
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)", color: "#fff" }}
              >
                CP
              </div>
              <div>
                <p className="text-sm font-medium" style={{ color: "#e4e4e7" }}>
                  {article.author}
                </p>
                <time className="text-xs" style={{ color: "#52525b" }}>
                  {new Date(article.date).toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </div>
            </div>
            <span className="text-xs" style={{ color: "#52525b" }}>
              {article.readTime} read
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <MarkdownRenderer content={article.content} />

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-14">
            <h3 className="text-lg font-bold mb-5" style={{ color: "#fafafa" }}>
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/blog/${rel.slug}`}
                  className="group block p-4 rounded-xl transition-all hover:-translate-y-1"
                  style={{ background: "#18181b", border: "1px solid #3f3f46" }}
                >
                  <span
                    className="text-xs font-semibold px-2 py-0.5 rounded-full mb-2 inline-block"
                    style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa" }}
                  >
                    {rel.category}
                  </span>
                  <h4 className="text-sm font-semibold leading-snug mb-1 group-hover:text-violet-400 transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs line-clamp-2" style={{ color: "#71717a" }}>
                    {rel.excerpt}
                  </p>
                  <p className="text-xs mt-2" style={{ color: "#52525b" }}>
                    {rel.readTime} read →
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter CTA */}
        <div
          className="mt-12 p-6 rounded-2xl text-center"
          style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}
        >
          <p className="font-semibold mb-2" style={{ color: "#e4e4e7" }}>
            Found this useful?
          </p>
          <p className="text-sm mb-4" style={{ color: "#71717a" }}>
            Subscribe to get the latest technical articles and reviews from CHAEI PUEI Tech.
          </p>
          <Link
            href="/#newsletter"
            className="inline-flex px-5 py-2.5 rounded-lg text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
          >
            Subscribe for free
          </Link>
        </div>
      </main>
    </div>
  );
}
