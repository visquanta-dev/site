import { NextRequest, NextResponse } from 'next/server';

const AGENT_ID = 'agent_4501k4d2eehvf0p8axd56y4a0d45';
const RATE_LIMIT_MAX = 10;
const RATE_LIMIT_WINDOW_MS = 60_000;

type RateLimitEntry = {
    count: number;
    resetAt: number;
};

const requestCounts = new Map<string, RateLimitEntry>();

function getClientIp(request: NextRequest): string {
    const xff = request.headers.get('x-forwarded-for');
    if (xff) {
        const first = xff.split(',')[0]?.trim();
        if (first) return first;
    }
    return request.headers.get('x-real-ip') || 'unknown';
}

function isRateLimited(ip: string): boolean {
    const now = Date.now();
    const existing = requestCounts.get(ip);

    if (!existing || now >= existing.resetAt) {
        requestCounts.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return false;
    }

    existing.count += 1;
    requestCounts.set(ip, existing);
    return existing.count > RATE_LIMIT_MAX;
}

function withNoStoreHeaders(response: NextResponse): NextResponse {
    response.headers.set('Cache-Control', 'no-store');
    return response;
}

export async function POST(request: NextRequest) {
    const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
    const signedUrlSecret = process.env.ELEVENLABS_SIGNED_URL_SECRET;
    const authHeader = request.headers.get('authorization');

    if (!ELEVENLABS_API_KEY) {
        return withNoStoreHeaders(NextResponse.json(
            { error: 'ElevenLabs API key not configured' },
            { status: 500 }
        ));
    }

    if (!signedUrlSecret || authHeader !== `Bearer ${signedUrlSecret}`) {
        return withNoStoreHeaders(NextResponse.json(
            { error: 'Unauthorized' },
            { status: 401 }
        ));
    }

    const ip = getClientIp(request);
    if (isRateLimited(ip)) {
        return withNoStoreHeaders(NextResponse.json(
            { error: 'Too many requests' },
            { status: 429 }
        ));
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
            return withNoStoreHeaders(NextResponse.json(
                { error: 'Failed to get signed URL from ElevenLabs' },
                { status: response.status }
            ));
        }

        const data = await response.json();

        return withNoStoreHeaders(NextResponse.json({
            signedUrl: data.signed_url
        }));
    } catch (error) {
        console.error('Error generating signed URL:', error);
        return withNoStoreHeaders(NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        ));
    }
}
