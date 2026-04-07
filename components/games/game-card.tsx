"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface GameCardProps {
  game: {
    id: string
    title: string
    provider: string
    image: string
    category: string
    isNew?: boolean
    isHot?: boolean
  }
}

export default function GameCard({ game }: GameCardProps) {
  const [isHovering, setIsHovering] = useState(false)
  const [imageError, setImageError] = useState(false)

  return (
    <Card
      className="overflow-hidden bg-zinc-900 border-zinc-700 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/20"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <CardContent className="p-0 relative">
        <div className="relative aspect-[4/3] w-full overflow-hidden">
          {imageError ? (
            <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-xs text-white">
              {" "}
              {/* Ditingkatkan text-zinc-500 menjadi text-white */}
              Game image
            </div>
          ) : (
            <div className="w-full h-full bg-zinc-800 relative">
              <Image
                src={game.image || "/placeholder.svg"}
                alt={`${game.title} by ${game.provider} - Play at ASHA777`}
                title={game.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 33vw, 16vw"
                loading="lazy"
                onError={() => setImageError(true)}
              />
            </div>
          )}

          {isHovering ? (
            <div className="absolute inset-0 flex items-center justify-center bg-black/80 transition-all duration-300">
              {" "}
              {/* Ditingkatkan bg-black/70 menjadi bg-black/80 */}
              <Link
                href={`/`}
                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-md transition-colors"
                aria-label={`Play ${game.title} now`}
              >
                <Play className="mr-2 h-4 w-4 flex-shrink-0" aria-hidden="true" />
                <span className="whitespace-nowrap">Play Now</span>
              </Link>
            </div>
          ) : null}

          {/* Badges */}
          <div className="absolute top-2 left-2 flex gap-2">
            {game.isNew && (
              <span className="bg-green-700 text-white text-xs px-2 py-1 rounded-full font-medium">NEW</span>
            )}{" "}
            {game.isHot && (
              <span className="bg-red-600 text-white text-xs px-2 py-1 rounded-full font-medium">HOT</span>
            )}{" "}
          </div>
        </div>

        <div className="p-4">
          <h3 className="font-medium text-white mb-1 line-clamp-1">{game.title}</h3>
          <p className="text-xs text-zinc-200">{game.provider}</p>{" "}
          {/* Ditingkatkan text-zinc-400 menjadi text-zinc-200 */}
        </div>
      </CardContent>
    </Card>
  )
}
