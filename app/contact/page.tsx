import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'

export const metadata: Metadata = {
  title: 'Contact Us | Screaming Eagle Curbing - Free Estimates',
  description:
    'Request a free estimate for decorative curbing in La Crosse, WI. Contact Screaming Eagle Curbing by phone, email, or our online form.',
}

export default function ContactPage() {
  return (
    <div className="pt-20">
      <Breadcrumbs />
      <ContactHero />
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
