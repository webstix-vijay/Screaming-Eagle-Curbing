'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
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
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu'
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
  const isHomePage = pathname === '/'

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

  // Determine header background based on page and scroll state
  const getHeaderBackground = () => {
    if (isScrolled) {
      return 'bg-white/95 backdrop-blur-md shadow-md py-3'
    }
    // On inside pages, always show solid background for visibility
    if (!isHomePage) {
      return 'bg-[#0F172A] py-5'
    }
    // On home page, transparent until scrolled
    return 'bg-transparent py-5'
  }

  // Determine if we should use dark text (white background) or light text
  const useDarkText = isScrolled

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        getHeaderBackground()
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Screaming Eagle Curbing"
            width={280}
            height={180}
            className="w-auto h-[100px] transition-all duration-300"
            priority
          />
        </Link>

        {/* Desktop Navigation with hover dropdown */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-6">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <NavigationMenuItem key={link.name}>
                  <NavigationMenuTrigger
                    className={cn(
                      '!bg-transparent text-sm font-medium transition-colors duration-200 px-0 hover:!bg-transparent focus:!bg-transparent data-[state=open]:!bg-transparent',
                      useDarkText
                        ? 'text-[#0F172A] hover:text-[#1E3A8A] data-[state=open]:text-[#1E3A8A]'
                        : 'text-white hover:text-white/80 data-[state=open]:text-white/80',
                      isActive(link.href) && 'border-b-2 border-[#1E3A8A]'
                    )}
                  >
                    {link.name}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="!bg-[#0F172A] border border-[#1E293B] shadow-lg rounded-md min-w-[200px]">
                    <ul className="p-2">
                      {services.map((service) => (
                        <li key={service.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              href={service.href}
                              className="block px-4 py-2 text-sm text-white hover:bg-[#1E3A8A] rounded-sm transition-colors"
                            >
                              {service.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              ) : (
                <NavigationMenuItem key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-sm font-medium transition-colors duration-200',
                      useDarkText
                        ? 'text-[#0F172A] hover:text-[#1E3A8A]'
                        : 'text-white hover:text-white/80',
                      isActive(link.href) && 'border-b-2 border-[#1E3A8A]'
                    )}
                  >
                    {link.name}
                  </Link>
                </NavigationMenuItem>
              )
            )}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+16085551234"
            className={cn(
              'flex items-center gap-2 text-sm font-medium transition-colors duration-200',
              useDarkText ? 'text-[#0F172A]' : 'text-white'
            )}
          >
            <Phone className="w-4 h-4" />
            <span className="hidden xl:inline">(608) 555-1234</span>
          </a>
          <Button
            asChild
            className="bg-[#1E3A8A] text-white hover:bg-black rounded-full px-6 py-2 text-sm font-semibold uppercase tracking-wide shadow-blue transition-colors duration-200"
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
              useDarkText ? 'text-[#1E3A8A]' : 'text-white'
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
                  useDarkText ? 'text-[#0F172A]' : 'text-white'
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
                    src="/images/logo.png"
                    alt="Screaming Eagle Curbing"
                    width={140}
                    height={60}
                    className="h-16 w-auto"
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
                  className="w-full bg-[#1E3A8A] text-white hover:bg-black rounded-full py-6 text-base font-semibold uppercase tracking-wide transition-colors duration-200"
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
