'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Layers, Trees, Building, Snowflake, Sprout } from 'lucide-react'

const services = [
  {
    icon: Layers,
    title: 'Decorative Curbing',
    description:
      'Our signature service. Permanent concrete borders available in three distinct styles with unlimited color and stamp combinations to match your home.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/648969539_1523399962552606_9149390113985786585_n-Y1XefroO2xDRxLWn45sTqhfH1QMFbs.jpg',
    href: '/services/decorative-curbing',
    featured: true,
  },
  {
    icon: Trees,
    title: 'Rock & Mulch',
    description:
      'Complete landscape bed installation with premium rock or mulch materials that complement your curbing and reduce maintenance.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/548334124_1371765371049400_3565142757403817734_n-FmBXxvhFetZUkfphHptQo0VedZ4jfc.jpg',
    href: '/services/rock-mulch',
  },
  {
    icon: Building,
    title: 'Retaining Walls',
    description:
      'Functional and beautiful stone retaining walls that add dimension to your landscape while preventing soil erosion.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/487113487_1223360492556556_6443011365999819935_n-iBGS0x56DUkPj2G4cPDVoPO4q3Rdhj.jpg',
    href: '/services/retaining-walls',
  },
  {
    icon: Snowflake,
    title: 'Christmas Lights',
    description:
      'Professional holiday light installation to make your home shine during the festive season. Full design, installation, and takedown service.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/568089380_1401623404730263_7806870534372210605_n-DLlGJruQYS6F4hHpH1KxrC54IWxwBM.jpg',
    href: '/services/christmas-lights',
  },
  {
    icon: Sprout,
    title: 'Seeding',
    description:
      'Expert lawn seeding services to establish thick, healthy grass that pairs perfectly with your new curbing and landscape design.',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/486163644_1220695759489696_626873201542925766_n-k2qVtZX8JVnAtRSwWM2CLJKrURDhVk.jpg',
    href: '/services/seeding',
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

export function ServicesSection() {
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
            Our Services
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-montserrat)] font-bold text-3xl md:text-4xl text-[#0F172A] mb-6 text-balance"
          >
            Comprehensive Landscaping Solutions for the Coulee Region
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            From decorative curbing to complete landscape transformations, we provide
            everything your La Crosse home needs to stand out in the neighborhood.
          </motion.p>
        </div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className={`group relative bg-white border border-[#E2E8F0] rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-t-4 hover:border-t-[#1E3A8A] ${
                service.featured ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-[#F8FAFC] flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[#1E3A8A]" />
                </div>

                <h3 className="font-[var(--font-montserrat)] font-semibold text-xl text-[#0F172A] mb-3">
                  {service.title}
                </h3>

                <p className="text-[#64748B] text-sm leading-relaxed mb-4">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-[#1E3A8A] font-medium text-sm hover:gap-3 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {service.featured && (
                <div className="absolute top-4 right-4 bg-[#1E3A8A] text-white text-xs font-semibold uppercase tracking-wide px-3 py-1 rounded-full">
                  Popular
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
