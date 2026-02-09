const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, '../public/newsletter-logo.webp');
const outputPath = path.join(__dirname, '../public/newsletter-logo-optimized.webp');

async function optimizeImage() {
  try {
    const originalStats = fs.statSync(inputPath);
    console.log(`Original size: ${(originalStats.size / 1024).toFixed(2)} KB`);

    await sharp(inputPath)
      .webp({ 
        quality: 75, 
        effort: 6,
        lossless: false,
        nearLossless: false
      })
      .toFile(outputPath);

    const optimizedStats = fs.statSync(outputPath);
    console.log(`Optimized size: ${(optimizedStats.size / 1024).toFixed(2)} KB`);
    console.log(`Savings: ${(((originalStats.size - optimizedStats.size) / originalStats.size) * 100).toFixed(2)}%`);

    // Replace original with optimized version
    fs.renameSync(outputPath, inputPath);
    console.log('✓ Newsletter logo optimized successfully!');
  } catch (error) {
    console.error('Error optimizing image:', error);
    process.exit(1);
  }
}

optimizeImage();
