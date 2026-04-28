'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight } from 'lucide-react'

const highlights = [
  'Owner-operated quality control on every project',
  '7+ years of decorative curbing experience',
  'Licensed and insured for your peace of mind',
  'Free, no-obligation estimates',
  'Serving La Crosse and the entire Coulee Region',
]

export function AboutPreview() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/images/about-owner.jpg"
                alt="Screaming Eagle Curbing owner on the job"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#1E3A8A] text-white p-6 rounded-lg shadow-lg hidden md:block">
              <p className="text-4xl font-bold">7+</p>
              <p className="text-sm uppercase tracking-wide">Years Experience</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#1E3A8A] text-sm font-semibold uppercase tracking-wider mb-4">
              About Screaming Eagle Curbing
            </span>
            <h2 className="font-[var(--font-montserrat)] font-bold text-3xl md:text-4xl text-[#0F172A] mb-6 text-balance">
              Local, Owner-Operated Excellence in Decorative Curbing
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed mb-6">
              Since 2019, Screaming Eagle Curbing has been the trusted choice for homeowners
              throughout the La Crosse area who demand precision craftsmanship and lasting
              results. As an owner-operated business, we take personal pride in every
              project we complete, ensuring your landscape receives the attention to detail
              it deserves.
            </p>
            <p className="text-[#64748B] text-base leading-relaxed mb-8">
              We specialize in permanent decorative concrete curbing that transforms messy
              lawn edges into clean, elegant borders. No more tedious weed whacking around
              flower beds. No more mulch spilling onto your lawn. Just beautiful, low-maintenance
              landscape borders that enhance your property value and curb appeal.
            </p>

            {/* Highlights */}
            <ul className="space-y-3 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#166534] shrink-0 mt-0.5" />
                  <span className="text-[#0F172A] text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              className="bg-[#1E3A8A] text-white hover:bg-[#94A3B8] rounded-full px-8 py-6 text-base font-semibold uppercase tracking-wide shadow-blue transition-colors duration-200"
            >
              <Link href="/about" className="flex items-center gap-2">
                Learn Our Story
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
