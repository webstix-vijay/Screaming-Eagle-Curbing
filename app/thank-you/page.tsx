import { Metadata } from 'next'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight, Phone, Home } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Thank You | Screaming Eagle Curbing',
  description:
    'Thank you for contacting Screaming Eagle Curbing. We will be in touch shortly.',
}

export default function ThankYouPage() {
  return (
    <div className="pt-20">
        <section className="py-32 bg-[#F8FAFC]">
          <div className="max-w-[600px] mx-auto px-4 text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 rounded-full bg-[#166534] flex items-center justify-center mx-auto mb-8">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>

            {/* Heading */}
            <h1 className="font-[var(--font-montserrat)] font-bold text-3xl md:text-4xl text-[#0F172A] mb-4">
              Thank You for Reaching Out!
            </h1>

            {/* Message */}
            <p className="text-[#64748B] text-lg leading-relaxed mb-8">
              We have received your request and will get back to you within 24 hours.
              Our owner will personally review your project details and reach out to
              schedule a convenient time for your free estimate.
            </p>

            {/* What to Expect */}
            <div className="bg-white rounded-lg p-6 mb-8 text-left">
              <h2 className="font-semibold text-[#0F172A] mb-4">What Happens Next?</h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </span>
                  <span className="text-[#64748B]">
                    We will contact you within 24 hours via your preferred method
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </span>
                  <span className="text-[#64748B]">
                    We will schedule a convenient time to visit your property
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-full bg-[#1E3A8A] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </span>
                  <span className="text-[#64748B]">
                    You will receive a detailed, no-obligation estimate on the spot
                  </span>
                </li>
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                asChild
                className="bg-[#1E3A8A] text-white hover:bg-black rounded-full px-6 py-5 transition-colors duration-200"
              >
                <Link href="/" className="flex items-center gap-2">
                  <Home className="w-4 h-4" />
                  Back to Home
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#1E3A8A] text-[#1E3A8A] hover:bg-black hover:text-white hover:border-black rounded-full px-6 py-5 transition-colors duration-200"
              >
                <Link href="/gallery" className="flex items-center gap-2">
                  View Gallery
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Urgent Contact */}
            <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
              <p className="text-[#64748B] mb-4">Need immediate assistance?</p>
              <a
                href="tel:+17158967448"
                className="inline-flex items-center gap-2 text-[#1E3A8A] font-semibold text-lg hover:underline"
              >
                <Phone className="w-5 h-5" />
                (715) 896-7448
              </a>
            </div>
          </div>
        </section>
    </div>
  )
}
