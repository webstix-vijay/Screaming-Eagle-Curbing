import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { APEX_HOSTNAME, buildCanonicalUrl } from '@/lib/seo/canonical-host'

/**
 * Permanent redirect: apex → www (HTTPS).
 * Ensures Turnstile, canonical URLs, and cookies use one hostname.
 */
export function middleware(request: NextRequest) {
  const host =
    request.headers.get('x-forwarded-host')?.split(',')[0]?.trim() ||
    request.headers.get('host')?.split(':')[0]?.toLowerCase() ||
    ''

  if (host !== APEX_HOSTNAME) {
    return NextResponse.next()
  }

  const { pathname, search, hash } = request.nextUrl
  const destination = buildCanonicalUrl(pathname, search, hash)

  return NextResponse.redirect(destination, 308)
}

export const config = {
  matcher: [
    /*
     * Match all paths except static assets (Turnstile/contact must redirect too).
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|woff2?)$).*)',
  ],
}
