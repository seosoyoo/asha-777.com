"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, List } from "lucide-react"

interface TOCItem {
  id: string
  title: string
}

export default function TableOfContentsAbout() {
  const [isOpen, setIsOpen] = useState(false)

  const tocItems: TOCItem[] = [
    { id: "introduction", title: "Introduction" },
    { id: "our-story", title: "Our Story" },
    { id: "what-we-offer", title: "What We Offer for You" },
    { id: "why-players-choose-us", title: "Why Players Choose ASHA777" },
    { id: "comitment-responsible-gaming", title: "Comitment to Responsible Gaming" },
    { id: "sports-betting", title: "Sports Betting" },
    { id: "casino-games", title: "Casino Games Online" },
    { id: "vission-future", title: "Vission for the Future" },
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
      <div className="bg-zinc-900 border border-zinc-800 rounded-lg overflow-hidden">
        <div className="p-4 bg-zinc-800 flex items-center justify-between">
          <div className="flex items-center">
            <List className="h-5 w-5 mr-2 text-yellow-400" />
            <h3 className="font-medium">Table of Contents</h3>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
          >
            <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "transform rotate-180" : ""}`} />
          </Button>
        </div>
        <div className={`md:block ${isOpen ? "block" : "hidden"}`}>
          <nav className="p-2">
            <ul className="space-y-1">
              {tocItems.map((item) => (
                <li key={item.id}>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-sm hover:text-yellow-400 hover:bg-zinc-800"
                    onClick={() => scrollToSection(item.id)}
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
