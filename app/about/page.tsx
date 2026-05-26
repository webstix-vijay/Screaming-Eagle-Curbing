import { Breadcrumbs } from '@/components/breadcrumbs'
import { AboutHero } from '@/components/about/about-hero'
import { OurStory } from '@/components/about/our-story'
import { OurValues } from '@/components/about/our-values'
import { ServiceArea } from '@/components/about/service-area'
import { CTASection } from '@/components/home/cta-section'
import { aboutMetadata } from '@/lib/seo/pages'

export const metadata = aboutMetadata

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutHero />
      <Breadcrumbs />
      <OurStory />
      <OurValues />
      <ServiceArea />
      <CTASection />
    </div>
  )
}
