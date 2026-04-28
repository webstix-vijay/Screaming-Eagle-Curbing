import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Home, Info, Briefcase, ImageIcon, Mail, FileText, Layers, Trees, Building, Snowflake, Sprout } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Sitemap | Screaming Eagle Curbing - La Crosse, WI',
  description:
    'Navigate our website easily with our sitemap. Find all pages including services, gallery, about us, and contact information.',
}

const mainPages = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'About Us', href: '/about', icon: Info },
  { name: 'Services', href: '/services', icon: Briefcase },
  { name: 'Gallery', href: '/gallery', icon: ImageIcon },
  { name: 'Contact', href: '/contact', icon: Mail },
]

const servicePages = [
  { name: 'Decorative Curbing', href: '/services/decorative-curbing', icon: Layers },
  { name: 'Rock & Mulch', href: '/services/rock-mulch', icon: Trees },
  { name: 'Retaining Walls', href: '/services/retaining-walls', icon: Building },
  { name: 'Christmas Lights', href: '/services/christmas-lights', icon: Snowflake },
  { name: 'Seeding', href: '/services/seeding', icon: Sprout },
]

const legalPages = [
  { name: 'Privacy Policy', href: '/privacy', icon: FileText },
]

export default function SitemapPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="font-[var(--font-montserrat)] font-bold text-4xl md:text-5xl text-white mb-4">
            Sitemap
          </h1>
          <p className="text-white/80 text-lg">
            Navigate our website easily
          </p>
        </div>
      </section>

      <Breadcrumbs />

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Main Pages */}
            <div>
              <h2 className="font-[var(--font-montserrat)] font-bold text-xl text-[#0F172A] mb-6 pb-2 border-b-2 border-[#1E3A8A]">
                Main Pages
              </h2>
              <ul className="space-y-4">
                {mainPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="flex items-center gap-3 text-[#64748B] hover:text-[#1E3A8A] transition-colors group"
                    >
                      <page.icon className="w-5 h-5 text-[#1E3A8A] group-hover:text-[#0F172A] transition-colors" />
                      <span className="font-medium">{page.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Pages */}
            <div>
              <h2 className="font-[var(--font-montserrat)] font-bold text-xl text-[#0F172A] mb-6 pb-2 border-b-2 border-[#1E3A8A]">
                Services
              </h2>
              <ul className="space-y-4">
                {servicePages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="flex items-center gap-3 text-[#64748B] hover:text-[#1E3A8A] transition-colors group"
                    >
                      <page.icon className="w-5 h-5 text-[#1E3A8A] group-hover:text-[#0F172A] transition-colors" />
                      <span className="font-medium">{page.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Pages */}
            <div>
              <h2 className="font-[var(--font-montserrat)] font-bold text-xl text-[#0F172A] mb-6 pb-2 border-b-2 border-[#1E3A8A]">
                Legal
              </h2>
              <ul className="space-y-4">
                {legalPages.map((page) => (
                  <li key={page.href}>
                    <Link
                      href={page.href}
                      className="flex items-center gap-3 text-[#64748B] hover:text-[#1E3A8A] transition-colors group"
                    >
                      <page.icon className="w-5 h-5 text-[#1E3A8A] group-hover:text-[#0F172A] transition-colors" />
                      <span className="font-medium">{page.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
