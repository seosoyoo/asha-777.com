"use client"

import { track } from "@vercel/analytics"
import { Button } from "@/components/ui/button"

export function ButtonWithTracking() {
  return (
    <Button
      onClick={() => {
        track("button_clicked", {
          location: "hero section",
          text: "Get Started",
        })
      }}
    >
      Get Started
    </Button>
  )
}
