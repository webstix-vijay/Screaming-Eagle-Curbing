'use client'

import { usePathname } from 'next/navigation'
import { JsonLd } from '@/components/seo/json-ld'
import { breadcrumbSchema } from '@/lib/seo/schema'

const pathNameMap: Record<string, string> = {
  services: 'Services',
  'decorative-curbing': 'Decorative Curbing',
  'rock-mulch': 'Rock & Mulch',
  'retaining-walls': 'Retaining Walls',
  'christmas-lights': 'Christmas Lights',
  seeding: 'Seeding',
  gallery: 'Gallery',
  about: 'About Us',
  contact: 'Contact',
  privacy: 'Privacy Policy',
  'sitemap-page': 'Sitemap',
  'thank-you': 'Thank You',
}

export function BreadcrumbJsonLd() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) return null

  const items = [
    { name: 'Home', path: '/' },
    ...segments.map((segment, index) => {
      const path = '/' + segments.slice(0, index + 1).join('/')
      const name =
        pathNameMap[segment] ||
        segment.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
      return { name, path }
    }),
  ]

  return <JsonLd data={breadcrumbSchema(items)} />
}
