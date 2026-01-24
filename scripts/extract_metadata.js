const fs = require('fs');
const path = require('path');

const srcDir = path.join(process.cwd(), 'src', 'app');

function extractMetadata(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        const titleMatch = content.match(/title:\s*['"`](.*?)['"`]/);
        const descMatch = content.match(/description:\s*['"`](.*?)['"`]/);

        return {
            title: titleMatch ? titleMatch[1] : null,
            description: descMatch ? descMatch[1] : null
        };
    } catch (e) {
        return { title: null, description: null };
    }
}

function traverse(dir, results = {}) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            traverse(fullPath, results);
        } else if (file === 'layout.tsx' || file === 'page.tsx') {
            let route = path.relative(srcDir, path.dirname(fullPath));
            route = route === '' ? '/' : '/' + route.replace(/\\/g, '/');

            if (!results[route]) {
                results[route] = {
                    layout: { title: null, description: null },
                    page: { title: null, description: null }
                };
            }

            const meta = extractMetadata(fullPath);

            if (file === 'layout.tsx') {
                if (meta.title) results[route].layout.title = meta.title;
                if (meta.description) results[route].layout.description = meta.description;
            } else {
                if (meta.title) results[route].page.title = meta.title;
                if (meta.description) results[route].page.description = meta.description;
            }
        }
    });
    return results;
}

const metadata = traverse(srcDir);
const report = [];

Object.keys(metadata).sort().forEach(route => {
    const data = metadata[route];
    const finalTitle = data.page.title || data.layout.title || 'INHERITED/MISSING';
    const finalDesc = data.page.description || data.layout.description || 'INHERITED/MISSING';

    report.push({
        Route: route,
        Title: finalTitle,
        Description: finalDesc
    });
});

// Output clean JSON
console.log(JSON.stringify(report, null, 2));
