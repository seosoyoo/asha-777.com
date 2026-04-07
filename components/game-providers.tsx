"use client"

import Image from "next/image"
import { handleImageError } from "@/lib/utils"

export default function GameProviders() {
  const providers = [
    { name: "9Wickets", logo: "evolution", image: "/game-providers/asha777-9wickets.png" },
    { name: "Ameba", logo: "evolution", image: "/game-providers/asha777-ameba.png" },
    { name: "APGaming", logo: "evolution", image: "/game-providers/asha777-apgaming.png" },
    { name: "Askme", logo: "evolution", image: "/game-providers/asha777-askme-slot.png" },
    { name: "BigTime", logo: "evolution", image: "/game-providers/asha777-bigtime.png" },
    { name: "BNG", logo: "evolution", image: "/game-providers/asha777-bng.png" },
    { name: "BoomingGames", logo: "evolution", image: "/game-providers/asha777-booming-games.png" },
    { name: "BTGaming", logo: "evolution", image: "/game-providers/asha777-btgaming.png" },
    { name: "BTI", logo: "evolution", image: "/game-providers/asha777-bti.png" },
    { name: "BUT", logo: "evolution", image: "/game-providers/asha777-but.png" },
    { name: "Fachai", logo: "evolution", image: "/game-providers/asha777-fachai.png" },
    { name: "FBSports", logo: "evolution", image: "/game-providers/asha777-fbsports.png" },
    // Shortened for brevity
  ]

  return (
    <section id="game-providers" className="py-12" aria-labelledby="game-providers-heading">
      <h2 id="game-providers-heading" className="text-2xl font-bold mb-6 text-center">
        Our Game Providers
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee">
          {[...providers, ...providers].map((provider, index) => (
            <div key={index} className="flex-shrink-0 mx-4 flex flex-col items-center">
              {/* Provider logo container */}
              <div className="w-32 h-20 bg-zinc-800/50 rounded-lg flex items-center justify-center mb-2 p-2 hover:bg-zinc-700/50 transition-colors">
                <div className="relative w-full h-full">
                  <Image
                    src={provider.image || "/placeholder.svg"}
                    alt={`${provider.name} game provider logo`}
                    title={`${provider.name} game provider`}
                    fill
                    sizes="128px"
                    className="object-contain"
                    loading="lazy"
                    onError={(e) => handleImageError(e, 120, 80)}
                  />
                </div>
              </div>
              <p className="text-sm text-center">{provider.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
