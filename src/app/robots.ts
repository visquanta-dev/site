import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Note: We intentionally ALLOW /_next/static/ and /static/ so Google can 
        // render pages correctly. Blocking these causes "Indexed, though blocked 
        // by robots.txt" warnings in GSC and prevents proper page rendering.
        disallow: ['/api/', '/admin/', '/portal/'],
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'Claude-Web', 'PerplexityBot', 'Google-Extended'],
        allow: ['/', '/llms.txt', '/llms-full.txt'],
        disallow: ['/api/', '/admin/', '/portal/'],
      },
    ],
    sitemap: 'https://www.visquanta.com/sitemap.xml',
  };
}
