
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Preview,
    Section,
    Text,
    Hr,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
    name: string;
    email: string;
    phone?: string;
    dealership?: string;
    inquiryType: string;
    message: string;
    locale?: string;
    region?: string;
    stateProvince?: string;
    postalCode?: string;
    timestamp?: string;
}

export const ContactFormEmail = ({
    name,
    email,
    phone,
    dealership,
    inquiryType,
    message,
    locale = 'en-US',
    region = 'US',
    stateProvince,
    postalCode,
    timestamp,
}: ContactFormEmailProps) => {
    const isCanadian = locale === 'en-CA';
    const regionBadge = isCanadian ? '🇨🇦 CANADA' : '🇺🇸 USA';
    const stateLabel = isCanadian ? 'Province/Territory' : 'State';
    const postalLabel = isCanadian ? 'Postal Code' : 'ZIP Code';
    const inquiryLabel = isCanadian ? 'Enquiry' : 'Inquiry';

    return (
        <Html>
            <Head />
            <Preview>New {inquiryLabel}: {inquiryType} from {name}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={badgeContainer}>
                        <Text style={badgeText}>
                            {regionBadge}
                        </Text>
                    </Section>

                    <Heading style={h1}>New Website {inquiryLabel}</Heading>

                    <Section style={section}>
                        <Text style={label}>From:</Text>
                        <Text style={value}>{name} ({email})</Text>

                        {phone && (
                            <>
                                <Text style={label}>Phone:</Text>
                                <Text style={value}>{phone}</Text>
                            </>
                        )}

                        {dealership && (
                            <>
                                <Text style={label}>Dealership:</Text>
                                <Text style={value}>{dealership}</Text>
                            </>
                        )}

                        {(stateProvince || postalCode) && (
                            <div style={{ marginTop: '16px' }}>
                                {stateProvince && (
                                    <>
                                        <Text style={label}>{stateLabel}:</Text>
                                        <Text style={value}>{stateProvince}</Text>
                                    </>
                                )}
                                {postalCode && (
                                    <>
                                        <Text style={label}>{postalLabel}:</Text>
                                        <Text style={value}>{postalCode}</Text>
                                    </>
                                )}
                            </div>
                        )}

                        <Text style={label}>{inquiryLabel} Type:</Text>
                        <Text style={highlight}>{inquiryType}</Text>
                    </Section>

                    <Hr style={hr} />

                    <Section style={section}>
                        <Text style={label}>Message:</Text>
                        <Text style={messageText}>{message}</Text>
                    </Section>

                    <Hr style={hr} />

                    <Section style={section}>
                        <Text style={footer}>
                            Submitted from: visquanta.com{isCanadian ? '/ca/' : '/'}
                        </Text>
                        <Text style={footer}>
                            Locale: {locale}
                        </Text>
                        {timestamp && (
                            <Text style={footer}>
                                Timestamp: {timestamp}
                            </Text>
                        )}
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default ContactFormEmail;

const main = {
    backgroundColor: '#ffffff',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
};

const badgeContainer = {
    textAlign: 'center' as const,
    padding: '12px 0',
    borderBottom: '2px solid #eee',
    marginBottom: '24px',
};

const badgeText = {
    fontSize: '24px',
    fontWeight: '900',
    textAlign: 'center' as const,
    letterSpacing: '2px',
    color: '#333',
    margin: '0',
};

const h1 = {
    color: '#333',
    fontSize: '24px',
    fontWeight: 'bold',
    paddingBottom: '24px',
    borderBottom: '1px solid #eee',
};

const section = {
    padding: '24px 0',
};

const label = {
    color: '#666',
    fontSize: '12px',
    fontWeight: 'bold',
    textTransform: 'uppercase' as const,
    letterSpacing: '1px',
    marginBottom: '4px',
};

const value = {
    color: '#333',
    fontSize: '16px',
    marginBottom: '16px',
};

const highlight = {
    color: '#FF7404',
    fontSize: '16px',
    fontWeight: 'bold',
    marginBottom: '16px',
};

const messageText = {
    color: '#333',
    fontSize: '16px',
    lineHeight: '26px',
    whiteSpace: 'pre-wrap' as const,
};

const hr = {
    borderColor: '#eee',
    margin: '20px 0',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '1.6',
};
