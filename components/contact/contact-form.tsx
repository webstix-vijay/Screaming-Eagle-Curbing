'use client'

import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'
import {
  TurnstileWidget,
  type TurnstileWidgetHandle,
} from '@/components/contact/turnstile-widget'

const FORM_ACTION_URL = '/api/contact'

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
  const turnstileRef = useRef<TurnstileWidgetHandle>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileError, setTurnstileError] = useState<string | null>(null)
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

  const handleTurnstileVerify = (token: string) => {
    setTurnstileToken(token)
    setTurnstileError(null)
  }

  const handleTurnstileExpire = () => {
    setTurnstileToken(null)
    setTurnstileError(
      'Your security check expired. Please verify again before submitting.'
    )
  }

  const handleTurnstileError = () => {
    setTurnstileToken(null)
    // Don't set error here - TurnstileWidget already shows error UI
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError(null)
    setTurnstileError(null)

    if (!turnstileToken) {
      setTurnstileError(
        'Please complete the security check before submitting the form.'
      )
      return
    }

    setIsSubmitting(true)

    try {
      const submitData = new FormData(e.currentTarget)
      submitData.set('cf-turnstile-response', turnstileToken)

      const response = await fetch(FORM_ACTION_URL, {
        method: 'POST',
        body: submitData,
      })

      if (response.ok) {
        const data = (await response.json().catch(() => null)) as {
          redirect_url?: string
        } | null
        router.push(data?.redirect_url ?? '/thank-you')
        return
      }

      const errorData = (await response.json().catch(() => null)) as {
        error?: string
      } | null

      const message =
        errorData?.error ??
        'Unable to submit the form. Please try again or call us directly.'

      setSubmitError(message)

      if (response.status === 403 || response.status === 400) {
        setTurnstileToken(null)
        turnstileRef.current?.reset()
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError(
        'Unable to submit the form. Please try again or call us directly.'
      )
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div id="contact-form" className="scroll-mt-24">
      <motion.h2
        className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Tell Us About Your Project
      </motion.h2>
      <form
        action={FORM_ACTION_URL}
        method="POST"
        onSubmit={handleSubmit}
        className="space-y-6"
      >
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

        <div className="space-y-2">
          <TurnstileWidget
            ref={turnstileRef}
            onVerify={handleTurnstileVerify}
            onExpire={handleTurnstileExpire}
            onError={handleTurnstileError}
          />
          {turnstileError && (
            <p className="text-sm text-red-500" role="alert">
              {turnstileError}
            </p>
          )}
        </div>

        {submitError && (
          <p className="text-sm text-red-500" role="alert">
            {submitError}
          </p>
        )}

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
    </div>
  )
}
