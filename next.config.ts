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
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-icons'],
  },
  async rewrites() {
    return [];
  },
  async redirects() {
    return [
      {
        source: '/blog-details/:slug',
        destination: 'https://www.visquanta.com/blog/:slug',
        permanent: true,
      },

      // UK locale cleanup — no /uk route handler exists.
      // 301 redirect all /uk/* to root equivalents to fix Ahrefs 404s.
      {
        source: '/uk',
        destination: '/',
        permanent: true,
      },
      {
        source: '/uk/:path*',
        destination: '/:path*',
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
        source: '/case-studies/westline-motors',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/blog/:page(\\d+)',
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
        destination: '/book-demo',
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
        source: '/independent',
        destination: '/dealers/independent',
        permanent: true,
      },
      {
        source: '/auto-group',
        destination: '/dealers/auto-groups',
        permanent: true,
      },
      {
        source: '/auto-groups',
        destination: '/dealers/auto-groups',
        permanent: true,
      },
      {
        source: '/franchise-dealers',
        destination: '/dealers/franchise',
        permanent: true,
      },
      {
        source: '/franchise',
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
      {
        source: '/blog/why-every-dealership-needs-ai-for-lead-reactivation-in-2025',
        destination: '/blog/why-every-dealership-needs-ai-for-lead-reactivation-in-2026',
        permanent: true,
      },
      {
        source: '/blogs-3289/:path*',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/landing-page',
        destination: '/',
        permanent: true,
      },
      {
        source: '/leveraging-ai-for-lead-generation',
        destination: '/lead-reactivation',
        permanent: true,
      },
      {
        source: '/leveraging-ai-for-lead-generation/',
        destination: '/lead-reactivation',
        permanent: true,
      },
      {
        source: '/product-category/:path*',
        destination: '/',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/homepage',
        destination: '/',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about-visquanta',
        permanent: true,
      },
      {
        source: '/contact-us',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/case-study',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/our-blog',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/automotive',
        destination: '/dealer-success',
        permanent: true,
      },
      {
        source: '/database-reactivation',
        destination: '/lead-reactivation',
        permanent: true,
      },
      {
        source: '/ai-powered-email',
        destination: '/speed-to-lead',
        permanent: true,
      },
      {
        source: '/advertising-lead-generation',
        destination: '/custom-campaigns',
        permanent: true,
      },
      {
        source: '/service-drive-pro',
        destination: '/service-drive',
        permanent: true,
      },
      {
        source: '/calendarbooking',
        destination: '/book-demo',
        permanent: true,
      },
      {
        source: '/html-sitemap',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/html-sitemap/',
        destination: '/sitemap.xml',
        permanent: true,
      },
      {
        source: '/visquanta-dealership',
        destination: '/dealer-success',
        permanent: true,
      },
      {
        source: '/post/:slug',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/post/:slug/:rest',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/blogs/tag/:tag',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/case-studies/cityline-auto-group-accelerates-sales-with-visquantas-automaster-suite',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/case-studies/riverside-auto-mall-boosts-lead-conversion-with-visquantas-ai-automation',
        destination: '/case-studies',
        permanent: true,
      },
      {
        source: '/link-in-bio-:id',
        destination: '/',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/guides/:path*.pdf',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
      {
        source: '/:path*.pdf',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
    ];
  },
};

export default nextConfig;