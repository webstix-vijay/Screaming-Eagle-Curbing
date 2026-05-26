const TURNSTILE_VERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify'

// Cloudflare's always-passing test secret key for development
// See: https://developers.cloudflare.com/turnstile/troubleshooting/testing/
const TURNSTILE_TEST_SECRET_KEY = '1x0000000000000000000000000000000AA'

// Production domains where we use the real secret key
const PRODUCTION_DOMAINS = [
  'screamingeaglecurbing.com',
  'www.screamingeaglecurbing.com',
]

export type TurnstileVerifyResult = {
  success: boolean
  'error-codes'?: string[]
  challenge_ts?: string
  hostname?: string
  action?: string
  cdata?: string
}

function isProductionRequest(hostname?: string): boolean {
  if (!hostname) return false
  return PRODUCTION_DOMAINS.includes(hostname.toLowerCase())
}

export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string,
  hostname?: string
): Promise<TurnstileVerifyResult> {
  const configuredSecret = process.env.TURNSTILE_SECRET_KEY
  
  // Use test secret for non-production, configured secret for production
  const isProduction = isProductionRequest(hostname)
  const secret = isProduction ? configuredSecret : TURNSTILE_TEST_SECRET_KEY

  if (isProduction && !configuredSecret) {
    console.error('TURNSTILE_SECRET_KEY is not configured for production')
    return { success: false, 'error-codes': ['missing-input-secret'] }
  }

  const body = new URLSearchParams({
    secret: secret!,
    response: token,
  })

  if (remoteIp) {
    body.append('remoteip', remoteIp)
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
      cache: 'no-store',
    })

    return (await response.json()) as TurnstileVerifyResult
  } catch (error) {
    console.error('Turnstile verification request failed:', error)
    return { success: false, 'error-codes': ['internal-error'] }
  }
}

export function turnstileErrorMessage(errorCodes?: string[]): string {
  if (!errorCodes?.length) {
    return 'Security verification failed. Please complete the check and try again.'
  }

  if (errorCodes.includes('timeout-or-duplicate')) {
    return 'Your security check expired. Please verify again and resubmit.'
  }

  if (errorCodes.includes('invalid-input-response')) {
    return 'Security verification was invalid. Please complete the check and try again.'
  }

  return 'Security verification failed. Please complete the check and try again.'
}
