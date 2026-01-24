const fs = require('fs');
const path = require('path');

const filesToRead = [
    'src/app/lead-reactivation/layout.tsx',
    'src/app/integrations/page.tsx',
    'src/app/faqs/layout.tsx',
    'src/app/dealers/layout.tsx',
    'src/app/dealers/franchise/layout.tsx',
    'src/app/dealers/independent/layout.tsx',
    'src/app/dealers/pre-owned/layout.tsx',
    'src/app/dealers/auto-groups/layout.tsx',
    'src/app/dealer-success/page.tsx',
    'src/app/custom-campaigns/layout.tsx',
    'src/app/contact/layout.tsx',
    'src/app/cookie-policy/layout.tsx',
    'src/app/case-studies/layout.tsx',
    'src/app/company/layout.tsx',
    'src/app/book-demo/page.tsx',
    'src/app/careers/layout.tsx',
    'src/app/auto-master-suite/layout.tsx',
    'src/app/blog/page.tsx',
    'src/app/ams-guides/layout.tsx',
    'src/app/about-visquanta/layout.tsx'
];

filesToRead.forEach(file => {
    try {
        const fullPath = path.join(process.cwd(), file);
        const content = fs.readFileSync(fullPath, 'utf8');
        console.log(`--- FILE: ${file} ---`);
        const titleMatch = content.match(/title:\s*(['"`].*?['"`])/);
        const descMatch = content.match(/description:\s*(['"`].*?['"`])/);
        console.log(`TITLE: ${titleMatch ? titleMatch[1] : 'Not Found'}`);
        console.log(`DESC: ${descMatch ? descMatch[1] : 'Not Found'}`);
        console.log('--- END ---');
    } catch (e) {
        console.log(`ERROR reading ${file}: ${e.message}`);
    }
});
