
const { Resend } = require('resend');

const resend = new Resend('re_a6AZL6wG_H6JNr7smvHzN988kA2onuR1A');

async function testResendStrict() {
    console.log('Testing Resend with authorized recipient...');
    try {
        const { data, error } = await resend.emails.send({
            from: 'VisQuanta Website <onboarding@resend.dev>', // Use onboarding@resend.dev until verified
            to: 'jbillington@visquanta.com',
            subject: 'Authorized Test Email',
            html: '<p>Testing connection to authorized recipient.</p>'
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

testResendStrict();
