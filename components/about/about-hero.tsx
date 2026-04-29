'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function AboutHero() {
  return (
    <section className="relative py-24 bg-[#0F172A] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-30">
        <Image
          src="/images/hero-curbing.jpg"
          alt="Decorative curbing background"
          fill
          className="object-cover"
        />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block text-[#94A3B8] text-sm font-semibold uppercase tracking-wider mb-4">
            About Us
          </span>
          <h1 className="font-[var(--font-montserrat)] font-bold text-4xl md:text-5xl text-white mb-6 text-balance">
            Your Local Partner in Landscape Excellence
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Since 2019, Screaming Eagle Curbing has been delivering premium decorative
            curbing and landscaping services to homeowners throughout the Coulee Region
            with a commitment to quality and customer satisfaction.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
