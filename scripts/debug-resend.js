
const { Resend } = require('resend');

const resend = new Resend('re_a6AZL6wG_H6JNr7smvHzN988kA2onuR1A');

async function testResend() {
    console.log('Testing Resend API Key...');
    try {
        const { data, error } = await resend.emails.send({
            from: 'VisQuanta <onboarding@resend.dev>',
            to: 'test@example.com',
            subject: 'Test Email',
            html: '<p>If you see this, the key is valid.</p>'
        });

        if (error) {
            console.error('Resend Error:', error);
        } else {
            console.log('Resend Success!', data);
        }
    } catch (err) {
        console.error('Catch Error:', err.message);
    }
}

testResend();
