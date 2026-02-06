async function testKey() {
    const AGENT_ID = 'agent_4501k4d2eehvf0p8axd56y4a0d45';
    const API_KEY = 'sk_1091176843496ad98b035ca9ac4e7832610b1e9b33628097';

    try {
        const response = await fetch(
            `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${AGENT_ID}`,
            {
                method: 'GET',
                headers: {
                    'xi-api-key': API_KEY,
                },
            }
        );

        if (response.ok) {
            const data = await response.json();
            console.log('SUCCESS: Get signed URL succeeded!');
            console.log('Signed URL:', data.signed_url);
        } else {
            const errorText = await response.text();
            console.log('FAILED: status', response.status);
            console.log('Error:', errorText);
        }
    } catch (error) {
        console.error('ERROR:', error);
    }
}

testKey();
