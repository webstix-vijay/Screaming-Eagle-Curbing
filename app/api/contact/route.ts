const FORM_ACTION_URL =
  'https://ywwxvriolxwuqcwjaluh.supabase.co/functions/v1/form-submit/2a1c357b-ca80-485e-b4cc-9d7de60949a2'

export const dynamic = 'force-dynamic'
export const runtime = 'nodejs'

export async function POST(request: Request) {
  const formData = await request.formData()

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
