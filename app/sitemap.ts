import type { MetadataRoute } from 'next'
import { indexableRoutes } from '@/lib/seo/schema'
import { SITE_URL } from '@/lib/seo/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return indexableRoutes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
