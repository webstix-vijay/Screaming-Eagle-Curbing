import { Metadata } from 'next'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { AboutHero } from '@/components/about/about-hero'
import { OurStory } from '@/components/about/our-story'
import { OurValues } from '@/components/about/our-values'
import { ServiceArea } from '@/components/about/service-area'
import { CTASection } from '@/components/home/cta-section'

export const metadata: Metadata = {
  title: 'About Us | Screaming Eagle Curbing - La Crosse Decorative Curbing',
  description:
    'Learn about Screaming Eagle Curbing, an owner-operated decorative curbing company serving La Crosse, Holmen, and the Coulee Region since 2019. Quality craftsmanship, personal service.',
}

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Breadcrumbs />
        <AboutHero />
        <OurStory />
        <OurValues />
        <ServiceArea />
        <CTASection />
      </div>
      <Footer />
      <ScrollToTop />
    </main>
  )
}
