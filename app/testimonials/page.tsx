import { Metadata } from 'next'
import { Star, Quote } from 'lucide-react'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Testimonials | Screaming Eagle Curbing - La Crosse, WI',
  description:
    'Read what our customers say about Screaming Eagle Curbing. Real reviews from homeowners in La Crosse, Holmen, Onalaska, and the Coulee Region.',
}

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
  {
    name: 'Tom & Beth S.',
    location: 'La Crescent, MN',
    text: 'We were hesitant at first about the cost, but after seeing the finished product, we know it was money well spent. The curbing has completely transformed our front yard and increased our curb appeal tremendously.',
    rating: 5,
  },
  {
    name: 'Jennifer H.',
    location: 'Holmen, WI',
    text: 'The Christmas light installation service exceeded our expectations! Professional setup, beautiful design, and hassle-free takedown. Our house was the talk of the neighborhood during the holidays.',
    rating: 5,
  },
  {
    name: 'David & Mary K.',
    location: 'Onalaska, WI',
    text: 'We had both curbing and a retaining wall installed. The crew was efficient, cleaned up after themselves, and the quality of work is outstanding. Would recommend to anyone looking for landscaping improvements.',
    rating: 5,
  },
  {
    name: 'Robert P.',
    location: 'La Crosse, WI',
    text: 'The rock and mulch installation looks amazing. They helped us choose the right materials and colors that complement our home perfectly. Very satisfied with the entire project.',
    rating: 5,
  },
  {
    name: 'Amanda & Chris L.',
    location: 'West Salem, WI',
    text: 'From the initial consultation to the final walkthrough, everything was professional and well-organized. The decorative curbing has made maintaining our garden beds so much easier.',
    rating: 5,
  },
  {
    name: 'Steve M.',
    location: 'Holmen, WI',
    text: 'I have used several landscaping companies over the years, and Screaming Eagle is by far the best. Their attention to detail and commitment to quality is unmatched. Five stars!',
    rating: 5,
  },
  {
    name: 'Nancy & Jim W.',
    location: 'La Crosse, WI',
    text: 'The seeding service brought our lawn back to life! After construction damage, we thought our yard would never recover. The results speak for themselves - lush, green grass everywhere.',
    rating: 5,
  },
  {
    name: 'Michelle T.',
    location: 'Onalaska, WI',
    text: 'Quick, efficient, and high quality work. The owner is very knowledgeable and took the time to explain the different curbing options. Our flower beds have never looked better!',
    rating: 5,
  },
]

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A8A]/20 to-transparent" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-4 text-center">
          <span className="inline-block text-[#94A3B8] text-sm font-semibold uppercase tracking-wider mb-4">
            Customer Reviews
          </span>
          <h1 className="font-[var(--font-montserrat)] font-bold text-4xl md:text-5xl text-white mb-6 text-balance">
            What Our Customers Say
          </h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed">
            Do not just take our word for it. Hear from homeowners across the Coulee Region
            who have transformed their landscapes with Screaming Eagle Curbing.
          </p>
        </div>
      </section>

      <Breadcrumbs />

      {/* Testimonials Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F8FAFC] p-8 rounded-lg relative hover:shadow-lg transition-shadow duration-300"
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#1E3A8A]">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <h2 className="font-[var(--font-montserrat)] font-bold text-2xl md:text-3xl text-white mb-4">
            Ready to Join Our Happy Customers?
          </h2>
          <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
            Get a free estimate today and see why homeowners across the Coulee Region trust Screaming Eagle Curbing.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#1E3A8A] hover:bg-black hover:text-white rounded-full px-8 py-4 text-base font-semibold uppercase tracking-wide transition-colors duration-200"
          >
            Request Free Estimate
          </a>
        </div>
      </section>
    </div>
  )
}
