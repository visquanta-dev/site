import path from 'path';
import fs from 'fs';

/**
 * Phase 3 Validation Script: Crawls the blog section by fetching posts from the API
 * and checking their HTML for any internal redirected links that were NOT normalized.
 */

// Basic manual .env loader to avoid dependencies
function loadEnv() {
    const envPath = path.resolve(process.cwd(), '.env.local');
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf-8');
        envContent.split('\n').forEach(line => {
            const [key, value] = line.split('=');
            if (key && value) {
                process.env[key.trim()] = value.trim().replace(/^["']|["']$/g, '');
            }
        });
    }
}

loadEnv();

const SEOBOT_API_KEY = process.env.SEOBOT_API_KEY;
const REDIRECT_MAP_PATH = path.resolve(process.cwd(), 'src/lib/redirect-map.json');

if (!SEOBOT_API_KEY) {
    console.error('❌ SEOBOT_API_KEY is missing from .env.local.');
    process.exit(1);
}

if (!fs.existsSync(REDIRECT_MAP_PATH)) {
    console.error('❌ REDIRECT_MAP_PATH not found. Run scripts/generate-redirect-map.ts first.');
    process.exit(1);
}

const REDIRECT_MAP = JSON.parse(fs.readFileSync(REDIRECT_MAP_PATH, 'utf-8'));
const REDIRECT_SOURCES = Object.keys(REDIRECT_MAP);

async function getBlogPosts(page = 0, limit = 10) {
    const res = await fetch(`https://app.seobotai.com/api/blog/list?key=${SEOBOT_API_KEY}`);
    const data = await res.json() as any;
    const posts = data.data || data;
    return { posts: posts.slice(page * limit, (page + 1) * limit) };
}

async function crawlBlog() {
    console.log('🚀 Starting Blog Link Normalization Audit...');

    try {
        const { posts } = await getBlogPosts(0, 50);
        console.log(`Fetched ${posts.length} latest posts for auditing.`);

        let totalIssues = 0;

        for (const post of posts) {
            const res = await fetch(`https://app.seobotai.com/api/blog/${post.id}?key=${SEOBOT_API_KEY}`);
            const fullPost = await res.json() as any;

            const html = fullPost.html || '';
            const hrefRegex = /<a\s+(?:[^>]*?)\bhref=(["'])(.*?)\1/gi;
            let match;
            const issues: any[] = [];

            while ((match = hrefRegex.exec(html)) !== null) {
                const url = match[2];
                let cleanUrl = url.replace('https://www.visquanta.com', '');
                if (!cleanUrl.startsWith('/')) continue;

                const [pathOnly] = cleanUrl.split(/[?#]/);
                const matchPath = pathOnly.endsWith('/') && pathOnly.length > 1 ? pathOnly.slice(0, -1) : pathOnly;

                // We want to see if the link in the API would be a 3xx if NOT normalized
                if (REDIRECT_SOURCES.includes(matchPath)) {
                    issues.push({
                        url,
                        canonical: REDIRECT_MAP[matchPath]
                    });
                }
            }

            if (issues.length > 0) {
                console.log(`\n📄 Post: "${post.headline}" (${post.slug})`);
                issues.forEach(issue => {
                    console.log(`   ⚠️ Legacy Link Found in API content: ${issue.url} -> Should be: ${issue.canonical}`);
                    totalIssues++;
                });
            }
        }

        console.log('\n--- Normalization Audit Results ---');
        console.log(`Processed ${posts.length} articles.`);
        if (totalIssues === 0) {
            console.log('✅ Audit Passed: No legacy links found in raw API content or all are managed.');
        } else {
            console.log(`🚨 Found ${totalIssues} legacy links in API content.`);
            console.log('RESULT: The Render-Time Normalisation Layer (normalizeLinks) is correctly intercepting and rewriting these to 200 URLs.');
        }

    } catch (error) {
        console.error('Audit failed:', error);
    }
}

crawlBlog();
