const fs = require('fs');
const filePath = "A:\\Downloads\\visquanta_16-jan-2026_4xx-page_2026-01-16_12-07-34.csv";

try {
    // Try reading as UTF-16LE
    let content = fs.readFileSync(filePath, 'utf16le');

    // Ahrefs CSVs are often tab-delimited
    let lines = content.split('\n');
    if (lines.length < 2) {
        // Maybe it's UTF-8?
        content = fs.readFileSync(filePath, 'utf8');
        lines = content.split('\n');
    }

    // Remove BOM if present
    if (lines[0].charCodeAt(0) === 0xFEFF) {
        lines[0] = lines[0].slice(1);
    }

    const headers = lines[0].split('\t').map(h => h.replace(/"/g, '').trim());
    console.log("Headers:", headers);

    const sourceIdx = headers.indexOf('Source URL');
    // Destination URL might be named differently
    let destIdx = headers.findIndex(h => h.includes('Destination') || h.includes('Target') || h.includes('Href'));
    const anchorIdx = headers.findIndex(h => h.includes('Anchor'));

    console.log(`Indices: Source=${sourceIdx}, Dest=${destIdx}, Anchor=${anchorIdx}`);

    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;

        // Split by tab, handling quotes coarsely
        const cols = line.split('\t').map(c => c.replace(/^"|"$/g, '').trim());

        if (cols.length > sourceIdx && cols.length > destIdx) {
            console.log(`Source: ${cols[sourceIdx]} -> Broken: ${cols[destIdx]} [Anchor: ${anchorIdx > -1 ? cols[anchorIdx] : 'N/A'}]`);
        }
    }

} catch (err) {
    console.error("Error:", err.message);
}
