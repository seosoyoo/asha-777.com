import { APP_NAME, APP_URL } from "@/lib/constants"
import type { Game } from "@/lib/types"

/**
 * Generates schema for games page
 * @param games Array of games to display
 * @returns Schema for games page
 */
export function generateGamesPageSchema(games: Game[] = []) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Collection Games High Winning Rate",
    description: `${APP_NAME} browse our games with huge of list that have high winning rate from Casino Online and Sports Betting like cricket, football, esports, etc in Bangladesh.`,
    url: `${APP_URL}/games`,
    numberOfItems: games.length > 0 ? Math.min(games.length, 10) : 0,
    itemListElement: games.slice(0, 100).map((game, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "SoftwareApplication",
        name: game.title,
        applicationCategory: "GameApplication",
        operatingSystem: "Web Browser",
        description: `${game.title} by ${game.provider}`,
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "BDT",
          availability: "https://schema.org/InStock",
        },
        // Include aggregateRating only if rating exists
        ...(game.rating && {
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: game.rating,
            ratingCount: 100, // You can adjust this or make it dynamic if you have actual count
            bestRating: 5,
            worstRating: 1,
          },
        }),
        author: {
          "@type": "Organization",
          name: game.provider,
        },
        image: game.image || `${APP_URL}/placeholder.svg`,
      },
    })),
  }
}

export type Game = {
  id: string
  title: string
  provider: string
  image: string
  category: string
  rating?: number
  isNew?: boolean
  isHot?: boolean
}
