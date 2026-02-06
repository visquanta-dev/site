
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';
import { NewsletterWelcomeEmail } from '@/emails/NewsletterWelcomeEmail';

export async function POST(request: NextRequest) {
    try {
        const { email, token } = await request.json();

        if (!email || !token) {
            return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
        }

        const supabase = createServerSupabaseClient();

        // 1. Find subscriber with matching email and token
        const { data: subscriber, error: fetchError } = await supabase
            .from('newsletter_subscribers')
            .select('id, verified, confirmation_token')
            .eq('email', email)
            .single();

        if (fetchError || !subscriber) {
            console.error('Fetch error or no subscriber:', fetchError);
            return NextResponse.json({ error: 'Subscriber not found' }, { status: 404 });
        }

        // 2. Validate token
        if (subscriber.confirmation_token !== token) {
            return NextResponse.json({ error: 'Invalid confirmation token' }, { status: 401 });
        }

        // 3. If already verified, just return success
        if (subscriber.verified) {
            return NextResponse.json({ message: 'Already verified', success: true });
        }

        // 4. Update status to verified
        const { error: updateError } = await supabase
            .from('newsletter_subscribers')
            .update({
                verified: true,
                confirmation_token: null, // Clear token after use
            })
            .eq('id', subscriber.id);

        if (updateError) {
            console.error('Update error:', updateError);
            throw updateError;
        }

        // 5. Send final Welcome Email
        try {
            const resend = new Resend(process.env.RESEND_API_KEY);
            await resend.emails.send({
                from: 'VisQuanta <noreply@visquanta.com>',
                to: email,
                subject: 'Welcome to VisQuanta Insights 🚗',
                react: <NewsletterWelcomeEmail email={ email } />,
            });
        console.log('Final welcome email sent to:', email);
    } catch (emailError) {
        console.error('Failed to send welcome email after confirmation:', emailError);
    }

    return NextResponse.json({ message: 'Subscription confirmed', success: true });

} catch (error: any) {
    console.error('Confirmation error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
}
}
