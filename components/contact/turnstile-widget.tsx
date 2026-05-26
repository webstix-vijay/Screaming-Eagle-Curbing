'use client'

import Script from 'next/script'
import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react'

const TURNSTILE_SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=onTurnstileLoad'

// Cloudflare's always-passing test key for development
// See: https://developers.cloudflare.com/turnstile/troubleshooting/testing/
const TURNSTILE_TEST_SITE_KEY = '1x00000000000000000000AA'

type TurnstileRenderOptions = {
  sitekey: string
  callback?: (token: string) => void
  'expired-callback'?: () => void
  'error-callback'?: (error?: Error | string) => void
  theme?: 'light' | 'dark' | 'auto'
  size?: 'normal' | 'compact' | 'flexible'
  retry?: 'auto' | 'never'
  'retry-interval'?: number
}

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: TurnstileRenderOptions) => string
      reset: (widgetId?: string) => void
      remove: (widgetId: string) => void
      isExpired: (widgetId: string) => boolean
    }
    onTurnstileLoad?: () => void
  }
}

export type TurnstileWidgetHandle = {
  reset: () => void
}

type TurnstileWidgetProps = {
  onVerify: (token: string) => void
  onExpire?: () => void
  onError?: () => void
}

// Check if we're on a production domain
function isProductionDomain(): boolean {
  if (typeof window === 'undefined') return false
  const hostname = window.location.hostname
  return (
    hostname === 'screamingeaglecurbing.com' ||
    hostname === 'www.screamingeaglecurbing.com'
  )
}

export const TurnstileWidget = forwardRef<
  TurnstileWidgetHandle,
  TurnstileWidgetProps
>(function TurnstileWidget({ onVerify, onExpire, onError }, ref) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [loadError, setLoadError] = useState<string | null>(null)
  const [isClient, setIsClient] = useState(false)
  const callbacksRef = useRef({ onVerify, onExpire, onError })
  const configuredSiteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY

  // Determine which site key to use
  const getSiteKey = useCallback((): string | null => {
    if (!isClient) return null
    
    // On production domains, use the configured key
    if (isProductionDomain()) {
      return configuredSiteKey || null
    }
    
    // On non-production (localhost, preview URLs, etc.), use the test key
    // This allows development without domain restrictions
    return TURNSTILE_TEST_SITE_KEY
  }, [isClient, configuredSiteKey])

  // Hydration fix - only run client-side logic after mount
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Keep callbacks ref updated to avoid stale closures
  useEffect(() => {
    callbacksRef.current = { onVerify, onExpire, onError }
  }, [onVerify, onExpire, onError])

  const resetWidget = useCallback(() => {
    if (widgetIdRef.current && window.turnstile) {
      try {
        window.turnstile.reset(widgetIdRef.current)
      } catch {
        // Reset may fail if widget was removed
      }
    }
  }, [])

  useImperativeHandle(ref, () => ({ reset: resetWidget }), [resetWidget])

  const renderWidget = useCallback(() => {
    const siteKey = getSiteKey()
    
    if (!siteKey || !containerRef.current || !window.turnstile) {
      return
    }

    // Clean up existing widget if any
    if (widgetIdRef.current) {
      try {
        window.turnstile.remove(widgetIdRef.current)
      } catch {
        // Widget may already be removed
      }
      widgetIdRef.current = null
    }

    try {
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        theme: 'light',
        size: 'flexible',
        retry: 'auto',
        'retry-interval': 5000,
        callback: (token: string) => {
          setIsLoading(false)
          setLoadError(null)
          callbacksRef.current.onVerify(token)
        },
        'expired-callback': () => {
          callbacksRef.current.onExpire?.()
        },
        'error-callback': (errorCode) => {
          // Error code 110200 means domain not authorized in Turnstile settings
          const isDomainError = errorCode === '110200' || errorCode === 110200
          const errorMessage = isDomainError
            ? 'domain-error'
            : 'Security verification encountered an error. Please refresh the page.'
          setLoadError(errorMessage)
          callbacksRef.current.onError?.()
        },
      })
      setIsLoading(false)
    } catch {
      setLoadError('Failed to load security verification. Please refresh the page.')
      setIsLoading(false)
    }
  }, [getSiteKey])

  useEffect(() => {
    if (!isClient) return

    // Set up the global callback for when script loads
    window.onTurnstileLoad = () => {
      renderWidget()
    }

    // If turnstile is already loaded (e.g., from cache), render immediately
    if (window.turnstile) {
      renderWidget()
    }

    return () => {
      // Cleanup on unmount
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current)
        } catch {
          // Widget may already be removed
        }
        widgetIdRef.current = null
      }
    }
  }, [renderWidget, isClient])

  // Show nothing during SSR to avoid hydration mismatch
  if (!isClient) {
    return (
      <div className="min-h-[65px] flex items-center">
        <div className="flex items-center gap-2 text-sm text-gray-500 py-2">
          <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
          Loading security verification...
        </div>
      </div>
    )
  }

  const siteKey = getSiteKey()

  if (!siteKey) {
    return (
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
        <p className="text-sm text-amber-700" role="status">
          Security verification is temporarily unavailable. Please call us
          directly at <a href="tel:+17158967448" className="font-semibold underline">(715) 896-7448</a>.
        </p>
      </div>
    )
  }

  return (
    <>
      <Script
        id="cf-turnstile"
        src={TURNSTILE_SCRIPT_SRC}
        strategy="afterInteractive"
        onError={() => {
          setLoadError('Failed to load security verification. Please check your internet connection and refresh the page.')
          setIsLoading(false)
        }}
      />
      <div className="relative">
        {isLoading && !loadError && (
          <div className="flex items-center gap-2 text-sm text-gray-500 py-2">
            <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin" />
            Loading security verification...
          </div>
        )}
        {loadError && loadError === 'domain-error' && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-sm text-amber-800" role="status">
              Security verification is temporarily unavailable. Please call us directly at{' '}
              <a href="tel:+17158967448" className="font-semibold underline">(715) 896-7448</a>{' '}
              or email{' '}
              <a href="mailto:screamingeaglecurbing@gmail.com" className="font-semibold underline">
                screamingeaglecurbing@gmail.com
              </a>
            </p>
          </div>
        )}
        {loadError && loadError !== 'domain-error' && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-600" role="alert">
              {loadError}
            </p>
          </div>
        )}
        <div
          ref={containerRef}
          className="cf-turnstile min-h-[65px] w-full max-w-full overflow-hidden"
          aria-label="Security verification"
        />
      </div>
    </>
  )
})
