import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://amanchain.global'),
  title: 'AMANCHAIN GLOBAL | Software Engineer, Web3 Builder & Blockchain Developer',
  description: 'AMANCHAIN GLOBAL is a software engineer and Web3 builder creating digital products, blockchain applications, online platforms and technology projects, including BarbieFun Launchpad, a multi-chain project built on X1.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'AMANCHAIN GLOBAL | Software Engineer, Web3 Builder & Blockchain Developer',
    description: 'Building technology, Web3 products and digital experiences.',
    type: 'website',
    siteName: 'AMANCHAIN GLOBAL',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260926_180918_704-KDi8LnLNnCaijYxkMRbvDj7nnHmGj8.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AMANCHAIN GLOBAL | Software Engineer, Web3 Builder & Blockchain Developer',
    description: 'Building technology, Web3 products and digital experiences.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_20260926_180918_704-KDi8LnLNnCaijYxkMRbvDj7nnHmGj8.jpg'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
