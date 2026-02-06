import React from 'react';
import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { ContactFormEmail } from '@/emails/ContactFormEmail';

import { ContactThankYouEmail } from '@/emails/ContactThankYouEmail';

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

        // 1. Send email notification to internal team
        const internalData = await resend.emails.send({
            from: 'VisQuanta Website <noreply@visquanta.com>',
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

        if (internalData.error) {
            console.error('RESEND INTERNAL ERROR:', JSON.stringify(internalData.error, null, 2));
            return NextResponse.json({ error: internalData.error }, { status: 500 });
        }

        // 2. Send Thank You email to the user (auto-responder)
        try {
            const isCareer = inquiryType?.toLowerCase().includes('career');
            const subject = isCareer
                ? "Application Received - VisQuanta"
                : "We've received your inquiry - VisQuanta";

            // For now using the same template but could be specialized
            await resend.emails.send({
                from: 'VisQuanta <noreply@visquanta.com>',
                to: email,
                subject: subject,
                react: <ContactThankYouEmail name={name.split(' ')[0]} />,
            });
            console.log('Thank you email sent to:', email);
        } catch (thankYouError) {
            // Don't fail the whole request if auto-responder fails
            console.error('Failed to send thank you email:', thankYouError);
        }

        console.log('RESEND SUCCESS:', internalData);
        return NextResponse.json({ success: true, data: internalData });
    } catch (error: any) {
        console.error('CONTACT FORM CATCH ERROR:', error?.message || error);
        if (error?.stack) console.error(error.stack);
        return NextResponse.json(
            { error: 'Internal server error', details: error?.message },
            { status: 500 }
        );
    }
}
