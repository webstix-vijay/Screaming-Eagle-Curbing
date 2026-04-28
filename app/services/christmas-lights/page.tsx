import { Metadata } from 'next'
import Image from 'next/image'
import { ServicePageLayout } from '@/components/services/service-page-layout'

export const metadata: Metadata = {
  title: 'Christmas Lights Installation | Screaming Eagle Curbing - La Crosse, WI',
  description:
    'Professional Christmas light installation in La Crosse, WI. Full design, installation, and takedown service. Make your home shine during the holiday season.',
}

const benefits = [
  'Full Design Service',
  'Professional Install',
  'Takedown Included',
  'Safe & Insured',
]

const relatedServices = [
  {
    title: 'Decorative Curbing',
    href: '/services/decorative-curbing',
    image: '/images/curbing-stamped.jpg',
  },
  {
    title: 'Rock & Mulch',
    href: '/services/rock-mulch',
    image: '/images/rock-mulch.jpg',
  },
  {
    title: 'Retaining Walls',
    href: '/services/retaining-walls',
    image: '/images/retaining-wall.jpg',
  },
]

export default function ChristmasLightsPage() {
  return (
    <ServicePageLayout
      title="Christmas Lights Installation"
      subtitle="Seasonal Service"
      description="Make your home the brightest on the block with professional Christmas light installation. We handle everything from design and setup to post-season takedown, so you can enjoy the holiday magic without the hassle."
      heroImage="/images/christmas-lights.jpg"
      benefits={benefits}
      relatedServices={relatedServices}
      content={
        <div className="space-y-12">
          {/* Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-6">
                Enjoy the Holidays Without the Hassle
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed mb-4">
                There is something magical about a home beautifully decorated with
                Christmas lights. The warm glow welcomes visitors, delights neighbors,
                and creates lasting holiday memories for your family. But let us be
                honest: climbing ladders in Wisconsin weather, untangling old lights,
                and figuring out electrical connections is not most people&apos;s idea
                of holiday fun.
              </p>
              <p className="text-[#64748B] text-base leading-relaxed mb-4">
                That is where Screaming Eagle Curbing comes in. Our professional Christmas
                light installation service handles every detail, from initial design
                consultation to post-holiday takedown and storage. You get a stunning
                light display without lifting a finger or risking a fall from a ladder.
              </p>
              <p className="text-[#64748B] text-base leading-relaxed">
                Whether you want classic warm white lights along your roofline, colorful
                displays that bring out your inner child, or elegant wrapped trees and
                bushes, we create custom designs that make your home shine.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/christmas-lights.jpg"
                alt="Professional Christmas lights installation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Services Included */}
          <div className="bg-[#F8FAFC] rounded-xl p-8 md:p-12">
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-8 text-center">
              What&apos;s Included
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Custom Design',
                  description:
                    'We visit your home and create a lighting plan tailored to your preferences and budget.',
                },
                {
                  title: 'Professional Installation',
                  description:
                    'Our team safely installs all lights, ensuring secure connections and clean appearance.',
                },
                {
                  title: 'Quality Lights',
                  description:
                    'We use commercial-grade LED lights that are brighter, more efficient, and last longer.',
                },
                {
                  title: 'Takedown & Storage',
                  description:
                    'After the holidays, we remove all lights and store them for next year (optional).',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-[#1E3A8A] font-bold text-xl">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Lighting Options */}
          <div>
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-6">
              Lighting Options
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed mb-6">
              Every home is unique, and your holiday display should reflect your personal
              style. We offer a variety of lighting options and can mix and match to
              create the perfect look for your property.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Roofline & Gutters',
                  description:
                    'Classic lights along your roofline create instant curb appeal and define your home architecture.',
                },
                {
                  title: 'Trees & Shrubs',
                  description:
                    'Wrapped trees and lit bushes add depth and dimension to your display.',
                },
                {
                  title: 'Walkways & Pathways',
                  description:
                    'Guide visitors with warm pathway lighting that enhances safety and beauty.',
                },
                {
                  title: 'Specialty Elements',
                  description:
                    'Wreaths, garlands, and focal point features add finishing touches.',
                },
              ].map((item, index) => (
                <div key={index} className="border border-[#E2E8F0] rounded-lg p-6">
                  <h3 className="font-semibold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Professional */}
          <div className="bg-[#F8FAFC] rounded-xl p-8 md:p-12">
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-8 text-center">
              Why Professional Installation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'No dangerous ladder climbing in cold, icy conditions',
                'Commercial-grade lights that outperform store-bought options',
                'Professionally designed displays that look amazing',
                'Secure installation that withstands Wisconsin winter weather',
                'Time savings during the busy holiday season',
                'Complete service including takedown at season end',
                'Troubleshooting and repairs handled by professionals',
                'Fully insured for your peace of mind',
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

          {/* Timeline */}
          <div>
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-6">
              Seasonal Timeline
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed mb-6">
              Book early to secure your preferred installation date. Our holiday lighting
              season fills up quickly!
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              {[
                { month: 'September', action: 'Book your consultation' },
                { month: 'October - November', action: 'Installation period' },
                { month: 'November - January', action: 'Enjoy your lights!' },
                { month: 'January', action: 'Takedown service' },
              ].map((item, index) => (
                <div key={index} className="flex-1 bg-[#F8FAFC] rounded-lg p-4 text-center">
                  <p className="font-semibold text-[#1E3A8A]">{item.month}</p>
                  <p className="text-[#64748B] text-sm">{item.action}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  )
}
