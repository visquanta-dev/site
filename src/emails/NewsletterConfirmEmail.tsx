
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
} from '@react-email/components';
import * as React from 'react';

interface NewsletterConfirmEmailProps {
    email?: string;
    token?: string;
}

export const NewsletterConfirmEmail = ({
    email = 'subscriber@example.com',
    token = 'placeholder-token',
}: NewsletterConfirmEmailProps) => {
    const confirmUrl = `https://www.visquanta.com/newsletter/confirm?email=${encodeURIComponent(email)}&token=${token}`;

    return (
        <Html>
            <Head />
            <Preview>Verify your email for VisQuanta Insights 🚗</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Hero Graphic / Glow */}
                    <Section style={glowHeader}>
                        <Text style={brandLabel}>VISQUANTA / INSIGHTS</Text>
                    </Section>

                    {/* Main Content Card */}
                    <Section style={card}>
                        <Heading style={h1}>Lock in your <br /><span style={accentText}>Subscription</span></Heading>

                        <Text style={text}>
                            We've received a request to join the VisQuanta inner circle. To protect your inbox and ensure you're part of the team, please verify your address.
                        </Text>

                        {/* Visual Divider with Glow */}
                        <div style={spacer} />

                        <Section style={ctaContainer}>
                            <Link href={confirmUrl} style={button}>
                                Confirm My Spot →
                            </Link>
                        </Section>

                        <Text style={secondaryText}>
                            Once verified, you'll immediately receive our latest <span style={whiteText}>Lead Reactivation Blueprint</span> and start your weekly automotive AI journey.
                        </Text>
                    </Section>

                    {/* Trust Footer */}
                    <Section style={footer}>
                        <Text style={footerText}>
                            Automotive AI for the modern dealership group.
                        </Text>
                        <Hr style={hr} />
                        <Text style={tinyText}>
                            © 2026 VisQuanta LLC. 2222 Ponce de Leon Blvd, Miami, FL 33134. <br />
                            If you didn't request this, you can ignore this email.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default NewsletterConfirmEmail;

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
    margin: '0 0 32px',
};

const spacer = {
    height: '1px',
    width: '100%',
    background: 'linear-gradient(90deg, transparent, rgba(255, 116, 4, 0.3), transparent)',
    margin: '32px 0',
};

const ctaContainer = {
    textAlign: 'center' as const,
    marginBottom: '32px',
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

const whiteText = {
    color: '#ffffff',
    fontWeight: '600',
};

const secondaryText = {
    color: '#6b7280',
    fontSize: '14px',
    lineHeight: '1.5',
    textAlign: 'center' as const,
    margin: '0',
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
    lineHeight: '1.6',
};
