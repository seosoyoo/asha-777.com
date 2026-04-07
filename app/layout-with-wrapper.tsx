import type React from "react"
import { AnalyticsWrapper } from "./analytics-config"
import { SpeedInsightsWrapper } from "@/components/speed-insights-wrapper"
import { Suspense } from "react"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-BD">
      <body>
        {children}
        <Suspense fallback={null}>
          <AnalyticsWrapper />
          <SpeedInsightsWrapper />
        </Suspense>
      </body>
    </html>
  )
}
