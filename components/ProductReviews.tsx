import { reviews } from "@/data/products";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className="w-4 h-4"
          fill={star <= Math.round(rating) ? "#facc15" : "none"}
          stroke={star <= Math.round(rating) ? "#facc15" : "#52525b"}
          strokeWidth={1.5}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
          />
        </svg>
      ))}
      <span className="ml-1 text-sm font-semibold text-yellow-400">{rating}</span>
    </div>
  );
}

const badgeClass: Record<string, string> = {
  "Editor's Pick": "badge-editors-pick",
  "Best Value": "badge-best-value",
  "Top Rated": "badge-top-rated",
};

const categoryEmoji: Record<string, string> = {
  Laptop: "💻",
  Headphones: "🎧",
  Phone: "📱",
  Monitor: "🖥️",
};

export default function ProductReviews() {
  return (
    <section id="reviews" className="py-16" style={{ background: "rgba(124,58,237,0.03)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest mb-2" style={{ color: "#7c3aed" }}>
            Product Reviews
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">Tested, rated & ranked</h2>
          <p className="text-sm max-w-md mx-auto" style={{ color: "var(--muted)" }}>
            Every product I review gets weeks of real-world use before I write a word.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <article key={review.slug} className="card overflow-hidden flex flex-col">
              {/* image placeholder */}
              <div className="img-placeholder h-48 w-full relative" style={{ fontSize: "3rem" }}>
                {categoryEmoji[review.category] ?? "📦"}
                {review.badge && (
                  <span
                    className={`absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full text-white ${badgeClass[review.badge]}`}
                  >
                    {review.badge}
                  </span>
                )}
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>{review.brand}</p>
                    <h3 className="font-semibold leading-tight">{review.name}</h3>
                  </div>
                  <span className="text-lg font-bold shrink-0" style={{ color: "#7c3aed" }}>
                    {review.price}
                  </span>
                </div>

                <StarRating rating={review.rating} />

                <p className="text-sm leading-relaxed mt-3 mb-4 flex-1" style={{ color: "#a1a1aa" }}>
                  {review.summary}
                </p>

                <div className="grid grid-cols-2 gap-3 text-xs mt-auto">
                  <div className="rounded-lg p-3" style={{ background: "rgba(5,150,105,0.08)", border: "1px solid rgba(5,150,105,0.2)" }}>
                    <p className="font-semibold text-emerald-400 mb-1.5">Pros</p>
                    <ul className="space-y-1" style={{ color: "#86efac" }}>
                      {review.pros.slice(0, 3).map((pro) => (
                        <li key={pro} className="flex items-start gap-1">
                          <span className="shrink-0 mt-0.5">✓</span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="rounded-lg p-3" style={{ background: "rgba(220,38,38,0.08)", border: "1px solid rgba(220,38,38,0.2)" }}>
                    <p className="font-semibold text-red-400 mb-1.5">Cons</p>
                    <ul className="space-y-1" style={{ color: "#fca5a5" }}>
                      {review.cons.slice(0, 3).map((con) => (
                        <li key={con} className="flex items-start gap-1">
                          <span className="shrink-0 mt-0.5">✗</span>
                          {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <a
                  href={`#review-${review.slug}`}
                  className="mt-4 text-center py-2.5 rounded-lg text-sm font-medium border transition-colors hover:bg-violet-500/10"
                  style={{ borderColor: "rgba(124,58,237,0.4)", color: "#a78bfa" }}
                >
                  Read Full Review
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
