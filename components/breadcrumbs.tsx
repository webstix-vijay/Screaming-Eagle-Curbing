'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, Home } from 'lucide-react'

const pathNameMap: Record<string, string> = {
  services: 'Services',
  'decorative-curbing': 'Decorative Curbing',
  'rock-mulch': 'Rock & Mulch',
  'retaining-walls': 'Retaining Walls',
  'christmas-lights': 'Christmas Lights',
  seeding: 'Seeding',
  gallery: 'Gallery',
  about: 'About Us',
  contact: 'Contact',
  'thank-you': 'Thank You',
}

export function Breadcrumbs() {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)

  if (segments.length === 0) return null

  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/')
    const label = pathNameMap[segment] || segment.replace(/-/g, ' ')
    const isLast = index === segments.length - 1

    return { href, label, isLast }
  })

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-[#F8FAFC] border-b border-[#E2E8F0]"
    >
      <div className="max-w-[1200px] mx-auto px-4 py-3">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              href="/"
              className="text-[#64748B] hover:text-[#1E3A8A] transition-colors flex items-center gap-1"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          {breadcrumbs.map((crumb) => (
            <li key={crumb.href} className="flex items-center gap-2">
              <ChevronRight className="w-4 h-4 text-[#94A3B8]" />
              {crumb.isLast ? (
                <span className="text-[#0F172A] font-medium capitalize">
                  {crumb.label}
                </span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-[#64748B] hover:text-[#1E3A8A] transition-colors capitalize"
                >
                  {crumb.label}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  )
}
