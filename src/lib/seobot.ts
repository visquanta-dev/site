import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { BlogClient } from 'seobot';

// ---------------------------------------------------------------------------
// Hybrid blog: /content/blog/*.md overrides SEOBot on slug collision.
// Set SEOBOT_API_KEY for SEOBot CDN (cdn.seobotai.com) via BlogClient.
// ---------------------------------------------------------------------------

export interface BlogPost {
  id: string;
  slug: string;
  headline: string;
  metaDescription: string;
  html: string;
  image: string;
  readingTime: number;
  createdAt: string;
  updatedAt: string;
  published: boolean;
  category: {
    slug: string;
    title: string;
  };
  tags: Array<{
    slug: string;
    title: string;
  }>;
  author?: string;
  entities?: Array<{ name: string; sameAs: string }>;
  relatedPosts?: BlogPost[];
}

export interface BasePost {
  id: string;
  slug: string;
  headline: string;
  metaDescription: string;
  image: string;
  readingTime: number;
  createdAt: string;
  updatedAt: string;
  category: {
    slug: string;
    title: string;
  };
  tags: Array<{
    slug: string;
    title: string;
  }>;
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

function getMarkdownFiles(): string[] {
  try {
    return fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.md'));
  } catch {
    console.warn('[blog] content/blog/ directory not found');
    return [];
  }
}

function parsePost(filename: string): BlogPost | null {
  try {
    const filePath = path.join(CONTENT_DIR, filename);
    const raw = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(raw);

    const slug = data.slug || filename.replace(/\.md$/, '');
    const html = marked.parse(content, { async: false }) as string;

    return {
      id: slug,
      slug,
      headline: data.title || '',
      metaDescription: data.metaDescription || '',
      html,
      image: data.image || '/images/blog/default.jpg',
      readingTime: data.readingTime || Math.ceil(content.split(/\s+/).length / 200),
      createdAt: data.publishedAt ? new Date(data.publishedAt).toISOString() : new Date().toISOString(),
      updatedAt: data.updatedAt
        ? new Date(data.updatedAt).toISOString()
        : data.publishedAt
          ? new Date(data.publishedAt).toISOString()
          : new Date().toISOString(),
      published: data.published !== false,
      category: data.category || { slug: 'general', title: 'General' },
      tags: data.tags || [],
      author: data.author || 'VisQuanta Team',
      entities: Array.isArray(data.entities)
        ? (data.entities as Array<Record<string, unknown>>)
            .filter((e) => e && typeof e === 'object')
            .map((e) => ({
              name: String(e.name ?? ''),
              sameAs: String(e.sameAs ?? ''),
            }))
            .filter((e) => e.name && e.sameAs.startsWith('https://'))
        : undefined,
    };
  } catch (error) {
    console.error(`[blog] Failed to parse ${filename}:`, error);
    return null;
  }
}

function localPostsMeta(): BasePost[] {
  return getMarkdownFiles()
    .map((f) => parsePost(f))
    .filter((p): p is BlogPost => p !== null && p.published)
    .map(({ html, relatedPosts, ...meta }) => meta);
}

type SeoIndexEntry = Awaited<ReturnType<BlogClient['getArticles']>>['articles'][number];
type SeoArticle = NonNullable<Awaited<ReturnType<BlogClient['getArticle']>>>;

function seoIndexToBase(entry: SeoIndexEntry): BasePost {
  return {
    id: entry.id,
    slug: entry.slug,
    headline: entry.headline,
    metaDescription: entry.metaDescription,
    image: entry.image,
    readingTime: entry.readingTime,
    createdAt: entry.createdAt,
    updatedAt: entry.updatedAt,
    category: entry.category
      ? { slug: entry.category.slug, title: entry.category.title }
      : { slug: 'general', title: 'General' },
    tags: (entry.tags || []).map((t) => ({ slug: t.slug, title: t.title })),
  };
}

function seoArticleToPost(article: SeoArticle): BlogPost | null {
  if (article.deleted || !article.published) return null;
  return {
    id: article.id,
    slug: article.slug,
    headline: article.headline,
    metaDescription: article.metaDescription,
    html: article.html,
    image: article.image,
    readingTime: article.readingTime,
    createdAt: article.createdAt,
    updatedAt: article.updatedAt,
    published: true,
    category: article.category
      ? { slug: article.category.slug, title: article.category.title }
      : { slug: 'general', title: 'General' },
    tags: (article.tags || []).map((t) => ({ slug: t.slug, title: t.title })),
  };
}

async function fetchSeoBotMeta(): Promise<BasePost[]> {
  const key = process.env.SEOBOT_API_KEY;
  if (!key?.trim()) return [];

  try {
    const client = new BlogClient(key.trim());
    const { articles } = await client.getArticles(0, 10_000);
    return (articles || [])
      .filter((a): a is SeoIndexEntry => a != null && typeof a.slug === 'string' && a.slug.length > 0)
      .map(seoIndexToBase);
  } catch (e) {
    console.error('[blog] SEOBot index fetch failed:', e);
    return [];
  }
}

function mergeMeta(local: BasePost[], remote: BasePost[]): BasePost[] {
  const bySlug = new Map<string, BasePost>();
  for (const p of remote) {
    bySlug.set(p.slug, p);
  }
  for (const p of local) {
    bySlug.set(p.slug, p);
  }
  return [...bySlug.values()].sort((a, b) => {
    const tb = new Date(b.createdAt).getTime();
    const ta = new Date(a.createdAt).getTime();
    return (Number.isFinite(tb) ? tb : 0) - (Number.isFinite(ta) ? ta : 0);
  });
}

const CACHE_TTL = 60000;

interface CacheEntry<T> {
  data: T;
  timestamp: number;
}

const cache = new Map<string, CacheEntry<unknown>>();

function getCached<T>(key: string): T | null {
  const entry = cache.get(key);
  if (entry && Date.now() - entry.timestamp < CACHE_TTL) {
    return entry.data as T;
  }
  cache.delete(key);
  return null;
}

function setCache<T>(key: string, data: T): void {
  cache.set(key, { data, timestamp: Date.now() });
}

async function buildAllPostsMeta(): Promise<BasePost[]> {
  const local = localPostsMeta();
  const remote = await fetchSeoBotMeta();
  return mergeMeta(local, remote);
}

export async function getAllPostsMeta(): Promise<BasePost[]> {
  const cacheKey = 'all-posts-meta-hybrid';
  const cached = getCached<BasePost[]>(cacheKey);
  if (cached) return cached;

  const merged = await buildAllPostsMeta();
  setCache(cacheKey, merged);
  return merged;
}

/**
 * Same merged list as getAllPostsMeta (local content/blog + remote index) but skips
 * in-memory cache — use for sitemap generation so new posts appear on the next request.
 */
export async function getAllPostsMetaFresh(): Promise<BasePost[]> {
  return buildAllPostsMeta();
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const cacheKey = `post-${slug}`;
  const cached = getCached<BlogPost>(cacheKey);
  if (cached) return cached;

  for (const file of getMarkdownFiles()) {
    const post = parsePost(file);
    if (post && post.slug === slug && post.published) {
      setCache(cacheKey, post);
      return post;
    }
  }

  const key = process.env.SEOBOT_API_KEY?.trim();
  if (key) {
    try {
      const client = new BlogClient(key);
      const raw = await client.getArticle(slug);
      const mapped = raw ? seoArticleToPost(raw) : null;
      if (mapped) {
        setCache(cacheKey, mapped);
        return mapped;
      }
    } catch (e) {
      console.error('[blog] SEOBot getArticle failed:', slug, e);
    }
  }

  return null;
}

export async function getBlogPosts(
  page: number = 0,
  limit: number = 12
): Promise<{ posts: BlogPost[]; total: number; totalPages: number }> {
  const allMeta = await getAllPostsMeta();
  const start = page * limit;
  const paged = allMeta.slice(start, start + limit);

  const posts: BlogPost[] = [];
  for (const meta of paged) {
    const post = await getBlogPost(meta.slug);
    if (post) posts.push(post);
  }

  return {
    posts,
    total: allMeta.length,
    totalPages: Math.ceil(allMeta.length / limit) || 1,
  };
}

export async function getBlogPostsByCategory(
  categorySlug: string,
  page: number = 0,
  limit: number = 12
): Promise<{
  posts: BlogPost[];
  total: number;
  totalPages: number;
  category: { slug: string; title: string } | null;
}> {
  const allMeta = await getAllPostsMeta();
  const filtered = allMeta.filter((p) => p.category?.slug === categorySlug);
  const start = page * limit;
  const paged = filtered.slice(start, start + limit);

  const posts: BlogPost[] = [];
  for (const meta of paged) {
    const post = await getBlogPost(meta.slug);
    if (post) posts.push(post);
  }

  return {
    posts,
    total: filtered.length,
    totalPages: Math.ceil(filtered.length / limit) || 1,
    category: filtered[0]?.category || null,
  };
}

export async function getBlogPostsByTag(
  tagSlug: string,
  page: number = 0,
  limit: number = 12
): Promise<{
  posts: BlogPost[];
  total: number;
  totalPages: number;
  tag: { slug: string; title: string } | null;
}> {
  const allMeta = await getAllPostsMeta();
  const filtered = allMeta.filter((p) => p.tags?.some((t) => t.slug === tagSlug));
  const start = page * limit;
  const paged = filtered.slice(start, start + limit);

  const posts: BlogPost[] = [];
  for (const meta of paged) {
    const post = await getBlogPost(meta.slug);
    if (post) posts.push(post);
  }

  return {
    posts,
    total: filtered.length,
    totalPages: Math.ceil(filtered.length / limit) || 1,
    tag: filtered[0]?.tags?.find((t) => t.slug === tagSlug) || null,
  };
}

export async function getAllCategories(): Promise<Array<{ slug: string; title: string; count: number }>> {
  const allMeta = await getAllPostsMeta();
  const map = new Map<string, { slug: string; title: string; count: number }>();

  for (const post of allMeta) {
    if (post.category?.slug) {
      const existing = map.get(post.category.slug);
      if (existing) {
        existing.count++;
      } else {
        map.set(post.category.slug, {
          slug: post.category.slug,
          title: post.category.title,
          count: 1,
        });
      }
    }
  }

  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}

export async function getAllTags(): Promise<Array<{ slug: string; title: string; count: number }>> {
  const allMeta = await getAllPostsMeta();
  const map = new Map<string, { slug: string; title: string; count: number }>();

  for (const post of allMeta) {
    for (const tag of post.tags || []) {
      if (tag.slug) {
        const existing = map.get(tag.slug);
        if (existing) {
          existing.count++;
        } else {
          map.set(tag.slug, { slug: tag.slug, title: tag.title, count: 1 });
        }
      }
    }
  }

  return Array.from(map.values()).sort((a, b) => b.count - a.count);
}
