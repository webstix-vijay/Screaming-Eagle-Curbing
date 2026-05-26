import {
  turnstileErrorMessage,
  verifyTurnstileToken,
} from '@/lib/turnstile/verify'

const FORM_ACTION_URL =
  'https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/2a1c357b-ca80-485e-b4cc-9d7de60949a2'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: Request) {
  const formData = await request.formData()
  const turnstileToken = formData.get('cf-turnstile-response')

  if (!turnstileToken || typeof turnstileToken !== 'string') {
    return Response.json(
      {
        error:
          'Please complete the security check before submitting the form.',
      },
      {
        status: 400,
        headers: { 'Cache-Control': 'no-store' },
      }
    )
  }

  const remoteIp =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    undefined

  const verification = await verifyTurnstileToken(turnstileToken, remoteIp)

  if (!verification.success) {
    return Response.json(
      { error: turnstileErrorMessage(verification['error-codes']) },
      {
        status: 403,
        headers: { 'Cache-Control': 'no-store' },
      }
    )
  }

  const forwardData = new FormData()
  for (const [key, value] of formData.entries()) {
    if (key === 'cf-turnstile-response') {
      continue
    }
    forwardData.append(key, value)
  }

  try {
    const response = await fetch(FORM_ACTION_URL, {
      method: 'POST',
      body: forwardData,
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
