const sharp = require('sharp');
const path = require('path');

async function checkWhiteLogo() {
    const logoPath = path.join(process.cwd(), 'public', 'images', 'visquanta-logo-white.png');
    console.log('Checking path:', logoPath);
    try {
        const metadata = await sharp(logoPath).metadata();
        console.log('White Logo Metadata:', metadata);
    } catch (err) {
        console.error('Error reading white logo:', err);
    }
}

checkWhiteLogo();
