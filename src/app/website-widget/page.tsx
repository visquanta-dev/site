import type { Metadata } from 'next';
import WebsiteWidgetContent from './WebsiteWidgetContent';

// ============================================================================
// SMS FIRST WIDGET PAGE - SERVER COMPONENT (for Metadata)
// ============================================================================

export const metadata: Metadata = {
  title: 'Website Widget | SMS First Capture',
  description: 'Convert more visitors with our SMS-first website widget. Capture leads instantly and engage them in real-time conversation.',
  alternates: {
    canonical: 'https://www.visquanta.com/website-widget',
  },
  openGraph: {
    url: 'https://www.visquanta.com/website-widget',
          images: [
            {
                url: 'https://www.visquanta.com/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'VisQuanta',
            }
        ],
    },
};

export default function WebsiteWidgetPage() {
  return <WebsiteWidgetContent />;
}
