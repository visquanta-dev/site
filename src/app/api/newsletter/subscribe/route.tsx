import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';
import { NewsletterWelcomeEmail } from '@/emails/NewsletterWelcomeEmail';

// Defer instantiation to handle missing API key during build time
let resend: Resend | null = null;

function getResendClient() {
    if (!resend) {
        const apiKey = process.env.RESEND_API_KEY || 're_placeholder'; // Use placeholder to prevent constructor from throwing
        resend = new Resend(apiKey);
    }
    return resend;
}


export async function POST(request: NextRequest) {
    try {
        const { email, source = 'blog' } = await request.json();

        // Validate email
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Valid email is required' },
                { status: 400 }
            );
        }

        const normalizedEmail = email.toLowerCase().trim();

        // Get request metadata
        const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
        const userAgent = request.headers.get('user-agent') || 'unknown';

        // Initialize Supabase client
        const supabase = createServerSupabaseClient();

        // Check if already subscribed
        const { data: existing } = await supabase
            .from('newsletter_subscribers')
            .select('id, email, unsubscribed_at')
            .eq('email', normalizedEmail)
            .single();

        if (existing) {
            // If they unsubscribed before, re-subscribe them
            if (existing.unsubscribed_at) {
                await supabase
                    .from('newsletter_subscribers')
                    .update({
                        unsubscribed_at: null,
                        subscribed_at: new Date().toISOString(),
                        updated_at: new Date().toISOString(),
                    })
                    .eq('id', existing.id);
            }

            return NextResponse.json(
                { message: 'Already subscribed', success: true },
                { status: 200 }
            );
        }

        // Insert new subscriber
        const { data: newSubscriber, error: insertError } = await supabase
            .from('newsletter_subscribers')
            .insert({
                email: normalizedEmail,
                source,
                ip_address: ip,
                user_agent: userAgent,
                verified: true, // Set to false if you want double opt-in
            })
            .select()
            .single();

        if (insertError) {
            console.error('Supabase insert error:', insertError);
            return NextResponse.json(
                { error: 'Failed to subscribe' },
                { status: 500 }
            );
        }

        // Send welcome email via Resend
        try {
            await getResendClient().emails.send({
                from: 'VisQuanta Insights <onboarding@resend.dev>',

                to: normalizedEmail,
                subject: 'Welcome to VisQuanta Insights 🚗',
                react: <NewsletterWelcomeEmail email={normalizedEmail} />,
            });
        } catch (emailError) {
            // Log but don't fail - email is secondary to database storage
            console.error('Resend email error:', emailError);
        }

        console.log('Newsletter subscription:', {
            email: normalizedEmail,
            source,
            subscriberId: newSubscriber?.id
        });

        return NextResponse.json(
            { message: 'Subscribed successfully', success: true },
            { status: 200 }
        );
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { error: 'Failed to subscribe' },
            { status: 500 }
        );
    }
}
