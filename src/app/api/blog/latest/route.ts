import { NextResponse } from 'next/server';
import { getLatestArticles } from '@/lib/blog';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '6', 10);

    try {
        const posts = await getLatestArticles(limit);
        return NextResponse.json({ posts });
    } catch (error) {
        return NextResponse.json({ posts: [] }, { status: 500 });
    }
}
