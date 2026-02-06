import { NextResponse } from 'next/server';

export async function POST() {
    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
    const AGENT_ID = 'agent_4501k4d2eehvf0p8axd56y4a0d45';

    if (!ELEVENLABS_API_KEY) {
        return NextResponse.json(
            { error: 'ElevenLabs API key not configured' },
            { status: 500 }
        );
    }

    try {
        const response = await fetch(
            `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${AGENT_ID}`,
            {
                method: 'GET',
                headers: {
                    'xi-api-key': ELEVENLABS_API_KEY,
                },
            }
        );

        if (!response.ok) {
            const errorText = await response.text();
            console.error('ElevenLabs API error:', errorText);
            return NextResponse.json(
                { error: 'Failed to get signed URL from ElevenLabs' },
                { status: response.status }
            );
        }

        const data = await response.json();

        return NextResponse.json({
            signedUrl: data.signed_url
        });
    } catch (error) {
        console.error('Error generating signed URL:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
