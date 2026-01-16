const { getBlogPosts } = require('../src/lib/seobot');

async function listSlugs() {
    try {
        const { posts } = await getBlogPosts(0, 100);
        console.log('Available slugs:');
        posts.forEach(p => console.log(`- ${p.slug}`));
    } catch (err) {
        console.error(err);
    }
}

listSlugs();
