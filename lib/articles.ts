import fs from "fs";
import path from "path";

const ARTICLES_DIR = path.join(process.cwd(), "content/articles");

export interface ArticleMeta {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  tags: string[];
  readTime: string;
  date: string;
  author: string;
}

export interface AffiliateCta {
  label: string;
  url: string;
  description?: string;
}

export interface VerdictBox {
  rating: number;
  summary: string;
  highlights: string[];
  ctaLabel: string;
  ctaUrl: string;
}

export interface Article extends ArticleMeta {
  content: string;
  affiliateCta?: AffiliateCta;
  verdictBox?: VerdictBox;
}

export function getAllArticles(): ArticleMeta[] {
  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.endsWith(".json"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), "utf-8");
      const data = JSON.parse(raw) as Article;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { content, ...meta } = data;
      return meta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getArticle(slug: string): Article | null {
  const file = path.join(ARTICLES_DIR, `${slug}.json`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf-8");
  return JSON.parse(raw) as Article;
}

export function getRelatedArticles(slug: string, tags: string[], limit = 2): ArticleMeta[] {
  return getAllArticles()
    .filter((a) => a.slug !== slug)
    .map((a) => ({
      ...a,
      _score: a.tags.filter((t) => tags.includes(t)).length,
    }))
    .filter((a) => a._score > 0)
    .sort((a, b) => b._score - a._score)
    .slice(0, limit)
    .map(({ _score, ...meta }) => meta);
}

export function getArticlesByCategory(category: string): ArticleMeta[] {
  return getAllArticles().filter((a) => a.category === category);
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>();
  getAllArticles().forEach((a) => a.tags.forEach((t) => tagSet.add(t)));
  return Array.from(tagSet).sort();
}
