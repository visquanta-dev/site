import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogRedesignClient from '@/components/blog-redesign/BlogRedesignClient';
import { getBlogPosts, getAllCategories } from '@/lib/seobot';

export const revalidate = 60;

export const metadata = {
    title: 'The Journal | VisQuanta',
    description: 'Industry insights, strategies, data, and trends for modern automotive retail.',
    alternates: {
        canonical: 'https://www.visquanta.com/blog',
    },
};

export default async function BlogPage() {
    // Fetch all posts and categories
    const [{ posts, total }, categories] = await Promise.all([
        getBlogPosts(0, 50), // Get up to 50 posts for now
        getAllCategories()
    ]);

    return (
        <main className="bg-[#0a0a0a] min-h-screen selection:bg-[#D4A853] selection:text-black font-sans">
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
