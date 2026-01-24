import { createClient } from '@supabase/supabase-js';

// Server-side Supabase client with service role key
// Only use on the server (API routes, server components)
export function createServerSupabaseClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
        throw new Error('Missing Supabase environment variables');
    }

    return createClient(supabaseUrl, supabaseServiceKey, {
        auth: {
            autoRefreshToken: false,
            persistSession: false,
        },
    });
}

// Types for newsletter subscribers
export interface NewsletterSubscriber {
    id: string;
    email: string;
    source: string;
    verified: boolean;
    verification_token: string;
    subscribed_at: string;
    verified_at: string | null;
    unsubscribed_at: string | null;
    ip_address: string | null;
    user_agent: string | null;
    created_at: string;
    updated_at: string;
}
