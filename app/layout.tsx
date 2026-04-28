import type { Metadata, Viewport } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-montserrat',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Screaming Eagle Curbing | Decorative Concrete Curbing in La Crosse, WI',
  description: 'Transform your La Crosse home with permanent decorative curbing. Owner-operated with 7 years experience. Free estimates for curbing, landscaping, rock & mulch, retaining walls, and more.',
  keywords: ['decorative curbing', 'landscape edging', 'La Crosse', 'Holmen WI', 'concrete curbing', 'landscaping'],
  authors: [{ name: 'Screaming Eagle Curbing' }],
  openGraph: {
    title: 'Screaming Eagle Curbing | Decorative Concrete Curbing',
    description: 'Clean Edges, Zero Effort. Permanent decorative curbing for your La Crosse home.',
    type: 'website',
    locale: 'en_US',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#1E3A8A',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${montserrat.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
