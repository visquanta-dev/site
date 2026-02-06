
import { NextRequest, NextResponse } from 'next/server';
import { createServerSupabaseClient } from '@/lib/supabase';

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        const supabase = createServerSupabaseClient();

        // Check if subscriber exists
        const { data: existing, error: fetchError } = await supabase
            .from('newsletter_subscribers')
            .select('id')
            .eq('email', email.toLowerCase().trim())
            .maybeSingle();

        if (fetchError) {
            console.error('Database fetch error:', fetchError);
            return NextResponse.json({ error: 'Database error' }, { status: 500 });
        }

        if (!existing) {
            return NextResponse.json({ error: 'Email not found in our list' }, { status: 404 });
        }

        // Update unsubscribed_at
        const { error: updateError } = await supabase
            .from('newsletter_subscribers')
            .update({
                unsubscribed_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            })
            .eq('id', existing.id);

        if (updateError) {
            console.error('Database update error:', updateError);
            return NextResponse.json({ error: 'Failed to update record' }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error: any) {
        console.error('Unsubscribe API error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}
