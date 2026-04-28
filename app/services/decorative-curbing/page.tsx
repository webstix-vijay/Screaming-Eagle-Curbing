import { Metadata } from 'next'
import Image from 'next/image'
import { ServicePageLayout } from '@/components/services/service-page-layout'

export const metadata: Metadata = {
  title: 'Decorative Curbing | Screaming Eagle Curbing - La Crosse, WI',
  description:
    'Premium decorative concrete curbing services in La Crosse, WI. Choose from Slant, Mower, or Stamped styles with unlimited colors. Permanent landscape borders that eliminate weed whacking.',
}

const benefits = [
  'Permanent Installation',
  '3 Style Options',
  'Unlimited Colors',
  'Free Estimates',
]

const relatedServices = [
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
  {
    title: 'Seeding',
    href: '/services/seeding',
    image: '/images/seeding.jpg',
  },
]

export default function DecorativeCurbingPage() {
  return (
    <ServicePageLayout
      title="Decorative Curbing"
      subtitle="Our Signature Service"
      description="Transform messy lawn edges into elegant, permanent borders with our professional decorative concrete curbing. Available in three distinct styles with unlimited color and stamp options to perfectly match your home."
      heroImage="/images/curbing-stamped.jpg"
      benefits={benefits}
      relatedServices={relatedServices}
      content={
        <div className="space-y-12">
          {/* Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-6">
                Say Goodbye to Messy Edges and Endless Maintenance
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed mb-4">
                Tired of spending your weekends weed whacking around flower beds? Frustrated
                with mulch that constantly spills onto your lawn? Decorative concrete curbing
                is the permanent solution La Crosse homeowners have been waiting for.
              </p>
              <p className="text-[#64748B] text-base leading-relaxed mb-4">
                Unlike plastic edging that cracks and shifts or metal edging that rusts and
                becomes dangerous, our fiber-reinforced concrete curbing is installed directly
                into the ground and designed to last for years. Once installed, your landscape
                borders require virtually zero maintenance, giving you back your weekends and
                enhancing your curb appeal at the same time.
              </p>
              <p className="text-[#64748B] text-base leading-relaxed">
                At Screaming Eagle Curbing, we specialize exclusively in decorative curbing,
                which means you benefit from our focused expertise and attention to detail.
                Every project is completed by the owner personally, ensuring consistent quality
                and the satisfaction of knowing exactly who is working on your property.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/curbing-slant.jpg"
                alt="Slant style decorative curbing"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Three Styles Section */}
          <div className="bg-[#F8FAFC] rounded-xl p-8 md:p-12">
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-8 text-center">
              Three Styles to Match Your Vision
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Slant Style */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/curbing-slant.jpg"
                    alt="Slant style curbing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-[var(--font-montserrat)] font-semibold text-xl text-[#0F172A] mb-2">
                    Slant Style
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    Our most popular option features an angled edge that creates a clean,
                    modern look. The slant design effectively contains mulch and rock while
                    allowing easy mowing along the border.
                  </p>
                </div>
              </div>

              {/* Mower Style */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/curbing-mower.jpg"
                    alt="Mower style curbing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-[var(--font-montserrat)] font-semibold text-xl text-[#0F172A] mb-2">
                    Mower Style
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    Designed with functionality in mind, the rounded mower edge allows your
                    lawn mower wheel to roll right over the curb. Ideal for homeowners who
                    want the cleanest possible mowing experience.
                  </p>
                </div>
              </div>

              {/* Stamped Style */}
              <div className="bg-white rounded-lg overflow-hidden shadow-md">
                <div className="relative aspect-[4/3]">
                  <Image
                    src="/images/curbing-stamped.jpg"
                    alt="Stamped style curbing"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-[var(--font-montserrat)] font-semibold text-xl text-[#0F172A] mb-2">
                    Stamped Style
                  </h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    Make a statement with decorative stamp patterns including brick,
                    cobblestone, rope, and custom designs. Combined with color options,
                    stamped curbing adds distinctive character to any landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Color Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl order-2 lg:order-1">
              <Image
                src="/images/gallery-2.jpg"
                alt="Colored decorative curbing"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-6">
                Unlimited Color Options
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed mb-4">
                Your curbing should complement your home, not compete with it. That is why
                we offer virtually unlimited color options to match your siding, brick,
                stone, or landscape design. From natural earth tones that blend seamlessly
                with your surroundings to bold statement colors that define your outdoor
                spaces, we can achieve the exact look you envision.
              </p>
              <p className="text-[#64748B] text-base leading-relaxed mb-4">
                Our integral color system ensures consistent coloring throughout the
                concrete, not just on the surface. Combined with optional sealer application,
                your chosen color will remain vibrant for years to come.
              </p>
              <p className="text-[#64748B] text-base leading-relaxed">
                Popular color choices among our La Crosse customers include tan, terra cotta,
                charcoal, natural gray, and brick red, but we are happy to custom match any
                color you desire.
              </p>
            </div>
          </div>

          {/* Installation Process */}
          <div>
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-8 text-center">
              Our Installation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: '1',
                  title: 'Free Consultation',
                  description:
                    'We visit your property, discuss your vision, measure the project area, and provide a detailed estimate on the spot.',
                },
                {
                  step: '2',
                  title: 'Site Preparation',
                  description:
                    'We remove existing edging, mark the curbing path, and prepare the ground for a lasting installation.',
                },
                {
                  step: '3',
                  title: 'Curbing Installation',
                  description:
                    'Using specialized equipment, we extrude the curbing directly onto your prepared landscape in continuous sections.',
                },
                {
                  step: '4',
                  title: 'Finishing Touches',
                  description:
                    'We add stamps and color, smooth joints, and clean up completely, leaving you with beautiful new curbing.',
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-[#1E3A8A] text-white font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits List */}
          <div className="bg-[#F8FAFC] rounded-xl p-8 md:p-12">
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-8 text-center">
              Why Choose Decorative Curbing?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Eliminates time-consuming weed whacking and edge trimming',
                'Creates clean, defined borders that contain mulch and rock',
                'Increases property value and enhances curb appeal',
                'Permanent installation that lasts for years',
                'Low maintenance compared to other edging options',
                'Customizable colors and patterns to match any home',
                'Mower-friendly options for easy lawn care',
                'Professional installation completed in a single day',
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
