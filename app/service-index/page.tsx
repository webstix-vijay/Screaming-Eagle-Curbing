import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { serviceIndexMetadata } from '@/lib/seo/pages'

export const metadata = serviceIndexMetadata

const services = [
  {
    name: 'Decorative Curbing',
    href: '/services/decorative-curbing',
    description:
      'Permanent concrete landscape edging in standard, roller stamp, and carved styles with unlimited color options.',
  },
  {
    name: 'Rock & Mulch',
    href: '/services/rock-mulch',
    description:
      'Complete rock and mulch bed installation, including prep, weed barrier, and premium materials.',
  },
  {
    name: 'Retaining Walls',
    href: '/services/retaining-walls',
    description:
      'Stone retaining wall installation for erosion control, drainage, and lasting curb appeal.',
  },
  {
    name: 'Christmas Lights',
    href: '/services/christmas-lights',
    description:
      'Professional holiday light design, installation, and takedown to make your home shine.',
  },
  {
    name: 'Seeding',
    href: '/services/seeding',
    description:
      'Expert lawn seeding to establish thick, healthy grass that complements your landscaping.',
  },
]

export default function ServiceIndexPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="font-[var(--font-montserrat)] font-bold text-4xl md:text-5xl text-white mb-4">
            Service Index
          </h1>
          <p className="text-white/80 text-lg">
            A complete list of our curbing and landscaping services
          </p>
        </div>
      </section>

      <Breadcrumbs />

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[#64748B] mb-8">
            Browse every service offered by Screaming Eagle Curbing. Select a service to learn
            more and request a free estimate.
          </p>
          <ul className="space-y-6">
            {services.map((service) => (
              <li
                key={service.href}
                className="border-b border-[#E2E8F0] pb-6 last:border-b-0"
              >
                <Link
                  href={service.href}
                  className="font-[var(--font-montserrat)] font-bold text-xl text-[#1E3A8A] hover:text-[#0F172A] hover:underline transition-colors"
                >
                  {service.name}
                </Link>
                <p className="text-[#64748B] mt-2">{service.description}</p>
              </li>
            ))}
          </ul>
          <p className="text-[#64748B] mt-10">
            Looking for an overview of everything?{' '}
            <Link
              href="/services"
              className="text-[#1E3A8A] hover:text-[#0F172A] hover:underline transition-colors font-medium"
            >
              Visit our Services page
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
