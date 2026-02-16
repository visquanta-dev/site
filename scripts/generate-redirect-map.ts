import fs from 'fs';
import path from 'path';

/**
 * Script to extract redirect rules from next.config.ts and generate a static mapping
 * for the render-time link normalization layer.
 * 
 * This fulfills Phase 1 of the Internal Link Normalisation task.
 */

async function generateMapping() {
    const configPath = path.resolve(process.cwd(), 'next.config.ts');

    if (!fs.existsSync(configPath)) {
        console.error('next.config.ts not found');
        return;
    }

    const content = fs.readFileSync(configPath, 'utf-8');

    // Simple regex to extract source/destination pairs from the redirects() function
    // We look for objects with source and destination properties
    const redirectRegex = /source:\s*(['"`])(.*?)\1,\s*destination:\s*(['"`])(.*?)\3/g;

    const mapping: Record<string, string> = {};
    let match;

    while ((match = redirectRegex.exec(content)) !== null) {
        const source = match[2];
        const destination = match[4];

        // Skip patterns with variables (like :slug, :path*) for the direct map,
        // but keep track of them if we wanted to implement pattern matching
        if (!source.includes(':') && !destination.includes('http')) {
            mapping[source] = destination;
        }
    }

    // Add some manual ones that might be regex-heavy or pattern-based
    // phase 2 handles some of these via logic

    const outputPath = path.resolve(process.cwd(), 'src/lib/redirect-map.json');
    fs.writeFileSync(outputPath, JSON.stringify(mapping, null, 2));

    console.log(`✅ Generated redirect map with ${Object.keys(mapping).length} static rules to ${outputPath}`);
}

generateMapping();
