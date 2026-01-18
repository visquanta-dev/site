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
      // =========================================================================
      // LEGACY GHL (GoHighLevel) SITE REDIRECTS - 2024 era
      // These paths are from the old GHL website and no longer exist
      // =========================================================================
      {
        source: '/blogs-3289/:path*', // Catch-all for old GHL blog system
        destination: '/blog',
        permanent: true,
      },
      // =========================================================================
      // OTHER LEGACY PATHS FROM GSC REPORT
      // =========================================================================
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
        source: '/product-category/:path*', // Old e-commerce paths
        destination: '/',
        permanent: true,
      },
      // =========================================================================
      // 404 FIXES FROM GSC REPORT - January 2026
      // =========================================================================
      // Legacy homepage variants
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
      // Legacy page paths
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
      // Legacy blog post paths (old /post/ structure)
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
      // Legacy blog tag paths
      {
        source: '/blogs/tag/:tag',
        destination: '/blog',
        permanent: true,
      },
      // Legacy case studies that no longer exist
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
      // Link in bio legacy paths
      {
        source: '/link-in-bio-:id',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
