import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// ---------------------------------------------------------------------------
// Local Markdown Blog Engine
// Reads .md files from /content/blog/ with gray-matter frontmatter
// Drop-in replacement for the old SEOBot S3 fetcher — same interfaces
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

// ---------------------------------------------------------------------------
// File system helpers
// ---------------------------------------------------------------------------

const CONTENT_DIR = path.join(process.cwd(), 'content', 'blog');

function getMarkdownFiles(): string[] {
  try {
    return fs.readdirSync(CONTENT_DIR).filter(f => f.endsWith('.md'));
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
      updatedAt: data.updatedAt ? new Date(data.updatedAt).toISOString() : (data.publishedAt ? new Date(data.publishedAt).toISOString() : new Date().toISOString()),
      published: data.published !== false,
      category: data.category || { slug: 'general', title: 'General' },
      tags: data.tags || [],
      author: data.author || 'VisQuanta Team',
    };
  } catch (error) {
    console.error(`[blog] Failed to parse ${filename}:`, error);
    return null;
  }
}

// ---------------------------------------------------------------------------
// In-memory cache (same pattern as before, 60s TTL)
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Public API — identical signatures to the old SEOBot module
// ---------------------------------------------------------------------------

export async function getAllPostsMeta(): Promise<BasePost[]> {
  const cacheKey = 'all-posts-meta';
  const cached = getCached<BasePost[]>(cacheKey);
  if (cached) return cached;

  const files = getMarkdownFiles();
  const posts = files
    .map(f => parsePost(f))
    .filter((p): p is BlogPost => p !== null && p.published)
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .map(({ html, relatedPosts, ...meta }) => meta);

  setCache(cacheKey, posts);
  return posts;
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  const cacheKey = `post-${slug}`;
  const cached = getCached<BlogPost>(cacheKey);
  if (cached) return cached;

  const files = getMarkdownFiles();
  for (const file of files) {
    const post = parsePost(file);
    if (post && post.slug === slug && post.published) {
      setCache(cacheKey, post);
      return post;
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
    totalPages: Math.ceil(allMeta.length / limit),
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
  const filtered = allMeta.filter(p => p.category?.slug === categorySlug);
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
    totalPages: Math.ceil(filtered.length / limit),
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
  const filtered = allMeta.filter(p => p.tags?.some(t => t.slug === tagSlug));
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
    totalPages: Math.ceil(filtered.length / limit),
    tag: filtered[0]?.tags?.find(t => t.slug === tagSlug) || null,
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
        map.set(post.category.slug, { slug: post.category.slug, title: post.category.title, count: 1 });
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
