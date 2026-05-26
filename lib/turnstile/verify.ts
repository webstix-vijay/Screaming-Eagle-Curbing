const TURNSTILE_VERIFY_URL =
  'https://challenges.cloudflare.com/turnstile/v0/siteverify'

export type TurnstileVerifyResult = {
  success: boolean
  'error-codes'?: string[]
  challenge_ts?: string
  hostname?: string
  action?: string
  cdata?: string
}

export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string
): Promise<TurnstileVerifyResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY

  if (!secret) {
    console.error('TURNSTILE_SECRET_KEY is not configured')
    return { success: false, 'error-codes': ['missing-input-secret'] }
  }

  const body = new URLSearchParams({
    secret,
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
