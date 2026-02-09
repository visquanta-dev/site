
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
        const {
            name,
            email,
            phone,
            dealership,
            inquiryType,
            message,
            locale = 'en-US',
            region = 'US',
            stateProvince,
            postalCode
        } = body;

        // Basic validation
        if (!email || !message || !name) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const isCanadian = locale === 'en-CA';
        const inquiryLabel = isCanadian ? 'Enquiry' : 'Inquiry';
        const timestamp = new Date().toLocaleString("en-US", { timeZone: "America/New_York" });

        const recipients = isCanadian
            ? ['canada@visquanta.com', 'jbillington@visquanta.com']
            : ['info@visquanta.com', 'jbillington@visquanta.com'];

        console.log(`SENDING EMAIL TO: ${JSON.stringify(recipients)} [Locale: ${locale}]`);

        // 1. Send email notification to internal team
        const internalData = await resend.emails.send({
            from: 'VisQuanta Website <noreply@visquanta.com>',
            to: recipients,
            replyTo: email,
            subject: `[New ${inquiryLabel}] ${inquiryType || 'General'} - ${name}`,
            react: <ContactFormEmail
                name={name}
                email={email}
                phone={phone}
                dealership={dealership}
                inquiryType={inquiryType || 'General'}
                message={message}
                locale={locale}
                region={region}
                stateProvince={stateProvince}
                postalCode={postalCode}
                timestamp={timestamp}
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
                : `We've received your ${inquiryLabel.toLowerCase()} - VisQuanta`;

            await resend.emails.send({
                from: 'VisQuanta <noreply@visquanta.com>',
                to: email,
                subject: subject,
                react: <ContactThankYouEmail
                    name={name.split(' ')[0]}
                    locale={locale}
                />,
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
