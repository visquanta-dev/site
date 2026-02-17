import fs from 'fs';
import path from 'path';

/**
 * CI Protection Script: Scans the codebase for:
 *   1. Internal links that would trigger a 3xx redirect (per redirect-map.json)
 *   2. Internal links pointing to locale routes without active route handlers (e.g., /uk/*)
 * 
 * This fulfills Phase 4 of the Internal Link Normalisation task and
 * Phase 4 of the Locale Route Cleanup task.
 */

// =============================================================================
// 1. Load redirect map
// =============================================================================
const REDIRECT_MAP_PATH = path.resolve(process.cwd(), 'src/lib/redirect-map.json');
if (!fs.existsSync(REDIRECT_MAP_PATH)) {
    console.error('❌ Redirect map not found. Run generate-redirect-map.ts first.');
    process.exit(1);
}

const REDIRECT_MAP = JSON.parse(fs.readFileSync(REDIRECT_MAP_PATH, 'utf-8'));
const REDIRECT_SOURCES = Object.keys(REDIRECT_MAP);

// =============================================================================
// 2. Define dead locale prefixes — locale routes with no app router handler
// =============================================================================
const DEAD_LOCALE_PREFIXES = ['/uk'];

// Files/patterns to exclude from the check
const EXCLUDE_FILES = [
    'redirect-map.json',
    'link-normalization.ts',
    'check-internal-links.ts',
    'generate-redirect-map.ts',
    'crawl-blog.ts',
];

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
            if (EXCLUDE_FILES.includes(file)) return;
            checkFile(filePath);
        }
    });
}

function checkFile(filePath: string) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const relativePath = path.relative(process.cwd(), filePath);

    // Regex to find href links in strings or JSX
    const hrefRegex = /href=(?:{[`'"]([^`'"]+)[`'"]}|["']([^"']+)["'])/g;

    let match;
    while ((match = hrefRegex.exec(content)) !== null) {
        const url = match[1] || match[2];

        if (!url || typeof url !== 'string') continue;
        if (!url.startsWith('/')) continue; // Skip external links

        // ── Check 1: Dead locale prefix ──────────────────────────────────
        for (const deadPrefix of DEAD_LOCALE_PREFIXES) {
            if (url === deadPrefix || url.startsWith(`${deadPrefix}/`)) {
                console.error(`❌ [DEAD LOCALE] Link to non-existent locale route in ${relativePath}: "${url}" → ${deadPrefix} has no route handler (404)`);
                issuesFound++;
            }
        }

        // ── Check 2: Redirect map match ──────────────────────────────────
        // Strip locale prefix for checking
        let cleanUrl = url.replace(/^\/(ca|uk)/, '');
        if (!cleanUrl.startsWith('/')) continue;

        // Remove trailing slash for matching
        const [pathOnly] = cleanUrl.split(/[?#]/);
        const matchPath = pathOnly.endsWith('/') && pathOnly.length > 1 ? pathOnly.slice(0, -1) : pathOnly;

        if (REDIRECT_SOURCES.includes(matchPath)) {
            console.error(`❌ [3XX REDIRECT] Hardcoded legacy link found in ${relativePath}: "${url}" → redirects to "${REDIRECT_MAP[matchPath]}"`);
            issuesFound++;
        }
    }
}

console.log('🚀 Checking for redirected and dead-locale internal links...');
walkDir(ROOT_DIR);

// Also scan the scripts directory for any hardcoded dead locale links
const SCRIPTS_DIR = path.resolve(process.cwd(), 'scripts');
if (fs.existsSync(SCRIPTS_DIR)) {
    const scriptFiles = fs.readdirSync(SCRIPTS_DIR).filter(f => f.endsWith('.ts') || f.endsWith('.tsx'));
    scriptFiles.forEach(file => {
        if (EXCLUDE_FILES.includes(file)) return;
        checkFile(path.join(SCRIPTS_DIR, file));
    });
}

if (issuesFound > 0) {
    console.error(`\n🚨 Failed: Found ${issuesFound} issue(s).`);
    console.error('Please update these links to their canonical versions.');
    console.error('See src/lib/redirect-map.json for redirect mappings.');
    console.error('Dead locale prefixes (no route handler): ' + DEAD_LOCALE_PREFIXES.join(', '));
    process.exit(1);
} else {
    console.log('✅ No hardcoded redirected or dead-locale links found.');
    process.exit(0);
}
