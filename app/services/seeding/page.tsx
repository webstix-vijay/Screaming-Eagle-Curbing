import { Metadata } from 'next'
import Image from 'next/image'
import { ServicePageLayout } from '@/components/services/service-page-layout'

export const metadata: Metadata = {
  title: 'Lawn Seeding | Screaming Eagle Curbing - La Crosse, WI',
  description:
    'Professional lawn seeding services in La Crosse, WI. Establish thick, healthy grass that pairs perfectly with your new decorative curbing.',
}

const benefits = [
  'Quality Seed Blends',
  'Proper Preparation',
  'Optimal Timing',
  'Free Estimates',
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

export default function SeedingPage() {
  return (
    <ServicePageLayout
      title="Lawn Seeding"
      subtitle="Complete Your Landscape"
      description="A lush, healthy lawn is the perfect backdrop for your decorative curbing and landscape beds. Our professional seeding services establish thick grass that enhances your property's beauty and value."
      heroImage="/images/seeding.jpg"
      benefits={benefits}
      relatedServices={relatedServices}
      content={
        <div className="space-y-12">
          {/* Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-6">
                The Foundation of a Beautiful Landscape
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed mb-4">
                Your lawn is often the largest visible element of your landscape. When
                it is thick and green, everything else looks better. When it is thin,
                patchy, or weedy, even the most beautiful curbing and flower beds cannot
                compensate.
              </p>
              <p className="text-[#64748B] text-base leading-relaxed mb-4">
                At Screaming Eagle Curbing, we understand that a complete landscape
                transformation sometimes requires attention to the lawn as well as the
                beds. That is why we offer professional seeding services to establish
                or restore healthy turf that complements your other landscaping investments.
              </p>
              <p className="text-[#64748B] text-base leading-relaxed">
                Whether you need to establish a new lawn from scratch, overseed thin
                areas, or repair damage from construction or winter weather, we use
                quality seed blends appropriate for Wisconsin growing conditions and
                proper preparation techniques to give your grass the best start possible.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/seeding.jpg"
                alt="Professional lawn seeding results"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Services */}
          <div className="bg-[#F8FAFC] rounded-xl p-8 md:p-12">
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-8 text-center">
              Our Seeding Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: 'New Lawn Establishment',
                  description:
                    'Starting from bare soil, we prepare, seed, and guide you through establishing a completely new lawn.',
                },
                {
                  title: 'Overseeding',
                  description:
                    'Thicken existing thin lawns by adding seed to fill gaps and improve overall turf density.',
                },
                {
                  title: 'Spot Repairs',
                  description:
                    'Fix damaged areas from construction, pets, disease, or weather with targeted seeding.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Process */}
          <div>
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-6">
              Our Seeding Process
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed mb-6">
              Successful seeding is about more than just spreading seed. Proper soil
              preparation, seed selection, and timing are all critical factors. Here
              is how we approach each project:
            </p>
            <div className="space-y-4">
              {[
                {
                  title: 'Soil Assessment',
                  description:
                    'We evaluate your soil conditions and recommend any amendments needed for optimal growth.',
                },
                {
                  title: 'Ground Preparation',
                  description:
                    'We loosen compacted soil, remove debris, and create a smooth, even surface for seeding.',
                },
                {
                  title: 'Seed Selection',
                  description:
                    'We choose seed blends suited to Wisconsin climate and your specific site conditions (sun, shade, traffic).',
                },
                {
                  title: 'Seeding Application',
                  description:
                    'We apply seed at the correct rate for uniform coverage and optimal germination.',
                },
                {
                  title: 'Post-Seeding Care',
                  description:
                    'We provide detailed watering and care instructions to help your new grass thrive.',
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

          {/* Timing */}
          <div className="bg-[#F8FAFC] rounded-xl p-8 md:p-12">
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-6 text-center">
              Best Time to Seed in Wisconsin
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-[#1E3A8A] mb-2">Fall Seeding (Recommended)</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Late August through mid-September is the ideal time for seeding in
                  Wisconsin. Soil is warm, air temperatures are cooling, and weed
                  competition is reduced. New grass has time to establish before winter
                  dormancy.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-[#1E3A8A] mb-2">Spring Seeding</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  April through early May is also suitable for seeding, though spring
                  seedlings face more weed pressure and summer heat stress. Proper
                  preparation and watering are even more critical.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-8 text-center">
              Benefits of Professional Seeding
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Quality seed blends selected for local conditions',
                'Proper soil preparation for optimal germination',
                'Correct seeding rates for uniform coverage',
                'Expert timing recommendations',
                'Coordinates perfectly with curbing and landscaping projects',
                'Guidance on watering and establishment care',
                'Saves time compared to DIY attempts',
                'Better results than store-bought seed spreader methods',
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
