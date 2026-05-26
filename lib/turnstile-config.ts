/** Cloudflare dummy keys — work on any hostname (localhost, Vercel previews, etc.) */
export const TURNSTILE_TEST_SITE_KEY = '1x00000000000000000000AA'
export const TURNSTILE_TEST_SECRET_KEY =
  '1x0000000000000000000000000000000AA'

const PRODUCTION_SITE_KEY = '0x4AAAAAACmutPDloFLjJ8s_'

/** Production hostnames allowed in the Cloudflare Turnstile widget settings */
export const TURNSTILE_PRODUCTION_HOSTNAMES = [
  'screamingeaglecurbing.com',
  'www.screamingeaglecurbing.com',
] as const

export function shouldUseTurnstileTestKeys(hostname: string): boolean {
  if (
    hostname === 'localhost' ||
    hostname === '127.0.0.1' ||
    hostname === '[::1]'
  ) {
    return true
  }

  // Vercel preview / deployment URLs are not in the production widget hostname list
  return hostname.endsWith('.vercel.app')
}

export function getTurnstileSiteKey(hostname: string): string {
  if (shouldUseTurnstileTestKeys(hostname)) {
    return TURNSTILE_TEST_SITE_KEY
  }

  return process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? PRODUCTION_SITE_KEY
}

export function getTurnstileSecretKey(token: string): string | null {
  if (token.includes('DUMMY.TOKEN')) {
    return TURNSTILE_TEST_SECRET_KEY
  }

  const secret = process.env.TURNSTILE_SECRET_KEY
  return secret ?? null
}

export function isDummyTurnstileToken(token: string): boolean {
  return token.includes('DUMMY.TOKEN')
}
