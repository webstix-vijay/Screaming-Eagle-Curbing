'use client'

import Script from 'next/script'
import { useCallback, useEffect, useRef, useState } from 'react'
import { getTurnstileSiteKey } from '@/lib/turnstile-config'

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string
          callback: (token: string) => void
          'expired-callback'?: () => void
          'error-callback'?: (errorCode?: string) => void
          theme?: 'light' | 'dark' | 'auto'
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

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile) return

    if (widgetIdRef.current) {
      window.turnstile.remove(widgetIdRef.current)
      widgetIdRef.current = null
    }

    const sitekey = getTurnstileSiteKey(window.location.hostname)

    containerRef.current.innerHTML = ''
    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      sitekey,
      theme: 'light',
      callback: onVerify,
      'expired-callback': onExpire,
      'error-callback': onError,
    })
  }, [onVerify, onExpire, onError])

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

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="afterInteractive"
        onLoad={() => setScriptReady(true)}
      />
      <div
        ref={containerRef}
        className="min-h-[65px] w-full max-w-full overflow-hidden"
        aria-label="Cloudflare Turnstile CAPTCHA"
      />
    </>
  )
}
