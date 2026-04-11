'use client';

import dynamic from 'next/dynamic';

const ProfitCalculator = dynamic(() => import('@/components/lead-reactivation/ProfitCalculator'), { ssr: false });
const SpeedLossCalculator = dynamic(() => import('@/components/speed-to-lead/SpeedLossCalculator'), { ssr: false });
const ServiceCalculator = dynamic(() => import('@/components/service-drive/ServiceCalculator'), { ssr: false });

interface BlogCalculatorEmbedProps {
  type: string;
}

export default function BlogCalculatorEmbed({ type }: BlogCalculatorEmbedProps) {
  const noop = () => {};

  const renderCalculator = () => {
    switch (type) {
      case 'lead-reactivation':
      case 'roi':
        return <ProfitCalculator />;
      case 'speed-to-lead':
        return <SpeedLossCalculator onOpenCalculator={noop} />;
      case 'service-roi':
        return <ServiceCalculator />;
      default:
        return null;
    }
  };

  const content = renderCalculator();
  if (!content) return null;

  return (
    <div className="my-12" style={{ marginLeft: '-4rem', marginRight: '-4rem' }}>
      <div style={{ transform: 'scale(0.9)', transformOrigin: 'top center' }}>
        {content}
      </div>
    </div>
  );
}

/**
 * Process HTML content and split it at {{calculator:*}} and {{cta:*}} markers.
 * Returns an array of segments: { type: 'html', content } or { type: 'calculator', calcType }.
 */
export function parseCalculatorMarkers(html: string): Array<
  { type: 'html'; content: string } | { type: 'calculator'; calcType: string }
> {
  const pattern = /\{\{(?:calculator|cta):([a-z-]+)\}\}/g;
  const segments: Array<{ type: 'html'; content: string } | { type: 'calculator'; calcType: string }> = [];
  let lastIndex = 0;
  let match;

  while ((match = pattern.exec(html)) !== null) {
    // Add HTML before the marker
    if (match.index > lastIndex) {
      segments.push({ type: 'html', content: html.slice(lastIndex, match.index) });
    }
    // Add calculator marker
    segments.push({ type: 'calculator', calcType: match[1] });
    lastIndex = match.index + match[0].length;
  }

  // Add remaining HTML
  if (lastIndex < html.length) {
    segments.push({ type: 'html', content: html.slice(lastIndex) });
  }

  return segments.length > 0 ? segments : [{ type: 'html', content: html }];
}
