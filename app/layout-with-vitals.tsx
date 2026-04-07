import type React from "react"
import { Analytics } from "@vercel/analytics/react"
import { WebVitals } from "./web-vitals"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        <WebVitals />
      </body>
    </html>
  )
}
