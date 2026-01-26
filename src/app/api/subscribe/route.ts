import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const { email } = await request.json();

        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { error: 'Valid email is required' },
                { status: 400 }
            );
        }

        const apiKey = process.env.LOOPS_API_KEY;
        if (!apiKey) {
            console.error('LOOPS_API_KEY is missing in environment variables');
            return NextResponse.json(
                { error: 'Email service configuration missing' },
                { status: 500 }
            );
        }

        const payload = {
            email,
            source: "Website",
            subscribed: false,
            userGroup: 'Newsletter',
            mailingLists: {
                "cmkvfkhct04kn0i3r1wzfagtm": true
            },
            optInUrl: 'https://www.visquanta.com/newsletter/confirm'
        };

        console.log('--- LOOPS ATTEMPT ---');
        console.log('Payload:', JSON.stringify(payload));

        const response = await fetch('https://app.loops.so/api/v1/contacts/create', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();
        console.log('Loops Status:', response.status);
        console.log('Loops Data:', JSON.stringify(data));

        if (!response.ok) {
            console.error('Loops API error:', data);
            return NextResponse.json(
                { error: data.message || 'Failed to subscribe to newsletter' },
                { status: response.status }
            );
        }

        return NextResponse.json(
            { message: 'Subscribed successfully', success: true },
            { status: 200 }
        );
    } catch (error) {
        console.error('Subscription error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
