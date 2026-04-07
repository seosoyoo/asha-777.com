"use client"

import GameCard from "@/components/games/game-card"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface GameGridProps {
  games: any[]
  initialLimit?: number
}

export default function GameGrid({ games, initialLimit = 12 }: GameGridProps) {
  const [showAllGames, setShowAllGames] = useState(false)

  // Calculate how many games to show
  const gamesToShow = showAllGames ? games : games.slice(0, initialLimit)

  if (games.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <p className="text-xl font-medium mb-4">No games found</p>
        <p className="text-zinc-400 mb-6">Try adjusting your search or filter criteria</p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {gamesToShow.map((game, index) => (
          <div key={index}>
            <GameCard game={game} />
          </div>
        ))}
      </div>

      {games.length > initialLimit && (
        <div className="mt-6 text-center">
          <Button
            variant="outline"
            className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10"
            onClick={() => setShowAllGames(!showAllGames)}
            aria-label={showAllGames ? "Show fewer games" : "Show more games"}
          >
            {showAllGames ? "Show Less" : "Show More"}
          </Button>
        </div>
      )}
    </div>
  )
}
