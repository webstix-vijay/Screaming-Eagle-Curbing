'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/curbing-slant.jpg',
    alt: 'Slant style decorative curbing around flower bed',
    title: 'Slant Style',
  },
  {
    src: '/images/curbing-mower.jpg',
    alt: 'Mower style curbing with rounded edge',
    title: 'Mower Style',
  },
  {
    src: '/images/curbing-stamped.jpg',
    alt: 'Stamped decorative concrete curbing',
    title: 'Stamped Pattern',
  },
  {
    src: '/images/gallery-1.jpg',
    alt: 'Curved curbing around colorful flower beds',
    title: 'Curved Design',
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Tree ring with colored concrete curbing',
    title: 'Tree Rings',
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Complete front yard curbing installation',
    title: 'Full Landscape',
  },
]

export function GalleryPreview() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#1E3A8A] text-sm font-semibold uppercase tracking-wider mb-4"
          >
            Our Work
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-montserrat)] font-bold text-3xl md:text-4xl text-[#0F172A] mb-6 text-balance"
          >
            See the Transformation
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Browse our portfolio of completed projects featuring the three curbing styles
            and various color combinations we offer to La Crosse area homeowners.
          </motion.p>
        </div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative aspect-square rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white font-medium text-sm">{image.title}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            className="bg-[#1E3A8A] text-white hover:bg-[#94A3B8] rounded-full px-8 py-6 text-base font-semibold uppercase tracking-wide shadow-blue transition-colors duration-200"
          >
            <Link href="/gallery" className="flex items-center gap-2">
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
