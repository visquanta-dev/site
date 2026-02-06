
const { createClient } = require('@supabase/supabase-js');

// These are from your .env.local
const url = 'https://zkcxconnmzwhlmqqzamz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprY3hjb25ubXp3aGxtcXF6YW16Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2ODU4OTgxMSwiZXhwIjoyMDg0MTY1ODExfQ.0snt88iNleKVTCbzEeBUTwCHLl2Xq-2PAmOZfLn6dnw';

const supabase = createClient(url, key);

async function test() {
    console.log('Testing Supabase Connection...');

    // Try to select
    const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .limit(1);

    if (error) {
        console.error('Connection/Table Error:', error.message);
        if (error.code === '42P01') {
            console.log('CRITICAL: The table "newsletter_subscribers" DOES NOT EXIST in this Supabase project.');
        }
    } else {
        console.log('SUCCESS: Connected to Supabase and table exists.');
        console.log('Current subscribers:', data.length);
    }
}

test();
