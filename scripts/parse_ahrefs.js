const fs = require('fs');
const parse = require('csv-parse/sync').parse;

const filePath = "A:\\Downloads\\visquanta_16-jan-2026_4xx-page_2026-01-16_12-07-34.csv";

try {
    // Read file with UTF-16LE encoding (common for some exports) or try UTF-8
    // Ahrefs usually exports UTF-16LE with BOM
    const fileContent = fs.readFileSync(filePath, 'utf16le');

    // Parse CSV (tab limited usually for these exports? or comma?)
    // Let's assume comma first, but Ahrefs might use tabs.
    // Looking at previous output: "Link type" "Is nofollow" ... seems like Comma or Tab.
    // The snippet had quotes around fields.

    const records = parse(fileContent, {
        columns: true,
        skip_empty_lines: true,
        delimiter: '\t', // Try tab first as Ahrefs often uses UTF-16 + Tab for Excel
        relax_quotes: true
    });

    console.log("Records found:", records.length);
    records.forEach(r => {
        // Modify these keys based on actual headers found
        // Usually: "Source URL", "Destination URL" (or "Hyperslim link" or similar)
        console.log(`Source: ${r['Source URL']} -> Broken: ${r['Destination URL'] || r['Href link'] || r['Target URL']} [Anchor: ${r['Anchor'] || r['Anchor text']}]`);
    });

} catch (err) {
    console.error("Error:", err.message);
}
