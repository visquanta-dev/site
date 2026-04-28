import type { Metadata } from 'next';
import WebsiteWidgetContent from './WebsiteWidgetContent';
import { openGraphTwitterPack } from '@/lib/metadata';

// ============================================================================
// SMS FIRST WIDGET PAGE - SERVER COMPONENT (for Metadata)
// ============================================================================

export const metadata: Metadata = {
  title: 'Website Widget | SMS First Capture',
  description: 'Convert more visitors with our SMS-first website widget. Capture leads instantly and engage them in real-time conversation.',
  alternates: {
    canonical: 'https://www.visquanta.com/website-widget',
  },
  ...openGraphTwitterPack({
    canonicalUrl: 'https://www.visquanta.com/website-widget',
    title: 'Website Widget | SMS First Capture | VisQuanta',
    description:
      'Convert more visitors with our SMS-first website widget. Capture leads instantly and engage them in real-time conversation.',
  }),
};

export default function WebsiteWidgetPage() {
  return <WebsiteWidgetContent />;
}
