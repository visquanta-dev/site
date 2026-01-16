const fs = require('fs');
const rawContent = fs.readFileSync("A:\\Downloads\\visquanta_16-jan-2026_pages-have-high-ai-cont_2026-01-16_13-49-58.csv", 'utf16le');
const lines = rawContent.split('\n');
const urls = [];
lines.forEach(line => {
    const match = line.match(/https?:\/\/visquanta\.com\/blog\/[^\s"\t,]+/);
    if (match) {
        let url = match[0].split(/[ \t",]/)[0];
        urls.push(url);
    }
});
const uniqueUrls = [...new Set(urls)].sort();
console.log("Found " + uniqueUrls.length + " blog posts flagged for High AI Content:");
uniqueUrls.forEach(u => console.log(u));
