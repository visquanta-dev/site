const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const SOURCE_LOGO = path.join(__dirname, '../public/images/visquanta-logo-transparent.png');
const OUTPUT_DIR = path.join(__dirname, '../public');
const APP_DIR = path.join(__dirname, '../src/app');

async function generateFavicons() {
    console.log('Generating favicons from:', SOURCE_LOGO);

    // Read the source image
    const sourceBuffer = fs.readFileSync(SOURCE_LOGO);

    // Generate favicon.ico (32x32 PNG - browsers accept PNG favicons)
    await sharp(sourceBuffer)
        .resize(32, 32)
        .png()
        .toFile(path.join(APP_DIR, 'favicon.ico'));
    console.log('✓ Generated src/app/favicon.ico (32x32)');

    // Generate apple-touch-icon.png (180x180)
    await sharp(sourceBuffer)
        .resize(180, 180)
        .png()
        .toFile(path.join(OUTPUT_DIR, 'apple-touch-icon.png'));
    console.log('✓ Generated public/apple-touch-icon.png (180x180)');

    // Generate android-chrome icons
    await sharp(sourceBuffer)
        .resize(192, 192)
        .png()
        .toFile(path.join(OUTPUT_DIR, 'android-chrome-192x192.png'));
    console.log('✓ Generated public/android-chrome-192x192.png (192x192)');

    await sharp(sourceBuffer)
        .resize(512, 512)
        .png()
        .toFile(path.join(OUTPUT_DIR, 'android-chrome-512x512.png'));
    console.log('✓ Generated public/android-chrome-512x512.png (512x512)');

    // Generate favicon-16x16.png and favicon-32x32.png
    await sharp(sourceBuffer)
        .resize(16, 16)
        .png()
        .toFile(path.join(OUTPUT_DIR, 'favicon-16x16.png'));
    console.log('✓ Generated public/favicon-16x16.png (16x16)');

    await sharp(sourceBuffer)
        .resize(32, 32)
        .png()
        .toFile(path.join(OUTPUT_DIR, 'favicon-32x32.png'));
    console.log('✓ Generated public/favicon-32x32.png (32x32)');

    console.log('\n✅ All favicons generated successfully!');
}

generateFavicons().catch(console.error);
