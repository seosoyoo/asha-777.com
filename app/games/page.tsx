"use client"

import { useState, useEffect } from "react"
import { getGamesContent } from "@/lib/content-loader"
import ScrollToTop from "@/components/scroll-to-top"
import ClientJsonLd from "@/components/client-json-ld"
import GameFilters from "@/components/games/game-filters"
import GameGrid from "@/components/games/game-grid"
import { generateGamesPageSchema } from "@/lib/schemas/gamesSchema"
import { generateBreadcrumbSchema } from "@/lib/schemas/breadcrumbSchema"
import type { Game } from "@/lib/schemas/gamesSchema"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"

export default function GamesPage() {
  const [content, setContent] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredGames, setFilteredGames] = useState<Game[]>([])
  const [activeCategory, setActiveCategory] = useState("all")
  const [currentUrl, setCurrentUrl] = useState("")

  useEffect(() => {
    // Dapatkan URL saat ini untuk breadcrumb
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href)
    }

    // Load content dynamically
    const loadContent = async () => {
      setIsLoading(true)
      const data = await getGamesContent()
      setContent(data)
      setFilteredGames(data.games)
      setIsLoading(false)
    }

    loadContent()
  }, [])

  useEffect(() => {
    if (!content) return

    // Filter games based on search query and active category
    let filtered = content.games

    if (searchQuery) {
      filtered = filtered.filter((game: Game) => game.title.toLowerCase().includes(searchQuery.toLowerCase()))
    }

    if (activeCategory !== "all") {
      filtered = filtered.filter((game: Game) => game.category === activeCategory)
    }

    setFilteredGames(filtered)
  }, [searchQuery, activeCategory, content])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"></div>
      </div>
    )
  }

  // Games page specific structured data
  const gamesPageSchema = generateGamesPageSchema(filteredGames)
  const breadcrumbSchema = generateBreadcrumbSchema(currentUrl)

  return (
    <div className="space-y-8">
      {/* Structured data - ensure it's properly rendered */}
      {filteredGames.length > 0 && <ClientJsonLd data={gamesPageSchema} />}
      <ClientJsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="mb-6">
        <EnhancedBreadcrumb />
      </div>

      <div>
        <h1 className="text-3xl font-bold mb-2">{content.title}</h1>
        <p className="text-zinc-400">{content.subtitle}</p>
      </div>

      {/* Game Filters */}
      <GameFilters
        onCategoryChange={(category) => {
          setActiveCategory(category)
          // Reset any invalid aria attributes that might be generated
          setTimeout(() => {
            const tabs = document.querySelectorAll('[role="tab"]')
            tabs.forEach((tab) => {
              const ariaControls = tab.getAttribute("aria-controls")
              if (ariaControls && ariaControls.includes("«r")) {
                const newId = `tab-content-${tab.id.replace("trigger-", "")}`
                tab.setAttribute("aria-controls", newId)

                // Also update the corresponding tabpanel if it exists
                const panel = document.getElementById(ariaControls)
                if (panel) {
                  panel.id = newId
                }
              }
            })
          }, 0)
        }}
        onSearchChange={setSearchQuery}
        defaultCategory={activeCategory}
      />

      {/* Game Grid */}
      <GameGrid games={filteredGames} />

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
