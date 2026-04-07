/**
 * Utilitas SEO
 * Fungsi-fungsi untuk membantu dengan SEO dan structured data
 */

import { APP_NAME, APP_DESCRIPTION, APP_URL, APP_FULL_DESCRIPTION, APP_LOCALE, APP_REGION } from "@/lib/constants"

/**
 * Membuat schema untuk halaman utama
 */
export function generateHomePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${APP_NAME} - ${APP_DESCRIPTION}`,
    description: APP_FULL_DESCRIPTION,
    url: APP_URL,
    inLanguage: "en",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "h2", "h3"],
    },
    mainEntity: {
      "@type": "WebSite",
      name: APP_NAME,
      description: APP_FULL_DESCRIPTION,
      url: APP_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: `${APP_URL}/games?search={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
  }
}

/**
 * Membuat schema untuk website
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: APP_NAME,
    url: APP_URL,
    inLanguage: "en",
    potentialAction: {
      "@type": "SearchAction",
      target: `${APP_URL}/games?search={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  }
}

/**
 * Membuat schema untuk halaman games
 */
export function generateGamesPageSchema(games: any[] = []) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Collection Games High Winning Rate",
    description: `${APP_NAME} browse our games with huge of list that have high winning rate from Casino Online and Sports Betting like cricket, football, esports, etc in Bangladesh.`,
    url: `${APP_URL}/games`,
    inLanguage: "en",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: games.slice(0, 10).map((game, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Game",
          name: game.title,
          description: `${game.title} by ${game.provider}`,
          provider: {
            "@type": "Organization",
            name: game.provider,
          },
        },
      })),
    },
  }
}

/**
 * Menghasilkan kode region yang lengkap
 */
export function getFullLocale() {
  return `${APP_LOCALE}_${APP_REGION}`
}
