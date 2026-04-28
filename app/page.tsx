import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { HeroSection } from '@/components/home/hero-section'
import { ServicesSection } from '@/components/home/services-section'
import { AboutPreview } from '@/components/home/about-preview'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { GalleryPreview } from '@/components/home/gallery-preview'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CTASection } from '@/components/home/cta-section'
import { FAQSection } from '@/components/home/faq-section'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutPreview />
      <WhyChooseUs />
      <GalleryPreview />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
      <Footer />
      <ScrollToTop />
    </main>
  )
}
