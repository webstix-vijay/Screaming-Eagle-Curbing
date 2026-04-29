'use client'

import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react'

export function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="bg-[#F8FAFC] rounded-lg p-8 sticky top-24"
    >
      <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-6">
        Contact Information
      </h2>

      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6 text-[#1E3A8A]" />
          </div>
          <div>
            <p className="font-semibold text-[#0F172A]">Phone</p>
            <a
              href="tel:+16085551234"
              className="text-[#1E3A8A] hover:underline text-lg font-medium"
            >
              (608) 555-1234
            </a>
            <p className="text-[#64748B] text-sm mt-1">Tap to call directly</p>
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
            <p className="text-[#64748B] text-sm mt-1">We respond within 24 hours</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center shrink-0">
            <MapPin className="w-6 h-6 text-[#1E3A8A]" />
          </div>
          <div>
            <p className="font-semibold text-[#0F172A]">Location</p>
            <p className="text-[#64748B]">Holmen, WI 54636</p>
            <p className="text-[#64748B] text-sm mt-1">
              Serving La Crosse & the Coulee Region
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-[#1E3A8A]/10 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6 text-[#1E3A8A]" />
          </div>
          <div>
            <p className="font-semibold text-[#0F172A]">Business Hours</p>
            <p className="text-[#64748B]">Monday - Saturday</p>
            <p className="text-[#64748B]">7:00 AM - 4:00 PM</p>
          </div>
        </div>
      </div>

      {/* Social */}
      <div className="mt-8 pt-8 border-t border-[#E2E8F0]">
        <p className="font-semibold text-[#0F172A] mb-4">Follow Us</p>
        <a
          href="https://facebook.com/lacrossecustomcurbing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 text-[#64748B] hover:text-[#1E3A8A] transition-colors"
        >
          <div className="w-10 h-10 rounded-full bg-[#1E3A8A] flex items-center justify-center">
            <Facebook className="w-5 h-5 text-white" />
          </div>
          <span className="font-medium">Facebook</span>
        </a>
      </div>

      {/* Quick Quote Box */}
      <div className="mt-8 p-6 bg-[#1E3A8A] rounded-lg text-center">
        <p className="text-white font-semibold mb-2">Prefer to Talk?</p>
        <p className="text-white/80 text-sm mb-4">
          Give us a call for a quick consultation
        </p>
        <a
          href="tel:+16085551234"
          className="inline-block w-full bg-white text-[#1E3A8A] font-semibold py-3 rounded-full hover:bg-white/90 transition-colors"
        >
          Call Now
        </a>
      </div>
    </motion.div>
  )
}
