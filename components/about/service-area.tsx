'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

const serviceAreas = [
  'La Crosse',
  'Holmen',
  'Onalaska',
  'West Salem',
  'La Crescent',
  'Bangor',
  'Stoddard',
  'Trempealeau',
  'Galesville',
  'Barre Mills',
  'Mindoro',
  'Coulee Region',
]

export function ServiceArea() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Service Areas */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[#1E3A8A] text-sm font-semibold uppercase tracking-wider mb-4">
              Service Area
            </span>
            <h2 className="font-[var(--font-montserrat)] font-bold text-3xl md:text-4xl text-[#0F172A] mb-6 text-balance">
              Proudly Serving the Coulee Region
            </h2>
            <p className="text-[#64748B] text-base leading-relaxed mb-8">
              Based in Holmen, Wisconsin, we provide decorative curbing and landscaping
              services throughout La Crosse County and the surrounding areas. If you are
              unsure whether we serve your location, give us a call. We are always happy
              to discuss your project.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {serviceAreas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <MapPin className="w-4 h-4 text-[#1E3A8A]" />
                  <span className="text-[#0F172A] text-sm">{area}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F8FAFC] rounded-lg p-8"
          >
            <h3 className="font-[var(--font-montserrat)] font-semibold text-2xl text-[#0F172A] mb-6">
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-[#1E3A8A]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">Location</p>
                  <p className="text-[#64748B]">Holmen, WI 54636</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-[#1E3A8A]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">Phone</p>
                  <a
                    href="tel:+16085551234"
                    className="text-[#1E3A8A] hover:underline"
                  >
                    (608) 555-1234
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-[#1E3A8A]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">Email</p>
                  <a
                    href="mailto:screamingeaglecurbing@outlook.com"
                    className="text-[#1E3A8A] hover:underline break-all"
                  >
                    screamingeaglecurbing@outlook.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-[#1E3A8A]" />
                </div>
                <div>
                  <p className="font-semibold text-[#0F172A]">Hours</p>
                  <p className="text-[#64748B]">Monday - Saturday: 7:00 AM - 4:00 PM</p>
                  <p className="text-[#64748B]">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
