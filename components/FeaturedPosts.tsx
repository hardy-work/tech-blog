import { posts } from "@/data/posts";

const categoryColors: Record<string, string> = {
  Laptop: "#7c3aed",
  Audio: "#0891b2",
  Productivity: "#059669",
  Peripherals: "#d97706",
  Tablet: "#db2777",
};

function PostCard({ post }: { post: (typeof posts)[0] }) {
  const accentColor = categoryColors[post.category] ?? "#7c3aed";
  const emoji =
    post.category === "Laptop"
      ? "💻"
      : post.category === "Audio"
      ? "🎧"
      : post.category === "Productivity"
      ? "⚡"
      : post.category === "Tablet"
      ? "📱"
      : "🖱️";

  return (
    <article className="card overflow-hidden group cursor-pointer">
      {/* image placeholder */}
      <div className="img-placeholder h-44 w-full" style={{ fontSize: "2.5rem" }}>
        {emoji}
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-3">
          <span
            className="text-xs font-semibold px-2 py-0.5 rounded-full"
            style={{ background: `${accentColor}22`, color: accentColor }}
          >
            {post.category}
          </span>
          <span className="text-xs" style={{ color: "var(--muted)" }}>
            {post.readTime} read
          </span>
        </div>

        <h3 className="font-semibold text-sm leading-snug mb-2 group-hover:text-violet-400 transition-colors line-clamp-2">
          {post.title}
        </h3>
        <p className="text-xs leading-relaxed line-clamp-2" style={{ color: "var(--muted)" }}>
          {post.excerpt}
        </p>

        <div className="mt-4 pt-4 flex items-center justify-between" style={{ borderTop: "1px solid var(--border)" }}>
          <time className="text-xs" style={{ color: "var(--muted)" }}>
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </time>
          <span className="text-xs font-medium" style={{ color: accentColor }}>
            Read more →
          </span>
        </div>
      </div>
    </article>
  );
}

export default function FeaturedPosts() {
  return (
    <section id="blog" className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
      <div className="flex items-end justify-between mb-10">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#7c3aed" }}>
            Latest Articles
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold">Fresh from the lab</h2>
        </div>
        <a
          href="#"
          className="hidden sm:inline-flex text-sm transition-colors hover:text-white"
          style={{ color: "var(--muted)" }}
        >
          All posts →
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
