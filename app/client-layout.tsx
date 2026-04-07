"use client"

import type React from "react"

import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { useEffect, useState } from "react"
import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"
import ScrollToTop from "@/components/scroll-to-top"
import { WebVitalsMonitoring } from "@/components/web-vitals-monitoring"
import AnalyticsSafeWrapper from "@/components/analytics-safe-wrapper"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    if (typeof window !== "undefined") {
      // Add SRI verification for external scripts
      const externalScripts = document.querySelectorAll('script[src^="https://"]')
      externalScripts.forEach((script) => {
        // Only add if not already present
        if (!script.hasAttribute("integrity")) {
          console.warn("External script without SRI detected:", script.getAttribute("src"))
        }
      })
    }

    // Report performance metrics
    if (typeof window !== "undefined" && "performance" in window) {
      // Calculate and report page load time
      window.addEventListener("load", () => {
        setTimeout(() => {
          const navTiming = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
          if (navTiming) {
            const loadTime = navTiming.loadEventEnd - navTiming.fetchStart
            console.info("Page load time:", loadTime)
          }
        }, 0)
      })
    }
  }, [])

  // Only render content after component is mounted to ensure it's client-side only
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {mounted ? (
        <>
          <WebVitalsMonitoring />
          <Navbar />
          <main className="container mx-auto px-4 py-8">{children}</main>
          <Footer />
          <ScrollToTop />
          <AnalyticsSafeWrapper />
        </>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
        </div>
      )}
    </ThemeProvider>
  )
}
