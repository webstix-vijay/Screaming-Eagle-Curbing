'use client'

import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah M.',
    location: 'La Crosse, WI',
    text: 'Absolutely love our new curbing! The slant style looks so clean around our flower beds. No more mulch spilling onto the lawn. The owner was professional, on time, and the price was fair. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Mike & Lisa T.',
    location: 'Holmen, WI',
    text: 'We had Screaming Eagle do curbing around our entire front yard. The stamped pattern with the terra cotta color matches our brick perfectly. Neighbors keep stopping to ask who did the work. Worth every penny.',
    rating: 5,
  },
  {
    name: 'John D.',
    location: 'Onalaska, WI',
    text: 'After years of fighting with landscape fabric and plastic edging, I finally called for decorative curbing. Should have done it years ago! The mower edge style is perfect, I can just run right over it when mowing.',
    rating: 5,
  },
  {
    name: 'Karen R.',
    location: 'West Salem, WI',
    text: 'Great experience from start to finish. The free estimate was thorough, and the owner explained all my options without any pressure. The curbing was installed in one day and looks fantastic.',
    rating: 5,
  },
]

export function TestimonialsSection() {
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
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-montserrat)] font-bold text-3xl md:text-4xl text-[#0F172A] mb-6 text-balance"
          >
            What Our Customers Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Do not just take our word for it. Hear from homeowners across the Coulee Region
            who have transformed their landscapes with Screaming Eagle Curbing.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#F8FAFC] p-8 rounded-lg relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#E2E8F0]" />

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#0F172A] text-base leading-relaxed mb-6">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="font-semibold text-[#0F172A]">{testimonial.name}</p>
                <p className="text-[#64748B] text-sm">{testimonial.location}</p>
              </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
  )
}
