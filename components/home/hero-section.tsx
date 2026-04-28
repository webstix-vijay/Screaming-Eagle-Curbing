'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
      <div className="relative z-10 max-w-[1200px] w-full mx-auto px-4 pt-30 pb-20 text-left">
        <div className="max-w-2xl">
          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[var(--font-montserrat)] font-bold text-4xl md:text-4xl lg:text-4xl text-white leading-tight mb-6 text-balance"
            style={{ fontSize: '40px' }}
          >
            Clean Edges, Zero Effort.{' '}
            <span className="text-white">Permanent</span> Decorative Curbing
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

        </div>
      </div>


    </section>
  )
}
