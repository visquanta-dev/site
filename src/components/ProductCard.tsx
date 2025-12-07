import Link from 'next/link';
import { ReactNode } from 'react';

interface ProductCardProps {
  number: string;
  icon: ReactNode;
  title: string;
  description: string;
  stat: string;
}

export default function ProductCard({ number, icon, title, description, stat }: ProductCardProps) {
  return (
    <div className="product-card">
      <span className="product-number">{number}</span>
      <div className="product-icon">
        {icon}
      </div>
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <div className="product-stat">{stat}</div>
      <Link href="#" className="product-link">
        Learn more
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </div>
  );
}
