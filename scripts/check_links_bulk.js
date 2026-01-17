const https = require('https');
const fs = require('fs');

async function checkAllPosts() {
    try {
        const env = fs.readFileSync('.env.local', 'utf8');
        const match = env.match(/SEOBOT_API_KEY=(.*)/);
        if (!match) { throw new Error("No API Key found"); }
        const apiKey = match[1].trim();
        const baseUrl = `https://seobot-blogs.s3.eu-north-1.amazonaws.com/${apiKey}/system/base.json`;

        const baseData = await new Promise((resolve) => {
            https.get(baseUrl, res => {
                let data = '';
                res.on('data', c => data += c);
                res.on('end', () => resolve(JSON.parse(data)));
            });
        });

        // Check top 10 recent posts
        const recentPosts = baseData.sort((a, b) => new Date(b.cr) - new Date(a.cr)).slice(0, 10);
        let totalOld = 0;
        let totalNew = 0;

        console.log(`Checking ${recentPosts.length} recent posts...`);

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
            const oldLinks = (html.match(/href=["']\/blog-details\//g) || []).length;
            const newLinks = (html.match(/href=["']\/blog\//g) || []).length;

            totalOld += oldLinks;
            totalNew += newLinks;

            if (oldLinks > 0 || newLinks > 0) {
                console.log(`- ${post.h.substring(0, 30)}... : ${oldLinks} OLD, ${newLinks} NEW`);
            }
        }

        console.log("\n--- AGGREGATE RESULTS ---");
        console.log(`Total OLD links (/blog-details/): ${totalOld}`);
        console.log(`Total NEW links (/blog/): ${totalNew}`);

    } catch (e) { console.error(e); }
}

checkAllPosts();
