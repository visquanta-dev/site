import Image from 'next/image';
import Link from 'next/link';
import Navigation from './Navigation';

export default function Hero() {
  return (
    <section className="hero">
      {/* Background Layers */}
      <div className="hero-bg-base"></div>

      {/* Truck Wireframe - Base Layer */}
      <div className="hero-bg-car">
        <Image
          src="/images/truck-wireframe.png"
          alt=""
          fill
          priority
          sizes="85vw"
          style={{ objectFit: 'contain', objectPosition: 'center right' }}
        />
      </div>

      {/* Truck Wireframe - Glow Layer (animates) */}
      <div className="hero-bg-car-glow">
        <Image
          src="/images/truck-wireframe.png"
          alt=""
          fill
          sizes="85vw"
          style={{ objectFit: 'contain', objectPosition: 'center right' }}
        />
      </div>

      {/* Animated Scan Line */}
      <div className="scan-line"></div>

      {/* Technical Grid */}
      <div className="hero-bg-grid"></div>

      {/* Corner Scan Markers */}
      <div className="scan-markers">
        <div className="scan-marker top-left"></div>
        <div className="scan-marker top-right"></div>
        <div className="scan-marker bottom-left"></div>
        <div className="scan-marker bottom-right"></div>
      </div>

      {/* Data Readout */}
      <div className="data-readout"></div>

      {/* Vignette */}
      <div className="hero-bg-vignette"></div>

      {/* Navigation */}
      <Navigation />

      {/* Hero Content */}
      <div className="hero-content">
        <div className="hero-inner">
          <div className="hero-eyebrow">
            <div className="hero-eyebrow-line"></div>
            <span className="hero-eyebrow-text">AI-Powered Dealership Platform</span>
          </div>

          <h1 className="hero-headline">
            The unfair<br />advantage <em>elite</em><br />dealerships use
          </h1>

          <p className="hero-subheadline">
            AutoMaster Suite combines AI-powered lead response, customer reactivation,
            reputation management, and 24/7 service intelligence into one unified platform —
            built exclusively for automotive retail.
          </p>

          <div className="hero-ctas">
            <Link href="#" className="btn-primary">
              <span>Schedule Consultation</span>
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="#" className="btn-secondary">
              <svg fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Platform Overview</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Instrument Cluster Metrics Bar */}
      <div className="hero-metrics">
        <div className="metrics-bar">
          <div className="metric">
            <div className="metric-gauge">
              <svg viewBox="0 0 36 36" className="gauge-ring">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="var(--gunmetal)"
                  strokeWidth="2"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="var(--amber)"
                  strokeWidth="2"
                  strokeDasharray="85, 100"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="metric-data">
              <div className="metric-value">$35<span>M+</span></div>
              <div className="metric-label">Revenue Generated</div>
            </div>
          </div>
          <div className="metric">
            <div className="metric-gauge">
              <svg viewBox="0 0 36 36" className="gauge-ring">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="var(--gunmetal)"
                  strokeWidth="2"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="var(--amber)"
                  strokeWidth="2"
                  strokeDasharray="95, 100"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="metric-data">
              <div className="metric-value">&lt;60<span>s</span></div>
              <div className="metric-label">Response Time</div>
            </div>
          </div>
          <div className="metric">
            <div className="metric-gauge">
              <svg viewBox="0 0 36 36" className="gauge-ring">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="var(--gunmetal)"
                  strokeWidth="2"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="var(--amber)"
                  strokeWidth="2"
                  strokeDasharray="30, 100"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="metric-data">
              <div className="metric-value">30<span>%</span></div>
              <div className="metric-label">Lead Reactivation</div>
            </div>
          </div>
          <div className="metric">
            <div className="metric-gauge">
              <svg viewBox="0 0 36 36" className="gauge-ring">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="var(--gunmetal)"
                  strokeWidth="2"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="var(--amber)"
                  strokeWidth="2"
                  strokeDasharray="100, 100"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="metric-data">
              <div className="metric-value">500<span>%</span></div>
              <div className="metric-label">Average ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
