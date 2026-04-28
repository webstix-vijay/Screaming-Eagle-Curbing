'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

const galleryImages = [
  {
    src: '/images/curbing-dark-stone.jpeg',
    alt: 'Dark stone pattern decorative curbing around flower bed',
    title: 'Stone Pattern Curbing',
    category: 'curbing',
    description: 'Elegant stone pattern curbing around mulched bed',
  },
  {
    src: '/images/curbing-modern-home.jpeg',
    alt: 'Decorative curbing at modern home with natural stone',
    title: 'Modern Home Design',
    category: 'curbing',
    description: 'Tan curbing with natural stone retaining wall',
  },
  {
    src: '/images/curbing-driveway.webp',
    alt: 'Curved decorative curbing along driveway',
    title: 'Driveway Edging',
    category: 'curbing',
    description: 'Smooth curved curbing defining driveway edge',
  },
  {
    src: '/images/curbing-brown.jpeg',
    alt: 'Brown decorative curbing in residential yard',
    title: 'Brown Curbing',
    category: 'curbing',
    description: 'Warm brown curbing around garden areas',
  },
  {
    src: '/images/curbing-wet-finish.jpeg',
    alt: 'Fresh sealed decorative curbing',
    title: 'Fresh Sealed Finish',
    category: 'curbing',
    description: 'Newly sealed curbing with premium finish',
  },
  {
    src: '/images/rock-mulch-new.jpeg',
    alt: 'Rock and mulch installation with curbing border',
    title: 'Rock & Curbing',
    category: 'landscaping',
    description: 'Premium rock with decorative curbing border',
  },
  {
    src: '/images/rock-pile.webp',
    alt: 'Variety of decorative landscaping rocks',
    title: 'Decorative Rock Options',
    category: 'landscaping',
    description: 'Premium rock materials for your landscape',
  },
  {
    src: '/images/retaining-wall-new.webp',
    alt: 'Large stone retaining wall',
    title: 'Retaining Wall',
    category: 'landscaping',
    description: 'Professional stone retaining wall construction',
  },
  {
    src: '/images/patio-firepit.webp',
    alt: 'Patio with fire pit and decorative curbing',
    title: 'Patio & Fire Pit Design',
    category: 'landscaping',
    description: 'Complete outdoor living space with curbing',
  },
  {
    src: '/images/seeding-new.webp',
    alt: 'Professional seeding and gravel work',
    title: 'Professional Seeding',
    category: 'landscaping',
    description: 'Expert lawn seeding and ground preparation',
  },
  {
    src: '/images/christmas-lights-new.webp',
    alt: 'Professional Christmas light installation',
    title: 'Christmas Lights',
    category: 'seasonal',
    description: 'Beautiful holiday light installation',
  },
]

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'curbing', label: 'Decorative Curbing' },
  { id: 'landscaping', label: 'Landscaping' },
  { id: 'seasonal', label: 'Seasonal Services' },
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
                  <p className="text-white/80 text-sm md:text-base">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
