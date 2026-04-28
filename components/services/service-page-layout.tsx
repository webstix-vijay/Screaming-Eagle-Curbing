'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Phone } from 'lucide-react'

interface ServicePageLayoutProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
  benefits: string[]
  content: React.ReactNode
  relatedServices: {
    title: string
    href: string
    image: string
  }[]
}

export function ServicePageLayout({
  title,
  subtitle,
  description,
  heroImage,
  benefits,
  content,
  relatedServices,
}: ServicePageLayoutProps) {
  return (
    <div className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-[#0F172A] overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src={heroImage}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] to-transparent z-[1]" />

          <div className="max-w-[1200px] mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <span className="inline-block text-[#94A3B8] text-sm font-semibold uppercase tracking-wider mb-4">
                {subtitle}
              </span>
              <h1 className="font-[var(--font-montserrat)] font-bold text-4xl md:text-5xl text-white mb-6 text-balance">
                {title}
              </h1>
              <p className="text-white/80 text-lg leading-relaxed mb-8">
                {description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  className="bg-[#1E3A8A] text-white hover:bg-black rounded-full px-6 py-3 text-base font-semibold uppercase tracking-wide shadow-blue transition-colors duration-200"
                >
                  <Link href="/contact">Get A Quote Now</Link>
                </Button>
                <Button
                  asChild
                  className="bg-white text-black border-2 border-white hover:bg-black hover:text-white hover:border-black rounded-full px-6 py-3 transition-colors duration-200"
                >
                  <a href="tel:+16085551234" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    <span>Call Now</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Benefits Bar */}
        <section className="bg-[#1E3A8A] py-6">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-6 md:gap-12">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-white" />
                  <span className="text-white text-sm font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Breadcrumbs />

        {/* Main Content */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="prose prose-lg max-w-none">
              {content}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#F8FAFC]">
          <div className="max-w-[1200px] mx-auto px-4 text-center">
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-[#64748B] text-lg mb-8 max-w-xl mx-auto">
              Contact us today for a free, no-obligation estimate on your project.
            </p>
            <Button
              asChild
              className="bg-[#1E3A8A] text-white hover:bg-black rounded-full px-6 py-3 text-base font-semibold uppercase tracking-wide shadow-blue transition-colors duration-200"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get A Quote Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-24 bg-white">
          <div className="max-w-[1200px] mx-auto px-4">
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-[#0F172A] mb-8 text-center">
              Other Services You May Like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="group relative aspect-[4/3] rounded-lg overflow-hidden"
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white font-semibold text-lg">
                      {service.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
    </div>
  )
}
