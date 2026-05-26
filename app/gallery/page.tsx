import { Breadcrumbs } from '@/components/breadcrumbs'
import { GalleryHero } from '@/components/gallery/gallery-hero'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { CTASection } from '@/components/home/cta-section'
import { galleryMetadata } from '@/lib/seo/pages'

export const metadata = galleryMetadata

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <GalleryHero />
      <Breadcrumbs />
      <GalleryGrid />
      <CTASection />
    </div>
  )
}
