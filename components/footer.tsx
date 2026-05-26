import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Phone, Mail, Clock, MapPin } from 'lucide-react'
import { ALL_SERVICE_LINKS } from '@/lib/seo/services-config'
import { IMAGE_SIZES } from '@/lib/seo/image-sizes'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

const services = [
  { name: 'Decorative Curbing', href: '/services/decorative-curbing' },
  { name: 'Rock & Mulch', href: '/services/rock-mulch' },
  { name: 'Retaining Walls', href: '/services/retaining-walls' },
  { name: 'Christmas Lights', href: '/services/christmas-lights' },
  { name: 'Seeding', href: '/services/seeding' },
]

const serviceAreas = [
  'La Crosse',
  'Holmen',
  'Onalaska',
  'West Salem',
  'La Crescent',
  'Coulee Region',
]

const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Holmen%2C+WI+54636'

const footerColumnClass = 'flex flex-col min-w-0'
const footerHeadingClass =
  'font-[var(--font-montserrat)] font-semibold text-white text-base tracking-tight mb-5'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div
          className="grid grid-cols-1 items-start gap-y-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-14 lg:grid-cols-[1.15fr_0.85fr_1.45fr_0.85fr] lg:gap-x-10 xl:gap-x-14"
        >
          {/* Column 1: Brand */}
          <div className={footerColumnClass}>
            <Link href="/" className="mb-6 inline-block">
              <Image
                src="/images/screaming_eagle_curbing_logo.png"
                alt="Screaming Eagle Curbing"
                width={160}
                height={130}
                className="h-[130px] w-[160px] object-contain object-left"
                sizes={IMAGE_SIZES.logo}
              />
            </Link>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6 pr-0 sm:pr-4 lg:pr-6">
              Owner-operated with over 7 years of experience delivering premium decorative
              curbing and landscaping services to the La Crosse area. Quality craftsmanship,
              permanent results.
            </p>
            <a
              href="https://facebook.com/lacrossecustomcurbing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-[#94A3B8] hover:text-white transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="w-5 h-5 shrink-0" />
              <span className="text-sm">Follow us on Facebook</span>
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div className={footerColumnClass}>
            <h4 className={footerHeadingClass}>Quick Links</h4>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#94A3B8] hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="font-[var(--font-montserrat)] font-semibold text-white text-sm mt-6 mb-3">
              Our Services
            </p>
            <ul className="space-y-2.5">
              {ALL_SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#94A3B8] hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className={`${footerColumnClass} sm:col-span-1 lg:min-w-[18.5rem]`}>
            <h4 className={footerHeadingClass}>Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={GOOGLE_MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 min-w-0 text-[#94A3B8] hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <span className="text-sm min-w-0 flex-1 leading-relaxed">
                    Holmen, WI 54636
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+17158967448"
                  className="flex items-start gap-3 min-w-0 text-[#94A3B8] hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <span className="text-sm min-w-0 flex-1 leading-relaxed">
                    (715) 896-7448
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:screamingeaglecurbing@outlook.com"
                  className="inline-flex items-start gap-3 max-w-full text-[#94A3B8] hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <span className="text-[0.8125rem] sm:text-sm leading-relaxed whitespace-nowrap">
                    screamingeaglecurbing@outlook.com
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3 min-w-0">
                <Clock className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                <span className="text-[#94A3B8] text-sm min-w-0 flex-1 leading-relaxed">
                  Mon - Sat: 7:00 AM - 4:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div className={footerColumnClass}>
            <h4 className={footerHeadingClass}>Service Areas</h4>
            <ul className="space-y-3.5">
              {serviceAreas.map((area) => (
                <li key={area} className="text-[#94A3B8] text-sm">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1E293B]">
        <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#64748B] text-center md:text-left" style={{ fontSize: '14px' }}>
            &copy; {currentYear} Screaming Eagle Curbing. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-[#64748B] hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/sitemap-page"
              className="text-[#64748B] hover:text-white text-sm transition-colors"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
