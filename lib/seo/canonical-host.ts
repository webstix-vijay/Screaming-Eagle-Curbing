/** Apex (non-www) hostname — redirected to canonical www in middleware */
export const APEX_HOSTNAME = 'screamingeaglecurbing.com'

/** Canonical production hostname (matches NEXT_PUBLIC_SITE_URL) */
export const CANONICAL_HOSTNAME = 'www.screamingeaglecurbing.com'

export const CANONICAL_ORIGIN = `https://${CANONICAL_HOSTNAME}`

export function isApexHostname(hostname: string): boolean {
  return hostname.toLowerCase() === APEX_HOSTNAME
}

export function buildCanonicalUrl(
  pathname: string,
  search = '',
  hash = ''
): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`
  return `${CANONICAL_ORIGIN}${path}${search}${hash}`
}
