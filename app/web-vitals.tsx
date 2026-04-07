"use client"

import { useReportWebVitals } from "next/web-vitals"

export function WebVitals() {
  useReportWebVitals((metric) => {
    const { id, name, label, value } = metric

    // Use the Vercel Analytics track function
    import("@vercel/analytics").then(({ track }) => {
      track(`web-vital-${name}`, {
        value: Math.round(name === "CLS" ? value * 1000 : value),
        label,
        id,
      })
    })
  })

  return null
}
