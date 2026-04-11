import type { Metadata } from 'next';
import NotFoundClient from '@/components/NotFoundClient';

export const metadata: Metadata = {
    title: '404 Preview',
    description: 'Preview of the VisQuanta 404 page.',
    robots: {
        index: false,
        follow: false,
    },
};

export default function FourOhFourPreviewPage() {
    return <NotFoundClient />;
}