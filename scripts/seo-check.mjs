import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '../src/app');

console.log('🚀 Starting VisQuanta SEO Compliance Check...');

let issuesFound = 0;

function walkDir(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (file === 'page.tsx' || file === 'layout.tsx') {
            checkFile(filePath);
        }
    });
}

function checkFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const relativePath = path.relative(ROOT_DIR, filePath);

    // Skip internal files, API routes, or excluded directories
    if (relativePath.includes('api/') || relativePath.includes('(_') || relativePath.includes('favicon.ico')) return;

    // 1. Check for Metadata
    const hasMetadata = content.includes('export const metadata') || content.includes('generateMetadata');
    const isClient = content.includes("'use client'") || content.includes('"use client"');

    // Pages should have metadata or be covered by an adjacent layout
    if (filePath.endsWith('page.tsx') && !hasMetadata && !isClient) {
        // This is a warning - it might be handled by layout.tsx
    }

    // 2. Performance Check: Title Length
    // Look specifically for title inside a metadata object or generateMetadata return
    // Handle escaped quotes correctly
    const titleRegex = /metadata:\s*Metadata\s*=\s*{[^}]*title:\s*(['"`])(.*?)(?<!\\)\1|title:\s*(['"`])(.*?)(?<!\\)\3.*?\}\s*as\s*Metadata|generateMetadata.*?\{\s*return\s*\{[^}]*title:\s*(['"`])(.*?)(?<!\\)\5/s;
    const titleMatch = content.match(titleRegex);
    const title = titleMatch ? (titleMatch[2] || titleMatch[4] || titleMatch[6]) : null;

    if (title) {
        if (title.length > 61) {
            console.warn(`⚠️ [LENGTH] Title too long (${title.length} chars) in ${relativePath}`);
            issuesFound++;
        } else if (title.length < 25) {
            console.warn(`⚠️ [LENGTH] Title too short (${title.length} chars) in ${relativePath}`);
            issuesFound++;
        }
    }

    // 3. Performance Check: Description Length
    // Handle escaped quotes correctly
    const descRegex = /description:\s*(['"`])(.*?)(?<!\\)\1/s;
    const descMatch = content.match(descRegex);
    const desc = descMatch ? descMatch[2] : null;

    if (desc && hasMetadata) {
        if (desc.length > 165) {
            console.warn(`⚠️ [LENGTH] Description too long (${desc.length} chars) in ${relativePath}`);
            issuesFound++;
        } else if (desc.length < 40) {
            console.warn(`⚠️ [LENGTH] Description too short (${desc.length} chars) in ${relativePath}`);
            issuesFound++;
        }
    }

    // 4. Critical Check: Canonical Tags
    // Only check if it's a page or a top-level layout that should have metadata
    // EXCLUDE root layout (src/app/layout.tsx)
    const isRootLayout = relativePath === 'layout.tsx';
    if (hasMetadata && !content.includes('canonical:') && !relativePath.includes('not-found') && !isRootLayout) {
        console.error(`❌ [MISSING] No canonical URL found in ${relativePath}`);
        issuesFound++;
    }

    // 5. Schema Check (for pages)
    if (filePath.endsWith('page.tsx') && !relativePath.includes('blog/') && !relativePath.includes('case-studies/')) {
        // Simple check for breadcrumb schema in main pages
        if (!content.includes('application/ld+json') && !content.includes('breadcrumbSchema')) {
            // High priority pages that definitely need schema
            const priorityPages = ['service-drive', 'lead-reactivation', 'reputation-management', 'contact'];
            if (priorityPages.some(pp => relativePath.includes(pp))) {
                console.warn(`⚠️ [SCHEMA] Missing JSON-LD schema (Breadcrumbs/LocalBusiness) in ${relativePath}`);
                issuesFound++;
            }
        }
    }
}

try {
    walkDir(ROOT_DIR);

    console.log('\n--- Audit Results ---');
    if (issuesFound === 0) {
        console.log('✅ SEO Audit Passed: No critical regressions detected.');
        process.exit(0);
    } else {
        console.warn(`🚨 SEO Audit Finished with ${issuesFound} issues.`);
        console.log('Please review the warnings above before merging.');
        // We exit with 0 to not break the build if it's just warnings, 
        // but it highlights them in the CI log.
        process.exit(0);
    }
} catch (error) {
    console.error('An error occurred during SEO audit:', error);
    process.exit(1);
}
