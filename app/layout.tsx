import { Analytics } from '@vercel/analytics/react'
import { Noto_Sans_KR } from 'next/font/google'

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <Analytics />
      <body style={{ margin: 0, padding: 0, fontFamily: notoSansKr.style.fontFamily }}>{children}</body>
    </html>
  )
} 