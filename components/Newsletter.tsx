"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  }

  return (
    <section id="newsletter" className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
      <div
        className="relative overflow-hidden rounded-2xl p-8 sm:p-12 text-center"
        style={{
          background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(79,70,229,0.15) 100%)",
          border: "1px solid rgba(124,58,237,0.25)",
        }}
      >
        {/* decorative blobs */}
        <div
          aria-hidden
          className="absolute -top-20 -right-20 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: "rgba(124,58,237,0.12)", filter: "blur(60px)" }}
        />
        <div
          aria-hidden
          className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full pointer-events-none"
          style={{ background: "rgba(79,70,229,0.12)", filter: "blur(60px)" }}
        />

        <div className="relative">
          <span className="text-4xl mb-4 block">📬</span>
          <h2 className="text-2xl sm:text-3xl font-bold mb-3">
            Get reviews before anyone else
          </h2>
          <p className="text-sm max-w-sm mx-auto mb-8" style={{ color: "var(--muted)" }}>
            No ads, no sponsored posts. Just honest takes, new reviews, and my
            tool picks — straight to your inbox.
          </p>

          {submitted ? (
            <div
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium"
              style={{ background: "rgba(5,150,105,0.15)", color: "#34d399", border: "1px solid rgba(5,150,105,0.3)" }}
            >
              <span>✓</span> You&apos;re on the list — talk soon!
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-xl text-sm outline-none focus:ring-2"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(124,58,237,0.3)",
                  color: "#fafafa",
                  focusRingColor: "#7c3aed",
                } as React.CSSProperties}
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl text-sm font-semibold text-white shrink-0 transition-opacity hover:opacity-90"
                style={{ background: "linear-gradient(135deg, #7c3aed, #4f46e5)" }}
              >
                Subscribe free
              </button>
            </form>
          )}

          <p className="text-xs mt-4" style={{ color: "#52525b" }}>
            Unsubscribe anytime. No spam, ever.
          </p>
        </div>
      </div>
    </section>
  );
}
