export interface Tool {
  name: string;
  category: string;
  tagline: string;
  description: string;
  link: string;
  price: string;
  icon: string;
  tags: string[];
  affiliate?: boolean;
}

export const toolCategories = [
  "All",
  "Development",
  "Design",
  "Productivity",
  "Hardware",
  "AI Tools",
];

export const tools: Tool[] = [
  {
    name: "VS Code",
    category: "Development",
    tagline: "The editor I use every single day",
    description:
      "Still the best free code editor in 2026. The extension ecosystem and GitHub Copilot integration make it unbeatable.",
    link: "https://code.visualstudio.com",
    price: "Free",
    icon: "⌨️",
    tags: ["editor", "free", "open-source"],
  },
  {
    name: "Warp Terminal",
    category: "Development",
    tagline: "Terminal that doesn't feel like 1987",
    description:
      "AI-powered terminal with block-based output, command search, and collaborative sessions. Once you use it, you can't go back.",
    link: "https://warp.dev",
    price: "Free / $15/mo",
    icon: "🚀",
    tags: ["terminal", "ai", "productivity"],
  },
  {
    name: "Figma",
    category: "Design",
    tagline: "Still the industry standard for UI design",
    description:
      "Figma's collaborative features and component system remain unmatched. The Dev Mode makes handoffs painless.",
    link: "https://figma.com",
    price: "Free / $15/mo",
    icon: "🎨",
    tags: ["design", "ui", "collaboration"],
  },
  {
    name: "Notion",
    category: "Productivity",
    tagline: "My second brain for notes and projects",
    description:
      "I organize everything in Notion — from project docs to personal notes. Notion AI makes it even more powerful.",
    link: "https://notion.so",
    price: "Free / $10/mo",
    icon: "📝",
    tags: ["notes", "docs", "database"],
  },
  {
    name: "Claude",
    category: "AI Tools",
    tagline: "My go-to AI assistant for coding and writing",
    description:
      "Claude's context window and code generation quality are exceptional for complex reasoning tasks and long document analysis.",
    link: "https://claude.ai",
    price: "Free / $20/mo",
    icon: "🤖",
    tags: ["ai", "coding", "writing"],
  },
  {
    name: "Raycast",
    category: "Productivity",
    tagline: "Spotlight replacement that changes everything",
    description:
      "Raycast is a Mac launcher that replaces Spotlight, Alfred, and a dozen other apps. Extensions for GitHub, Jira, Linear, and more.",
    link: "https://raycast.com",
    price: "Free / $10/mo",
    icon: "⚡",
    tags: ["mac", "launcher", "automation"],
  },
  {
    name: "1Password",
    category: "Productivity",
    tagline: "The only password manager I trust",
    description:
      "After trying Bitwarden and LastPass, I keep coming back to 1Password. The UX and SSH key management are simply best-in-class.",
    link: "https://1password.com",
    price: "$3/mo",
    icon: "🔐",
    tags: ["security", "passwords", "ssh"],
    affiliate: true,
  },
  {
    name: "Vercel",
    category: "Development",
    tagline: "Easiest way to deploy Next.js apps",
    description:
      "Vercel's CI/CD pipeline for Next.js is seamless — push to main and it's live in ~30 seconds. Edge functions and analytics included.",
    link: "https://vercel.com",
    price: "Free / $20/mo",
    icon: "▲",
    tags: ["deployment", "hosting", "nextjs"],
  },
  {
    name: "Arc Browser",
    category: "Productivity",
    tagline: "The browser that gets out of your way",
    description:
      "Arc replaced Chrome for me 18 months ago and I've never looked back. Spaces, profiles, and the command bar make it a joy.",
    link: "https://arc.net",
    price: "Free",
    icon: "🌐",
    tags: ["browser", "mac", "free"],
  },
];
