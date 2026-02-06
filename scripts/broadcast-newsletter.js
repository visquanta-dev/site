
const { createClient } = require('@supabase/supabase-js');
const { Resend } = require('resend');
const dotenv = require('dotenv');
const { NewsletterPostEmail } = require('../src/emails/NewsletterPostEmail');
const React = require('react');
const { render } = require('@react-email/render');

dotenv.config({ path: '.env.local' });

async function broadcastNewsletter() {
    console.log('--- STARTING NEWSLETTER BROADCAST ---');

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!supabaseUrl || !supabaseServiceKey || !resendApiKey) {
        console.error('Missing configuration. Check .env.local');
        return;
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);
    const resend = new Resend(resendApiKey);

    // 1. Fetch active subscribers
    const { data: subscribers, error: subError } = await supabase
        .from('newsletter_subscribers')
        .select('email')
        .is('unsubscribed_at', null);

    if (subError) {
        console.error('Error fetching subscribers:', subError);
        return;
    }

    if (!subscribers || subscribers.length === 0) {
        console.log('No subscribers found.');
        return;
    }

    console.log(`Found ${subscribers.length} active subscribers.`);

    // 2. Define content (In a real scenario, you'd fetch the latest blog post)
    const content = {
        headline: "How AI is Solving the '9 PM Problem' for Dealerships",
        excerpt: "34% of digital leads submit outside showroom hours. Most dealers are ignoring them. See how Voice AI captures this 'after-hours' revenue automatically.",
        image: "https://www.visquanta.com/images/blog/9pm-problem.jpg",
        slug: "the-9pm-problem-dealership-revenue-leak"
    };

    // 3. Send emails in batches
    const batchSize = 50;
    for (let i = 0; i < subscribers.length; i += batchSize) {
        const batch = subscribers.slice(i, i + batchSize);
        console.log(`Processing batch ${Math.floor(i / batchSize) + 1}...`);

        await Promise.all(batch.map(async (sub) => {
            try {
                // Using render to get HTML since we're in a Node script
                const html = await render(
                    React.createElement(NewsletterPostEmail, {
                        ...content,
                        email: sub.email
                    })
                );

                await resend.emails.send({
                    from: 'VisQuanta Insights <insights@visquanta.com>',
                    to: sub.email,
                    subject: content.headline,
                    html: html
                });
                console.log(`✅ Sent to ${sub.email}`);
            } catch (err) {
                console.error(`❌ Failed to send to ${sub.email}:`, err.message);
            }
        }));
    }

    console.log('--- BROADCAST COMPLETE ---');
}

// Since we're using React components in Node, this might need more setup but this is the logic.
// For now, I'll just write it down.
broadcastNewsletter();
