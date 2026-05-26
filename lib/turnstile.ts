import {
  getTurnstileSecretKey,
  isAuthorizedTurnstileHostname,
} from '@/lib/turnstile-config'

type TurnstileVerifyResponse = {
  success?: boolean
  'error-codes'?: string[]
  hostname?: string
}

export async function verifyTurnstileToken(
  token: string,
  remoteIp?: string | null
): Promise<boolean> {
  const secret = getTurnstileSecretKey(token)
  if (!secret) {
    console.error('TURNSTILE_SECRET_KEY is not configured')
    return false
  }

  const response = await fetch(
    'https://challenges.cloudflare.com/turnstile/v0/siteverify',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret,
        response: token,
        ...(remoteIp ? { remoteip: remoteIp } : {}),
      }),
      cache: 'no-store',
    }
  )

  const data = (await response.json()) as TurnstileVerifyResponse

  if (!data.success) {
    console.error('Turnstile verification failed:', data['error-codes'], {
      hostname: data.hostname,
    })
    return false
  }

  if (
    data.hostname &&
    !token.includes('DUMMY.TOKEN') &&
    !isAuthorizedTurnstileHostname(data.hostname)
  ) {
    console.error('Turnstile hostname not authorized:', data.hostname)
    return false
  }

  return true
}

export function getClientIpFromRequest(request: Request): string | null {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() ?? null
  }
  return request.headers.get('x-real-ip')
}
