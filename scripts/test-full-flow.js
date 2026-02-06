
const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');

const url = 'https://zkcxconnmzwhlmqqzamz.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InprY3hjb25ubXp3aGxtcXF6YW16Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc2ODU4OTgxMSwiZXhwIjoyMDg0MTY1ODExfQ.0snt88iNleKVTCbzEeBUTwCHLl2Xq-2PAmOZfLn6dnw';
const resendKey = 're_a6AZL6wG_H6JNr7smvHzN988kA2onuR1A';

const supabase = createClient(url, key);
const resend = new Resend(resendKey);

async function testSubscribe() {
    const testEmail = 'jbillington+test@visquanta.com';
    console.log(`Simulating subscription for ${testEmail}...`);

    // 1. Supabase insert
    const { data: sub, error: subError } = await supabase
        .from('newsletter_subscribers')
        .insert({ email: testEmail, source: 'debug-script', verified: true })
        .select()
        .single();

    if (subError) {
        if (subError.code === '23505') {
            console.log('User already exists in Supabase. Proceeding with email test.');
        } else {
            console.error('Supabase Error:', subError.message);
            return;
        }
    } else {
        console.log('Successfully added to Supabase.');
    }

    // 2. Resend email
    console.log('Sending welcome email via Resend...');
    const { error: emailError } = await resend.emails.send({
        from: 'VisQuanta <onboarding@resend.dev>',
        to: 'jbillington@visquanta.com', // Restricted to this recipient
        subject: 'Welcome to VisQuanta (Debug)',
        html: '<h1>Welcome!</h1><p>The newsletter system is working.</p>'
    });

    if (emailError) {
        console.error('Email Error:', emailError.message);
    } else {
        console.log('✅ COMPLETE: Integration working for authorized recipient.');
    }
}

testSubscribe();
