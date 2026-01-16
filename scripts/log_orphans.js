const fs = require('fs');
const filePath = "A:\\Downloads\\visquanta_16-jan-2026_orphan-page-(has-no-inc_2026-01-16_13-21-57.csv";

try {
    let content = fs.readFileSync(filePath, 'utf16le');
    let lines = content.replace(/^\uFEFF/, '').split('\n');
    if (lines.length < 2) {
        content = fs.readFileSync(filePath, 'utf8');
        lines = content.replace(/^\uFEFF/, '').split('\n');
    }

    const headers = lines[0].split('\t').map(h => h.replace(/"/g, '').trim());
    const urlIdx = headers.indexOf('URL');

    let output = [];
    for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        const cols = line.split('\t').map(c => c.replace(/^"|"$/g, '').trim());
        if (cols.length > urlIdx) {
            output.push(cols[urlIdx]);
        }
    }
    fs.writeFileSync('orphans_list.txt', output.join('\n'));
    console.log(`Found ${output.length} orphans. Written to orphans_list.txt`);
} catch (err) {
    console.error("Error:", err.message);
}
