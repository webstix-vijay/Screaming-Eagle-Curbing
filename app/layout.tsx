import type { Metadata, Viewport } from 'next'
import { Montserrat, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { JsonLd } from '@/components/seo/json-ld'
import { organizationSchema, websiteSchema } from '@/lib/seo/schema'
import { SITE_NAME, SITE_URL } from '@/lib/seo/site'
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Decorative Concrete Curbing in La Crosse, WI`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'Transform your La Crosse home with permanent decorative curbing. Owner-operated with 7+ years of experience. Free estimates for curbing, rock & mulch, retaining walls, Christmas lights, and seeding.',
  keywords: [
    'decorative curbing',
    'landscape edging',
    'La Crosse WI',
    'Holmen WI',
    'concrete curbing',
    'landscaping',
    'retaining walls',
  ],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: SITE_NAME,
    images: [{ url: '/images/hero-curbing.jpg', width: 1200, height: 630, alt: SITE_NAME }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
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
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollToTop />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
