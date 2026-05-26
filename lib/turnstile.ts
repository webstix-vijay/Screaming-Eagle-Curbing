import { getTurnstileSecretKey } from '@/lib/turnstile-config'

type TurnstileVerifyResponse = {
  success?: boolean
  'error-codes'?: string[]
  hostname?: string
}

export async function verifyTurnstileToken(token: string): Promise<boolean> {
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
      body: JSON.stringify({ secret, response: token }),
    }
  )

  const data = (await response.json()) as TurnstileVerifyResponse

  if (!data.success) {
    console.error('Turnstile verification failed:', data['error-codes'], {
      hostname: data.hostname,
    })
  }

  return data.success === true
}
