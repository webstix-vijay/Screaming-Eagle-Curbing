'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, Phone, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

const services = [
  { name: 'Decorative Curbing', href: '/services/decorative-curbing' },
  { name: 'Rock & Mulch', href: '/services/rock-mulch' },
  { name: 'Retaining Walls', href: '/services/retaining-walls' },
  { name: 'Christmas Lights', href: '/services/christmas-lights' },
  { name: 'Seeding', href: '/services/seeding' },
]

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services', hasDropdown: true },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.jpeg"
            alt="Screaming Eagle Curbing"
            width={280}
            height={180}
            className={cn(
              'h-14 w-auto transition-all duration-300',
              isScrolled ? 'brightness-100' : 'brightness-0 invert'
            )}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) =>
            link.hasDropdown ? (
              <DropdownMenu key={link.name}>
                <DropdownMenuTrigger asChild>
                  <button
                    className={cn(
                      'flex items-center gap-1 text-sm font-medium transition-colors duration-200 focus:outline-none',
                      isScrolled
                        ? 'text-[#0F172A] hover:text-[#1E3A8A]'
                        : 'text-white hover:text-white/80',
                      isActive(link.href) && 'border-b-2 border-[#1E3A8A]'
                    )}
                  >
                    {link.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-56 bg-white border border-[#E2E8F0] shadow-md"
                >
                  {services.map((service) => (
                    <DropdownMenuItem key={service.name} asChild>
                      <Link
                        href={service.href}
                        className="cursor-pointer hover:bg-[#F8FAFC] hover:text-[#1E3A8A] transition-colors"
                      >
                        {service.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  'text-sm font-medium transition-colors duration-200',
                  isScrolled
                    ? 'text-[#0F172A] hover:text-[#1E3A8A]'
                    : 'text-white hover:text-white/80',
                  isActive(link.href) && 'border-b-2 border-[#1E3A8A]'
                )}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+16085551234"
            className={cn(
              'flex items-center gap-2 text-sm font-medium transition-colors duration-200',
              isScrolled ? 'text-[#0F172A]' : 'text-white'
            )}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">(608) 555-1234</span>
          </a>
          <Button
            asChild
            className="bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90 rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-wide shadow-blue transition-all duration-200 hover:px-8"
          >
            <Link href="/contact">Free Estimate</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="tel:+16085551234"
            className={cn(
              'p-2 rounded-full transition-colors',
              isScrolled ? 'text-[#1E3A8A]' : 'text-white'
            )}
            aria-label="Call us"
          >
            <Phone className="w-5 h-5" />
          </a>
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <button
                className={cn(
                  'p-2 rounded-md transition-colors',
                  isScrolled ? 'text-[#0F172A]' : 'text-white'
                )}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-white p-0">
              <SheetHeader className="p-6 border-b border-[#E2E8F0]">
                <SheetTitle className="text-left">
                  <Image
                    src="/images/logo.jpeg"
                    alt="Screaming Eagle Curbing"
                    width={140}
                    height={60}
                    className="h-12 w-auto"
                  />
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col p-6">
                {navLinks.map((link) =>
                  link.hasDropdown ? (
                    <div key={link.name} className="py-3">
                      <span className="text-sm font-semibold text-[#0F172A] uppercase tracking-wide">
                        {link.name}
                      </span>
                      <div className="mt-2 ml-4 flex flex-col gap-2">
                        {services.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm text-[#64748B] hover:text-[#1E3A8A] transition-colors py-1"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        'text-base font-medium py-3 border-b border-[#E2E8F0] transition-colors',
                        isActive(link.href)
                          ? 'text-[#1E3A8A]'
                          : 'text-[#0F172A] hover:text-[#1E3A8A]'
                      )}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </nav>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#F8FAFC] border-t border-[#E2E8F0]">
                <Button
                  asChild
                  className="w-full bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90 rounded-full py-6 text-base font-semibold uppercase tracking-wide"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Request Free Estimate
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
