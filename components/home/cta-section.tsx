'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cta-background.jpg"
          alt="Beautiful landscaping with decorative curbing"
          fill
          className="object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#1E3A8A]/80" />
      </div>

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-[var(--font-montserrat)] font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 text-balance"
          >
            Ready to Transform Your Landscape?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Get a free, no-obligation estimate for your decorative curbing project.
            Our owner will personally visit your property to discuss your vision
            and provide transparent pricing.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              asChild
              size="lg"
              className="bg-white text-[#1E3A8A] hover:bg-black hover:text-white rounded-full px-6 py-3 text-base font-semibold uppercase tracking-wide shadow-lg transition-colors duration-200"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Get A Quote Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-black text-white border-2 border-black hover:bg-white hover:text-black rounded-full px-6 py-3 text-base font-medium transition-colors duration-200"
            >
              <a href="tel:+16085551234" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-white/60 text-sm mt-8"
          >
            Serving La Crosse, Holmen, Onalaska, West Salem & the entire Coulee Region
          </motion.p>
        </div>
      </div>
    </section>
  )
}
