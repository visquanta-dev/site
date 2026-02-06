
const { Resend } = require('resend');
const React = require('react');

// We need to use dynamic imports for the React components because they are TSX/ESM
// For this simple node test, we'll just send a HTML version or use the API endpoint logic
// But since I have the Resend key, I can just trigger the full flow via a fetch to your local API 
// Or better, just send the email directly using the same template logic.

const resend = new Resend('re_a6AZL6wG_H6JNr7smvHzN988kA2onuR1A');

async function sendActualTest() {
    const targetEmail = 'lmatrading95@gmail.com';
    const token = 'test-token-' + Math.random().toString(36).substring(7);
    const confirmUrl = `https://www.visquanta.com/newsletter/confirm?email=${encodeURIComponent(targetEmail)}&token=${token}`;

    console.log(`Sending live Double Opt-In test to ${targetEmail}...`);

    try {
        const { data, error } = await resend.emails.send({
            from: 'VisQuanta <noreply@visquanta.com>',
            to: targetEmail,
            subject: 'Confirm your subscription - VisQuanta Insights 🚗',
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #050505; color: #ffffff;">
                    <h1 style="color: #FF7404; text-align: center;">VisQuanta</h1>
                    <div style="background-color: #141414; padding: 40px; border-radius: 16px; border: 1px solid #FF740433;">
                        <h2 style="margin-top: 0;">Confirm your subscription</h2>
                        <p style="color: #cccccc; line-height: 1.6;">Thanks for your interest in VisQuanta Insights. We just need to verify your email address to make sure you want to receive our weekly automotive AI strategies.</p>
                        <div style="text-align: center; margin-top: 30px;">
                            <a href="${confirmUrl}" style="background-color: #FF7404; color: #000000; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block;">Confirm Subscription →</a>
                        </div>
                    </div>
                </div>
            `
        });

        if (error) {
            console.error('❌ Failed to send:', error.message);
        } else {
            console.log('✅ Email sent successfully!');
            console.log('ID:', data.id);
        }
    } catch (err) {
        console.error('Error:', err.message);
    }
}

sendActualTest();
