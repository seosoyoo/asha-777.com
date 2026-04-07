"use client"

import { useEffect } from "react"
import { onCLS, onFCP, onLCP, onTTFB, onINP } from "web-vitals"

type WebVitalsProps = {
  analyticsId?: string // Optional Google Analytics ID
}

export function WebVitalsMonitoring({ analyticsId }: WebVitalsProps) {
  useEffect(() => {
    function sendToAnalytics(metric: any) {
      // Send to Vercel Analytics
      const body = JSON.stringify({
        dsn: "https://vitals.vercel-insights.com/v1/vitals",
        id: metric.id,
        page: window.location.pathname,
        href: window.location.href,
        event_name: metric.name,
        value: metric.value.toString(),
        speed:
          "connection" in navigator && (navigator as any).connection && "effectiveType" in (navigator as any).connection
            ? (navigator as any).connection.effectiveType
            : "",
      })

      // Use `navigator.sendBeacon()` if available
      if (navigator.sendBeacon) {
        navigator.sendBeacon("https://vitals.vercel-insights.com/v1/analytics", body)
      } else {
        // Fall back to fetch() if sendBeacon not supported
        fetch("https://vitals.vercel-insights.com/v1/analytics", {
          body,
          method: "POST",
          keepalive: true,
          headers: {
            "Content-Type": "application/json",
          },
        })
      }

      // Send to Google Analytics if ID is provided
      if (analyticsId && typeof window !== "undefined" && (window as any).gtag) {
        const { name, id, value } = metric
        ;(window as any).gtag("event", name, {
          event_category: "Web Vitals",
          event_label: id,
          value: Math.round(name === "CLS" ? value * 1000 : value),
          non_interaction: true,
        })
      }

      // Log to console in development
      if (process.env.NODE_ENV === "development") {
        console.log(`Web Vitals: ${metric.name} = ${metric.value}`)
      }
    }

    // Monitor all the vitals
    onCLS(sendToAnalytics)
    onFCP(sendToAnalytics)
    onLCP(sendToAnalytics)
    onTTFB(sendToAnalytics)
    onINP(sendToAnalytics) // Using INP instead of FID as it's the newer metric

    // Detect LCP Element in Dev Mode
    if (process.env.NODE_ENV === "development") {
      let lcpCandidate: Element | null = null
      let lcpCandidateSize = 0

      const observer = new PerformanceObserver((entryList) => {
        for (const entry of entryList.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            const lcpEntry = entry as PerformanceEventTiming
            const element = (lcpEntry as any).element

            if (element && lcpEntry.size > lcpCandidateSize) {
              lcpCandidate = element
              lcpCandidateSize = lcpEntry.size
              console.log("LCP Element Candidate:", lcpCandidate, "Size:", lcpCandidateSize)
            }
          }
        }
      })

      observer.observe({ type: "largest-contentful-paint", buffered: true })
    }
  }, [analyticsId])

  return null
}
