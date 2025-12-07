export default function TrustSection() {
  const logos = ['Genesis', 'Volkswagen', 'Hyundai', 'Honda', 'Seth Wadley'];

  return (
    <section className="trust-section">
      <div className="trust-content">
        <p className="trust-label">Trusted by leading dealerships nationwide</p>
        <div className="trust-logos">
          {logos.map((logo) => (
            <span key={logo} className="trust-logo">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
