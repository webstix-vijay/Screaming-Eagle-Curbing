'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { homeFaqs } from '@/lib/seo/faqs'

export function FAQSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#1E3A8A] text-sm font-semibold uppercase tracking-wider mb-4"
          >
            FAQs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-montserrat)] font-bold text-3xl md:text-4xl text-[#0F172A] mb-6 text-balance"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Get answers to common questions about our decorative curbing services
            and installation process.
          </motion.p>
        </div>

        {/* FAQ List - Always Open */}
        <div className="max-w-3xl mx-auto space-y-6">
          {homeFaqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-lg p-6"
            >
              <h3 className="font-[var(--font-montserrat)] font-semibold text-lg text-[#0F172A] mb-3">
                {faq.question}
              </h3>
              <p className="text-[#64748B] text-base leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-[#64748B] text-sm mt-10 max-w-xl mx-auto">
          Ready for a free estimate?{' '}
          <Link
            href="/contact"
            className="text-[#1E3A8A] font-medium hover:text-[#0F172A] transition-colors"
          >
            Contact us today
          </Link>{' '}
          or explore our{' '}
          <Link
            href="/services"
            className="text-[#1E3A8A] font-medium hover:text-[#0F172A] transition-colors"
          >
            landscaping services
          </Link>
          .
        </p>
      </div>
    </section>
  )
}
