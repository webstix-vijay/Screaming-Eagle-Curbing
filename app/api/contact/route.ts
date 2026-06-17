const FORM_ACTION_URL =
  'https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/2a1c357b-ca80-485e-b4cc-9d7de60949a2'

const TURNSTILE_VERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

interface TurnstileVerifyResponse {
  success: boolean
  'error-codes'?: string[]
  challenge_ts?: string
  hostname?: string
}

async function verifyTurnstileToken(token: string): Promise<{ success: boolean; error?: string }> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY
  
  if (!secretKey) {
    console.error('[Turnstile] Secret key is not configured')
    return { success: false, error: 'Server configuration error' }
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: secretKey,
        response: token,
      }),
    })

    const result: TurnstileVerifyResponse = await response.json()

    if (result.success) {
      return { success: true }
    }

    // Map Cloudflare error codes to user-friendly messages
    const errorCodes = result['error-codes'] || []
    let errorMessage = 'Security verification failed'

    if (errorCodes.includes('timeout-or-duplicate')) {
      errorMessage = 'Verification expired or already used. Please try again.'
    } else if (errorCodes.includes('invalid-input-response')) {
      errorMessage = 'Invalid verification. Please refresh and try again.'
    } else if (errorCodes.includes('bad-request')) {
      errorMessage = 'Verification request error. Please try again.'
    }

    console.error('[Turnstile] Verification failed:', errorCodes)
    return { success: false, error: errorMessage }
  } catch (error) {
    console.error('[Turnstile] Network error during verification:', error)
    return { success: false, error: 'Unable to verify. Please try again.' }
  }
}

export async function POST(request: Request) {
  const formData = await request.formData()

  // Extract and verify Turnstile token
  const turnstileToken = formData.get('cf-turnstile-response')
  
  if (!turnstileToken || typeof turnstileToken !== 'string') {
    return Response.json(
      { 
        error: 'Security verification is required. Please complete the CAPTCHA.',
        code: 'TURNSTILE_TOKEN_MISSING'
      },
      {
        status: 400,
        headers: { 'Cache-Control': 'no-store' },
      }
    )
  }

  // Verify the Turnstile token with Cloudflare
  const verification = await verifyTurnstileToken(turnstileToken)
  
  if (!verification.success) {
    return Response.json(
      { 
        error: verification.error || 'Security verification failed. Please try again.',
        code: 'TURNSTILE_VERIFICATION_FAILED'
      },
      {
        status: 403,
        headers: { 'Cache-Control': 'no-store' },
      }
    )
  }

  // Remove the Turnstile token from form data before forwarding
  formData.delete('cf-turnstile-response')

  try {
    const response = await fetch(FORM_ACTION_URL, {
      method: 'POST',
      body: formData,
      cache: 'no-store',
    })

    const body = await response.text()
    return new Response(body, {
      status: response.status,
      headers: {
        'Content-Type':
          response.headers.get('Content-Type') ?? 'application/json',
        'Cache-Control': 'no-store',
      },
    })
  } catch (error) {
    console.error('Contact form proxy error:', error)
    return Response.json(
      { error: 'Unable to submit the form. Please try again later.' },
      {
        status: 502,
        headers: { 'Cache-Control': 'no-store' },
      }
    )
  }
}
