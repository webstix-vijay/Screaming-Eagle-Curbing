'use client'

import { useState, useCallback, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react'
import { Turnstile } from '@/components/turnstile'

const FORM_ACTION_URL = '/api/contact'

const services = [
  'Decorative Curbing',
  'Rock & Mulch',
  'Retaining Walls',
  'Christmas Lights',
  'Seeding',
  'Multiple Services',
]

type TurnstileStatus = 'idle' | 'verified' | 'expired' | 'error'

export function ContactForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [turnstileStatus, setTurnstileStatus] = useState<TurnstileStatus>('idle')
  const formRef = useRef<HTMLFormElement>(null)
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

  const handleTurnstileVerify = useCallback((token: string) => {
    setTurnstileToken(token)
    setTurnstileStatus('verified')
    setSubmitError(null)
  }, [])

  const handleTurnstileExpire = useCallback(() => {
    setTurnstileToken(null)
    setTurnstileStatus('expired')
  }, [])

  const handleTurnstileError = useCallback(() => {
    setTurnstileToken(null)
    setTurnstileStatus('error')
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitError(null)

    // Check Turnstile verification
    if (!turnstileToken) {
      if (turnstileStatus === 'expired') {
        setSubmitError('Security verification has expired. Please complete the verification again.')
      } else if (turnstileStatus === 'error') {
        setSubmitError('Security verification failed. Please refresh the page and try again.')
      } else {
        setSubmitError('Please complete the security verification before submitting.')
      }
      return
    }

    setIsSubmitting(true)

    try {
      const submitData = new FormData(e.currentTarget)
      submitData.append('cf-turnstile-response', turnstileToken)

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
        code?: string
      } | null

      // Handle specific Turnstile errors
      if (errorData?.code === 'TURNSTILE_VERIFICATION_FAILED') {
        setSubmitError('Security verification failed. Please refresh the page and try again.')
        setTurnstileToken(null)
        setTurnstileStatus('error')
      } else if (errorData?.code === 'TURNSTILE_TOKEN_MISSING') {
        setSubmitError('Security verification is required. Please complete the CAPTCHA.')
        setTurnstileToken(null)
        setTurnstileStatus('idle')
      } else {
        const message =
          errorData?.error ??
          'Unable to submit the form. Please try again or call us directly.'
        setSubmitError(message)
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

  const getTurnstileStatusMessage = () => {
    switch (turnstileStatus) {
      case 'verified':
        return (
          <span className="flex items-center gap-2 text-sm text-green-600">
            <CheckCircle2 className="w-4 h-4" />
            Verification complete
          </span>
        )
      case 'expired':
        return (
          <span className="flex items-center gap-2 text-sm text-amber-600">
            <AlertCircle className="w-4 h-4" />
            Verification expired - please verify again
          </span>
        )
      case 'error':
        return (
          <span className="flex items-center gap-2 text-sm text-red-600">
            <AlertCircle className="w-4 h-4" />
            Verification failed - please refresh and try again
          </span>
        )
      default:
        return null
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
        ref={formRef}
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

        {/* Cloudflare Turnstile CAPTCHA */}
        <div className="space-y-2">
          <label className="block text-sm font-medium text-[#0F172A]">
            Security Verification <span className="text-red-500">*</span>
          </label>
          <Turnstile
            onVerify={handleTurnstileVerify}
            onExpire={handleTurnstileExpire}
            onError={handleTurnstileError}
            theme="light"
            className="flex justify-start"
          />
          {getTurnstileStatusMessage()}
        </div>

        {submitError && (
          <p className="text-sm text-red-500" role="alert">
            {submitError}
          </p>
        )}

        <Button
          type="submit"
          disabled={isSubmitting || !turnstileToken}
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
