
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
            <Preview>Welcome to the VisQuanta Inner Circle 🚗</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Glow Header */}
                    <Section style={glowHeader}>
                        <Text style={brandLabel}>VISQUANTA / EXCLUSIVE</Text>
                    </Section>

                    {/* Main Content Card */}
                    <Section style={card}>
                        <Heading style={h1}>Welcome to the <br /><span style={accentText}>Premium List</span></Heading>
                        <Text style={text}>
                            You've officially joined an elite group of automotive leaders leveraging AI to dominate their market.
                        </Text>

                        {/* Feature Grid */}
                        <Section style={featureGrid}>
                            <Row style={featureRow}>
                                <Column style={featureIcon}>⚡</Column>
                                <Column style={featureTextContainer}>
                                    <Text style={featureHeading}>Lead Reactivation</Text>
                                    <Text style={featureSubtext}>Turning "dead" leads into active revenue units.</Text>
                                </Column>
                            </Row>
                            <Row style={featureRow}>
                                <Column style={featureIcon}>🤖</Column>
                                <Column style={featureTextContainer}>
                                    <Text style={featureHeading}>AI Automation</Text>
                                    <Text style={featureSubtext}>Scaling your BDC without adding headcount.</Text>
                                </Column>
                            </Row>
                            <Row style={featureRow}>
                                <Column style={featureIcon}>📈</Column>
                                <Column style={featureTextContainer}>
                                    <Text style={featureHeading}>Market Data</Text>
                                    <Text style={featureSubtext}>Local market insights you won't find anywhere else.</Text>
                                </Column>
                            </Row>
                        </Section>

                        <div style={spacer} />

                        <Section style={ctaContainer}>
                            <Link href="https://www.visquanta.com/blog" style={button}>
                                Access Recent Journal →
                            </Link>
                        </Section>
                    </Section>

                    {/* Footer */}
                    <Section style={footer}>
                        <Text style={footerText}>
                            Automotive AI / Scaled Growth / Market Dominance
                        </Text>
                        <Hr style={hr} />
                        <Text style={tinyText}>
                            © 2026 VisQuanta LLC. All rights reserved. <br />
                            2222 Ponce de Leon Blvd, Miami, FL 33134.
                        </Text>
                        <Text style={tinyText}>
                            <Link href={unsubscribeUrl} style={footerLink}>
                                Manage Subscription
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
    backgroundColor: '#020202',
    fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
};

const container = {
    margin: '0 auto',
    padding: '40px 10px',
    maxWidth: '560px',
};

const glowHeader = {
    textAlign: 'center' as const,
    padding: '30px 0',
    background: 'radial-gradient(circle at center, rgba(255, 116, 4, 0.15) 0%, transparent 70%)',
};

const brandLabel = {
    color: '#FF7404',
    fontSize: '11px',
    fontWeight: '800',
    letterSpacing: '4px',
    margin: '0',
};

const card = {
    background: 'linear-gradient(135deg, #0A0A0A 0%, #050505 100%)',
    border: '1px solid rgba(255, 255, 255, 0.08)',
    borderRadius: '24px',
    padding: '48px 40px',
    textAlign: 'left' as const,
    boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
};

const h1 = {
    color: '#ffffff',
    fontSize: '34px',
    fontWeight: '900',
    lineHeight: '1.1',
    margin: '0 0 24px',
    letterSpacing: '-1px',
};

const accentText = {
    color: '#FF7404',
};

const text = {
    color: '#9ca3af',
    fontSize: '17px',
    lineHeight: '1.6',
    margin: '0 0 40px',
};

const featureGrid = {
    marginBottom: '40px',
};

const featureRow = {
    paddingBottom: '24px',
};

const featureIcon = {
    width: '44px',
    fontSize: '24px',
    verticalAlign: 'top',
};

const featureTextContainer = {
    paddingLeft: '12px',
};

const featureHeading = {
    color: '#ffffff',
    fontSize: '16px',
    fontWeight: '700',
    margin: '0',
};

const featureSubtext = {
    color: '#6b7280',
    fontSize: '14px',
    margin: '4px 0 0',
};

const spacer = {
    height: '1px',
    width: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 116, 4, 0.3), transparent)',
    margin: '32px 0',
};

const ctaContainer = {
    textAlign: 'center' as const,
};

const button = {
    backgroundColor: '#FF7404',
    borderRadius: '12px',
    color: '#000000',
    fontSize: '16px',
    fontWeight: '800',
    textDecoration: 'none',
    padding: '18px 40px',
    display: 'inline-block',
    boxShadow: '0 10px 20px -5px rgba(255, 116, 4, 0.4)',
};

const footer = {
    textAlign: 'center' as const,
    marginTop: '40px',
};

const footerText = {
    color: '#4b5563',
    fontSize: '13px',
    fontWeight: '600',
    margin: '0',
};

const hr = {
    borderColor: 'rgba(255, 255, 255, 0.05)',
    margin: '24px 0',
};

const tinyText = {
    color: '#374151',
    fontSize: '11px',
    lineHeight: '1.8',
    margin: '0',
};

const footerLink = {
    color: '#FF7404',
    textDecoration: 'underline',
};
