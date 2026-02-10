import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogRedesignClient from '@/components/blog-redesign/BlogRedesignClient';
import { getAllCategories } from '@/lib/seobot';
import { getArticles } from '@/lib/blog';

export const revalidate = 60;

export const metadata = {
    title: 'The Journal',
    description: 'Read The Journal for industry insights, sales strategies, and data-driven trends in modern automotive retail. Stay ahead with expert analysis from VisQuanta.',
    alternates: {
        canonical: 'https://www.visquanta.com/blog',
        languages: {
            'en-US': 'https://www.visquanta.com/blog',
            'en-CA': 'https://www.visquanta.com/ca/blog',
        },
    },
    openGraph: {
        url: 'https://www.visquanta.com/blog',
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
