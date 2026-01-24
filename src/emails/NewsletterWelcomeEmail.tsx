import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Hr,
    Row,
    Column,
} from '@react-email/components';
import * as React from 'react';

interface NewsletterWelcomeEmailProps {
    email?: string;
}

export const NewsletterWelcomeEmail = ({
    email = 'subscriber@example.com',
}: NewsletterWelcomeEmailProps) => {
    const unsubscribeUrl = `https://www.visquanta.com/unsubscribe?email=${encodeURIComponent(email)}`;

    return (
        <Html>
            <Head />
            <Preview>Welcome to VisQuanta Insights 🚗</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header */}
                    <Section style={header}>
                        <Heading style={logo}>VisQuanta</Heading>
                        <Text style={subtitle}>Weekly Insights</Text>
                    </Section>

                    {/* Main Content Card */}
                    <Section style={card}>
                        <Heading style={h1}>You're in! 🎉</Heading>
                        <Text style={text}>
                            Welcome to the VisQuanta Insights newsletter. You've just joined{' '}
                            <span style={highlight}>2,500+ automotive professionals</span> who
                            receive weekly strategies on:
                        </Text>

                        <Section style={listSection}>
                            <Row style={listItem}>
                                <Column style={bullet}>•</Column>
                                <Column>AI automation for dealerships</Column>
                            </Row>
                            <Row style={listItem}>
                                <Column style={bullet}>•</Column>
                                <Column>Lead conversion optimization</Column>
                            </Row>
                            <Row style={listItem}>
                                <Column style={bullet}>•</Column>
                                <Column>Revenue recovery strategies</Column>
                            </Row>
                            <Row style={listItem}>
                                <Column style={bullet}>•</Column>
                                <Column>Industry trends and insights</Column>
                            </Row>
                        </Section>

                        <Text style={secondaryText}>
                            Expect your first insights email within the next few days.
                        </Text>

                        <Section style={ctaSection}>
                            <Link href="https://www.visquanta.com/blog" style={button}>
                                Explore The Journal →
                            </Link>
                        </Section>
                    </Section>

                    {/* Footer */}
                    <Section style={footer}>
                        <Text style={footerText}>
                            © 2026 VisQuanta LLC. All rights reserved.
                        </Text>
                        <Text style={footerSubtext}>
                            2233 Ponce de Leon Blvd, 3rd Floor, Miami, FL 33134
                        </Text>
                        <Hr style={hr} />
                        <Text style={footerLinks}>
                            <Link href={unsubscribeUrl} style={footerLink}>
                                Unsubscribe
                            </Link>
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default NewsletterWelcomeEmail;

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

const subtitle = {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: '12px',
    textTransform: 'uppercase' as const,
    letterSpacing: '3px',
    marginTop: '8px',
    marginRight: '-3px', // Counteract letter-spacing on last char
};

const card = {
    background: 'rgba(20, 20, 20, 0.8)',
    border: '1px solid rgba(255, 116, 4, 0.2)',
    borderRadius: '16px',
    padding: '40px 32px',
    textAlign: 'left' as const,
};

const h1 = {
    color: '#ffffff',
    fontSize: '26px',
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

const listSection = {
    marginBottom: '24px',
};

const listItem = {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '15px',
    lineHeight: '24px',
};

const bullet = {
    width: '20px',
    color: '#FF7404',
    fontWeight: 'bold',
};

const secondaryText = {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: '14px',
    margin: '0 0 32px',
};

const ctaSection = {
    textAlign: 'center' as const,
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

const hr = {
    borderColor: 'rgba(255, 255, 255, 0.05)',
    margin: '24px 0',
};

const footerLinks = {
    margin: '0',
};

const footerLink = {
    color: 'rgba(255, 255, 255, 0.3)',
    fontSize: '11px',
    textDecoration: 'underline',
};
