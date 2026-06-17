/**
 * Permanent (301) redirects for legacy URLs.
 * Configured in next.config.mjs — single-hop only, no chains.
 */
export const permanentRedirects = [
  {
    source: '/cart',
    destination: '/',
    permanent: true,
  },
  {
    source: '/appointments',
    destination: '/contact',
    permanent: true,
  },
  /** Legacy short URL → canonical service page */
  {
    source: '/decorative-curbing',
    destination: '/services/decorative-curbing',
    permanent: true,
  },
  /**
   * On-site alias for the Facebook page slug (facebook.com cannot be redirected from this app).
   * Use this path in Facebook “Website” / link-in-bio if you want traffic on your domain.
   */
  {
    source: '/lacrossecustomcurbing',
    destination: '/services/decorative-curbing',
    permanent: true,
  },
] as const
