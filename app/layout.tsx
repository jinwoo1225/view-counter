import { Analytics } from '@vercel/analytics/react'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <Analytics />
      <body>{children}</body>
    </html>
  )
} 