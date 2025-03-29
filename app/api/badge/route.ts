import Redis from 'ioredis';
import { NextResponse } from 'next/server';

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

export async function GET() {
  try {
    let count: number = Number(await redis.get('view-count')) || 0;
    count++;
    await redis.set('view-count', count);

    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="120" height="20">
        <linearGradient id="a" x2="0" y2="100%">
          <stop offset="0" stop-color="#bbb" stop-opacity=".1"/>
          <stop offset="1" stop-opacity=".1"/>
        </linearGradient>
        <rect rx="3" width="120" height="20" fill="#555"/>
        <rect rx="3" x="37" width="83" height="20" fill="#4c1"/>
        <path fill="#4c1" d="M37 0h2v20h-2z"/>
        <rect rx="3" width="120" height="20" fill="url(#a)"/>
        <g fill="#fff" text-anchor="middle" font-family="Verdana,Geneva,DejaVu Sans,sans-serif" font-size="11">
          <text x="19" y="15" fill="#010101" fill-opacity=".3">views</text>
          <text x="19" y="14">views</text>
          <text x="77.5" y="15" fill="#010101" fill-opacity=".3">${count}</text>
          <text x="77.5" y="14">${count}</text>
        </g>
      </svg>
    `;

    return new NextResponse(svg, {
      headers: {
        'Content-Type': 'image/svg+xml'
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate badge' }, { status: 500 });
  }
} 