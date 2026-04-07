"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import GameGrid from "@/components/games/game-grid"

interface FeaturedGamesProps {
  title: string
  viewAllText: string
  games: any[]
}

export default function FeaturedGames({ title, viewAllText, games }: FeaturedGamesProps) {
  const [activeCategory, setActiveCategory] = useState("all")
  const [showAllGames, setShowAllGames] = useState(false)

  // Filter games by category
  const filteredGames = activeCategory === "all" ? games : games.filter((game) => game.category === activeCategory)

  // Calculate how many games to show
  const gamesToShow = showAllGames ? filteredGames : filteredGames.slice(0, 12)

  return (
    <section id="featured-games" className="py-12" aria-labelledby="featured-games-heading">
      <h2 id="featured-games-heading" className="text-2xl font-bold mb-6">
        {title}
      </h2>

      <Tabs defaultValue="all" onValueChange={setActiveCategory}>
        <TabsList className="mb-6">
          <TabsTrigger value="all">All Games</TabsTrigger>
          <TabsTrigger value="slots">Slots</TabsTrigger>
          <TabsTrigger value="casino">Casino</TabsTrigger>
          <TabsTrigger value="sports">Sports</TabsTrigger>
          <TabsTrigger value="poker">Poker</TabsTrigger>
          <TabsTrigger value="fishing">Fishing</TabsTrigger>
        </TabsList>
      </Tabs>

      <GameGrid games={gamesToShow} />

      {filteredGames.length > 12 && !showAllGames && (
        <div className="mt-8 text-center">
          <Button
            onClick={() => setShowAllGames(true)}
            className="bg-yellow-500 hover:bg-yellow-600 text-black"
            aria-label="Show more games"
          >
            View More Games
          </Button>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/games" aria-label="View all games">
          <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10">
            {viewAllText}
          </Button>
        </Link>
      </div>
    </section>
  )
}
