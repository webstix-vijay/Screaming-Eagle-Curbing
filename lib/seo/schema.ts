import { homeFaqs } from '@/lib/seo/faqs'
import {
  SITE_ADDRESS,
  SITE_AREA_SERVED,
  SITE_EMAIL,
  SITE_GEO,
  SITE_NAME,
  SITE_PHONE,
  SITE_TAGLINE,
  SITE_URL,
  absoluteUrl,
} from '@/lib/seo/site'

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    description: SITE_TAGLINE,
    url: SITE_URL,
    logo: absoluteUrl('/images/screaming_eagle_curbing_logo.png'),
    image: absoluteUrl('/images/hero-curbing.jpg'),
    telephone: SITE_PHONE,
    email: SITE_EMAIL,
    address: {
      '@type': 'PostalAddress',
      addressLocality: SITE_ADDRESS.addressLocality,
      addressRegion: SITE_ADDRESS.addressRegion,
      postalCode: SITE_ADDRESS.postalCode,
      addressCountry: SITE_ADDRESS.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_GEO.latitude,
      longitude: SITE_GEO.longitude,
    },
    areaServed: SITE_AREA_SERVED.map((name) => ({
      '@type': 'City',
      name,
    })),
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '07:00',
        closes: '16:00',
      },
    ],
    sameAs: ['https://facebook.com/lacrossecustomcurbing'],
  }
}

export function websiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: SITE_NAME,
    url: SITE_URL,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-US',
  }
}

export function faqPageSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: homeFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function breadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function serviceSchema({
  name,
  description,
  path,
}: {
  name: string
  description: string
  path: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: absoluteUrl(path),
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: SITE_AREA_SERVED.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    serviceType: name,
  }
}

export const indexableRoutes = [
  { path: '/', priority: 1, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/services/decorative-curbing', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/services/rock-mulch', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/services/retaining-walls', priority: 0.85, changeFrequency: 'monthly' as const },
  { path: '/services/christmas-lights', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/services/seeding', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/gallery', priority: 0.75, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' as const },
  { path: '/sitemap-page', priority: 0.2, changeFrequency: 'yearly' as const },
]
