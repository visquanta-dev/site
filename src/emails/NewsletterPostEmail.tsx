
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

interface NewsletterPostEmailProps {
    headline: string;
    excerpt: string;
    image: string;
    slug: string;
    email?: string;
}

export const NewsletterPostEmail = ({
    headline = 'AI Strategies for Modern Dealerships',
    excerpt = 'Explore how the latest advancements in AI are transforming lead reactivation and revenue recovery in the automotive industry.',
    image = 'https://www.visquanta.com/images/blog-placeholder.jpg',
    slug = '',
    email = 'subscriber@example.com',
}: NewsletterPostEmailProps) => {
    const postUrl = `https://www.visquanta.com/blog/${slug}`;
    const unsubscribeUrl = `https://www.visquanta.com/unsubscribe?email=${encodeURIComponent(email)}`;

    return (
        <Html>
            <Head />
            <Preview>{headline}</Preview>
            <Body style={main}>
                <Container style={container}>
                    {/* Header */}
                    <Section style={header}>
                        <Link href="https://www.visquanta.com">
                            <Img
                                src="https://www.visquanta.com/images/visquanta-logo-white.png"
                                width="180"
                                height="46"
                                alt="VisQuanta"
                                style={logoImage}
                            />
                        </Link>
                        <Text style={subtitle}>Weekly Insights</Text>
                    </Section>

                    {/* Featured Article Card */}
                    <Section style={card}>
                        <Img
                            src={image}
                            width="600"
                            height="300"
                            alt={headline}
                            style={heroImage}
                        />
                        <Section style={contentContainer}>
                            <Heading style={h1}>{headline}</Heading>
                            <Text style={text}>{excerpt}</Text>
                            <Section style={ctaSection}>
                                <Link href={postUrl} style={button}>
                                    Read Full Insight →
                                </Link>
                            </Section>
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
                                Unsubscribe from these emails
                            </Link>
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
};

export default NewsletterPostEmail;

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

const logoImage = {
    margin: '0 auto',
    display: 'block',
};

const subtitle = {
    color: 'rgba(255, 255, 255, 0.4)',
    fontSize: '12px',
    textTransform: 'uppercase' as const,
    letterSpacing: '3px',
    marginTop: '8px',
};

const card = {
    background: 'rgba(20, 20, 20, 0.8)',
    border: '1px solid rgba(255, 116, 4, 0.2)',
    borderRadius: '16px',
    overflow: 'hidden',
};

const heroImage = {
    width: '100%',
    height: 'auto',
    borderRadius: '16px 16px 0 0',
};

const contentContainer = {
    padding: '32px',
};

const h1 = {
    color: '#ffffff',
    fontSize: '24px',
    fontWeight: '700',
    margin: '0 0 16px',
    lineHeight: '1.4',
};

const text = {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '16px',
    lineHeight: '1.6',
    margin: '0 0 32px',
};

const ctaSection = {
    textAlign: 'center' as const,
};

const button = {
    backgroundColor: '#FF7404',
    borderRadius: '8px',
    color: '#000000',
    fontSize: '15px',
    fontWeight: '700',
    textDecoration: 'none',
    padding: '16px 40px',
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
