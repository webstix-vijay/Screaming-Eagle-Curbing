import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Phone, Mail, Clock, MapPin } from 'lucide-react'

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services/decorative-curbing' },
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

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0F172A] text-white">
      {/* Main Footer Content */}
      <div className="max-w-[1200px] mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/images/logo.png"
                alt="Screaming Eagle Curbing"
                width={200}
                height={80}
                className="h-20 w-auto"
              />
            </div>
            <p className="text-[#94A3B8] text-sm leading-relaxed mb-6">
              Owner-operated with over 7 years of experience delivering premium decorative
              curbing and landscaping services to the La Crosse area. Quality craftsmanship,
              permanent results.
            </p>
            <a
              href="https://facebook.com/lacrossecustomcurbing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#94A3B8] hover:text-[#1E3A8A] transition-colors"
              aria-label="Visit our Facebook page"
            >
              <Facebook className="w-5 h-5" />
              <span className="text-sm">Follow us on Facebook</span>
            </a>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-[var(--font-montserrat)] font-semibold text-white mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
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
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-[var(--font-montserrat)] font-semibold text-white mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                <span className="text-[#94A3B8] text-sm">
                  Holmen, WI 54636
                </span>
              </li>
              <li>
                <a
                  href="tel:+16085551234"
                  className="flex items-start gap-3 text-[#94A3B8] hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <span className="text-sm">(608) 555-1234</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:screamingeaglecurbing@outlook.com"
                  className="flex items-start gap-3 text-[#94A3B8] hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                  <span className="text-sm break-all">screamingeaglecurbing@outlook.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-[#1E3A8A] shrink-0 mt-0.5" />
                <span className="text-[#94A3B8] text-sm">
                  Mon - Sat: 7:00 AM - 4:00 PM
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Service Areas */}
          <div>
            <h4 className="font-[var(--font-montserrat)] font-semibold text-white mb-6">
              Service Areas
            </h4>
            <ul className="space-y-3">
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
        <div className="max-w-[1200px] mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#64748B] text-sm text-center md:text-left">
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
              href="/terms"
              className="text-[#64748B] hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
