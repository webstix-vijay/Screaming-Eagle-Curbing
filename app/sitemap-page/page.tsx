import Link from 'next/link'
import { Breadcrumbs } from '@/components/breadcrumbs'
import { htmlSitemapMetadata } from '@/lib/seo/pages'

export const metadata = htmlSitemapMetadata

type SitemapNode = {
  name: string
  href: string
  children?: SitemapNode[]
}

const pages: SitemapNode[] = [
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Home', href: '/' },
  {
    name: 'Services',
    href: '/services',
    children: [
      { name: 'Christmas Lights', href: '/services/christmas-lights' },
      { name: 'Decorative Curbing', href: '/services/decorative-curbing' },
      { name: 'Retaining Walls', href: '/services/retaining-walls' },
      { name: 'Rock & Mulch', href: '/services/rock-mulch' },
      { name: 'Seeding', href: '/services/seeding' },
    ],
  },
]

function SitemapTree({ nodes }: { nodes: SitemapNode[] }) {
  return (
    <ul className="list-disc pl-6 sm:pl-8 space-y-3 marker:text-[#475569]">
      {nodes.map((node) => (
        <li key={node.href} className="pl-1.5">
          <Link
            href={node.href}
            className="text-[15px] sm:text-base text-[#1E3A8A] hover:text-[#0F172A] hover:underline transition-colors"
          >
            {node.name}
          </Link>
          {node.children && node.children.length > 0 && (
            <div className="mt-3">
              <SitemapTree nodes={node.children} />
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function SitemapPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-[#0F172A]">
        <div className="max-w-[1200px] mx-auto px-4">
          <h1 className="font-[var(--font-montserrat)] font-bold text-4xl md:text-5xl text-white mb-4">
            Sitemap
          </h1>
          <p className="text-white/80 text-lg">
            Navigate our website easily
          </p>
        </div>
      </section>

      <Breadcrumbs />

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-montserrat)] font-bold text-2xl sm:text-3xl text-[#374151] mb-8">
            Pages
          </h2>
          <SitemapTree nodes={pages} />
        </div>
      </section>
    </div>
  )
}
