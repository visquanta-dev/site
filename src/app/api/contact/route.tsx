import React from 'react';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { ContactFormEmail } from '@/emails/ContactFormEmail';

export async function POST(request: NextRequest) {
    console.log('--- CONTACT API START ---');
    try {
        const apiKey = process.env.RESEND_API_KEY;
        if (!apiKey) {
            console.error('MISSING RESEND_API_KEY');
            return NextResponse.json({ error: 'Mail server configuration missing' }, { status: 500 });
        }

        const resend = new Resend(apiKey);
        const body = await request.json();
        const { name, email, phone, dealership, inquiryType, message } = body;

        // Basic validation
        if (!email || !message || !name) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        console.log('SENDING EMAIL TO:', ['info@visquanta.com', 'jbillington@visquanta.com']);

        // Send email notification to internal team
        const data = await resend.emails.send({
            from: 'VisQuanta Website <website@visquanta.com>',
            to: ['info@visquanta.com', 'jbillington@visquanta.com'],
            replyTo: email,
            subject: `[New Inquiry] ${inquiryType} - ${name}`,
            react: <ContactFormEmail
                name={name}
                email={email}
                phone={phone}
                dealership={dealership}
                inquiryType={inquiryType}
                message={message}
            />,
        });

        if (data.error) {
            console.error('RESEND ERROR DETAIL:', JSON.stringify(data.error, null, 2));
            return NextResponse.json({ error: data.error }, { status: 500 });
        }

        console.log('RESEND SUCCESS:', data);
        return NextResponse.json({ success: true, data });
    } catch (error: any) {
        console.error('CONTACT FORM CATCH ERROR:', error?.message || error);
        if (error?.stack) console.error(error.stack);
        return NextResponse.json(
            { error: 'Internal server error', details: error?.message },
            { status: 500 }
        );
    }
}
