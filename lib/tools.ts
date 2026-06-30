import fs from "fs";
import path from "path";

const TOOLS_DIR = path.join(process.cwd(), "content/tools");

export interface ToolPricing {
  plan: string;
  price: string;
  highlight: boolean;
}

export interface ToolMeta {
  id: string;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  excerpt: string;
  affiliateUrl: string;
  websiteUrl: string;
  pricing: ToolPricing[];
  rating: number;
  pros: string[];
  cons: string[];
  image: string;
  badge?: string;
  tags: string[];
  date: string;
  affiliate: boolean;
}

export interface Tool extends ToolMeta {
  content: string;
}

export function getAllTools(): ToolMeta[] {
  const files = fs.readdirSync(TOOLS_DIR).filter((f) => f.endsWith(".json"));
  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(TOOLS_DIR, file), "utf-8");
      const data = JSON.parse(raw) as Tool;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, ...meta } = data;
      return meta;
    })
    .sort((a, b) => b.rating - a.rating);
}

export function getTool(slug: string): Tool | null {
  const file = path.join(TOOLS_DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  return JSON.parse(fs.readFileSync(file, "utf-8")) as Tool;
}

export function getToolsByCategory(category: string): ToolMeta[] {
  return getAllTools().filter((t) => t.category === category);
}

export function getRelatedTools(slug: string, tags: string[], limit = 3): ToolMeta[] {
  return getAllTools()
    .filter((t) => t.slug !== slug)
    .map((t) => ({ ...t, _score: t.tags.filter((tag) => tags.includes(tag)).length }))
    .filter((t) => t._score > 0)
    .sort((a, b) => b._score - a._score)
    .slice(0, limit)
    .map(({ _score, ...meta }) => meta);
}

export function getAllToolCategories(): string[] {
  return Array.from(new Set(getAllTools().map((t) => t.category)));
}
