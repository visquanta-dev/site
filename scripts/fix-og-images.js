const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const WHITE_LOGO = path.join(__dirname, '../public/images/visquanta-logo-white.png');
const TRANSPARENT_LOGO = path.join(__dirname, '../public/images/visquanta-logo-transparent.png');
const OG_IMAGE = path.join(__dirname, '../public/images/og-image.png');

async function fixLogos() {
    console.log('Fixing logos using:', WHITE_LOGO);

    if (!fs.existsSync(WHITE_LOGO)) {
        console.error('Source white logo not found!');
        return;
    }

    // 1. Restore visquanta-logo-transparent.png from visquanta-logo-white.png
    // visquanta-logo-white.png is 750x256, which is the correct aspect ratio.
    await sharp(WHITE_LOGO)
        .toFile(TRANSPARENT_LOGO.replace('.png', '-fixed.png'));

    fs.copyFileSync(TRANSPARENT_LOGO.replace('.png', '-fixed.png'), TRANSPARENT_LOGO);
    fs.unlinkSync(TRANSPARENT_LOGO.replace('.png', '-fixed.png'));
    console.log('✓ Restored public/images/visquanta-logo-transparent.png');

    // 2. Generate a proper OG image (1200x630) with the logo centered
    // This solves the problem of using a square logo as OG image.
    const background = { create: { width: 1200, height: 630, channels: 4, background: { r: 5, g: 5, b: 5, alpha: 1 } } };

    const logoResized = await sharp(WHITE_LOGO)
        .resize({ width: 600, height: 200, fit: 'inside' })
        .toBuffer();

    await sharp(background)
        .composite([{ input: logoResized, gravity: 'center' }])
        .png()
        .toFile(OG_IMAGE.replace('.png', '-fixed.png'));

    fs.copyFileSync(OG_IMAGE.replace('.png', '-fixed.png'), OG_IMAGE);
    fs.unlinkSync(OG_IMAGE.replace('.png', '-fixed.png'));
    console.log('✓ Regenerated public/images/og-image.png (1200x630)');

    // 3. Update favicons as well since they depend on the transparent logo
    try {
        console.log('Regenerating favicons...');
        const generateFavicons = require('./generate-favicons');
        // If it's not exported as a function, we'll just run the script
    } catch (e) {
        // Run as shell command if needed
    }
}

fixLogos().catch(console.error);
