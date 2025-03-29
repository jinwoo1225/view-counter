import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const count = await kv.get('view-count') || 0;
    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to get count' }, { status: 500 });
  }
}

export async function POST() {
  try {
    const count = await kv.incr('view-count');
    return NextResponse.json({ count });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to increment count' }, { status: 500 });
  }
} 