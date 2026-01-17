const https = require('https');
const fs = require('fs');

async function scanForLinksSummary() {
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

        // Check top 30 recent posts
        const recentPosts = baseData.sort((a, b) => new Date(b.cr) - new Date(a.cr)).slice(0, 30);

        console.log(`Scanning 30 most recent posts for internal links...`);

        let stats = {
            onlyOld: 0,
            onlyNew: 0,
            mixed: 0,
            noLinks: 0,
            stillOldList: []
        };

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
            // Regex to find visquanta.com/blog-details/ OR absolute/relative variants
            const oldLinks = (html.match(/href=["'](\/blog-details\/|https?:\/\/(www\.)?visquanta\.com\/blog-details\/)/g) || []).length;
            // Regex to find visquanta.com/blog/
            const newLinks = (html.match(/href=["'](\/blog\/|https?:\/\/(www\.)?visquanta\.com\/blog\/)/g) || []).length;

            if (oldLinks > 0 && newLinks === 0) {
                stats.onlyOld++;
                if (stats.stillOldList.length < 3) stats.stillOldList.push(post.h);
            } else if (newLinks > 0 && oldLinks === 0) {
                stats.onlyNew++;
            } else if (oldLinks > 0 && newLinks > 0) {
                stats.mixed++;
                if (stats.stillOldList.length < 3) stats.stillOldList.push(post.h + " (MIXED)");
            } else {
                stats.noLinks++;
            }
        }

        console.log("\n--- SYNC STATUS REPORT ---");
        console.log(`Posts Scanned: ${recentPosts.length}`);
        console.log(`✅ Posts with NEW links only: ${stats.onlyNew}`);
        console.log(`❌ Posts with OLD links only: ${stats.onlyOld}`);
        console.log(`⚠️ Posts with MIXED links: ${stats.mixed}`);
        console.log(`ℹ️ Posts with NO internal links: ${stats.noLinks}`);

        if (stats.stillOldList.length > 0) {
            console.log("\nRecent posts still using OLD format:");
            stats.stillOldList.forEach(title => console.log(` - ${title}`));
            console.log("... (and possibly more)");
        }

        if (stats.onlyOld === 0 && stats.mixed === 0) {
            console.log("\nVERDICT: All scanned posts are clean! Sync appears complete.");
        } else {
            console.log("\nVERDICT: Sync is NOT complete or has not reached these files yet.");
        }

    } catch (e) { console.error(e); }
}

scanForLinksSummary();
