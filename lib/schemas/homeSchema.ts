import { APP_NAME, APP_DESCRIPTION, APP_URL, APP_FULL_DESCRIPTION } from "@/lib/constants"

/**
 * Menghasilkan schema untuk halaman utama
 * @returns Schema untuk halaman utama
 */
export function generateHomePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: `${APP_NAME} - ${APP_DESCRIPTION}`,
    description: APP_FULL_DESCRIPTION,
    url: APP_URL,
  }
}