import { Breadcrumbs } from '@/components/breadcrumbs'
import { aiPolicyMetadata } from '@/lib/seo/pages'

export const metadata = aiPolicyMetadata

export default function AiPolicyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="font-[var(--font-montserrat)] font-bold text-4xl md:text-5xl text-white mb-4">
            AI Policy
          </h1>
          <p className="text-white/80 text-lg">
            How we use artificial intelligence responsibly
          </p>
        </div>
      </section>

      <Breadcrumbs />

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-4">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-4">
              Introduction
            </h2>
            <p className="text-[#64748B] mb-6">
              Screaming Eagle Curbing is committed to using technology responsibly to improve our website, customer experience, and business operations. This policy outlines our approach to the use of artificial intelligence (AI) and automated technologies.
            </p>

            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-4 mt-8">
              How We Use AI
            </h2>
            <p className="text-[#64748B] mb-4">
              We may use AI-powered tools to help with:
            </p>
            <ul className="list-disc pl-6 text-[#64748B] space-y-2 mb-6">
              <li>Website content creation and improvement</li>
              <li>Customer communication and support</li>
              <li>Website performance and analytics</li>
              <li>Marketing and business operations</li>
              <li>Administrative and productivity tasks</li>
            </ul>
            <p className="text-[#64748B] mb-6">
              Any content created or assisted by AI is reviewed by our team before publication whenever appropriate.
            </p>

            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-4 mt-8">
              Our Commitment
            </h2>
            <p className="text-[#64748B] mb-6">
              We strive to ensure that information published on our website is accurate, helpful, and relevant. While AI tools may assist in content creation or business processes, human oversight remains an important part of our workflow.
            </p>

            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-4 mt-8">
              Privacy
            </h2>
            <p className="text-[#64748B] mb-6">
              We respect the privacy of our customers and website visitors. Any use of AI technologies will be conducted in accordance with our Privacy Policy and applicable laws.
            </p>

            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-4 mt-8">
              Policy Updates
            </h2>
            <p className="text-[#64748B] mb-6">
              This policy may be updated from time to time to reflect changes in technology, business practices, or legal requirements. Updates will be posted on this page.
            </p>

            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-4 mt-8">
              Contact Information
            </h2>
            <p className="text-[#64748B] mb-6">
              If you have any questions about this AI Policy, please contact us:
            </p>
            <div className="bg-[#F8FAFC] p-6 rounded-lg">
              <p className="text-[#0F172A] font-semibold">Screaming Eagle Curbing</p>
              <p className="text-[#64748B]">Holmen, WI 54636</p>
              <p className="text-[#64748B]">
                Phone:{' '}
                <a
                  href="tel:+17158967448"
                  className="text-[#1E3A8A] hover:text-[#0F172A] hover:underline transition-colors"
                >
                  (715) 896-7448
                </a>
              </p>
              <p className="text-[#64748B]">
                Email:{' '}
                <a
                  href="mailto:screamingeaglecurbing@outlook.com"
                  className="text-[#1E3A8A] hover:text-[#0F172A] hover:underline transition-colors"
                >
                  screamingeaglecurbing@outlook.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
