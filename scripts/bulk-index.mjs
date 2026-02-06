// scripts/bulk-index.mjs
// Professional Indexing Script for VisQuanta
// Targets Google (via Indexing API) and Bing/Yandex (via IndexNow)

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { google } from 'googleapis';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITEMAP_URL = 'https://www.visquanta.com/sitemap.xml';
const CREDENTIALS_PATH = path.join(__dirname, '../google-credentials.json');

async function getUrlsFromSitemap() {
    console.log(`📡 Fetching sitemap: ${SITEMAP_URL}...`);
    try {
        const response = await fetch(SITEMAP_URL);
        const xml = await response.text();
        const urls = [...xml.matchAll(/<loc>(.*?)<\/loc>/g)].map(m => m[1]);
        console.log(`📦 Found ${urls.length} URLs in sitemap.`);
        return urls;
    } catch (error) {
        console.error('❌ Failed to fetch sitemap:', error);
        return [];
    }
}

async function subitToGoogle(urls) {
    if (!fs.existsSync(CREDENTIALS_PATH)) {
        console.warn('⚠️ Google Indexing skipped: "google-credentials.json" not found.');
        return;
    }

    console.log('🔍 Starting Google Indexing API submission...');

    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: CREDENTIALS_PATH,
            scopes: ['https://www.googleapis.com/auth/indexing'],
        });

        const client = await auth.getClient();
        const indexing = google.indexing({ version: 'v3', auth: client });

        // Google has a limit of ~200 per day. We'll take the first 200 if sitemap is larger.
        const targetUrls = urls.slice(0, 200);

        for (const url of targetUrls) {
            try {
                await indexing.urlNotifications.publish({
                    requestBody: {
                        url: url,
                        type: 'URL_UPDATED',
                    },
                });
                console.log(`✅ Google: Indexed ${url}`);
            } catch (err) {
                console.error(`❌ Google: Failed ${url} - ${err.message}`);
            }
        }
    } catch (error) {
        console.error('💥 Critical Google API Error:', error);
    }
}

async function submitToIndexNow(urls) {
    const HOST = 'www.visquanta.com';
    // This key should match a file in public/[KEY].txt for verification
    const INDEX_NOW_KEY = '5b93ddb14cea49d49ef5eeabd215da3a';

    console.log('📡 Submitting to IndexNow (Bing/Yandex/DuckDuckGo)...');

    try {
        const response = await fetch('https://api.indexnow.org/IndexNow', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                host: HOST,
                key: INDEX_NOW_KEY,
                keyLocation: `https://${HOST}/${INDEX_NOW_KEY}.txt`,
                urlList: urls
            })
        });

        if (response.ok) {
            console.log('✅ IndexNow: Bulk submission SUCCESSFUL.');
        } else {
            console.log('❌ IndexNow: Failed to submit (Status: ' + response.status + ')');
        }
    } catch (error) {
        console.error('💥 IndexNow Error:', error);
    }
}

async function run() {
    console.log('🚀 VISQUANTA ULTIMATE INDEXER STARTING...');

    const urls = await getUrlsFromSitemap();
    if (urls.length === 0) return;

    // 1. Submit to Bing/Yandex (No auth needed, just a text file)
    await submitToIndexNow(urls);

    // 2. Submit to Google (Requires Service Account JSON)
    await subitToGoogle(urls);

    console.log('\n✨ All indexing tasks submitted.');
}

run();
