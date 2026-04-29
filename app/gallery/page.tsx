import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { GalleryHero } from '@/components/gallery/gallery-hero'
import { GalleryGrid } from '@/components/gallery/gallery-grid'
import { CTASection } from '@/components/home/cta-section'

export const metadata: Metadata = {
  title: 'Gallery | Screaming Eagle Curbing - View Our Work',
  description:
    'Browse our portfolio of decorative curbing projects in La Crosse, WI. See the three styles and various color combinations we offer to homeowners.',
}

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
