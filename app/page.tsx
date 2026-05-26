import { HeroSection } from '@/components/home/hero-section'
import { ServicesSection } from '@/components/home/services-section'
import { AboutPreview } from '@/components/home/about-preview'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { GalleryPreview } from '@/components/home/gallery-preview'
import { CTASection } from '@/components/home/cta-section'
import { FAQSection } from '@/components/home/faq-section'
import { HomeJsonLd } from '@/components/seo/home-json-ld'
import { homeMetadata } from '@/lib/seo/pages'

export const metadata = homeMetadata

export default function HomePage() {
  return (
    <>
      <HomeJsonLd />
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <FAQSection />
      <CTASection />
    </>
  )
}
