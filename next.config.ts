import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'seobot-blogs.s3.eu-north-1.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'assets.seobotai.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '*.cloudfront.net',
        pathname: '/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog-details/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/visquanta-team',
        destination: '/team',
        permanent: true,
      },
      {
        source: '/dealer-success-solutions',
        destination: '/dealer-success',
        permanent: true,
      },
      {
        source: '/auto-master-suite-technical-guides',
        destination: '/ams-guides',
        permanent: true,
      },
      {
        source: '/promo',
        destination: '/auto-master-suite',
        permanent: true,
      },
      {
        source: '/lead-loss-mitigation',
        destination: '/lead-reactivation',
        permanent: true,
      },
      {
        source: '/case-studies/westline-motors', // Specific legacy case study
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/blog/:page(\\d+)', // Handle /blog/1, /blog/2 legacy pagination
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/how-it-works',
        destination: '/',
        permanent: true,
      },
      {
        source: '/faq',
        destination: '/faqs',
        permanent: true,
      },
      {
        source: '/blog/ai-mvp-car-sales-teams',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blog/promax-visquanta-partner',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/enterprise-groups',
        destination: '/dealers/auto-groups',
        permanent: true,
      },
      {
        source: '/partnerships',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/blog-home',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/independent-dealers',
        destination: '/dealers/independent',
        permanent: true,
      },
      {
        source: '/auto-group',
        destination: '/dealers/auto-groups',
        permanent: true,
      },
      {
        source: '/franchise-dealers',
        destination: '/dealers/franchise',
        permanent: true,
      },
      {
        source: '/blog/sms-vs-email-vs-ai-chatbot-the-ultimate-guide-for-car-dealerships',
        destination: '/blog/sms-vs-email-vs-ai-chatbot-the-ultimate-guide-for-dealerships',
        permanent: true,
      },
      {
        source: '/blog/5-reasons-car-buyers-prefer-sms-over-phone-calls-in-2025',
        destination: '/blog/5-reasons-car-buyers-prefer-sms-over-phone-calls-from-dealerships',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
