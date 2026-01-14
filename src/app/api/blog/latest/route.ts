import { NextResponse } from 'next/server';
import { getBlogPosts } from '@/lib/seobot';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '6', 10);

    try {
        const { posts } = await getBlogPosts(0, limit);
        return NextResponse.json({ posts });
    } catch (error) {
        return NextResponse.json({ posts: [] }, { status: 500 });
    }
}
