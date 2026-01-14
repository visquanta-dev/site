
import dotenv from 'dotenv';
import path from 'path';

// Load env vars from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const SEOBOT_API_KEY = process.env.SEOBOT_API_KEY;

if (!SEOBOT_API_KEY) {
    console.error('SEOBOT_API_KEY is missing from .env.local');
    process.exit(1);
}

async function verifyLinks() {
    const slug = 'ai-powered-crm-vs-traditional-systems-advantage-us-dealerships';
    console.log(`Fetching post: ${slug}...`);

    try {
        // 1. Fetch the list to find the ID
        const listRes = await fetch(`https://app.seobotai.com/api/blog/list?key=${SEOBOT_API_KEY}`);
        const listData = await listRes.json();

        // Check if listData.data exists (based on common API patterns) or if listData is the array
        const posts = listData.data || listData;

        const postMeta = posts.find((p: any) => p.slug === slug);

        if (!postMeta) {
            console.error('Post not found in list!');
            return;
        }

        console.log(`Found post ID: ${postMeta.id}`);

        // 2. Fetch the full post content
        const postRes = await fetch(`https://app.seobotai.com/api/blog/${postMeta.id}?key=${SEOBOT_API_KEY}`);
        const post = await postRes.json();

        if (!post || !post.html) {
            console.error('No HTML content found in post response');
            return;
        }

        console.log('---------------------------------------------------');
        console.log('Checking for external links in raw HTML...');

        const automotivenews = post.html.toLowerCase().includes('automotive news');
        const drivecentric = post.html.toLowerCase().includes('drivecentric');

        console.log(`Contains 'Automotive News': ${automotivenews}`);
        console.log(`Contains 'DriveCentric': ${drivecentric}`);

        // Extract all hrefs
        const linkRegex = /<a\s+(?:[^>]*?\s+)?href="([^"]*)"/gi;
        let match;
        const links = [];
        while ((match = linkRegex.exec(post.html)) !== null) {
            links.push(match[1]);
        }

        console.log(`Total links found in HTML: ${links.length}`);
        if (links.length > 0) {
            console.log('Links found:', links);
        } else {
            console.warn('WARNING: No strings matching <a href="..."> found in the HTML content.');
            // Print a snippet of where the text implies a link should be
            const snippetIndex = post.html.toLowerCase().indexOf('automotive news');
            if (snippetIndex !== -1) {
                console.log('Snippet around "Automotive News":');
                console.log(post.html.substring(Math.max(0, snippetIndex - 100), Math.min(post.html.length, snippetIndex + 100)));
            }
        }

        console.log('---------------------------------------------------');

    } catch (error) {
        console.error('Error verifying links:', error);
    }
}

verifyLinks();
