const https = require('https');
const fs = require('fs');

async function scanForLinks() {
    try {
        const env = fs.readFileSync('.env.local', 'utf8');
        const match = env.match(/SEOBOT_API_KEY=(.*)/);
        if (!match) { throw new Error("No API Key found"); }
        const apiKey = match[1].trim();
        const baseUrl = `https://seobot-blogs.s3.eu-north-1.amazonaws.com/${apiKey}/system/base.json`;

        console.log("Fetching post list...");
        const baseData = await new Promise((resolve) => {
            https.get(baseUrl, res => {
                let data = '';
                res.on('data', c => data += c);
                res.on('end', () => resolve(JSON.parse(data)));
            });
        });

        // Check top 50 recent posts
        const recentPosts = baseData.sort((a, b) => new Date(b.cr) - new Date(a.cr)).slice(0, 50);

        console.log(`Scanning up to 50 posts for internal links...`);
        let foundAny = false;

        for (const post of recentPosts) {
            const postUrl = `https://seobot-blogs.s3.eu-north-1.amazonaws.com/${apiKey}/blog/${post.id}.json`;
            const postData = await new Promise((resolve) => {
                https.get(postUrl, res => {
                    let data = '';
                    res.on('data', c => data += c);
                    res.on('end', () => resolve(JSON.parse(data)));
                });
            });

            const html = postData.html || "";
            // Look for any link containing visquanta.com/blog OR just /blog/ or /blog-details/
            const oldLinks = (html.match(/href=["'](\/blog-details\/|https?:\/\/(www\.)?visquanta\.com\/blog-details\/)/g) || []).length;
            const newLinks = (html.match(/href=["'](\/blog\/|https?:\/\/(www\.)?visquanta\.com\/blog\/)/g) || []).length;

            if (oldLinks > 0 || newLinks > 0) {
                foundAny = true;
                console.log(`\nPost: "${post.h}" (${post.s})`);
                console.log(`- OLD format links found: ${oldLinks}`);
                console.log(`- NEW format links found: ${newLinks}`);

                // Show a sample if found
                if (oldLinks > 0) {
                    const sample = html.match(/href=["'](\/blog-details\/[^"']+|https?:\/\/(www\.)?visquanta\.com\/blog-details\/[^"']+)/);
                    if (sample) console.log(`  Sample Old: ${sample[0]}`);
                }
                if (newLinks > 0) {
                    const sample = html.match(/href=["'](\/blog\/[^"']+|https?:\/\/(www\.)?visquanta\.com\/blog\/[^"']+)/);
                    if (sample) console.log(`  Sample New: ${sample[0]}`);
                }
            }
        }

        if (!foundAny) {
            console.log("\nNo internal blog links found in the last 50 posts.");
        }

    } catch (e) { console.error(e); }
}

scanForLinks();
