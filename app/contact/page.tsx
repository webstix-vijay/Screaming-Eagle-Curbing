import { Breadcrumbs } from '@/components/breadcrumbs'
import { ContactHero } from '@/components/contact/contact-hero'
import { ContactForm } from '@/components/contact/contact-form'
import { ContactInfo } from '@/components/contact/contact-info'
import { contactMetadata } from '@/lib/seo/pages'

export const metadata = contactMetadata

/** Avoid stale cached HTML so Turnstile always loads with current hostname/keys */
export const dynamic = 'force-dynamic'

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactHero />
      <Breadcrumbs />
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
