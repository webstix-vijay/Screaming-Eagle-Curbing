'use client'

import { motion } from 'framer-motion'

export function ContactHero() {
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
            Get In Touch
          </span>
          <h1 className="font-[var(--font-montserrat)] font-bold text-4xl md:text-5xl text-white mb-6 text-balance">
            Get A Quote Now
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Ready to transform your landscape? Fill out the form below or contact us directly.
            We typically respond within 24 hours and will schedule a convenient time to visit
            your property.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
