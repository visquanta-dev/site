import { generatePageMetadata } from '@/lib/metadata';

export const metadata = generatePageMetadata({
    title: 'About VisQuanta | Our Vision & Mission',
    description: 'VisQuanta was built on the showroom floor. 25 years of automotive operations experience, now powering the next generation of AI-driven dealership tools.',
    path: '/about-visquanta', // contains canonical: via generatePageMetadata
    keywords: ['about VisQuanta', 'automotive AI company', 'dealership technology', 'car dealership automation'],
});

export { default } from './AboutPageClient';
