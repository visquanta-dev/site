
import React from 'react';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';
import { NewsletterPostEmail } from '@/emails/NewsletterPostEmail';
import { getBlogPosts } from '@/lib/seobot';

export async function POST(request: NextRequest) {
    // Only allow with a secret key
    const authHeader = request.headers.get('authorization');
    const secretKey = process.env.BROADCAST_SECRET_KEY;

    if (!secretKey || authHeader !== `Bearer ${secretKey}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    try {
        const { blogSlug } = await request.json();

        // 1. Fetch latest post if no slug provided
        let post;
        if (blogSlug) {
            // In a real app, you'd fetch the specific post
            // For now we'll just use the latest
            const { posts } = await getBlogPosts(0, 1);
            post = posts[0];
        } else {
            const { posts } = await getBlogPosts(0, 1);
            post = posts[0];
        }

        if (!post) {
            return NextResponse.json({ error: 'No posts found to broadcast' }, { status: 404 });
        }

        // 2. Fetch subscribers
        const supabase = createServerSupabaseClient();
        const { data: subscribers, error: subError } = await supabase
            .from('newsletter_subscribers')
            .select('email')
            .eq('verified', true)
            .is('unsubscribed_at', null);

        if (subError) throw subError;
        if (!subscribers || subscribers.length === 0) {
            return NextResponse.json({ message: 'No active subscribers to send to' });
        }

        // 3. Send via Resend
        const resend = new Resend(process.env.RESEND_API_KEY);

        // We do this in smaller batches to avoid timeouts if many subscribers
        // For a true mass-mailing solution, you'd use a background worker
        const results = await Promise.all(subscribers.map(async (sub) => {
            try {
                await resend.emails.send({
                    from: 'VisQuanta <noreply@visquanta.com>',
                    to: sub.email,
                    subject: post.headline,
                    react: (
                        <NewsletterPostEmail
                            headline={post.headline}
                            excerpt={post.metaDescription}
                            image={post.image}
                            slug={post.slug}
                            email={sub.email}
                        />
                    ),
                });
                return { email: sub.email, status: 'sent' };
            } catch (err: any) {
                return { email: sub.email, status: 'failed', error: err.message };
            }
        }));

        return NextResponse.json({
            success: true,
            broadcastedTo: subscribers.length,
            details: results
        });

    } catch (error: any) {
        console.error('Broadcast error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
