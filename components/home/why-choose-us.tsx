'use client'

import { motion } from 'framer-motion'
import { Palette, Clock, Shield, Wrench, Star, Users } from 'lucide-react'

const features = [
  {
    icon: Palette,
    title: '3 Styles, Unlimited Colors',
    description:
      'Choose from Slant, Mower, or Stamped curbing styles. Add any color or decorative stamp pattern to perfectly match your home.',
  },
  {
    icon: Clock,
    title: 'Save Hours Every Week',
    description:
      'Eliminate the need for tedious weed whacking and edge trimming. Our curbing creates a permanent, maintenance-free border.',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Our fiber-reinforced concrete curbing is engineered to withstand Wisconsin winters and maintain its beauty for years.',
  },
  {
    icon: Wrench,
    title: 'One-Stop Shop',
    description:
      'From curbing to rock, mulch, retaining walls, and more, we handle your entire landscape project start to finish.',
  },
  {
    icon: Star,
    title: 'Quality Guaranteed',
    description:
      'As an owner-operated business, I personally oversee every project to ensure it meets our high standards.',
  },
  {
    icon: Users,
    title: 'Trusted by Neighbors',
    description:
      'Join hundreds of satisfied La Crosse homeowners who have transformed their properties with Screaming Eagle Curbing.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export function WhyChooseUs() {
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
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-montserrat)] font-bold text-3xl md:text-4xl text-[#0F172A] mb-6 text-balance"
          >
            The Screaming Eagle Difference
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            We combine local expertise with unmatched customization options to deliver
            curbing that elevates your property and simplifies your life.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-8 bg-white border border-[#E2E8F0] rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-t-4 hover:border-t-[#1E3A8A]"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-[#F8FAFC] flex items-center justify-center mb-6 group-hover:bg-[#1E3A8A] transition-colors duration-300">
                <feature.icon className="w-7 h-7 text-[#1E3A8A] group-hover:text-white transition-colors duration-300" />
              </div>

              <h3 className="font-[var(--font-montserrat)] font-semibold text-lg text-[#0F172A] mb-3">
                {feature.title}
              </h3>

              <p className="text-[#64748B] text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
