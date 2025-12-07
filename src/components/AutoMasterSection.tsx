'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

export default function AutoMasterSection() {
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
    <section ref={sectionRef} className="automaster-section">
      {/* Background Effects */}
      <div className="am-bg-gradient"></div>
      <div className="am-bg-grid"></div>

      <div className="am-container">
        {/* HERO SECTION */}
        <div className={`am-hero ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <div className="am-hero-content">
            <div className="am-badge">AI Platform for Car Dealerships</div>

            <h2 className="am-headline">
              AutoMaster Suite:<br />
              <span className="am-headline-accent">One AI System That Sells Cars For You</span>
            </h2>

            <p className="am-subheadline">
              Car dealership AI that handles leads, chat, reviews, and calls — so your team can sell.
            </p>

            {/* Stats Grid */}
            <div className="am-stats-grid">
              <div className="am-stat">
                <div className="am-stat-value">$35M<span>+</span></div>
                <div className="am-stat-label">Revenue Generated</div>
              </div>
              <div className="am-stat">
                <div className="am-stat-value">13M<span>+</span></div>
                <div className="am-stat-label">Messages Sent</div>
              </div>
              <div className="am-stat">
                <div className="am-stat-value">30<span>%</span></div>
                <div className="am-stat-label">Re-engaged Leads</div>
              </div>
              <div className="am-stat">
                <div className="am-stat-value">500<span>%</span></div>
                <div className="am-stat-label">Average ROI</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="am-ctas">
              <Link href="#" className="btn-primary">
                <span>Book a Discovery Call</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="#" className="btn-secondary">
                <span>See How It Works</span>
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </Link>
            </div>

            <p className="am-trust-text">
              Trusted by Seth Wadley Auto Group, Genesis of Norman, OKC Volkswagen...
            </p>
          </div>

          {/* Hero Visual */}
          <div className="am-hero-visual">
            <div className="am-visual-frame">
              <div className="am-visual-label">LIVE DEMO</div>
              <div className="am-visual-content">
                <div className="am-chat-preview">
                  <div className="am-chat-bubble am-chat-ai">
                    Hi! I see you're interested in the 2024 F-150. Would you like to schedule a test drive?
                  </div>
                  <div className="am-chat-bubble am-chat-user">
                    Yes, what times are available tomorrow?
                  </div>
                  <div className="am-chat-bubble am-chat-ai">
                    I have 10am, 2pm, or 4pm available. Which works best for you?
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INTEGRATIONS */}
        <div className={`am-integrations ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="am-integrations-label">Integrates With Your Stack</div>
          <div className="am-logos">
            <span className="am-logo">Ford</span>
            <span className="am-logo">Toyota</span>
            <span className="am-logo">Kia</span>
            <span className="am-logo">Nissan</span>
            <span className="am-logo">VinSolutions</span>
            <span className="am-logo">CDK</span>
          </div>
        </div>

        {/* PROBLEM SECTION */}
        <div className={`am-problem-section ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          <div className="am-section-header">
            <div className="am-section-eyebrow">
              <div className="am-eyebrow-line"></div>
              <span>The Problem</span>
              <div className="am-eyebrow-line"></div>
            </div>
            <h3 className="am-section-title">What's Costing Your Dealership Sales?</h3>
            <div className="am-aeo-capsule">
              <span className="am-aeo-tag">AEO Answer</span>
              Car dealerships lose sales when leads aren't contacted fast enough, old leads sit untouched, reviews go unanswered, and service calls hit voicemail.
            </div>
          </div>

          <div className="am-problem-grid">
            <div className="am-problem-card">
              <div className="am-problem-number">01</div>
              <h4 className="am-problem-title">Slow Inbound Response</h4>
              <p className="am-problem-text">You're paying for leads. Your team takes hours to respond. Competitors get there first.</p>
            </div>
            <div className="am-problem-card">
              <div className="am-problem-number">02</div>
              <h4 className="am-problem-title">Cold Leads Sitting</h4>
              <p className="am-problem-text">Thousands of old leads sitting untouched. Those people are buying cars elsewhere.</p>
            </div>
            <div className="am-problem-card">
              <div className="am-problem-number">03</div>
              <h4 className="am-problem-title">Unreliable BDC</h4>
              <p className="am-problem-text">High payroll. High turnover. Constant training. Leads still slip through cracks.</p>
            </div>
            <div className="am-problem-card">
              <div className="am-problem-number">04</div>
              <h4 className="am-problem-title">Missed Service Calls</h4>
              <p className="am-problem-text">Phone rings. Voicemail picks up. Every missed call is a missed RO.</p>
            </div>
          </div>
        </div>

        {/* SOLUTION SECTION */}
        <div className={`am-solution-section ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.4s' }}>
          <div className="am-solution-content">
            <div className="am-section-eyebrow">
              <div className="am-eyebrow-line"></div>
              <span>The Solution</span>
              <div className="am-eyebrow-line"></div>
            </div>
            <h3 className="am-section-title">What Is AutoMaster Suite?</h3>
            <div className="am-aeo-capsule">
              <span className="am-aeo-tag">AEO Answer</span>
              AutoMaster Suite is an AI platform combining speed to lead, reactivation, chat, reputation, and service AI.
            </div>
            <p className="am-solution-text">It replaces the pile of disconnected tools. One system. One invoice.</p>
            <div className="am-quote">
              <div className="am-quote-mark">"</div>
              <p>Customers call asking to speak with 'the AI from the texts.' That's when you know it works.</p>
              <cite>— William Voyles, Chief Sales Officer</cite>
            </div>
          </div>
          <div className="am-solution-visual">
            <div className="am-video-frame">
              <div className="am-visual-label">VIDEO TESTIMONIAL</div>
              <div className="am-play-btn">
                <svg fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className="am-video-caption">Watch the Case Study</span>
            </div>
          </div>
        </div>

        {/* PRODUCTS SECTION */}
        <div className={`am-products-section ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.5s' }}>
          <h3 className="am-section-title am-center">What Does AutoMaster Suite Include?</h3>

          <div className="am-product-feature">
            <div className="am-product-content">
              <div className="am-product-number">01</div>
              <h4 className="am-product-title">Speed to Lead</h4>
              <div className="am-aeo-capsule small">
                <span className="am-aeo-tag">AEO</span>
                Leads contacted in &lt; 60s are 21x more likely to convert.
              </div>
              <p className="am-product-text">Responds in under 60 seconds. 24/7/365.</p>
            </div>
            <div className="am-product-visual">
              <div className="am-product-mockup">
                <div className="am-mockup-header">
                  <span className="am-mockup-dot"></span>
                  <span className="am-mockup-dot"></span>
                  <span className="am-mockup-dot"></span>
                </div>
                <div className="am-mockup-content">
                  <div className="am-alert-preview">
                    <span className="am-alert-icon">⚡</span>
                    <span>New Lead: John D. - 2024 Silverado</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="am-product-feature am-reverse">
            <div className="am-product-content">
              <div className="am-product-number">02</div>
              <h4 className="am-product-title">Lead Reactivation</h4>
              <div className="am-aeo-capsule small">
                <span className="am-aeo-tag">AEO</span>
                AI SMS re-engages cold leads to book appointments.
              </div>
              <p className="am-product-text">Seth Wadley Auto Group sold 17 extra cars in November.</p>
            </div>
            <div className="am-product-visual">
              <div className="am-product-mockup">
                <div className="am-mockup-header">
                  <span className="am-mockup-dot"></span>
                  <span className="am-mockup-dot"></span>
                  <span className="am-mockup-dot"></span>
                </div>
                <div className="am-mockup-content">
                  <div className="am-sms-preview">
                    <div className="am-sms-bubble">Still looking for that Camry? We have new incentives this month.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Table */}
          <div className="am-comparison">
            <h4 className="am-comparison-title">Why One System Beats Ten</h4>
            <div className="am-comparison-grid">
              <div className="am-comparison-old">
                <h5>OLD WAY</h5>
                <ul>
                  <li>Separate Lead Tool</li>
                  <li>Outsourced BDC</li>
                  <li>Separate Chat Widget</li>
                  <li>After-hours service</li>
                </ul>
              </div>
              <div className="am-comparison-vs">VS</div>
              <div className="am-comparison-new">
                <h5>AUTOMASTER SUITE</h5>
                <ul>
                  <li>Speed to Lead</li>
                  <li>Lead Reactivation</li>
                  <li>Website Chat</li>
                  <li>Service Drive Pro</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BLOG SECTION */}
        <div className={`am-blog-section ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.6s' }}>
          <div className="am-section-header">
            <div className="am-section-eyebrow">
              <div className="am-eyebrow-line"></div>
              <span>The Visquanta Insight</span>
              <div className="am-eyebrow-line"></div>
            </div>
            <h3 className="am-section-title">Latest From Our Blog</h3>
          </div>

          <div className="am-blog-grid">
            <article className="am-blog-card">
              <div className="am-blog-image"></div>
              <div className="am-blog-content">
                <span className="am-blog-tag">Digital Drive</span>
                <h4 className="am-blog-title">Ultimate Guide to CRM Database Reactivation</h4>
                <div className="am-blog-meta">
                  <span>Dec 2024</span>
                  <Link href="#" className="am-blog-link">Read More →</Link>
                </div>
              </div>
            </article>
            <article className="am-blog-card">
              <div className="am-blog-image"></div>
              <div className="am-blog-content">
                <span className="am-blog-tag">Industry</span>
                <h4 className="am-blog-title">Top 7 Third-Party Lead Providers</h4>
                <div className="am-blog-meta">
                  <span>Dec 2024</span>
                  <Link href="#" className="am-blog-link">Read More →</Link>
                </div>
              </div>
            </article>
            <article className="am-blog-card">
              <div className="am-blog-image"></div>
              <div className="am-blog-content">
                <span className="am-blog-tag">Digital Drive</span>
                <h4 className="am-blog-title">How AI Revives Cold CRM Data</h4>
                <div className="am-blog-meta">
                  <span>Nov 2024</span>
                  <Link href="#" className="am-blog-link">Read More →</Link>
                </div>
              </div>
            </article>
          </div>

          <div className="am-center">
            <Link href="#" className="btn-secondary">
              <span>View All Posts</span>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* FINAL CTA */}
        <div className={`am-final-cta ${isVisible ? 'animate-fade-scale' : 'opacity-0'}`} style={{ animationDelay: '0.7s' }}>
          <h3 className="am-cta-headline">One System. Five Tools.<br />Zero Leads Left Behind.</h3>
          <div className="am-cta-actions">
            <Link href="#" className="btn-primary">
              <span>Book a Discovery Call</span>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <div className="am-phone">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" className="am-phone-icon">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+1 786-686-6554</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
