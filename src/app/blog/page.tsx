import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogRedesignClient from '@/components/blog-redesign/BlogRedesignClient';
import { getAllCategories } from '@/lib/seobot';
import { getArticles } from '@/lib/blog';

export const revalidate = 60;

export const metadata = {
    title: 'Automotive AI Blog & Insights',
    description: 'Expert insights on car dealership AI, speed-to-lead strategies, and fixed ops revenue. Stay ahead of automotive retail trends.',
    alternates: {
        canonical: 'https://www.visquanta.com/blog',
        languages: {
            'en-US': 'https://www.visquanta.com/blog',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/blog',
            images: [
            {
                url: 'https://www.visquanta.com/images/og-image.png',
                width: 1200,
                height: 630,
                alt: 'VisQuanta',
            }
        ],
    },
};

export default async function BlogPage() {
    // Fetch all posts and categories using the standardized getArticles
    const [posts, categories] = await Promise.all([
        getArticles({ limit: 50 }),
        getAllCategories()
    ]);
    const total = posts.length;

    return (
        <main className="bg-[#020202] min-h-screen selection:bg-[#FF7404] selection:text-black font-sans">
            <Navigation />

            <BlogRedesignClient
                posts={posts}
                categories={categories}
                totalPosts={total}
            />

            <Footer />
        </main>
    );
}
