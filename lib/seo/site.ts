import type { Metadata } from 'next'

/** Public site URL — set NEXT_PUBLIC_SITE_URL in production (e.g. https://www.example.com) */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.screamingeaglecurbing.com'

export const SITE_NAME = 'Screaming Eagle Curbing'
export const SITE_TAGLINE = 'Decorative Concrete Curbing in La Crosse, WI'
export const SITE_PHONE = '+1-715-896-7448'
export const SITE_EMAIL = 'screamingeaglecurbing@outlook.com'
export const SITE_MAPS_URL = 'https://maps.app.goo.gl/1P62C2KzcLbjCNVMA'
export const SITE_ADDRESS = {
  streetAddress: 'Holmen',
  addressLocality: 'Holmen',
  addressRegion: 'WI',
  postalCode: '54636',
  addressCountry: 'US',
}
export const SITE_GEO = {
  latitude: 43.9633,
  longitude: -91.2562,
}
export const SITE_AREA_SERVED = [
  'La Crosse',
  'Holmen',
  'Onalaska',
  'West Salem',
  'La Crescent',
  'Coulee Region',
]

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  keywords?: string[]
  noIndex?: boolean
}

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}`
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
  noIndex = false,
}: PageMetadataOptions): Metadata {
  const canonical = absoluteUrl(path)

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: '/images/hero-curbing.jpg',
          width: 1200,
          height: 630,
          alt: SITE_NAME,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false, googleBot: { index: false, follow: false } }
      : {
          index: true,
          follow: true,
          googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
        },
  }
}
