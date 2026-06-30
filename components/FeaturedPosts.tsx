import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { blogs, type BlogPost } from "@/data/blogs";

const categoryColors: Record<string, string> = {
  Laptop:       "#7c3aed",
  Audio:        "#0891b2",
  Productivity: "#059669",
  Peripherals:  "#d97706",
  Tablet:       "#db2777",
  DevOps:       "#0e7490",
  "Cloud & VPS":"#7c3aed",
};

const categoryEmoji: Record<string, string> = {
  Laptop:       "💻",
  Audio:        "🎧",
  Productivity: "⚡",
  Peripherals:  "🖱️",
  Tablet:       "📱",
  DevOps:       "🐳",
  "Cloud & VPS":"☁️",
};

type CardItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  hasArticle: boolean;
};

function PostCard({ item }: { item: CardItem }) {
  const accent = categoryColors[item.category] ?? "#7c3aed";
  const emoji  = categoryEmoji[item.category]  ?? "📄";
  const href   = item.hasArticle ? `/blog/${item.slug}` : `#post-${item.slug}`;

  return (
    <Link
      href={href}
      className="card overflow-hidden group cursor-pointer block"
      style={{ textDecoration: "none" }}
    >
      <div className="img-placeholder h-44 w-full" style={{ fontSize: "2.5rem" }}>
        {emoji}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{ background: `${accent}22`, color: accent }}
          >
            {item.category}
          </span>
          <span className="text-xs" style={{ color: "var(--muted)" }}>
            {item.readTime} read
          </span>
        </div>

        <h3 className="font-semibold text-sm leading-snug mb-2 group-hover:text-violet-400 transition-colors line-clamp-2">
          {item.title}
        </h3>
        <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--muted)" }}>
          {item.excerpt}
        </p>

        <div
          className="mt-4 pt-4 flex items-center justify-between"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <time className="text-xs" style={{ color: "var(--muted)" }}>
            {new Date(item.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span className="text-xs font-medium" style={{ color: accent }}>
            {item.hasArticle ? "Read more →" : "Coming soon"}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function FeaturedPosts() {
  // Nguồn 1: bài viết có full content (từ JSON)
  const articles = getAllArticles().map((a): CardItem => ({
    slug:       a.slug,
    title:      a.title,
    excerpt:    a.excerpt,
    category:   a.category,
    readTime:   a.readTime,
    date:       a.date,
    hasArticle: true,
  }));

  // Nguồn 2: mock blog posts chưa có full content
  const mockPosts = blogs.map((b): CardItem => ({
    slug:       b.slug,
    title:      b.title,
    excerpt:    b.excerpt,
    category:   b.category,
    readTime:   b.readTime,
    date:       b.date,
    hasArticle: false,
  }));

  // Merge và sort theo ngày mới nhất
  const all = [...articles, ...mockPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <section id="blog" className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-2"
            style={{ color: "#7c3aed" }}
          >
            Latest Articles
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">Fresh from the lab</h2>
        </div>
        <Link
          href="/blog"
          className="hidden sm:inline-flex text-sm transition-colors hover:text-white"
          style={{ color: "var(--muted)" }}
        >
          All posts →
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {all.map((item) => (
          <PostCard key={item.slug} item={item} />
        ))}
      </div>
    </section>
  );
}
