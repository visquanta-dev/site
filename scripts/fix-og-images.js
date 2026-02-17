const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '../src/app');
const OG_IMAGE_block = `        images: [
            {
                url: 'https://www.visquanta.com/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'VisQuanta',
            }
        ],`;

function walkDir(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if ((file === 'layout.tsx' || file === 'page.tsx') && filePath !== path.join(ROOT_DIR, 'layout.tsx')) {
            processFile(filePath);
        }
    });
}

function processFile(filePath) {
    let content = fs.readFileSync(filePath, 'utf-8');

    // Check if openGraph exists
    const ogRegex = /openGraph:\s*\{([^}]*)\}/s;
    const match = content.match(ogRegex);

    if (match) {
        const ogContent = match[1];
        if (!ogContent.includes('images:')) {
            console.log(`Fixing ${filePath}...`);
            // Insert images property before the closing brace of openGraph
            const insertionPoint = match.index + match[0].lastIndexOf('}');
            const newContent = content.slice(0, insertionPoint) + OG_IMAGE_block + '\n    ' + content.slice(insertionPoint);
            fs.writeFileSync(filePath, newContent, 'utf-8');
        } else {
            console.log(`Skipping ${filePath} (already has images)`);
        }
    } else {
        // Layout has no openGraph block? We might want to add one, but let's stick to existing blocks first.
        // If metadata exists but no OpenGraph, it inherits root. So it's fine.
        // The issue is partial override.
        console.log(`Skipping ${filePath} (no openGraph block)`);
    }
}

walkDir(ROOT_DIR);
