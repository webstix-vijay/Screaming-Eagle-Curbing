'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, Phone } from 'lucide-react'
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
            {navLinks.map((link) => (
              <NavigationMenuItem key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    'text-base font-medium transition-colors duration-200',
                    useDarkText
                      ? 'text-[#0F172A] hover:text-[#1E3A8A]'
                      : 'text-white hover:text-white/80',
                    isActive(link.href) && (useDarkText ? 'text-[#1E3A8A]' : 'text-white font-semibold')
                  )}
                >
                  {link.name}
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+16085551234"
            className={cn(
              'flex items-center gap-2 text-lg font-medium transition-colors duration-200',
              useDarkText ? 'text-[#0F172A]' : 'text-white'
            )}
          >
            <Phone className="w-5 h-5" />
            <span className="hidden xl:inline">(608) 555-1234</span>
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
                {navLinks.map((link) => (
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
                ))}
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
