'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, ArrowRight } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-24 bg-[#1E3A8A] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
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
              className="bg-white text-[#1E3A8A] hover:bg-white/90 rounded-full px-8 py-6 text-base font-semibold uppercase tracking-wide shadow-lg transition-all duration-300 hover:px-10"
            >
              <Link href="/contact" className="flex items-center gap-2">
                Request Free Estimate
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-medium"
            >
              <a href="tel:+16085551234" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                (608) 555-1234
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
