import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import type { LucideIcon } from 'lucide-react'
import { CheckCircle, ArrowRight, Layers, Trees, Building, Snowflake, Sprout } from 'lucide-react'
import { servicesMetadata } from '@/lib/seo/pages'
import { IMAGE_SIZES } from '@/lib/seo/image-sizes'

export const metadata = servicesMetadata

type ServicesPageListing = {
  icon: LucideIcon
  title: string
  description: string
  image: string
  href: string
  features: string[]
  imageObjectPosition?: string
}

const services: ServicesPageListing[] = [
  {
    icon: Layers,
    title: 'Decorative Curbing',
    description:
      'Our signature service. Permanent concrete borders available in three distinct styles with unlimited color and stamp combinations to match your home.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/648969539_1523399962552606_9149390113985786585_n-Y1XefroO2xDRxLWn45sTqhfH1QMFbs.jpg',
    href: '/services/decorative-curbing',
    features: ['3 Style Options', 'Unlimited Colors', 'Permanent Installation', 'Low Maintenance'],
  },
  {
    icon: Trees,
    title: 'Rock & Mulch',
    description:
      'Complete landscape bed installation with premium rock or mulch materials that complement your curbing and reduce maintenance.',
    image: '/images/services/rock-mulch.png',
    href: '/services/rock-mulch',
    features: ['Premium Materials', 'Weed Barrier Included', 'Complete Bed Prep', 'Professional Installation'],
    imageObjectPosition: '44% 46%',
  },
  {
    icon: Building,
    title: 'Retaining Walls',
    description:
      'Functional and beautiful stone retaining walls that add dimension to your landscape while preventing soil erosion.',
    image: '/images/services/retaining-walls.png',
    href: '/services/retaining-walls',
    features: ['Erosion Control', 'Added Dimension', 'Premium Materials', 'Proper Drainage'],
    imageObjectPosition: '36% 52%',
  },
  {
    icon: Snowflake,
    title: 'Christmas Lights',
    description:
      'Professional holiday light installation to make your home shine during the festive season. Full design, installation, and takedown service.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/568089380_1401623404730263_7806870534372210605_n-DLlGJruQYS6F4hHpH1KxrC54IWxwBM.jpg',
    href: '/services/christmas-lights',
    features: ['Custom Design', 'Professional Install', 'Takedown Included', 'Safe & Insured'],
  },
  {
    icon: Sprout,
    title: 'Seeding',
    description:
      'Expert lawn seeding services to establish thick, healthy grass that pairs perfectly with your new curbing and landscape design.',
    image: '/images/services/retaining-walls-seeding.png',
    href: '/services/seeding',
    features: ['Quality Seed Blends', 'Proper Preparation', 'Optimal Timing', 'Care Instructions'],
    imageObjectPosition: 'center 58%',
  },
]

const packages = [
  {
    name: 'Basic Service',
    price: '$99',
    description: 'Perfect for small projects and basic landscaping needs.',
    features: [
      'Free on-site consultation',
      'Basic curbing installation',
      'Standard color options',
      'Clean-up included',
    ],
  },
  {
    name: 'Intermediate Service',
    price: '$149',
    description: 'Our most popular package for comprehensive landscaping.',
    features: [
      'Everything in Basic',
      'Premium color selection',
      'Stamped pattern options',
      'Weed barrier installation',
      'Extended warranty',
    ],
    popular: true,
  },
  {
    name: 'Advanced Service',
    price: '$199',
    description: 'Complete transformation with premium features.',
    features: [
      'Everything in Intermediate',
      'Custom design consultation',
      'Premium stamp patterns',
      'Multi-bed discounts',
      'Priority scheduling',
      'Lifetime support',
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/575094156_1416498953242708_9096605449582729044_n-aHhwSjlQkIhqr2Ha6dKRBfJz8AdkiU.jpg"
            alt="Landscaping and decorative curbing services in La Crosse, WI"
            fill
            className="object-cover"
            priority
            sizes={IMAGE_SIZES.hero}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-transparent z-[1]" />

        <div className="max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <span className="inline-block text-[#94A3B8] text-sm font-semibold uppercase tracking-wider mb-4">
              What We Offer
            </span>
            <h1 className="font-[var(--font-montserrat)] font-bold text-4xl md:text-5xl text-white mb-6 text-balance">
              Our Services
            </h1>
            <p className="text-white/80 text-lg leading-relaxed">
              From decorative curbing to complete landscape transformations, we provide
              everything your La Crosse home needs to stand out in the neighborhood.
            </p>
          </div>
        </div>
      </section>

      <Breadcrumbs />

      {/* Services Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-montserrat)] font-bold text-3xl md:text-4xl text-[#0F172A] mb-4">
              Comprehensive Landscaping Solutions
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Explore our full range of services designed to transform your outdoor spaces.
            </p>
          </div>

          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                      style={
                        service.imageObjectPosition
                          ? { objectPosition: service.imageObjectPosition }
                          : undefined
                      }
                      sizes={IMAGE_SIZES.contentHalf}
                      loading={index === 0 ? undefined : 'lazy'}
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-[#F8FAFC] flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-[#1E3A8A]" />
                    </div>
                    <h3 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A]">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-[#64748B] text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="grid grid-cols-2 gap-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#166534]" />
                        <span className="text-sm text-[#0F172A]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <Button
                      asChild
                      className="bg-[#1E3A8A] text-white hover:bg-black rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-200"
                    >
                      <Link href={service.href} className="flex items-center gap-2">
                        Explore {service.title}
                        <ArrowRight className="w-4 h-4 shrink-0" />
                      </Link>
                    </Button>
                    <Button
                      asChild
                      className="bg-white text-[#1E3A8A] border-2 border-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white rounded-full px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors duration-200"
                    >
                      <a href="#service-packages">View Pricing</a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Packages */}
      <section id="service-packages" className="py-24 bg-[#F8FAFC] scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block text-[#1E3A8A] text-sm font-semibold uppercase tracking-wider mb-4">
              Pricing
            </span>
            <h2 className="font-[var(--font-montserrat)] font-bold text-3xl md:text-4xl text-[#0F172A] mb-4">
              Service Packages
            </h2>
            <p className="text-[#64748B] text-lg max-w-2xl mx-auto">
              Choose the package that best fits your needs. All packages include free estimates and professional installation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative bg-white rounded-xl p-8 shadow-lg ${
                  pkg.popular ? 'border-2 border-[#1E3A8A] scale-105' : 'border border-[#E2E8F0]'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#1E3A8A] text-white text-xs font-semibold uppercase tracking-wide px-4 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-[var(--font-montserrat)] font-bold text-xl text-[#0F172A] mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-4xl font-bold text-[#1E3A8A]">{pkg.price}</p>
                  <p className="text-[#64748B] text-sm mt-2">{pkg.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#166534] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#0F172A]">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`w-full rounded-full py-6 text-base font-semibold uppercase tracking-wide transition-colors duration-200 ${
                    pkg.popular
                      ? 'bg-[#1E3A8A] text-white hover:bg-black'
                      : 'bg-white text-[#1E3A8A] border-2 border-[#1E3A8A] hover:bg-[#1E3A8A] hover:text-white'
                  }`}
                >
                  <Link href="/contact">Get Started</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E3A8A]">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
            Contact us today for a free, no-obligation estimate on your project.
          </p>
          <Button
            asChild
            className="bg-white text-[#1E3A8A] hover:bg-black hover:text-white rounded-full px-6 py-3 text-base font-semibold uppercase tracking-wide shadow-lg transition-colors duration-200"
          >
            <Link href="/contact" className="flex items-center gap-2">
              Get A Quote Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
