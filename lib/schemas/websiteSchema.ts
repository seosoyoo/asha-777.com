import { APP_NAME, APP_URL } from "@/lib/constants"

const APP_FULL_DESCRIPTION = "Asha777 is the most trusted and most choice from Bangladesh's Player to play casino games online and cricket betting, login and claim your daily Bonus now."

/**
 * Menghasilkan schema untuk website
 * @returns Schema untuk website
 */
export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: APP_NAME,
    url: APP_URL,
    description: APP_FULL_DESCRIPTION,
    inLanguage: "en-BD",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${APP_URL}/games?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  }
}
