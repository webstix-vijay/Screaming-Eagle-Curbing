import { Metadata } from 'next'
import Image from 'next/image'
import { ServicePageLayout } from '@/components/services/service-page-layout'

export const metadata: Metadata = {
  title: 'Retaining Walls | Screaming Eagle Curbing - La Crosse, WI',
  description:
    'Professional retaining wall installation in La Crosse, WI. Functional and beautiful stone retaining walls that add dimension to your landscape while preventing soil erosion.',
}

const benefits = [
  'Erosion Control',
  'Added Dimension',
  'Premium Materials',
  'Free Estimates',
]

const relatedServices = [
  {
    title: 'Decorative Curbing',
    href: '/services/decorative-curbing',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/648969539_1523399962552606_9149390113985786585_n-Y1XefroO2xDRxLWn45sTqhfH1QMFbs.jpg',
  },
  {
    title: 'Rock & Mulch',
    href: '/services/rock-mulch',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/548334124_1371765371049400_3565142757403817734_n-FmBXxvhFetZUkfphHptQo0VedZ4jfc.jpg',
  },
  {
    title: 'Seeding',
    href: '/services/seeding',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/486163644_1220695759489696_626873201542925766_n-k2qVtZX8JVnAtRSwWM2CLJKrURDhVk.jpg',
  },
]

export default function RetainingWallsPage() {
  return (
    <ServicePageLayout
      title="Retaining Walls"
      subtitle="Function Meets Beauty"
      description="Retaining walls solve practical problems while adding architectural interest to your landscape. Whether you need to manage slopes, create raised garden beds, or add visual dimension, our professionally installed walls deliver lasting results."
      heroImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/487113487_1223360492556556_6443011365999819935_n-iBGS0x56DUkPj2G4cPDVoPO4q3Rdhj.jpg"
      benefits={benefits}
      relatedServices={relatedServices}
      content={
        <div className="space-y-12">
          {/* Introduction */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-6">
                Transform Problem Slopes Into Design Features
              </h2>
              <p className="text-[#64748B] text-base leading-relaxed mb-4">
                Many La Crosse area properties feature natural slopes and elevation changes
                that can create landscaping challenges. Soil erosion, difficult mowing,
                and wasted space are common complaints from homeowners dealing with
                sloped yards. Retaining walls provide the solution.
              </p>
              <p className="text-[#64748B] text-base leading-relaxed mb-4">
                A well-designed retaining wall holds back soil, creates level planting
                areas, and adds visual interest to your landscape. Whether you need a
                small decorative wall for a raised flower bed or a larger structural
                wall to manage significant elevation changes, Screaming Eagle Curbing
                delivers quality craftsmanship you can count on.
              </p>
              <p className="text-[#64748B] text-base leading-relaxed">
                Our retaining walls are built with premium materials and proper drainage
                to ensure they perform reliably for years. Combined with our decorative
                curbing and landscaping services, we can transform your entire outdoor
                space into a cohesive, low-maintenance retreat.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/486354840_1223360722556533_2822022054035779697_n-PGpp6gBJSEDlOPGPRX4eocQsGi7Rp5.jpg"
                alt="Professional retaining wall installation"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Applications */}
          <div className="bg-[#F8FAFC] rounded-xl p-8 md:p-12">
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-8 text-center">
              Common Applications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'Slope Management',
                  description:
                    'Control erosion and create usable space on sloped properties with properly engineered retaining walls.',
                },
                {
                  title: 'Raised Garden Beds',
                  description:
                    'Elevate your plantings for easier maintenance, better drainage, and improved visual impact.',
                },
                {
                  title: 'Tiered Landscapes',
                  description:
                    'Create multi-level garden areas that add dimension and interest to flat or sloped yards.',
                },
                {
                  title: 'Driveway Borders',
                  description:
                    'Define driveway edges and prevent soil from washing onto paved surfaces.',
                },
                {
                  title: 'Patio Enclosures',
                  description:
                    'Create defined outdoor living spaces with attractive wall borders.',
                },
                {
                  title: 'Tree Rings',
                  description:
                    'Build raised beds around trees to protect roots and create attractive landscaping features.',
                },
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-[#0F172A] mb-2">{item.title}</h3>
                  <p className="text-[#64748B] text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Materials */}
          <div>
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-6">
              Quality Materials for Lasting Results
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed mb-6">
              We work with premium retaining wall blocks and natural stone materials
              to create walls that are both structurally sound and visually appealing.
              During your consultation, we will discuss the best material options for
              your specific project, considering factors like wall height, soil conditions,
              drainage requirements, and aesthetic preferences.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-[#E2E8F0] rounded-lg p-6">
                <h3 className="font-semibold text-[#0F172A] mb-3">Interlocking Block Walls</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Manufactured blocks that lock together for stability. Available in various
                  colors and textures to complement your home. Ideal for most residential
                  applications.
                </p>
              </div>
              <div className="border border-[#E2E8F0] rounded-lg p-6">
                <h3 className="font-semibold text-[#0F172A] mb-3">Natural Stone Walls</h3>
                <p className="text-[#64748B] text-sm leading-relaxed">
                  Real stone for a timeless, natural appearance. Each stone is unique,
                  creating walls with character and charm that blend seamlessly with
                  natural surroundings.
                </p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="bg-[#F8FAFC] rounded-xl p-8 md:p-12">
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-8 text-center">
              Benefits of Professional Retaining Walls
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Controls soil erosion and runoff',
                'Creates level, usable outdoor spaces',
                'Adds architectural interest to your landscape',
                'Increases property value',
                'Proper drainage prevents water damage',
                'Professional installation ensures structural integrity',
                'Complements decorative curbing and landscaping',
                'Low maintenance once installed',
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
