const SEOBOT_API_KEY = process.env.SEOBOT_API_KEY;
const CACHE_TTL = 60000; // 60 seconds

function getApiKey(): string {
  const key = process.env.SEOBOT_API_KEY;
  if (!key) {
    console.warn('⚠️ WARNING: SEOBOT_API_KEY is not set. Blog features may not work correctly.');
    return '';
  }
  return key;
}

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
  relatedPosts?: BlogPost[];
}

// Base.json uses abbreviated field names
interface BasePostRaw {
  id: string;
  s: string;   // slug
  h: string;   // headline
  d: string;   // description
  i: string;   // image
  rt: number;  // readingTime
  cr: string;  // createdAt
  up: string;  // updatedAt
  c: {         // category
    s: string; // slug
    t: string; // title
  };
  tg: Array<{  // tags
    s: string; // slug
    t: string; // title
  }>;
}

export interface BasePost {
  id: string;
  slug: string;
  headline: string;
  metaDescription: string;
  image: string;
  readingTime: number;
  createdAt: string;
  category: {
    slug: string;
    title: string;
  };
  tags: Array<{
    slug: string;
    title: string;
  }>;
}

function normalizeBasePost(raw: BasePostRaw): BasePost {
  return {
    id: raw.id,
    slug: raw.s,
    headline: raw.h,
    metaDescription: raw.d,
    image: raw.i,
    readingTime: raw.rt,
    createdAt: raw.cr,
    category: raw.c ? {
      slug: raw.c.s,
      title: raw.c.t
    } : { slug: '', title: '' },
    tags: raw.tg?.map(tag => ({
      slug: tag.s,
      title: tag.t
    })) || []
  };
}

import { MOCK_BLOG_POSTS } from './mockData';

async function fetchBase(): Promise<BasePost[]> {
  const cacheKey = 'base';
  const cached = getCached<BasePost[]>(cacheKey);
  if (cached) return cached;

  const apiKey = getApiKey();

  // FALLBACK: If no API key, use mock data immediately
  if (!apiKey) {
    console.warn('Using mock data for blog posts (No API Key)');
    return MOCK_BLOG_POSTS as unknown as BasePost[];
  }

  try {
    const url = `https://seobot-blogs.s3.eu-north-1.amazonaws.com/${apiKey}/system/base.json`;
    const response = await fetch(url, { next: { revalidate: 60 } });

    if (!response.ok) {
      console.warn(`Failed to fetch base.json, falling back to mock data: ${response.status}`);
      return MOCK_BLOG_POSTS as unknown as BasePost[];
    }

    const rawData: BasePostRaw[] = await response.json();
    const normalizedData = rawData.map(normalizeBasePost);

    // FORCE MERGE LOCALLY CREATED POSTS (MOCK DATA)
    // This ensures our new "9 PM Problem" article appears even if the API is active.
    const mockBasePosts = MOCK_BLOG_POSTS.map(p => ({
      id: p.id,
      slug: p.slug,
      headline: p.headline,
      metaDescription: p.metaDescription,
      image: p.image,
      readingTime: p.readingTime,
      createdAt: p.createdAt,
      category: p.category,
      tags: p.tags
    })) as unknown as BasePost[];

    // Combine them (remote + local)
    // We filter out any mocks that might conflict with real IDs, though highly unlikely given 'mock-' prefix
    const combinedData = [
      ...normalizedData,
      ...mockBasePosts.filter(m => !normalizedData.some(n => n.id === m.id))
    ];

    // Sort by date descending (newest first)
    combinedData.sort((a, b) => {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    setCache(cacheKey, combinedData);
    return combinedData;
  } catch (error) {
    console.error('Error fetching blog base, falling back to mock data:', error);
    return MOCK_BLOG_POSTS as unknown as BasePost[];
  }
}

async function fetchPost(id: string): Promise<BlogPost | null> {
  const cacheKey = `post-${id}`;
  const cached = getCached<BlogPost>(cacheKey);
  if (cached) return cached;

  // Check if it's a mock post ID
  if (id.startsWith('mock-')) {
    const mock = MOCK_BLOG_POSTS.find(p => p.id === id);
    if (mock) {
      return {
        ...mock,
        // Use custom HTML if provided in the mock object, otherwise default
        html: (mock as any).html || '<p>This is a simulated blog post content for demonstration purposes. In a production environment, this would be fetched from your CMS.</p>',
        updatedAt: mock.createdAt,
        published: true,
        relatedPosts: []
      } as BlogPost;
    }
  }

  try {
    const apiKey = getApiKey();
    if (!apiKey) throw new Error("No API Key"); // Trigger catch block to maybe fallback if we had mock logic there, but we handled mock above

    const url = `https://seobot-blogs.s3.eu-north-1.amazonaws.com/${apiKey}/blog/${id}.json`;

    const response = await fetch(url, { next: { revalidate: 60 } });

    if (!response.ok) {
      console.error(`Failed to fetch post ${id}: ${response.status}`);
      return null;
    }

    const data = await response.json();
    setCache(cacheKey, data);
    return data;
  } catch (error) {
    console.error(`Error fetching post ${id}:`, error);
    return null;
  }
}

export async function getBlogPosts(page: number = 0, limit: number = 12): Promise<{
  posts: BlogPost[];
  total: number;
  totalPages: number;
}> {
  try {
    const base = await fetchBase();
    const start = page * limit;
    const end = start + limit;

    const postPromises = base.slice(start, end).map(async (item) => {
      if (item.id) {
        return await fetchPost(item.id);
      }
      return null;
    });

    const posts = await Promise.all(postPromises);
    const publishedPosts = posts.filter((post): post is BlogPost =>
      post !== null && post.published
    );

    return {
      posts: publishedPosts,
      total: base.length,
      totalPages: Math.ceil(base.length / limit)
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return { posts: [], total: 0, totalPages: 0 };
  }
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const base = await fetchBase();
    const postMeta = base.find((item) => item.slug === slug);

    if (!postMeta?.id) {
      console.error(`Post not found in base for slug: ${slug}. Available: ${base.slice(0, 3).map(p => p.slug).join(', ')}`);
      return null;
    }

    const post = await fetchPost(postMeta.id);

    if (!post) {
      console.error(`Failed to fetch post content for id: ${postMeta.id}`);
      return null;
    }

    if (!post.published) {
      console.error(`Post ${slug} exists but is not published`);
      return null;
    }

    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
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
  try {
    const base = await fetchBase();
    const categoryPosts = base.filter(
      (item) => item.category?.slug === categorySlug
    );

    const start = page * limit;
    const end = start + limit;

    const postPromises = categoryPosts.slice(start, end).map(async (item) => {
      if (item.id) {
        return await fetchPost(item.id);
      }
      return null;
    });

    const posts = await Promise.all(postPromises);
    const publishedPosts = posts.filter((post): post is BlogPost =>
      post !== null && post.published
    );

    const category = categoryPosts[0]?.category || null;

    return {
      posts: publishedPosts,
      total: categoryPosts.length,
      totalPages: Math.ceil(categoryPosts.length / limit),
      category
    };
  } catch (error) {
    console.error('Error fetching category posts:', error);
    return { posts: [], total: 0, totalPages: 0, category: null };
  }
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
  try {
    const base = await fetchBase();
    const tagPosts = base.filter((item) =>
      item.tags?.some((tag) => tag.slug === tagSlug)
    );

    const start = page * limit;
    const end = start + limit;

    const postPromises = tagPosts.slice(start, end).map(async (item) => {
      if (item.id) {
        return await fetchPost(item.id);
      }
      return null;
    });

    const posts = await Promise.all(postPromises);
    const publishedPosts = posts.filter((post): post is BlogPost =>
      post !== null && post.published
    );

    const tag = tagPosts[0]?.tags?.find((t) => t.slug === tagSlug) || null;

    return {
      posts: publishedPosts,
      total: tagPosts.length,
      totalPages: Math.ceil(tagPosts.length / limit),
      tag
    };
  } catch (error) {
    console.error('Error fetching tag posts:', error);
    return { posts: [], total: 0, totalPages: 0, tag: null };
  }
}

export async function getAllCategories(): Promise<Array<{ slug: string; title: string; count: number }>> {
  try {
    const base = await fetchBase();
    const categoryMap = new Map<string, { slug: string; title: string; count: number }>();

    base.forEach((post) => {
      if (post.category?.slug) {
        const existing = categoryMap.get(post.category.slug);
        if (existing) {
          existing.count++;
        } else {
          categoryMap.set(post.category.slug, {
            slug: post.category.slug,
            title: post.category.title,
            count: 1
          });
        }
      }
    });

    return Array.from(categoryMap.values()).sort((a, b) => b.count - a.count);
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export async function getAllTags(): Promise<Array<{ slug: string; title: string; count: number }>> {
  try {
    const base = await fetchBase();
    const tagMap = new Map<string, { slug: string; title: string; count: number }>();

    base.forEach((post) => {
      post.tags?.forEach((tag) => {
        if (tag.slug) {
          const existing = tagMap.get(tag.slug);
          if (existing) {
            existing.count++;
          } else {
            tagMap.set(tag.slug, {
              slug: tag.slug,
              title: tag.title,
              count: 1
            });
          }
        }
      });
    });

    return Array.from(tagMap.values()).sort((a, b) => b.count - a.count);
  } catch (error) {
    console.error('Error fetching tags:', error);
    return [];
  }
}

export async function getAllPostsMeta(): Promise<BasePost[]> {
  return fetchBase();
}
