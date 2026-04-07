"use client"

import { useEffect } from "react"

interface JsonLdProps {
  data: Record<string, any>
}

export default function JsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    // Only run on the client side
    if (typeof window === "undefined") return

    const script = document.createElement("script")
    script.type = "application/ld+json"
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      if (script.parentNode) {
        document.head.removeChild(script)
      }
    }
  }, [data])

  return null
}
