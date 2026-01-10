#!/usr/bin/env node

/**
 * RainaCorp OG Preview Image Generator
 * Automatically captures 1200x630 preview images
 *
 * Usage:
 *   npm install puppeteer
 *   node generate-og-images.js
 */

const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const OUTPUT_DIR = path.join(__dirname, 'images', 'og');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

async function generatePreview(browser, elementId, filename) {
    console.log(`Generating ${filename}...`);

    const page = await browser.newPage();

    // Set viewport to exactly 1200x630
    await page.setViewport({
        width: 1200,
        height: 630,
        deviceScaleFactor: 2 // High DPI for crisp text
    });

    // Load the generator page
    const generatorPath = `file://${path.join(__dirname, 'og-preview-generator.html')}`;
    await page.goto(generatorPath, { waitUntil: 'networkidle0' });

    // Find the specific preview element
    const element = await page.$(`#${elementId}`);

    if (!element) {
        throw new Error(`Element ${elementId} not found`);
    }

    // Screenshot the element
    const outputPath = path.join(OUTPUT_DIR, filename);
    await element.screenshot({
        path: outputPath,
        type: 'png'
    });

    console.log(`✓ Saved: ${outputPath}`);

    await page.close();
}

async function main() {
    console.log('🎨 RainaCorp OG Preview Generator\n');
    console.log('Starting browser...\n');

    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    try {
        // Generate RainaCorp main site preview
        await generatePreview(browser, 'rainacorp-preview', 'rainacorp-og.png');

        // Generate North Star preview
        await generatePreview(browser, 'north-star-preview', 'north-star-og.png');

        // Generate Hemera Networks preview
        await generatePreview(browser, 'hemera-networks-preview', 'hemera-networks-og.png');

        // Generate PropIQ preview
        await generatePreview(browser, 'propiq-preview', 'propiq-og.png');

        // Generate FinanceIQ preview
        await generatePreview(browser, 'financeiq-preview', 'financeiq-og.png');

        console.log('\n✅ All previews generated successfully!');
        console.log(`\nImages saved to: ${OUTPUT_DIR}`);
        console.log('\nNext steps:');
        console.log('1. Verify images in images/og/ folder');
        console.log('2. Deploy to Firebase');
        console.log('3. Test with Facebook Debugger and Twitter Validator\n');

    } catch (error) {
        console.error('❌ Error generating previews:', error);
        process.exit(1);
    } finally {
        await browser.close();
    }
}

// Run if called directly
if (require.main === module) {
    main().catch(error => {
        console.error(error);
        process.exit(1);
    });
}

module.exports = { generatePreview };
