'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import ProductCard from './ProductCard';

const products = [
  {
    number: '01',
    title: 'Speed to Lead',
    description: 'Every inbound lead receives intelligent, personalized engagement within 60 seconds. Around the clock. Every day of the year.',
    stat: '21x higher conversion',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Lead Reactivation',
    description: 'Transform dormant CRM data into showroom appointments. AI-driven campaigns re-engage cold prospects with precision timing.',
    stat: '30% re-engagement',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Intelligent Chat',
    description: 'Convert website visitors into qualified buyers. AI engages, qualifies, and schedules appointments — without human intervention.',
    stat: '24/7 engagement',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Reputation Command',
    description: 'Monitor, respond, and cultivate your online presence. Every review addressed professionally. Every opportunity captured.',
    stat: 'Instant response',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
  },
  {
    number: '05',
    title: 'Service Intelligence',
    description: 'Voice AI answers every service call. Schedules appointments. Handles inquiries. No voicemail. No missed opportunities.',
    stat: 'Zero calls missed',
    icon: (
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
  },
];

export default function PlatformSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="platform-section">
      <div className="platform-header">
        <div className={`platform-eyebrow ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="platform-eyebrow-line"></div>
          <span className="platform-eyebrow-text">The Platform</span>
          <div className="platform-eyebrow-line"></div>
        </div>
        <h2
          className={`platform-title ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.1s' }}
        >
          Five capabilities.<br />One system.
        </h2>
        <p
          className={`platform-subtitle ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}
          style={{ animationDelay: '0.2s' }}
        >
          Every tool your dealership needs to capture, convert, and retain customers —
          unified in a single platform with one dashboard and one dedicated success manager.
        </p>
      </div>

      <div className="products-grid">
        {products.map((product, index) => (
          <ProductCard
            key={product.number}
            number={product.number}
            icon={product.icon}
            title={product.title}
            description={product.description}
            stat={product.stat}
            isVisible={isVisible}
            delay={0.3 + index * 0.1}
          />
        ))}

        {/* CTA Card */}
        <div
          className={`product-card cta-card ${isVisible ? 'animate-fade-scale' : 'opacity-0'}`}
          style={{ animationDelay: '0.8s' }}
        >
          <h3 className="cta-card-title">Request Your Assessment</h3>
          <p className="cta-card-text">
            Get a complimentary performance analysis and see how AutoMaster Suite
            can transform your dealership operations.
          </p>
          <Link href="#" className="btn-primary">
            <span>Schedule Consultation</span>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
