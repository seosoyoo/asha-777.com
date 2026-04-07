"use client"

import { useEffect, useState } from "react"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/react"

export default function AnalyticsSafeWrapper() {
  const [isProduction, setIsProduction] = useState(false)

  useEffect(() => {
    // Check if we're in production environment (not Vercel preview)
    setIsProduction(typeof window !== "undefined" && !window.location.hostname.includes("vusercontent.net"))
  }, [])

  // Always render Analytics and SpeedInsights as they're safe in preview environments
  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  )
}
