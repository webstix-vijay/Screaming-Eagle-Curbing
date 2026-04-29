'use client'

import { motion } from 'framer-motion'

export function GalleryHero() {
  return (
    <section className="py-24 bg-[#0F172A]">
      <div className="max-w-[1200px] mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-block text-[#94A3B8] text-sm font-semibold uppercase tracking-wider mb-4">
            Our Work
          </span>
          <h1 className="font-[var(--font-montserrat)] font-bold text-4xl md:text-5xl text-white mb-6 text-balance">
            Project Gallery
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Browse our portfolio of completed decorative curbing and landscaping projects.
            Each image showcases our commitment to quality craftsmanship and attention to detail.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
