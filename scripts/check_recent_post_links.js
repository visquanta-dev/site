const https = require('https');
const fs = require('fs');

async function checkLatestPost() {
    try {
        // 1. Get API Key
        const env = fs.readFileSync('.env.local', 'utf8');
        const match = env.match(/SEOBOT_API_KEY=(.*)/);
        if (!match) { throw new Error("No API Key found"); }
        const apiKey = match[1].trim();

        // 2. Fetch Base List
        const baseUrl = `https://seobot-blogs.s3.eu-north-1.amazonaws.com/${apiKey}/system/base.json`;
        console.log("Fetching list...");

        const baseData = await new Promise((resolve, reject) => {
            https.get(baseUrl, res => {
                let data = '';
                res.on('data', c => data += c);
                res.on('end', () => resolve(JSON.parse(data)));
                res.on('error', reject);
            });
        });

        if (!baseData || baseData.length === 0) {
            console.log("No posts found.");
            return;
        }

        // 3. Get Most Recent Post ID
        // base.json is typically sorted, but let's sort by date (cr) just in case
        // Schema: p.cr (created), p.id
        const recent = baseData.sort((a, b) => new Date(b.cr) - new Date(a.cr))[0];
        console.log(`Checking most recent post: ${recent.h} (${recent.id})`);

        // 4. Fetch Post Content
        const postUrl = `https://seobot-blogs.s3.eu-north-1.amazonaws.com/${apiKey}/blog/${recent.id}.json`;

        const postData = await new Promise((resolve, reject) => {
            https.get(postUrl, res => {
                let data = '';
                res.on('data', c => data += c);
                res.on('end', () => resolve(JSON.parse(data)));
                res.on('error', reject);
            });
        });

        // 5. Audit Links
        const html = postData.html || "";
        const matchesOld = (html.match(/href=["']\/blog-details\//g) || []).length;
        const matchesNew = (html.match(/href=["']\/blog\//g) || []).length;

        console.log("\n--- Link Audit for Latest Post ---");
        console.log(`Found ${matchesOld} links using OLD format (/blog-details/)`);
        console.log(`Found ${matchesNew} links using NEW format (/blog/)`);

        if (matchesOld > 0) {
            console.log("\nVERDICT: The update has NOT propagated yet. The content still contains legacy links.");
        } else if (matchesNew > 0) {
            console.log("\nVERDICT: Success! The content is using the correct /blog/ structure.");
        } else {
            console.log("\nVERDICT: No internal blog links found in this specific post.");
        }

    } catch (e) {
        console.error("Error:", e.message);
    }
}

checkLatestPost();
