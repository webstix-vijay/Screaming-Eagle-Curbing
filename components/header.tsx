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
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { cn } from '@/lib/utils'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === '/'

  useEffect(() => {
    setMounted(true)
  }, [])

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
    // On inside pages, always show white background for visibility
    if (!isHomePage) {
      return 'bg-white shadow-md py-3'
    }
    // On home page, transparent until scrolled
    return 'bg-transparent py-5'
  }

  // Determine if we should use dark text (white background) or light text
  const useDarkText = isScrolled || !isHomePage

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
            className={cn(
              'w-auto transition-all duration-500 ease-in-out',
              isScrolled || !isHomePage ? 'h-[80px]' : 'h-[130px]'
            )}
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList className="gap-6">
            {navLinks.map((link) => {
              if (link.name === 'Services') {
                return (
                  <NavigationMenuItem key={link.name} className="relative group/services">
                    <button
                      type="button"
                      className={cn(
                        'flex items-center gap-1 text-base font-medium transition-colors duration-200 py-2 cursor-pointer outline-none',
                        isActive(link.href) && 'font-semibold'
                      )}
                      style={{
                        color: useDarkText 
                          ? (isActive(link.href) ? '#1E3A8A' : '#000000')
                          : '#FFFFFF',
                        WebkitTextFillColor: useDarkText 
                          ? (isActive(link.href) ? '#1E3A8A' : '#000000')
                          : '#FFFFFF'
                      }}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover/services:rotate-180" />
                    </button>
                    {/* Dropdown Menu */}
                    <div className="absolute top-full left-0 -ml-4 pt-2 opacity-0 invisible group-hover/services:opacity-100 group-hover/services:visible transition-all duration-300 z-50">
                      <div className="bg-white rounded-md shadow-lg border border-[#E2E8F0] py-2 w-[220px] flex flex-col">
                        <Link
                          href="/services"
                          className="px-4 py-2.5 text-sm text-[#1E3A8A] hover:bg-[#F8FAFC] transition-colors font-medium border-b border-[#E2E8F0]"
                        >
                          All Services
                        </Link>
                        <Link
                          href="/services/decorative-curbing"
                          className="px-4 py-2.5 text-sm text-[#1E3A8A] hover:bg-[#F8FAFC] transition-colors"
                        >
                          Decorative Curbing
                        </Link>
                        <Link
                          href="/services/rock-mulch"
                          className="px-4 py-2.5 text-sm text-[#1E3A8A] hover:bg-[#F8FAFC] transition-colors"
                        >
                          Rock & Mulch
                        </Link>
                        <Link
                          href="/services/retaining-walls"
                          className="px-4 py-2.5 text-sm text-[#1E3A8A] hover:bg-[#F8FAFC] transition-colors"
                        >
                          Retaining Walls
                        </Link>
                        <Link
                          href="/services/christmas-lights"
                          className="px-4 py-2.5 text-sm text-[#1E3A8A] hover:bg-[#F8FAFC] transition-colors"
                        >
                          Christmas Lights
                        </Link>
                        <Link
                          href="/services/seeding"
                          className="px-4 py-2.5 text-sm text-[#1E3A8A] hover:bg-[#F8FAFC] transition-colors"
                        >
                          Seeding
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuItem>
                )
              }

              return (
                <NavigationMenuItem key={link.name}>
                  <Link
                    href={link.href}
                    className={cn(
                      'text-base font-medium transition-colors duration-200',
                      isActive(link.href) && 'font-semibold'
                    )}
                    style={{
                      color: useDarkText 
                        ? (isActive(link.href) ? '#1E3A8A' : '#000000')
                        : '#FFFFFF',
                      WebkitTextFillColor: useDarkText 
                        ? (isActive(link.href) ? '#1E3A8A' : '#000000')
                        : '#FFFFFF'
                    }}
                  >
                    {link.name}
                  </Link>
                </NavigationMenuItem>
              )
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+17158967448"
            className="flex items-center gap-2 text-lg font-medium transition-colors duration-200"
            style={{
              color: useDarkText ? '#000000' : '#FFFFFF',
              WebkitTextFillColor: useDarkText ? '#000000' : '#FFFFFF'
            }}
          >
            <Phone className="w-5 h-5" />
            <span className="hidden xl:inline">(715) 896-7448</span>
          </a>
          <Button
            asChild
            className="bg-[#1E3A8A] text-white hover:bg-black rounded-full px-6 py-3 text-base font-semibold uppercase tracking-wide shadow-blue transition-colors duration-200"
          >
            <Link href="/contact">Get A Quote Now</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center gap-3">
          <a
            href="tel:+17158967448"
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
              <nav className="flex flex-col p-6 overflow-y-auto pb-32">
                {navLinks.map((link) => {
                  if (link.name === 'Services') {
                    return (
                      <div key={link.name} className="flex flex-col border-b border-[#E2E8F0]">
                        <button
                          onClick={() => setIsServicesOpen(!isServicesOpen)}
                          className={cn(
                            'flex items-center justify-between py-3 text-base font-medium transition-colors w-full text-left',
                            isActive(link.href) || isServicesOpen
                              ? 'text-[#1E3A8A]'
                              : 'text-[#0F172A] hover:text-[#1E3A8A]'
                          )}
                        >
                          {link.name}
                          <ChevronDown
                            className={cn(
                              'w-4 h-4 transition-transform duration-200',
                              isServicesOpen && 'rotate-180'
                            )}
                          />
                        </button>
                        
                        {/* Mobile Dropdown Menu */}
                        <div
                          className={cn(
                            'flex flex-col overflow-hidden transition-all duration-300 ease-in-out',
                            isServicesOpen ? 'max-h-96 opacity-100 mb-2' : 'max-h-0 opacity-0'
                          )}
                        >
                          <div className="flex flex-col pl-4 border-l-2 border-[#E2E8F0] ml-2 mt-1 space-y-1">
                            <Link
                              href="/services"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="py-2 text-sm text-[#0F172A] hover:text-[#1E3A8A] font-medium"
                            >
                              All Services
                            </Link>
                            <Link
                              href="/services/decorative-curbing"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="py-2 text-sm text-[#64748B] hover:text-[#1E3A8A]"
                            >
                              Decorative Curbing
                            </Link>
                            <Link
                              href="/services/rock-mulch"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="py-2 text-sm text-[#64748B] hover:text-[#1E3A8A]"
                            >
                              Rock & Mulch
                            </Link>
                            <Link
                              href="/services/retaining-walls"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="py-2 text-sm text-[#64748B] hover:text-[#1E3A8A]"
                            >
                              Retaining Walls
                            </Link>
                            <Link
                              href="/services/christmas-lights"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="py-2 text-sm text-[#64748B] hover:text-[#1E3A8A]"
                            >
                              Christmas Lights
                            </Link>
                            <Link
                              href="/services/seeding"
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="py-2 text-sm text-[#64748B] hover:text-[#1E3A8A]"
                            >
                              Seeding
                            </Link>
                          </div>
                        </div>
                      </div>
                    )
                  }
                  
                  return (
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
                })}
              </nav>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-[#F8FAFC] border-t border-[#E2E8F0]">
                <Button
                  asChild
                  className="w-full bg-[#1E3A8A] text-white hover:bg-black rounded-full py-6 text-base font-semibold uppercase tracking-wide transition-colors duration-200"
                >
                  <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                    Get A Quote Now
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
