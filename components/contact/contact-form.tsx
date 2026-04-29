'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

const services = [
  'Decorative Curbing',
  'Rock & Mulch',
  'Retaining Walls',
  'Christmas Lights',
  'Seeding',
  'Multiple Services',
]

export function ContactForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    service: '',
    message: '',
    preferredContact: 'phone',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // In production, you would send this to your email service
    console.log('Form submitted:', formData)

    // Redirect to thank you page
    router.push('/thank-you')
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-6">
        Tell Us About Your Project
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-[#0F172A] mb-2"
          >
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow shadow-inner text-[#0F172A] placeholder-[#94A3B8]"
            placeholder="John Smith"
          />
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#0F172A] mb-2"
            >
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow shadow-inner text-[#0F172A] placeholder-[#94A3B8]"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-[#0F172A] mb-2"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow shadow-inner text-[#0F172A] placeholder-[#94A3B8]"
              placeholder="(715) 896-7448"
            />
          </div>
        </div>

        {/* Address & City */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-[#0F172A] mb-2"
            >
              Street Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow shadow-inner text-[#0F172A] placeholder-[#94A3B8]"
              placeholder="123 Main Street"
            />
          </div>
          <div>
            <label
              htmlFor="city"
              className="block text-sm font-medium text-[#0F172A] mb-2"
            >
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow shadow-inner text-[#0F172A] placeholder-[#94A3B8]"
              placeholder="La Crosse"
            />
          </div>
        </div>

        {/* Service */}
        <div>
          <label
            htmlFor="service"
            className="block text-sm font-medium text-[#0F172A] mb-2"
          >
            Service Interested In <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            required
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow shadow-inner text-[#0F172A] bg-white"
          >
            <option value="">Select a service...</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>

        {/* Preferred Contact */}
        <div>
          <label className="block text-sm font-medium text-[#0F172A] mb-2">
            Preferred Contact Method
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value="phone"
                checked={formData.preferredContact === 'phone'}
                onChange={handleChange}
                className="w-4 h-4 text-[#1E3A8A] focus:ring-[#1E3A8A]"
              />
              <span className="text-[#0F172A]">Phone</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value="email"
                checked={formData.preferredContact === 'email'}
                onChange={handleChange}
                className="w-4 h-4 text-[#1E3A8A] focus:ring-[#1E3A8A]"
              />
              <span className="text-[#0F172A]">Email</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferredContact"
                value="text"
                checked={formData.preferredContact === 'text'}
                onChange={handleChange}
                className="w-4 h-4 text-[#1E3A8A] focus:ring-[#1E3A8A]"
              />
              <span className="text-[#0F172A]">Text</span>
            </label>
          </div>
        </div>

        {/* Message */}
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-[#0F172A] mb-2"
          >
            Project Details
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1E3A8A] focus:border-transparent transition-shadow shadow-inner text-[#0F172A] placeholder-[#94A3B8] resize-none"
            placeholder="Tell us about your project, any specific requirements, or questions you have..."
          />
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-[#1E3A8A] text-white hover:bg-black rounded-full py-6 text-base font-semibold uppercase tracking-wide shadow-blue disabled:opacity-70 transition-colors duration-200"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              Sending...
            </>
          ) : (
            'Get A Quote Now'
          )}
        </Button>

        <p className="text-[#64748B] text-sm text-center">
          By submitting this form, you agree to be contacted regarding your inquiry.
          We respect your privacy and will never share your information.
        </p>
      </form>
    </motion.div>
  )
}
