'use client'

import { useEffect, useRef, useCallback } from 'react'
import Script from 'next/script'

declare global {
  interface Window {
    turnstile: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string
          callback?: (token: string) => void
          'expired-callback'?: () => void
          'error-callback'?: (error: unknown) => void
          theme?: 'light' | 'dark' | 'auto'
          size?: 'normal' | 'compact'
        }
      ) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
    onTurnstileLoad?: () => void
  }
}

interface TurnstileProps {
  onVerify: (token: string) => void
  onExpire?: () => void
  onError?: (error: unknown) => void
  theme?: 'light' | 'dark' | 'auto'
  size?: 'normal' | 'compact'
  className?: string
}

export function Turnstile({
  onVerify,
  onExpire,
  onError,
  theme = 'light',
  size = 'normal',
  className,
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const scriptLoadedRef = useRef(false)

  const renderWidget = useCallback(() => {
    if (!containerRef.current || !window.turnstile || widgetIdRef.current) {
      return
    }

    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY
    if (!siteKey) {
      console.error('[Turnstile] Site key is not configured')
      return
    }

    try {
      widgetIdRef.current = window.turnstile.render(containerRef.current, {
        sitekey: siteKey,
        callback: onVerify,
        'expired-callback': onExpire,
        'error-callback': onError,
        theme,
        size,
      })
    } catch (error) {
      console.error('[Turnstile] Failed to render widget:', error)
      onError?.(error)
    }
  }, [onVerify, onExpire, onError, theme, size])

  useEffect(() => {
    // If script is already loaded, render immediately
    if (scriptLoadedRef.current && window.turnstile) {
      renderWidget()
    }

    return () => {
      // Cleanup widget on unmount
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current)
        } catch {
          // Widget might already be removed
        }
        widgetIdRef.current = null
      }
    }
  }, [renderWidget])

  const handleScriptLoad = () => {
    scriptLoadedRef.current = true
    renderWidget()
  }

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        strategy="lazyOnload"
        onLoad={handleScriptLoad}
      />
      <div
        ref={containerRef}
        className={className}
        aria-label="Security verification"
      />
    </>
  )
}

export function resetTurnstile(widgetId: string) {
  if (window.turnstile) {
    window.turnstile.reset(widgetId)
  }
}
