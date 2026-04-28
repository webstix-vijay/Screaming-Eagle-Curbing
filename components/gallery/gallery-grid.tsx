'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/curbing-slant.jpg',
    alt: 'Slant style decorative curbing around flower bed',
    title: 'Slant Style Curbing',
    category: 'curbing',
    description: 'Clean slant edge around mulched flower bed',
  },
  {
    src: '/images/curbing-mower.jpg',
    alt: 'Mower style curbing with rounded edge',
    title: 'Mower Style Curbing',
    category: 'curbing',
    description: 'Mower-friendly rounded edge for easy lawn care',
  },
  {
    src: '/images/curbing-stamped.jpg',
    alt: 'Stamped decorative concrete curbing',
    title: 'Stamped Pattern Curbing',
    category: 'curbing',
    description: 'Decorative brick stamp pattern in natural color',
  },
  {
    src: '/images/gallery-1.jpg',
    alt: 'Curved curbing around colorful flower beds',
    title: 'Curved Garden Border',
    category: 'curbing',
    description: 'Flowing curves define colorful flower beds',
  },
  {
    src: '/images/gallery-2.jpg',
    alt: 'Tree ring with colored concrete curbing',
    title: 'Decorative Tree Ring',
    category: 'curbing',
    description: 'Colored curbing creates defined tree border',
  },
  {
    src: '/images/gallery-3.jpg',
    alt: 'Complete front yard curbing installation',
    title: 'Full Landscape Design',
    category: 'curbing',
    description: 'Complete front yard transformation with curbing',
  },
  {
    src: '/images/rock-mulch.jpg',
    alt: 'Rock and mulch installation with curbing',
    title: 'Rock & Mulch Beds',
    category: 'landscaping',
    description: 'Premium rock installation with curbing border',
  },
  {
    src: '/images/retaining-wall.jpg',
    alt: 'Stone retaining wall in residential yard',
    title: 'Retaining Wall',
    category: 'landscaping',
    description: 'Multi-tiered stone retaining wall',
  },
  {
    src: '/images/gallery-4.jpg',
    alt: 'Terracotta colored curbing',
    title: 'Terracotta Color Option',
    category: 'curbing',
    description: 'Warm terracotta color complements brick home',
  },
  {
    src: '/images/gallery-5.jpg',
    alt: 'Cobblestone stamped curbing around tree',
    title: 'Cobblestone Pattern',
    category: 'curbing',
    description: 'Stamped cobblestone pattern tree border',
  },
  {
    src: '/images/gallery-6.jpg',
    alt: 'Elegant front yard with multiple curbing beds',
    title: 'Complete Yard Design',
    category: 'curbing',
    description: 'Multiple defined beds with coordinated curbing',
  },
  {
    src: '/images/seeding.jpg',
    alt: 'Lush green lawn with curbing',
    title: 'Professional Seeding',
    category: 'landscaping',
    description: 'Healthy lawn complementing new curbing',
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'curbing', label: 'Decorative Curbing' },
  { id: 'landscaping', label: 'Landscaping' },
]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === category.id
                  ? 'bg-[#1E3A8A] text-white'
                  : 'bg-[#F8FAFC] text-[#64748B] hover:bg-[#E2E8F0]'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold">{image.title}</h3>
                  <p className="text-white/80 text-sm">{image.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 p-2 text-white hover:text-[#94A3B8] transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-8 h-8" />
              </button>
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl w-full max-h-[80vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
                  <h3 className="text-white font-semibold text-xl">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/80">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
