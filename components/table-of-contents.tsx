"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, List } from "lucide-react"

interface TOCItem {
  id: string
  title: string
}

export default function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false)

  const tocItems: TOCItem[] = [
    { id: "featured-games", title: "Featured Games" },
    { id: "game-providers", title: "Game Providers" },
    { id: "vip-promotions", title: "Promotions" },
    { id: "payment-providers", title: "Payment Methods" },
    { id: "one-stop-hub-platform", title: "One Stop Hub Platform" },
    { id: "reason-choose-us", title: "Reason Choose Us" },
  ]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const yOffset = -80 // Header height offset
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <div className="sticky top-20 z-30 mb-6">
      <div className="bg-zinc-900 border border-zinc-700 rounded-lg overflow-hidden">
        {" "}
        {/* Ditingkatkan border-zinc-800 menjadi border-zinc-700 */}
        <div className="p-4 bg-zinc-800 flex items-center justify-between">
          <div className="flex items-center">
            <List className="h-5 w-5 mr-2 text-yellow-400" aria-hidden="true" />
            <h3 className="font-medium">Table of Contents</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Collapse table of contents" : "Expand table of contents"}
          >
            <ChevronDown
              className={`h-4 w-4 transition-transform ${isOpen ? "transform rotate-180" : ""}`}
              aria-hidden="true"
            />
          </Button>
        </div>
        <div className={`md:block ${isOpen ? "block" : "hidden"}`}>
          <nav className="p-2" aria-label="Table of contents navigation">
            <ul className="space-y-1">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm hover:text-yellow-400 hover:bg-zinc-800"
                    onClick={() => scrollToSection(item.id)}
                    aria-label={`Go to ${item.title} section`}
                  >
                    {item.title}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
