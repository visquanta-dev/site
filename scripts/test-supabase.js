
const { createClient } = require('@supabase/supabase-js');
const dotenv = require('dotenv');
dotenv.config({ path: '.env.local' });

async function testSupabase() {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
        console.error('Missing Supabase environment variables');
        return;
    }

    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .limit(1);

    if (error) {
        console.error('Error querying newsletter_subscribers:', error);
        if (error.code === '42P01') {
            console.log('Table "newsletter_subscribers" does not exist.');
        }
    } else {
        console.log('Successfully queried newsletter_subscribers. Data count:', data.length);
    }
}

testSupabase();
