import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <div className="nav-logo-mark">
          <span>V</span>
        </div>
        <div className="nav-logo-text">Visquanta</div>
      </div>

      <div className="nav-links">
        <Link href="#" className="nav-link">Platform</Link>
        <Link href="#" className="nav-link">Solutions</Link>
        <Link href="#" className="nav-link">Results</Link>
        <Link href="#" className="nav-link">Company</Link>
      </div>

      <Link href="#" className="nav-cta">Request Assessment</Link>
    </nav>
  );
}
