import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/static/', '/admin/', '/portal/'],
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'Claude-Web', 'PerplexityBot', 'Google-Extended'],
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/_next/', '/static/', '/admin/', '/portal/'],
      },
    ],
    sitemap: 'https://visquanta.com/sitemap.xml',
  };
}
