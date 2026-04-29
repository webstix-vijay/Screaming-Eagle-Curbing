'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function OurStory() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/aboutus-knp8srwJEi54ltxI9oTDwpTIgTs66w.webp"
                alt="Screaming Eagle Curbing family"
                width={600}
                height={500}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-[#1E3A8A] text-sm font-semibold uppercase tracking-wider mb-4">
              Our Story
            </span>
            <h2 className="font-[var(--font-montserrat)] font-bold text-3xl md:text-4xl text-[#0F172A] mb-6 text-balance">
              Built on Hard Work and a Passion for Perfection
            </h2>
            
            <div className="space-y-4 text-[#64748B] text-base leading-relaxed">
              <p>
                Screaming Eagle Curbing was born from a simple belief: every homeowner
                deserves access to professional-grade landscaping without the professional
                price tag or impersonal service. When I purchased the business in 2019,
                I knew I wanted to build something different, a company where the owner
                is on the job, where quality is non-negotiable, and where every customer
                feels like a neighbor.
              </p>
              
              <p>
                With over seven years of experience in decorative concrete curbing and
                landscaping, I have perfected the art of creating beautiful, permanent
                borders that transform ordinary yards into stunning showcases. From the
                moment I arrive for your free estimate to the final cleanup after installation,
                you are working directly with the owner of the business. There are no
                subcontractors, no communication gaps, just me and my commitment to
                exceeding your expectations.
              </p>
              
              <p>
                What sets Screaming Eagle apart is our dedication to customization. While
                other companies might offer a handful of options, we provide three distinct
                curbing styles with virtually unlimited color and stamp combinations. Whether
                you want a subtle earth tone that blends with natural stone or a bold pattern
                that makes a statement, we work with you to create curbing that perfectly
                complements your home and personal style.
              </p>
              
              <p>
                As a Holmen-based business, I take pride in serving my neighbors throughout
                the Coulee Region. La Crosse, Onalaska, West Salem, La Crescent, and
                the surrounding communities are not just service areas, they are where my
                family lives, where my kids go to school, and where I have built lasting
                relationships with hundreds of satisfied customers.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
