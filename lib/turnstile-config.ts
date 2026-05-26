import {
  APEX_HOSTNAME,
  CANONICAL_HOSTNAME,
} from '@/lib/seo/canonical-host'

/** Production widget (Screaming Eagle Curbing — both apex and www in Cloudflare hostnames) */
export const TURNSTILE_SITE_KEY = '0x4AAAAAACmutPDloFLjJ8s_'

/** Cloudflare dummy keys — work on any hostname (localhost, Vercel previews) */
export const TURNSTILE_TEST_SITE_KEY = '1x00000000000000000000AA'
export const TURNSTILE_TEST_SECRET_KEY =
  '1x0000000000000000000000000000000AA'

export const TURNSTILE_AUTHORIZED_HOSTNAMES = [
  APEX_HOSTNAME,
  CANONICAL_HOSTNAME,
] as const

function resolveEnvKey(
  value: string | undefined,
  fallback: string
): string {
  const trimmed = value?.trim()
  if (trimmed && trimmed.length > 10) {
    return trimmed
  }
  return fallback
}

export function shouldUseTurnstileTestKeys(hostname: string): boolean {
  const host = hostname.toLowerCase()

  if (host === 'localhost' || host === '127.0.0.1' || host === '[::1]') {
    return true
  }

  return host.endsWith('.vercel.app')
}

export function getTurnstileSiteKey(hostname: string): string {
  if (shouldUseTurnstileTestKeys(hostname)) {
    return TURNSTILE_TEST_SITE_KEY
  }

  return resolveEnvKey(
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
    TURNSTILE_SITE_KEY
  )
}

export function getTurnstileSecretKey(token: string): string | null {
  if (token.includes('DUMMY.TOKEN')) {
    return TURNSTILE_TEST_SECRET_KEY
  }

  const fromEnv = process.env.TURNSTILE_SECRET_KEY?.trim()
  if (fromEnv && fromEnv.length > 10) {
    return fromEnv
  }

  return null
}
