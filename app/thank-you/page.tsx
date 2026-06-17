import { CheckCircle, Phone } from 'lucide-react'
import { thankYouMetadata } from '@/lib/seo/pages'

export const metadata = thankYouMetadata

export default function ThankYouPage() {
  return (
    <div className="pt-20">
      <section className="py-32 bg-[#F8FAFC]">
        <div className="max-w-[600px] mx-auto px-4 text-center">
          <div className="w-20 h-20 rounded-full bg-[#166534] flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>

          <h1 className="font-[var(--font-montserrat)] font-bold text-3xl md:text-4xl text-[#0F172A] mb-4">
            Contact – Thank You
          </h1>

          <p className="text-[#64748B] text-lg leading-relaxed">
            Thanks for contacting us! We will get in touch with you shortly.
          </p>

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
