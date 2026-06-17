/** Service paths and SEO copy for metadata + JSON-LD */
export const SERVICES_SEO = {
  'decorative-curbing': {
    path: '/services/decorative-curbing',
    name: 'Decorative Curbing',
    description:
      'Premium decorative concrete curbing in La Crosse, WI. Standard, roller stamp, and carved styles with unlimited colors and permanent landscape borders.',
  },
  'rock-mulch': {
    path: '/services/rock-mulch',
    name: 'Rock & Mulch Installation',
    description:
      'Professional rock and mulch bed installation in La Crosse, WI. Complete bed prep, weed barrier, and premium materials paired with decorative curbing.',
  },
  'retaining-walls': {
    path: '/services/retaining-walls',
    name: 'Retaining Walls',
    description:
      'Stone retaining wall installation in La Crosse and the Coulee Region. Erosion control, proper drainage, and lasting curb appeal.',
  },
  'christmas-lights': {
    path: '/services/christmas-lights',
    name: 'Christmas Lights Installation',
    description:
      'Professional holiday light design, installation, and takedown in La Crosse, WI.',
  },
  seeding: {
    path: '/services/seeding',
    name: 'Lawn Seeding',
    description:
      'Expert lawn seeding in La Crosse, WI. Establish thick, healthy grass that complements decorative curbing and landscape beds.',
  },
} as const

export const ALL_SERVICE_LINKS = Object.values(SERVICES_SEO).map((s) => ({
  name: s.name,
  href: s.path,
}))
