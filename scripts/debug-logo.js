const sharp = require('sharp');
const path = require('path');

async function checkLogo() {
    const logoPath = path.join(process.cwd(), 'public', 'images', 'visquanta-logo-transparent.png');
    console.log('Checking path:', logoPath);
    try {
        const metadata = await sharp(logoPath).metadata();
        console.log('Logo Metadata:', metadata);
    } catch (err) {
        console.error('Error reading logo:', err);
    }
}

checkLogo();
