import fs from 'fs';
import path from 'path';

/**
 * CI Protection Script: Scans the codebase for internal links that would trigger
 * a 3xx redirect according to next.config.ts.
 * 
 * This fulfills Phase 4 of the Internal Link Normalisation task.
 * It ensures that developers don't introduce new redirected links manually
 * and that our normalization layer covers all necessary cases.
 */

// Load the current redirect map
const REDIRECT_MAP_PATH = path.resolve(process.cwd(), 'src/lib/redirect-map.json');
if (!fs.existsSync(REDIRECT_MAP_PATH)) {
    console.error('❌ Redirect map not found. Run generate-redirect-map.ts first.');
    process.exit(1);
}

const REDIRECT_MAP = JSON.parse(fs.readFileSync(REDIRECT_MAP_PATH, 'utf-8'));
const REDIRECT_SOURCES = Object.keys(REDIRECT_MAP);

const ROOT_DIR = path.resolve(process.cwd(), 'src');
let issuesFound = 0;

function walkDir(dir: string) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            walkDir(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            // Skip the mapping file itself and the normalization lib
            if (file === 'redirect-map.json' || file === 'link-normalization.ts') return;
            checkFile(filePath);
        }
    });
}

function checkFile(filePath: string) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const relativePath = path.relative(process.cwd(), filePath);

    // Regex to find href links in strings or JSX
    // This catches <Link href="/old-path"> and "href='/old-path'"
    const hrefRegex = /href=(?:{[`'"]([^`'"]+)[`'"]}|["']([^"']+)["'])/g;

    let match;
    while ((match = hrefRegex.exec(content)) !== null) {
        const url = match[1] || match[2];

        if (!url || typeof url !== 'string') continue;

        // Strip locale prefix for checking
        let cleanUrl = url.replace(/^\/(ca|uk)/, '');
        if (!cleanUrl.startsWith('/')) continue; // Skip external links

        // Remove trailing slash for matching
        const [pathOnly] = cleanUrl.split(/[?#]/);
        const matchPath = pathOnly.endsWith('/') && pathOnly.length > 1 ? pathOnly.slice(0, -1) : pathOnly;

        if (REDIRECT_SOURCES.includes(matchPath)) {
            // Special exception: if the link is inside normalizeLinks call or related logic, we ignore it?
            // Actually, we want to fail if it's a hardcoded link in a component.

            // Check if this is a false positive (part of the mapping logic itself)
            if (content.includes('normalizeLinks')) {
                // We might be inside the normalization logic, but we should still avoid hardcoded legacy links in the same file
            }

            console.error(`❌ [3XX REDIRECT] Hardcoded legacy link found in ${relativePath}: "${url}" -> redirects to "${REDIRECT_MAP[matchPath]}"`);
            issuesFound++;
        }
    }
}

console.log('🚀 Checking for redirected internal links...');
walkDir(ROOT_DIR);

if (issuesFound > 0) {
    console.error(`\n🚨 Failed: Found ${issuesFound} internal link(s) that resolve to 3xx redirects.`);
    console.error('Please update these links to their canonical versions (see src/lib/redirect-map.json).');
    process.exit(1);
} else {
    console.log('✅ No hardcoded redirected links found.');
    process.exit(0);
}
