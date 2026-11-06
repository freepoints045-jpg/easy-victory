import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({
  subsets: ['latin'],
  weight: ['600', '700', '800', '900'],
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: 'EASY VICTORY GLOBAL | EV Loader APK Download',
  description:
    'EV Loader is back! Download Easy Victory Non Stop Winning APK v19.6.0 for Android and get your key from the official EASY VICTORY GLOBAL Telegram bot.',
  generator: 'v0.app',
  icons: {
    icon: '/images/ev-logo.png',
    apple: '/images/ev-logo.png',
  },
  openGraph: {
    title: 'EASY VICTORY GLOBAL — EV Loader is Back!',
    description: 'Download Easy Victory Non Stop Winning APK v19.6.0 for Android.',
    images: ['/images/ev-logo.png'],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable} bg-background`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
