import { APP_NAME, APP_URL, APP_DESCRIPTION } from "@/lib/constants"

/**
 * Menghasilkan schema untuk organisasi
 * @returns Schema untuk organisasi
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: APP_NAME,
    url: APP_URL,
    logo: `${APP_URL}/logo-asha777.png`,
    description: APP_DESCRIPTION,
    sameAs: [
      "https://www.facebook.com/groups/1032931335386298",
      "https://x.com/asha777_",
      "https://www.instagram.com/asha.777_",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-123-4567",
      contactType: "customer service",
      availableLanguage: ["English", "Bengali"],
    },
    foundingDate: "2025-04-20",
    foundingLocation: "Dhaka, Bangladesh",
    description: `Asha777 is the most trusted and most choice from Bangladesh's Player to play casino games online and cricket betting, login and claim your daily Bonus now.`,
  }
}
