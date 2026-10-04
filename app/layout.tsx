import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ameya Raut — Mechanical Engineering & Data Science',
  description: 'Ameya Raut builds at the intersection of physical systems and data-driven intelligence.',
  keywords: ['Ameya Raut', 'Mechanical Engineering', 'Data Science', 'Machine Learning', 'CAD'],
  authors: [{ name: 'Ameya Raut' }],
  openGraph: {
    title: 'Ameya Raut — Mechanical Engineering & Data Science',
    description: 'Building at the intersection of physical systems and data-driven intelligence.',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'light',
  themeColor: '#FAFAFA',
}

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
