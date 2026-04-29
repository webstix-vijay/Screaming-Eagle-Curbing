'use client'

import { motion } from 'framer-motion'
import { Heart, Eye, Handshake, Award } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Passion for Craftsmanship',
    description:
      'Every curve, every edge, every stamp is executed with precision and care. We treat your property as if it were our own, because your satisfaction is what drives us.',
  },
  {
    icon: Eye,
    title: 'Attention to Detail',
    description:
      'From the initial consultation to the final walkthrough, no detail is overlooked. We believe perfection lies in the small things that others might miss.',
  },
  {
    icon: Handshake,
    title: 'Honest Communication',
    description:
      'Transparent pricing, realistic timelines, and straightforward advice. We never recommend services you do not need or make promises we cannot keep.',
  },
  {
    icon: Award,
    title: 'Quality Without Compromise',
    description:
      'We use only premium fiber-reinforced concrete and proven installation techniques. Our curbing is built to withstand Wisconsin weather and maintain its beauty for years.',
  },
]

export function OurValues() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#1E3A8A] text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Our Values
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-montserrat)] font-bold text-3xl md:text-4xl text-[#0F172A] mb-6 text-balance"
          >
            What We Stand For
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            These core values guide every decision we make and every project we undertake.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex gap-6 p-8 bg-white rounded-lg border border-[#E2E8F0]"
            >
              <div className="w-16 h-16 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center shrink-0">
                <value.icon className="w-8 h-8 text-[#1E3A8A]" />
              </div>
              <div>
                <h3 className="font-[var(--font-montserrat)] font-semibold text-xl text-[#0F172A] mb-2">
                  {value.title}
                </h3>
                <p className="text-[#64748B] text-base leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
