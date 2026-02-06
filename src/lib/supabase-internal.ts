
import { createClient } from '@supabase/supabase-js';

export function createServerSupabaseClient() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;

    return createClient(supabaseUrl, supabaseServiceKey);
}

export async function hasTable(tableName: string) {
    const supabase = createServerSupabaseClient();
    const { error } = await supabase.from(tableName).select('id').limit(1);
    return !error || error.code !== '42P01';
}
