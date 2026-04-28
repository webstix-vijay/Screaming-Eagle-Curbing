import { Metadata } from 'next'
import Image from 'next/image'
import { ServicePageLayout } from '@/components/services/service-page-layout'

export const metadata: Metadata = {
  title: 'Rock & Mulch Installation | Screaming Eagle Curbing - La Crosse, WI',
  description:
    'Professional rock and mulch installation services in La Crosse, WI. Complete landscape bed preparation with premium materials. Pairs perfectly with decorative curbing.',
}

const benefits = [
  'Premium Materials',
  'Complete Bed Prep',
  'Weed Barrier Included',
  'Free Estimates',
]

const relatedServices = [
  {
    title: 'Decorative Curbing',
    href: '/services/decorative-curbing',
    image: '/images/curbing-stamped.jpg',
  },
  {
    title: 'Retaining Walls',
    href: '/services/retaining-walls',
    image: '/images/retaining-wall.jpg',
  },
  {
    title: 'Seeding',
    href: '/services/seeding',
    image: '/images/seeding.jpg',
  },
]

export default function RockMulchPage() {
  return (
    <ServicePageLayout
      title="Rock & Mulch Installation"
      subtitle="Complete Landscape Bed Service"
      description="Elevate your landscape beds with professional rock or mulch installation. We handle everything from bed preparation to material delivery and installation, creating beautiful, low-maintenance beds that complement your decorative curbing."
      heroImage="/images/rock-mulch.jpg"
      benefits={benefits}
      relatedServices={relatedServices}
      content={
        <div className="space-y-12">
          {/* Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-6">
                Complete Your Landscape Transformation
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed mb-4">
                Decorative curbing creates the perfect border for your landscape beds, but
                what goes inside those borders matters just as much. At Screaming Eagle
                Curbing, we offer complete rock and mulch installation services to give
                your outdoor spaces a polished, professional finish.
              </p>
              <p className="text-[#64748B] text-base leading-relaxed mb-4">
                Whether you prefer the natural warmth of bark mulch, the clean appearance
                of river rock, or the modern aesthetic of decorative stone, we source
                premium materials and install them with the same attention to detail we
                bring to our curbing work.
              </p>
              <p className="text-[#64748B] text-base leading-relaxed">
                By bundling your curbing and rock or mulch installation, you save time and
                money while ensuring a cohesive design from one trusted contractor. We handle
                everything from removing old material to installing weed barriers and spreading
                your new ground cover.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/rock-mulch.jpg"
                alt="Professional rock and mulch installation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Material Options */}
          <div className="bg-[#F8FAFC] rounded-xl p-8 md:p-12">
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-8 text-center">
              Material Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Rock */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-[var(--font-montserrat)] font-semibold text-xl text-[#0F172A] mb-4">
                  Decorative Rock
                </h3>
                <p className="text-[#64748B] text-base leading-relaxed mb-4">
                  Rock is the ultimate low-maintenance ground cover option. Unlike mulch,
                  it never needs to be replaced, does not attract insects, and maintains
                  its appearance year after year. Perfect for homeowners who want a clean
                  look with minimal upkeep.
                </p>
                <ul className="space-y-2">
                  {[
                    'River rock in various sizes and colors',
                    'Decorative stone and pebbles',
                    'Crushed granite and gravel',
                    'Lava rock for modern aesthetics',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-[#0F172A]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Mulch */}
              <div className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="font-[var(--font-montserrat)] font-semibold text-xl text-[#0F172A] mb-4">
                  Premium Mulch
                </h3>
                <p className="text-[#64748B] text-base leading-relaxed mb-4">
                  Mulch adds natural warmth to your landscape while providing practical
                  benefits including moisture retention and weed suppression. We offer
                  various types and colors to complement your home and plantings.
                </p>
                <ul className="space-y-2">
                  {[
                    'Hardwood bark mulch in natural tones',
                    'Dyed mulch in brown, red, or black',
                    'Cedar mulch for natural pest resistance',
                    'Playground-safe mulch options',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-[#0F172A]">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1E3A8A]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Our Process */}
          <div>
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-6">
              Our Installation Process
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed mb-6">
              A successful rock or mulch installation starts with proper bed preparation.
              Simply dumping new material over old, weedy beds leads to problems down the
              road. That is why we take the time to prepare your beds correctly, ensuring
              long-lasting, low-maintenance results.
            </p>
            <div className="space-y-4">
              {[
                {
                  title: 'Bed Cleanup',
                  description:
                    'We remove existing weeds, old mulch or rock, and any debris from your landscape beds.',
                },
                {
                  title: 'Edge Definition',
                  description:
                    'If you are adding curbing, we install it first to create clean, permanent borders.',
                },
                {
                  title: 'Weed Barrier',
                  description:
                    'We lay professional-grade landscape fabric to prevent future weed growth.',
                },
                {
                  title: 'Material Installation',
                  description:
                    'We spread your chosen rock or mulch evenly at the appropriate depth for best results.',
                },
                {
                  title: 'Final Cleanup',
                  description:
                    'We clean up completely, leaving your property looking better than we found it.',
                },
              ].map((step, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-[#1E3A8A] text-white font-bold flex items-center justify-center shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#0F172A]">{step.title}</h3>
                    <p className="text-[#64748B] text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-[#F8FAFC] rounded-xl p-8 md:p-12">
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-8 text-center">
              Benefits of Professional Installation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Proper depth and coverage for optimal performance',
                'Weed barrier installation prevents future weed problems',
                'One-stop service when combined with curbing',
                'Heavy lifting and labor handled by professionals',
                'Premium materials sourced at contractor pricing',
                'Clean, professional results that last',
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#166534] flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[#0F172A]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  )
}
