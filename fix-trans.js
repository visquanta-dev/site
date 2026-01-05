const fs = require('fs');
const path = require('path');

function walk(dir, fileList = []) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walk(filePath, fileList);
        } else {
            if (file.endsWith('.tsx') || file.endsWith('.ts')) {
                fileList.push(filePath);
            }
        }
    });
    return fileList;
}

const files = walk('./src');
let modifiedCount = 0;

files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    // Regex to find ease arrays that don't have 'as const'
    // Look for: ease: [ ... ]
    // Negative lookahead for " as const"
    const regex = /ease:\s*\[([\d.,\s]+)\](?!\s*as const)/g;

    if (regex.test(content)) {
        const newContent = content.replace(regex, (match, p1) => {
            return `ease: [${p1}] as const`;
        });

        if (newContent !== content) {
            fs.writeFileSync(file, newContent, 'utf8');
            console.log(`Updated: ${file}`);
            modifiedCount++;
        }
    }
});

console.log(`Modified ${modifiedCount} files.`);
