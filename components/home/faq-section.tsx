'use client'

import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'What curbing styles do you offer?',
    answer:
      'We offer three distinct curbing styles: Slant (angled edge), Mower (rounded edge that mowers can roll over), and Stamped (decorative patterns like brick, cobblestone, or custom designs). Each style is available in unlimited color options to match your home and landscape.',
  },
  {
    question: 'How long does the installation take?',
    answer:
      'Most residential curbing projects are completed in a single day. The timeline depends on the linear footage and complexity of the design. During your free estimate, we will provide an accurate timeframe for your specific project.',
  },
  {
    question: 'How durable is decorative concrete curbing?',
    answer:
      'Our curbing is made from fiber-reinforced concrete specifically designed to withstand Wisconsin weather conditions, including freeze-thaw cycles. With proper care, your curbing will maintain its appearance for many years. We also offer sealing services to enhance durability and color retention.',
  },
  {
    question: 'Can curbing be installed over existing landscape edging?',
    answer:
      'We typically remove existing edging materials (plastic, metal, stone) before installing concrete curbing to ensure proper adhesion and a clean finish. This is included in our standard installation process.',
  },
  {
    question: 'What areas do you serve?',
    answer:
      'We proudly serve homeowners throughout the Coulee Region, including La Crosse, Holmen, Onalaska, West Salem, La Crescent, and surrounding communities. Contact us to confirm service availability for your location.',
  },
  {
    question: 'How do I get a free estimate?',
    answer:
      'Simply fill out our contact form or call us directly. We will schedule a convenient time to visit your property, discuss your vision, measure the project area, and provide a detailed, no-obligation estimate on the spot.',
  },
]

export function FAQSection() {
  return (
    <section className="py-24 bg-[#F8FAFC]">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-[#1E3A8A] text-sm font-semibold uppercase tracking-wider mb-4"
          >
            FAQs
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-[var(--font-montserrat)] font-bold text-3xl md:text-4xl text-[#0F172A] mb-6 text-balance"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#64748B] text-lg max-w-2xl mx-auto leading-relaxed"
          >
            Get answers to common questions about our decorative curbing services
            and installation process.
          </motion.p>
        </div>

        {/* FAQ List - Always Open */}
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white border border-[#E2E8F0] rounded-lg p-6"
            >
              <h3 className="font-[var(--font-montserrat)] font-semibold text-lg text-[#0F172A] mb-3">
                {faq.question}
              </h3>
              <p className="text-[#64748B] text-base leading-relaxed">
                {faq.answer}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
