
const { Resend } = require('resend');

const resend = new Resend('re_a6AZL6wG_H6JNr7smvHzN988kA2onuR1A');

async function testFinalConfig() {
    console.log('Testing final configuration (noreply@visquanta.com)...');
    try {
        const { data, error } = await resend.emails.send({
            from: 'VisQuanta <noreply@visquanta.com>',
            to: 'jbillington@visquanta.com',
            subject: 'Final Configuration Test',
            html: '<h1>Configuration Test</h1><p>Testing if noreply@visquanta.com is authorized.</p>'
        });

        if (error) {
            console.error('❌ SEND FAILED:', error.message);
            if (error.name === 'validation_error') {
                console.log('\nREASON: Domain "visquanta.com" is not yet verified in Resend.');
                console.log('ACTION: Please verify your domain at https://resend.com/domains');
            }
        } else {
            console.log('✅ SUCCESS: noreply@visquanta.com is authorized and working!');
            console.log('Email ID:', data.id);
        }
    } catch (err) {
        console.error('Catch Error:', err.message);
    }
}

testFinalConfig();
