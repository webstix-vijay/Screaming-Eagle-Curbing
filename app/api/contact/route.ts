import {
  getClientIpFromRequest,
  verifyTurnstileToken,
} from '@/lib/turnstile'

const FORM_ACTION_URL =
  'https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/2a1c357b-ca80-485e-b4cc-9d7de60949a2'

export const dynamic = 'force-dynamic'

const NO_STORE_HEADERS = {
  'Cache-Control': 'no-store, no-cache, must-revalidate',
  Pragma: 'no-cache',
}

export async function POST(request: Request) {
  const formData = await request.formData()
  const token = formData.get('cf-turnstile-response')

  if (!token || typeof token !== 'string') {
    return Response.json(
      { error: 'CAPTCHA verification is required.' },
      { status: 400, headers: NO_STORE_HEADERS }
    )
  }

  const clientIp = getClientIpFromRequest(request)
  const isValid = await verifyTurnstileToken(token, clientIp)
  if (!isValid) {
    return Response.json(
      { error: 'CAPTCHA verification failed. Please try again.' },
      { status: 403, headers: NO_STORE_HEADERS }
    )
  }

  const forwardData = new FormData()
  for (const [key, value] of formData.entries()) {
    if (key === 'cf-turnstile-response') continue
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
        ...NO_STORE_HEADERS,
        'Content-Type':
          response.headers.get('Content-Type') ?? 'application/json',
      },
    })
  } catch (error) {
    console.error('Contact form proxy error:', error)
    return Response.json(
      { error: 'Unable to submit the form. Please try again later.' },
      { status: 502, headers: NO_STORE_HEADERS }
    )
  }
}
