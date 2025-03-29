import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const count = await kv.get('view-count') || 0;
    
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="100" height="20">
        <rect width="100" height="20" fill="#2ecc71"/>
        <text x="10" y="15" fill="white" font-family="Arial" font-size="12">
          Views: ${count}
        </text>
      </svg>
    `;

    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate badge' }, { status: 500 });
  }
} 