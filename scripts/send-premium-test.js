
const { Resend } = require('resend');

const resend = new Resend('re_a6AZL6wG_H6JNr7smvHzN988kA2onuR1A');

async function sendActualTest() {
    const targetEmail = 'lmatrading95@gmail.com';
    const token = 'test-token-' + Math.random().toString(36).substring(7);
    const confirmUrl = `https://www.visquanta.com/newsletter/confirm?email=${encodeURIComponent(targetEmail)}&token=${token}`;

    console.log(`Sending updated PREMIUM test to ${targetEmail}...`);

    try {
        const { data, error } = await resend.emails.send({
            from: 'VisQuanta <noreply@visquanta.com>',
            to: targetEmail,
            subject: 'Confirm your subscription - VisQuanta Insights 🚗',
            html: `
                <div style="background-color: #020202; padding: 40px 20px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                    <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 560px;">
                        <tr>
                            <td align="center" style="padding: 30px 0; background: radial-gradient(circle at center, rgba(255, 116, 4, 0.15) 0%, transparent 70%);">
                                <p style="color: #FF7404; font-size: 11px; font-weight: 800; letter-spacing: 4px; margin: 0; text-transform: uppercase;">VISQUANTA / INSIGHTS</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="background: linear-gradient(135deg, #0A0A0A 0%, #050505 100%); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 24px; padding: 48px 40px; box-shadow: 0 20px 40px rgba(0,0,0,0.5);">
                                <h1 style="color: #ffffff; font-size: 34px; font-weight: 900; line-height: 1.1; margin: 0 0 24px; letter-spacing: -1px;">Lock in your <br /><span style="color: #FF7404;">Subscription</span></h1>
                                <p style="color: #9ca3af; font-size: 17px; line-height: 1.6; margin: 0 0 32px;">We've received a request to join the VisQuanta inner circle. To protect your inbox and ensure you're part of the team, please verify your address.</p>
                                
                                <div style="height: 1px; width: 100%; background: linear-gradient(90deg, transparent, rgba(255, 116, 4, 0.3), transparent); margin: 32px 0;"></div>
                                
                                <div style="text-align: center;">
                                    <a href="${confirmUrl}" style="background-color: #FF7404; border-radius: 12px; color: #000000; font-size: 16px; font-weight: 800; text-decoration: none; padding: 18px 40px; display: inline-block; box-shadow: 0 10px 20px -5px rgba(255, 116, 4, 0.4);">Confirm My Spot →</a>
                                </div>
                                
                                <p style="color: #6b7280; font-size: 14px; line-height: 1.5; text-align: center; margin: 32px 0 0;">Once verified, you'll immediately receive our latest <span style="color: #ffffff; font-weight: 600;">Lead Reactivation Blueprint</span>.</p>
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style="padding-top: 40px;">
                                <p style="color: #4b5563; font-size: 13px; font-weight: 600; margin: 0;">Automotive AI for the modern dealership group.</p>
                                <div style="height: 1px; background-color: rgba(255, 255, 255, 0.05); margin: 24px 0;"></div>
                                <p style="color: #374151; font-size: 11px; line-height: 1.6; margin: 0;">© 2026 VisQuanta LLC. 2222 Ponce de Leon Blvd, Miami, FL 33134.</p>
                            </td>
                        </tr>
                    </table>
                </div>
            `
        });

        if (error) {
            console.error('❌ Failed to send:', error.message);
        } else {
            console.log('✅ Premium test sent successfully!');
        }
    } catch (err) {
        console.error('Error:', err.message);
    }
}

sendActualTest();
