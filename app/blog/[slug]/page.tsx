import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getAllArticles, getArticle, getRelatedArticles } from "@/lib/articles";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import ArticleVerdictBox from "@/components/ArticleVerdictBox";
import { siteConfig } from "@/lib/config";

function extractToc(content: string) {
  return content
    .split("\n")
    .filter((l) => l.startsWith("## "))
    .map((l) => {
      const text = l.replace(/^##\s+/, "").trim();
      const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
      return { text, id };
    });
}

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
  const ogImage = article.image
    ? `${siteConfig.url}${article.image}`
    : `${siteConfig.url}${siteConfig.ogImage}`;
  return {
    title: article.title,
    description: article.excerpt,
    keywords: article.tags,
    category: article.category,
    authors: [{ name: article.author, url: siteConfig.url }],
    creator: article.author,
    publisher: siteConfig.name,
    robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
    alternates: { canonical: url },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.date,
      authors: [article.author],
      section: article.category,
      tags: article.tags,
      images: [{ url: ogImage, width: 1200, height: 630, alt: article.title, type: "image/png" }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      site: siteConfig.twitterHandle,
      creator: siteConfig.twitterHandle,
      images: [{ url: ogImage, alt: article.title }],
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
  const toc = extractToc(article.content);
  const url = `${siteConfig.url}/blog/${slug}`;

  const ogImage = article.image
    ? `${siteConfig.url}${article.image}`
    : `${siteConfig.url}${siteConfig.ogImage}`;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    image: ogImage,
    author: {
      "@type": "Person",
      name: article.author,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: { "@type": "ImageObject", url: `${siteConfig.url}/logo.png` },
    },
    datePublished: article.date,
    dateModified: article.date,
    url,
    keywords: article.tags.join(", "),
    articleSection: article.category,
    inLanguage: "en-US",
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
        {/* Table of Contents */}
        {toc.length >= 4 && (
          <nav
            className="mb-8 p-5 rounded-2xl"
            style={{ background: "#111113", border: "1px solid #27272a" }}
          >
            <p className="text-xs font-bold uppercase tracking-widest mb-3" style={{ color: "#52525b" }}>
              Table of Contents
            </p>
            <ol className="space-y-1.5">
              {toc.map((item, i) => (
                <li key={item.id} className="flex items-start gap-2.5">
                  <span className="text-xs mt-0.5 shrink-0 font-mono w-4 text-right" style={{ color: "#3f3f46" }}>
                    {i + 1}.
                  </span>
                  <a
                    href={`#${item.id}`}
                    className="text-sm transition-colors hover:text-violet-400"
                    style={{ color: "#71717a" }}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Affiliate CTA banner */}
        {article.affiliateCta && (
          <a
            href={article.affiliateCta.url}
            target="_blank"
            rel="noopener noreferrer sponsored"
            className="group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl mb-10 transition-all hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, rgba(124,58,237,0.18) 0%, rgba(79,70,229,0.18) 100%)",
              border: "1px solid rgba(124,58,237,0.35)",
            }}
          >
            <div className="flex items-start gap-3 min-w-0">
              <span className="text-2xl shrink-0">⭐</span>
              <div className="min-w-0">
                <div className="flex items-center gap-2 mb-0.5 flex-wrap">
                  <p className="text-sm font-bold" style={{ color: "#e4e4e7" }}>
                    {article.affiliateCta.label.replace(" →", "")}
                  </p>
                  <span
                    className="text-xs px-1.5 py-0.5 rounded font-medium"
                    style={{ background: "rgba(124,58,237,0.3)", color: "#c4b5fd" }}
                  >
                    Affiliate
                  </span>
                </div>
                {article.affiliateCta.description && (
                  <p className="text-xs" style={{ color: "#a1a1aa" }}>
                    {article.affiliateCta.description}
                  </p>
                )}
              </div>
            </div>
            <span
              className="shrink-0 inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-transform group-hover:scale-105"
              style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
            >
              {article.affiliateCta.label}
            </span>
          </a>
        )}

        <MarkdownRenderer content={article.content} />

        {/* Verdict Box */}
        {article.verdictBox && <ArticleVerdictBox verdict={article.verdictBox} />}

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
