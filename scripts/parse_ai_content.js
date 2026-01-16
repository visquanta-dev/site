const fs = require('fs');

const filePath = "A:\\Downloads\\visquanta_16-jan-2026_pages-have-high-ai-cont_2026-01-16_13-49-58.csv";

console.log("Checking file existence...");
if (!fs.existsSync(filePath)) {
    console.error("File DOES NOT exist at: " + filePath);
    process.exit(1);
}

try {
    const rawContent = fs.readFileSync(filePath, 'utf16le');
    console.log("Successfully read " + rawContent.length + " bytes.");
    const lines = rawContent.split('\n');
    console.log("Lines found: " + lines.length);

    const urls = [];
    lines.forEach(line => {
        const match = line.match(/https?:\/\/visquanta\.com\/[^\s"\t,]+/);
        if (match) {
            let url = match[0].replace(/["',]$/, '');
            urls.push(url);
        }
    });

    const uniqueUrls = [...new Set(urls)];
    console.log(`Found ${uniqueUrls.length} unique URLs:`);
    uniqueUrls.slice(0, 20).forEach(url => console.log(url));

} catch (err) {
    console.error("Error:", err.message);
}
