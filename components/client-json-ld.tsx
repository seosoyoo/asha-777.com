"use client"

import { useEffect } from "react"

interface JsonLdProps {
  data: Record<string, any>
}

export default function ClientJsonLd({ data }: JsonLdProps) {
  useEffect(() => {
    // Only run on the client side
    if (typeof window === "undefined") return

    // Create a unique ID for this schema based on its type
    const schemaType = data["@type"] || "unknown"
    const schemaId = `schema-${schemaType}`.toLowerCase().replace(/\s+/g, "-")

    // Remove any existing script with the same ID
    const existingScript = document.getElementById(schemaId)
    if (existingScript) {
      existingScript.parentNode?.removeChild(existingScript)
    }

    // Create and append the new script
    const script = document.createElement("script")
    script.id = schemaId
    script.type = "application/ld+json"
    script.text = JSON.stringify(data)
    document.head.appendChild(script)

    return () => {
      const scriptToRemove = document.getElementById(schemaId)
      if (scriptToRemove) {
        document.head.removeChild(scriptToRemove)
      }
    }
  }, [data])

  return null
}
