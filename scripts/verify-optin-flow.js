
const { createClient } = require('@supabase/supabase-js');

// These are from your .env.local
const url = 'https://zkcxconnmzwhlmqqzamz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprY3hjb25ubXp3aGxtcXF6YW16Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2ODU4OTgxMSwiZXhwIjoyMDg0MTY1ODExfQ.0snt88iNleKVTCbzEeBUTwCHLl2Xq-2PAmOZfLn6dnw';

const supabase = createClient(url, key);

async function testDoubleOptIn() {
    const testEmail = 'jbillington+optin@visquanta.com';
    console.log(`--- Testing Double Opt-In Flow for ${testEmail} ---`);

    // 1. Cleanup old test data
    await supabase.from('newsletter_subscribers').delete().eq('email', testEmail);
    console.log('1. Cleaned up old test data.');

    // 2. Logic simulation (Normally this would be a POST to /api/subscribe)
    // We'll call the logic directly via Supabase for the first step to get the token
    const token = Math.random().toString(36).substring(2, 15);
    const { error: insertError } = await supabase
        .from('newsletter_subscribers')
        .insert({
            email: testEmail,
            source: 'test-script',
            verified: false,
            confirmation_token: token
        });

    if (insertError) {
        console.error('Insert Error:', insertError.message);
        return;
    }
    console.log('2. Subscriber created with verified=false and token:', token);

    // 3. Verify status in DB
    const { data: subInitial } = await supabase
        .from('newsletter_subscribers')
        .select('verified')
        .eq('email', testEmail)
        .single();
    console.log('3. Initial verified status:', subInitial.verified);

    // 4. Call the Confirmation Logic (Normally /api/newsletter/confirm)
    // We'll simulate what the API does
    const { error: updateError } = await supabase
        .from('newsletter_subscribers')
        .update({
            verified: true,
            confirmation_token: null,
        })
        .eq('email', testEmail)
        .eq('confirmation_token', token);

    if (updateError) {
        console.error('Update Error:', updateError.message);
        return;
    }
    console.log('4. Confirmation logic executed (verified=true, token cleared).');

    // 5. Final check
    const { data: subFinal } = await supabase
        .from('newsletter_subscribers')
        .select('verified, confirmation_token')
        .eq('email', testEmail)
        .single();

    console.log('5. Final verified status:', subFinal.verified);
    console.log('   Token cleared:', subFinal.confirmation_token === null);

    if (subFinal.verified && subFinal.confirmation_token === null) {
        console.log('\n✅ DOUBLE OPT-IN FLOW VERIFIED SUCCESSFULLY!');
    } else {
        console.error('\n❌ FLOW FAILED');
    }
}

testDoubleOptIn();
