'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, Shield, Star, Clock } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-curbing.jpg"
          alt="Beautiful decorative concrete curbing around landscaped flower beds"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(15,23,42,0.85)] via-[rgba(15,23,42,0.7)] to-[rgba(30,58,138,0.6)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-4 py-24 text-center lg:text-left" style={{ marginLeft: 0, marginRight: 0 }}>
        <div className="lg:max-w-2xl">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
          >
            <Shield className="w-4 h-4 text-[#1E3A8A]" />
            <span className="text-white text-sm font-medium">
              Owner-Operated | 7+ Years Experience
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[var(--font-montserrat)] font-bold text-4xl md:text-4xl lg:text-4xl text-white leading-tight mb-6 text-balance"
            style={{ fontSize: '40px' }}
          >
            Clean Edges, Zero Effort.{' '}
            <span className="text-[#94A3B8]">Permanent</span> Decorative Curbing
            for Your La Crosse Home
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
          >
            Transform your landscape with precision-crafted concrete curbing that
            eliminates messy edges and time-consuming maintenance. One installation,
            years of beauty.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
          >
            <Button
              asChild
              size="lg"
              className="bg-[#1E3A8A] text-white hover:bg-[#1E3A8A]/90 rounded-full px-8 py-6 text-base font-semibold uppercase tracking-wide shadow-blue transition-all duration-300 hover:px-10"
            >
              <Link href="/contact">Request Free Estimate</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white rounded-full px-8 py-6 text-base font-medium"
              style={{ color: '#002dad' }}
            >
              <a href="tel:+16085551234" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Tap to Call
              </a>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 grid grid-cols-3 gap-6 max-w-lg mx-auto lg:mx-0"
          >
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-white/60 text-xs">5-Star Reviews</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-white">7+</p>
              <p className="text-white/60 text-xs">Years Experience</p>
            </div>
            <div className="text-center lg:text-left">
              <p className="text-2xl font-bold text-white">500+</p>
              <p className="text-white/60 text-xs">Projects Complete</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center pt-2"
          >
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
