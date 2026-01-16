const fs = require('fs');
const filePath = "A:\\Downloads\\visquanta_16-jan-2026_orphan-page-(has-no-inc_2026-01-16_13-21-57.csv";

try {
    let content = fs.readFileSync(filePath, 'utf16le');

    // Clean up BOM and split lines
    let lines = content.replace(/^\uFEFF/, '').split('\n');
    if (lines.length < 2) {
        content = fs.readFileSync(filePath, 'utf8');
        lines = content.replace(/^\uFEFF/, '').split('\n');
    }

    const headers = lines[0].split('\t').map(h => h.replace(/"/g, '').trim());
    console.log("Headers:", headers);

    const urlIdx = headers.indexOf('URL');

    console.log(`Indices: URL=${urlIdx}`);

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        const cols = line.split('\t').map(c => c.replace(/^"|"$/g, '').trim());

        if (cols.length > urlIdx) {
            console.log("FULL_URL: " + cols[urlIdx]);
        }
    }

} catch (err) {
    console.error("Error:", err.message);
}
