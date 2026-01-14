
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

async function test() {
    console.log('Fetching google...');
    try {
        const res = await fetch('https://www.google.com');
        console.log('Status:', res.status);
        console.log('Text length:', (await res.text()).length);
    } catch (e) {
        console.error('Fetch error:', e);
    }
}
test();
