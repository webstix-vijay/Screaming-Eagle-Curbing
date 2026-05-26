/** Canonical service images used across Services pages and related-service cards */
export type RelatedServiceImage = {
  title: string
  href: string
  image: string
  imageObjectPosition?: string
}

export const RELATED_SERVICE_IMAGES = {
  decorativeCurbing: {
    title: 'Decorative Curbing',
    href: '/services/decorative-curbing',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/648969539_1523399962552606_9149390113985786585_n-Y1XefroO2xDRxLWn45sTqhfH1QMFbs.jpg',
  },
  rockMulch: {
    title: 'Rock & Mulch',
    href: '/services/rock-mulch',
    image: '/images/services/rock-mulch.png',
    imageObjectPosition: '44% 46%',
  },
  retainingWalls: {
    title: 'Retaining Walls',
    href: '/services/retaining-walls',
    image: '/images/services/retaining-walls.png',
    imageObjectPosition: '36% 52%',
  },
  christmasLights: {
    title: 'Christmas Lights',
    href: '/services/christmas-lights',
    image:
      'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/568089380_1401623404730263_7806870534372210605_n-DLlGJruQYS6F4hHpH1KxrC54IWxwBM.jpg',
  },
  seeding: {
    title: 'Seeding',
    href: '/services/seeding',
    image: '/images/services/retaining-walls-seeding.png',
    imageObjectPosition: 'center 58%',
  },
} as const satisfies Record<string, RelatedServiceImage>

export function pickRelatedServices(
  ...keys: (keyof typeof RELATED_SERVICE_IMAGES)[]
): RelatedServiceImage[] {
  return keys.map((key) => RELATED_SERVICE_IMAGES[key])
}
