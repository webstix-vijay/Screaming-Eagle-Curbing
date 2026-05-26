'use client'

import Script from 'next/script'
import { useCallback, useEffect, useRef, useState } from 'react'
import { getTurnstileSiteKey } from '@/lib/turnstile-config'
import { buildCanonicalUrl, isApexHostname } from '@/lib/seo/canonical-host'

const TURNSTILE_SCRIPT =
  'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit'

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          callback: (token: string) => void
          'expired-callback'?: () => void
          'error-callback'?: (errorCode?: string | number) => void
          theme?: 'light' | 'dark' | 'auto'
          action?: string
        }
      ) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
  }
}

type TurnstileWidgetProps = {
  onVerify: (token: string) => void
  onExpire: () => void
  onError: (errorCode?: string) => void
  resetKey?: number
}

export function TurnstileWidget({
  onVerify,
  onExpire,
  onError,
  resetKey = 0,
}: TurnstileWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const [scriptReady, setScriptReady] = useState(false)
  const [scriptKey, setScriptKey] = useState(0)

  // Fallback if edge redirect has not run yet (cached apex HTML, etc.)
  useEffect(() => {
    const host = window.location.hostname.toLowerCase()
    if (isApexHostname(host)) {
      window.location.replace(
        buildCanonicalUrl(
          window.location.pathname,
          window.location.search,
          window.location.hash
        )
      )
    }
  }, [])

  const handleTurnstileError = useCallback(
    (errorCode?: string | number) => {
      const code =
        errorCode !== undefined && errorCode !== null
          ? String(errorCode)
          : undefined
      onError(code)
    },
    [onError]
  )

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile) return

    const host = window.location.hostname.toLowerCase()
    if (isApexHostname(host)) return

    if (widgetIdRef.current) {
      window.turnstile.remove(widgetIdRef.current)
      widgetIdRef.current = null
    }

    const sitekey = getTurnstileSiteKey(host)

    containerRef.current.innerHTML = ''
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey,
      theme: 'light',
      action: 'contact',
      callback: onVerify,
      'expired-callback': onExpire,
      'error-callback': handleTurnstileError,
    })
  }, [onVerify, onExpire, handleTurnstileError])

  useEffect(() => {
    if (scriptReady) {
      renderWidget()
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [scriptReady, renderWidget, resetKey])

  const handleScriptError = useCallback(() => {
    setScriptReady(false)
    setScriptKey((key) => key + 1)
  }, [])

  return (
    <>
      <Script
        key={scriptKey}
        src={TURNSTILE_SCRIPT}
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
        onError={handleScriptError}
      />
      <div
        ref={containerRef}
        className="min-h-[65px] w-full max-w-full overflow-hidden [&_iframe]:max-w-full"
        aria-label="Cloudflare Turnstile CAPTCHA"
      />
    </>
  )
}
