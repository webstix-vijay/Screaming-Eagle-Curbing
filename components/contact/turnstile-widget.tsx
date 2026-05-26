'use client'

import { useEffect, useRef, useState } from 'react'
import { getTurnstileSiteKey } from '@/lib/turnstile-config'
import { buildCanonicalUrl, isApexHostname } from '@/lib/seo/canonical-host'

const SCRIPT_ID = 'cf-turnstile-api'
const TURNSTILE_SCRIPT_SRC =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

type TurnstileWidgetProps = {
  onVerify: (token: string) => void
  onExpire: () => void
  onError: (errorCode?: string) => void
  resetKey?: number
}

declare global {
  interface Window {
    turnstile?: {
      ready: (callback: () => void) => void
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          callback: (token: string) => void
          'expired-callback'?: () => void
          'error-callback'?: (errorCode?: string) => void
          theme?: 'light' | 'dark' | 'auto'
          action?: string
        }
      ) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
  }
}

function redirectApexToWww(): void {
  window.location.replace(
    buildCanonicalUrl(
      window.location.pathname,
      window.location.search,
      window.location.hash
    )
  )
}

export function TurnstileWidget({
  onVerify,
  onExpire,
  onError,
  resetKey = 0,
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const callbacksRef = useRef({ onVerify, onExpire, onError })
  const [canRender, setCanRender] = useState(false)

  callbacksRef.current = { onVerify, onExpire, onError }

  useEffect(() => {
    const host = window.location.hostname.toLowerCase()
    if (isApexHostname(host)) {
      redirectApexToWww()
      return
    }

    const timer = window.setTimeout(() => setCanRender(true), 100)
    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!canRender) return

    const host = window.location.hostname.toLowerCase()
    if (isApexHostname(host)) {
      redirectApexToWww()
      return
    }

    let cancelled = false

    const removeWidget = () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = ''
      }
    }

    const renderWidget = () => {
      if (cancelled || !containerRef.current || !window.turnstile) return

      const currentHost = window.location.hostname.toLowerCase()
      if (isApexHostname(currentHost)) {
        redirectApexToWww()
        return
      }

      removeWidget()

      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: getTurnstileSiteKey(currentHost),
        theme: 'light',
        action: 'contact',
        callback: (token) => callbacksRef.current.onVerify(token),
        'expired-callback': () => callbacksRef.current.onExpire(),
        'error-callback': (errorCode) => {
          const code =
            errorCode !== undefined && errorCode !== null
              ? String(errorCode)
              : undefined

          if (code === '110200' && isApexHostname(window.location.hostname)) {
            redirectApexToWww()
            return
          }

          callbacksRef.current.onError(code)
        },
      })
    }

    const initTurnstile = () => {
      if (!window.turnstile) return
      window.turnstile.ready(renderWidget)
    }

    const existingScript = document.getElementById(
      SCRIPT_ID
    ) as HTMLScriptElement | null

    if (existingScript) {
      if (window.turnstile) {
        initTurnstile()
      } else {
        existingScript.addEventListener('load', initTurnstile, { once: true })
      }
    } else {
      const script = document.createElement('script')
      script.id = SCRIPT_ID
      script.src = TURNSTILE_SCRIPT_SRC
      script.defer = true
      script.async = true
      script.addEventListener('load', initTurnstile, { once: true })
      script.addEventListener('error', () => {
        callbacksRef.current.onError('script-load')
      })
      document.head.appendChild(script)
    }

    return () => {
      cancelled = true
      removeWidget()
    }
  }, [canRender, resetKey])

  if (!canRender) {
    return <div className="min-h-[65px]" aria-hidden="true" />
  }

  return (
    <div
      ref={containerRef}
      className="min-h-[65px] w-full max-w-full overflow-hidden [&_iframe]:max-w-full"
      aria-label="Cloudflare Turnstile CAPTCHA"
    />
  )
}
