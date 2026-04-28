'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, X, ChevronLeft, ChevronRight } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/curbing-dark-stone.jpeg',
    alt: 'Dark stone pattern decorative curbing',
    title: 'Stone Pattern',
  },
  {
    src: '/images/curbing-modern-home.jpeg',
    alt: 'Decorative curbing at modern home',
    title: 'Modern Home',
  },
  {
    src: '/images/curbing-driveway.webp',
    alt: 'Curved decorative curbing along driveway',
    title: 'Driveway Edge',
  },
  {
    src: '/images/curbing-brown.jpeg',
    alt: 'Brown decorative curbing in yard',
    title: 'Brown Curbing',
  },
  {
    src: '/images/patio-firepit.webp',
    alt: 'Patio with fire pit and curbing',
    title: 'Patio Design',
  },
  {
    src: '/images/retaining-wall-new.webp',
    alt: 'Stone retaining wall',
    title: 'Retaining Wall',
  },
]

export function GalleryPreview() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number>(0)

  const handleImageClick = (image: (typeof galleryImages)[0], index: number) => {
    setSelectedImage(image)
    setSelectedIndex(index)
  }

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation()
    const newIndex = selectedIndex === 0 ? galleryImages.length - 1 : selectedIndex - 1
    setSelectedIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation()
    const newIndex = selectedIndex === galleryImages.length - 1 ? 0 : selectedIndex + 1
    setSelectedIndex(newIndex)
    setSelectedImage(galleryImages[newIndex])
  }

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
              onClick={() => handleImageClick(image, index)}
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
            className="bg-[#1E3A8A] text-white hover:bg-black rounded-full px-6 py-3 text-base font-semibold uppercase tracking-wide shadow-blue transition-colors duration-200"
          >
            <Link href="/gallery" className="flex items-center gap-2">
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-8"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 text-white hover:text-[#94A3B8] transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>
              
              {/* Previous Arrow */}
              <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              {/* Next Arrow */}
              <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-black/50 hover:bg-black/80 rounded-full text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative w-full max-w-4xl h-auto max-h-[85vh] flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
                  <Image
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    width={1200}
                    height={800}
                    className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
                    sizes="(max-width: 768px) 95vw, (max-width: 1200px) 80vw, 1200px"
                    priority
                  />
                </div>
                <div className="mt-4 p-4 bg-black/60 rounded-lg">
                  <h3 className="text-white font-semibold text-lg md:text-xl">
                    {selectedImage.title}
                  </h3>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
