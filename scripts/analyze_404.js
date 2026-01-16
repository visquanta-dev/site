const fs = require('fs');
const filePath = 'A:\\Downloads\\visquanta_16-jan-2026_404-page_2026-01-16_17-29-24.csv';

try {
    const buffer = fs.readFileSync(filePath);
    let content = buffer.toString('utf16le');
    if (!content.includes('URL')) content = buffer.toString('utf8');

    const lines = content.split('\n').filter(l => l.trim().length > 0);
    const header = lines[0].split('\t').map(h => h.replace(/^"|"$/g, '').trim());

    const urlIdx = header.indexOf('URL');
    const firstFoundIdx = header.indexOf('First found at');

    console.log(`Analyzing ${lines.length - 1} potential 404s...\n`);

    for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].split('\t').map(c => c.replace(/^"|"$/g, '').trim());
        console.log(`404 URL: ${cols[urlIdx]}`);
        console.log(`Found At: ${cols[firstFoundIdx]}`);
        console.log('---');
    }
} catch (err) {
    console.error(err);
}
