
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
    Row,
    Column,
} from '@react-email/components';
import * as React from 'react';

interface ContactFormEmailProps {
    name: string;
    email: string;
    phone?: string;
    dealership?: string;
    inquiryType: string;
    message: string;
}

export const ContactFormEmail = ({
    name,
    email,
    phone,
    dealership,
    inquiryType,
    message,
}: ContactFormEmailProps) => {
    return (
        <Html>
            <Head />
            <Preview>New Inquiry: {inquiryType} from {name}</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Heading style={h1}>New Website Inquiry</Heading>

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

                        <Text style={label}>Inquiry Type:</Text>
                        <Text style={highlight}>{inquiryType}</Text>
                    </Section>

                    <Hr style={hr} />

                    <Section style={section}>
                        <Text style={label}>Message:</Text>
                        <Text style={messageText}>{message}</Text>
                    </Section>

                    <Hr style={hr} />

                    <Text style={footer}>
                        Sent from VisQuanta.com Contact Form
                    </Text>
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
};
