
import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Link,
    Preview,
    Section,
    Text,
} from '@react-email/components';
import * as React from 'react';

interface ContactThankYouEmailProps {
    name: string;
    locale?: string;
}

export const ContactThankYouEmail = ({
    name = 'there',
    locale = 'en-US',
}: ContactThankYouEmailProps) => {
    const isCanadian = locale === 'en-CA';
    const enquiryTerm = isCanadian ? 'enquiry' : 'inquiry';
    const teamTerm = isCanadian ? 'Canadian team' : 'team';

    return (
        <Html>
            <Head />
            <Preview>We've received your {enquiryTerm} - VisQuanta</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={header}>
                        <Heading style={logo}>VisQuanta</Heading>
                    </Section>

                    <Section style={card}>
                        <Heading style={h1}>Hi {name},</Heading>
                        <Text style={text}>
                            Thanks for reaching out to VisQuanta. We've received your {enquiryTerm} and our {teamTerm} is already reviewing it.
                        </Text>
                        <Text style={text}>
                            You can expect a response from one of our automotive specialists within the next{' '}
                            <span style={highlight}>2 business hours</span>.
                        </Text>
                        <Text style={text}>
                            In the meantime, feel free to explore our latest case studies to see how we're helping dealerships like yours recover lost revenue.
                        </Text>
                        <Section style={ctaSection}>
                            <Link href="https://www.visquanta.com/case-studies" style={button}>
                                View Case Studies
                            </Link>
                        </Section>
                    </Section>

                    <Section style={footer}>
                        <Text style={footerText}>
                            © 2026 VisQuanta LLC. All rights reserved.
                        </Text>
                        <Text style={footerSubtext}>
                            {isCanadian
                                ? 'Serving Canadian dealerships nationwide'
                                : '2233 Ponce de Leon Blvd, 3rd Floor, Miami, FL 33134'
                            }
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default ContactThankYouEmail;

const main = {
    backgroundColor: '#050505',
    fontFamily:
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '40px 20px',
    maxWidth: '600px',
};

const header = {
    textAlign: 'center' as const,
    marginBottom: '32px',
};

const logo = {
    color: '#FF7404',
    fontSize: '32px',
    fontWeight: 'bold',
    letterSpacing: '-1px',
    margin: '0',
};

const card = {
    background: 'rgba(20, 20, 20, 0.8)',
    border: '1px solid rgba(255, 116, 4, 0.2)',
    borderRadius: '16px',
    padding: '40px 32px',
};

const h1 = {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: '700',
    margin: '0 0 16px',
};

const text = {
    color: 'rgba(255, 255, 255, 0.8)',
    fontSize: '16px',
    lineHeight: '1.6',
    margin: '0 0 24px',
};

const highlight = {
    color: '#FF7404',
    fontWeight: '600',
};

const ctaSection = {
    textAlign: 'center' as const,
    marginTop: '32px',
};

const button = {
    backgroundColor: '#FF7404',
    borderRadius: '8px',
    color: '#000000',
    fontSize: '14px',
    fontWeight: '700',
    textDecoration: 'none',
    padding: '14px 32px',
    display: 'inline-block',
};

const footer = {
    textAlign: 'center' as const,
    marginTop: '40px',
};

const footerText = {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: '12px',
    margin: '0',
};

const footerSubtext = {
    color: 'rgba(255, 255, 255, 0.2)',
    fontSize: '11px',
    margin: '8px 0 0',
};
