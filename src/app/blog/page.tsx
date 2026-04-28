import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BlogRedesignClient from '@/components/blog-redesign/BlogRedesignClient';
import { getAllCategories } from '@/lib/seobot';
import { getArticles } from '@/lib/blog';
import { openGraphTwitterPack } from '@/lib/metadata';

export const revalidate = 60;

const BLOG_TITLE = 'Automotive AI Blog & Insights';
const BLOG_DESC =
    'Expert insights on car dealership AI, speed-to-lead strategies, and fixed ops revenue. Stay ahead of automotive retail trends.';

export const metadata = {
    title: BLOG_TITLE,
    description: BLOG_DESC,
    alternates: {
        canonical: 'https://www.visquanta.com/blog',
        languages: {
            'en-US': 'https://www.visquanta.com/blog',
            'en-CA': 'https://www.visquanta.com/ca/blog',
            'x-default': 'https://www.visquanta.com/blog',
        },
    },
    ...openGraphTwitterPack({
        canonicalUrl: 'https://www.visquanta.com/blog',
        title: `${BLOG_TITLE} | VisQuanta`,
        description: BLOG_DESC,
    }),
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
