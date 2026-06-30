"use client";

import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { Components } from "react-markdown";

const components: Components = {
  h2: ({ children }) => (
    <h2
      className="text-xl font-bold mt-10 mb-4 pb-2"
      style={{ borderBottom: "1px solid #27272a", color: "#fafafa" }}
    >
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="text-lg font-semibold mt-6 mb-3" style={{ color: "#e4e4e7" }}>
      {children}
    </h3>
  ),
  p: ({ children }) => (
    <p className="text-sm leading-7 my-4" style={{ color: "#a1a1aa" }}>
      {children}
    </p>
  ),
  a: ({ href, children }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline underline-offset-2 transition-colors hover:text-violet-300"
      style={{ color: "#a78bfa" }}
    >
      {children}
    </a>
  ),
  ul: ({ children }) => (
    <ul className="my-4 space-y-2 pl-1">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="my-4 space-y-2 pl-1 list-none counter-reset-[item]">{children}</ol>
  ),
  li: ({ children, ...props }) => {
    const isOrdered = (props as { ordered?: boolean }).ordered;
    if (isOrdered) {
      return (
        <li className="flex items-start gap-3 text-sm" style={{ color: "#a1a1aa" }}>
          <span
            className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold mt-0.5"
            style={{ background: "rgba(124,58,237,0.2)", color: "#a78bfa" }}
          >
            •
          </span>
          <span>{children}</span>
        </li>
      );
    }
    return (
      <li className="flex items-start gap-2 text-sm" style={{ color: "#a1a1aa" }}>
        <span
          className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
          style={{ background: "#7c3aed" }}
        />
        <span>{children}</span>
      </li>
    );
  },
  blockquote: ({ children }) => {
    const text = String(children);
    const isWarning = text.includes("⚠️");
    const isTip = text.includes("💡");
    const style = isWarning
      ? { bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.3)", color: "#fcd34d" }
      : isTip
      ? { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.3)", color: "#6ee7b7" }
      : { bg: "rgba(14,165,233,0.08)", border: "rgba(14,165,233,0.3)", color: "#7dd3fc" };
    return (
      <blockquote
        className="my-5 p-4 rounded-xl text-sm leading-relaxed"
        style={{ background: style.bg, border: `1px solid ${style.border}`, color: style.color }}
      >
        {children}
      </blockquote>
    );
  },
  code: ({ children, className }) => {
    const isBlock = className?.startsWith("language-");
    const lang = className?.replace("language-", "") ?? "";
    const langIcon: Record<string, string> = {
      bash: "💻", shell: "💻", dockerfile: "🐳",
      yaml: "⚙️", python: "🐍", typescript: "📘",
      nginx: "📄", json: "📋",
    };
    if (isBlock) {
      return (
        <div
          className="my-5 rounded-xl overflow-hidden text-sm"
          style={{ border: "1px solid #3f3f46" }}
        >
          {lang && (
            <div
              className="flex items-center gap-2 px-4 py-2"
              style={{ background: "#1c1c1e", borderBottom: "1px solid #3f3f46" }}
            >
              <span>{langIcon[lang] ?? "💻"}</span>
              <span className="font-mono text-xs" style={{ color: "#71717a" }}>
                {lang}
              </span>
            </div>
          )}
          <pre
            className="overflow-x-auto p-4 leading-relaxed"
            style={{ background: "#0d1117", margin: 0 }}
          >
            <code className="font-mono text-xs" style={{ color: "#e6edf3" }}>
              {children}
            </code>
          </pre>
        </div>
      );
    }
    return (
      <code
        className="font-mono text-xs px-1.5 py-0.5 rounded"
        style={{ background: "rgba(124,58,237,0.15)", color: "#a78bfa" }}
      >
        {children}
      </code>
    );
  },
  table: ({ children }) => (
    <div className="overflow-x-auto my-5 rounded-xl" style={{ border: "1px solid #3f3f46" }}>
      <table className="w-full text-sm">{children}</table>
    </div>
  ),
  th: ({ children }) => (
    <th
      className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider"
      style={{ background: "#18181b", color: "#71717a", borderBottom: "1px solid #3f3f46" }}
    >
      {children}
    </th>
  ),
  td: ({ children }) => (
    <td
      className="px-4 py-3 text-xs"
      style={{ color: "#a1a1aa", borderBottom: "1px solid #27272a" }}
    >
      {children}
    </td>
  ),
  strong: ({ children }) => (
    <strong className="font-semibold" style={{ color: "#e4e4e7" }}>
      {children}
    </strong>
  ),
  hr: () => <hr className="my-8" style={{ borderColor: "#27272a" }} />,
};

export default function MarkdownRenderer({ content }: { content: string }) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
