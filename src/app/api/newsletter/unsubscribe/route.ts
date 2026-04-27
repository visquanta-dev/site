
import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email || typeof email !== 'string') {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const normalizedEmail = email.toLowerCase().trim();
        if (!normalizedEmail.includes('@')) {
            return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
        }

        const supabase = createServerSupabaseClient();
        const now = new Date().toISOString();

        // Perform update directly and always return a generic success response
        // to avoid leaking whether an email exists in our subscriber list.
        const { error: updateError } = await supabase
            .from('newsletter_subscribers')
            .update({
                unsubscribed_at: now,
                updated_at: now
            })
            .eq('email', normalizedEmail)
            .is('unsubscribed_at', null);

        if (updateError) {
            console.error('Database update error:', updateError);
            return NextResponse.json({ error: 'Failed to update record' }, { status: 500 });
        }

        return NextResponse.json({
            success: true,
            message: 'If the email is subscribed, it has been unsubscribed.'
        });
    } catch (error: any) {
        console.error('Unsubscribe API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
