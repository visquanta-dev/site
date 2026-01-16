const fs = require('fs');

const filePath = 'A:\\Downloads\\visquanta_16-jan-2026_meta-description-too-lo_2026-01-16_16-25-50.csv';

try {
    const buffer = fs.readFileSync(filePath);
    let content = buffer.toString('utf16le');
    if (!content.includes('URL')) {
        content = buffer.toString('utf8');
    }

    const lines = content.split('\n').filter(l => l.trim().length > 0);
    const firstLine = lines[0];
    const delimiter = firstLine.includes('\t') ? '\t' : (firstLine.includes('","') ? '","' : ',');

    const parseLine = (line) => {
        if (delimiter === '","') return line.replace(/^"|"$/g, '').split('","');
        return line.split(delimiter).map(c => c.replace(/^"|"$/g, '').trim());
    };

    const header = parseLine(lines[0]);
    const urlIdx = header.findIndex(h => h.toLowerCase() === 'url');
    const lengthIdx = header.findIndex(h => h.toLowerCase().includes('meta description length'));
    const descIdx = header.findIndex(h => h.toLowerCase().includes('meta description') && !h.toLowerCase().includes('length'));

    const results = [];
    for (let i = 1; i < lines.length; i++) {
        const cols = parseLine(lines[i]);
        if (cols[urlIdx]) {
            results.push(`URL: ${cols[urlIdx]}\nLength: ${cols[lengthIdx]}\nDesc: ${cols[descIdx]}\n---`);
        }
    }
    console.log(results.join('\n'));
} catch (err) {
    console.error(err);
}
