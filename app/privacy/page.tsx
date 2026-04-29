import { Metadata } from 'next'
import { Breadcrumbs } from '@/components/breadcrumbs'

export const metadata: Metadata = {
  title: 'Privacy Policy | Screaming Eagle Curbing - La Crosse, WI',
  description:
    'Privacy Policy for Screaming Eagle Curbing. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="font-[var(--font-montserrat)] font-bold text-4xl md:text-5xl text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-white/80 text-lg">
            Last updated: January 2024
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
              Screaming Eagle Curbing (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-4 mt-8">
              Information We Collect
            </h2>
            <p className="text-[#64748B] mb-4">
              We may collect information about you in a variety of ways, including:
            </p>
            <ul className="list-disc pl-6 text-[#64748B] space-y-2 mb-6">
              <li><strong>Personal Data:</strong> Name, email address, phone number, and mailing address that you voluntarily provide when contacting us or requesting an estimate.</li>
              <li><strong>Project Information:</strong> Details about your property and project requirements that you share with us during consultations.</li>
              <li><strong>Website Usage Data:</strong> Information about how you interact with our website, including pages visited, time spent on pages, and referring websites.</li>
            </ul>

            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-4 mt-8">
              How We Use Your Information
            </h2>
            <p className="text-[#64748B] mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-[#64748B] space-y-2 mb-6">
              <li>Respond to your inquiries and provide estimates</li>
              <li>Schedule and complete your landscaping projects</li>
              <li>Send you project updates and service reminders</li>
              <li>Improve our website and customer experience</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-4 mt-8">
              Information Sharing
            </h2>
            <p className="text-[#64748B] mb-6">
              We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-[#64748B] space-y-2 mb-6">
              <li>With service providers who assist us in operating our business (such as payment processors)</li>
              <li>When required by law or to protect our legal rights</li>
              <li>With your consent</li>
            </ul>

            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-4 mt-8">
              Data Security
            </h2>
            <p className="text-[#64748B] mb-6">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-4 mt-8">
              Your Rights
            </h2>
            <p className="text-[#64748B] mb-6">
              You have the right to access, correct, or delete your personal information. You may also opt out of receiving marketing communications from us at any time. To exercise these rights, please contact us using the information below.
            </p>

            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-4 mt-8">
              Contact Us
            </h2>
            <p className="text-[#64748B] mb-6">
              If you have questions about this Privacy Policy or our data practices, please contact us at:
            </p>
            <div className="bg-[#F8FAFC] p-6 rounded-lg">
              <p className="text-[#0F172A] font-semibold">Screaming Eagle Curbing</p>
              <p className="text-[#64748B]">Holmen, WI 54636</p>
              <p className="text-[#64748B]">Email: screamingeaglecurbing@outlook.com</p>
              <p className="text-[#64748B]">Phone: (608) 555-1234</p>
            </div>

            <h2 className="font-[var(--font-montserrat)] font-bold text-2xl text-[#0F172A] mb-4 mt-8">
              Changes to This Policy
            </h2>
            <p className="text-[#64748B] mb-6">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this page.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
