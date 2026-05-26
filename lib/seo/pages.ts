import { createPageMetadata } from '@/lib/seo/site'

export const homeMetadata = createPageMetadata({
  title: 'Decorative Concrete Curbing in La Crosse, WI',
  description:
    'Permanent decorative curbing in the La Crosse area. Owner-operated with 7+ years of experience offering free estimates for curbing and landscaping.',
  path: '/',
  keywords: [
    'decorative curbing La Crosse',
    'concrete landscape edging',
    'curbing contractor Wisconsin',
  ],
})

export const aboutMetadata = createPageMetadata({
  title: 'About Us',
  description:
    'Meet Screaming Eagle Curbing — owner-operated decorative curbing serving La Crosse, Holmen, Onalaska, and the Coulee Region since 2019.',
  path: '/about',
})

export const servicesMetadata = createPageMetadata({
  title: 'Landscaping & Curbing Services',
  description:
    'Explore decorative curbing, rock & mulch, retaining walls, Christmas lights, and lawn seeding. Professional installation across the Coulee Region.',
  path: '/services',
})

export const galleryMetadata = createPageMetadata({
  title: 'Project Gallery',
  description:
    'View decorative curbing, landscaping, and hardscape projects completed for homeowners in La Crosse, Holmen, and surrounding Wisconsin communities.',
  path: '/gallery',
})

export const contactMetadata = createPageMetadata({
  title: 'Contact Us',
  description:
    'Request a free decorative curbing estimate in La Crosse, WI. Call (715) 896-7448 or submit our contact form — we respond quickly.',
  path: '/contact',
})

export const privacyMetadata = createPageMetadata({
  title: 'Privacy Policy',
  description:
    'Privacy Policy for Screaming Eagle Curbing. Learn how we collect, use, and protect your personal information.',
  path: '/privacy',
})

export const htmlSitemapMetadata = createPageMetadata({
  title: 'Sitemap',
  description:
    'Browse all pages on the Screaming Eagle Curbing website — services, gallery, about us, and contact.',
  path: '/sitemap-page',
})

export const thankYouMetadata = createPageMetadata({
  title: 'Thank You',
  description: 'Thank you for contacting Screaming Eagle Curbing.',
  path: '/thank-you',
  noIndex: true,
})

export const decorativeCurbingMetadata = createPageMetadata({
  title: 'Decorative Curbing',
  description:
    'Premium decorative concrete curbing in La Crosse, WI. Standard, roller stamp, and carved styles with unlimited colors. Permanent landscape borders.',
  path: '/services/decorative-curbing',
})

export const rockMulchMetadata = createPageMetadata({
  title: 'Rock & Mulch Installation',
  description:
    'Professional rock and mulch bed installation in La Crosse, WI. Complete bed prep, weed barrier, and premium materials paired with decorative curbing.',
  path: '/services/rock-mulch',
})

export const retainingWallsMetadata = createPageMetadata({
  title: 'Retaining Walls',
  description:
    'Stone retaining wall installation in La Crosse and the Coulee Region. Erosion control, drainage, and lasting curb appeal for your landscape.',
  path: '/services/retaining-walls',
})

export const christmasLightsMetadata = createPageMetadata({
  title: 'Christmas Lights Installation',
  description:
    'Professional holiday light design, installation, and takedown in La Crosse, WI. Make your home shine this season.',
  path: '/services/christmas-lights',
})

export const seedingMetadata = createPageMetadata({
  title: 'Lawn Seeding',
  description:
    'Expert lawn seeding in La Crosse, WI. Establish thick, healthy grass that complements decorative curbing and landscape beds.',
  path: '/services/seeding',
})
