import { APP_NAME, APP_URL } from "@/lib/constants"

/**
 * Menghasilkan schema untuk halaman about
 * @returns Schema untuk halaman about
 */
export function generateAboutPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Us",
    description: `About ${APP_NAME} become most trusted for Bangladesh Player because our security and technology always updated make your gaming experience in casino and sports bet is always great.`,
    url: `${APP_URL}/about`,
    mainEntity: {
      "@type": "Organization",
      name: "About Us",
      url: "https://www.asha-777.com/about",
      logo: `${APP_URL}/logo-asha777.png`,
      description: "About ASHA777 become most trusted for Bangladesh Player because our security and technology always updated make your gaming experience in casino and sports bet is always great.",
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
      description: `About ASHA777 become most trusted for Bangladesh Player because our security and technology always updated make your gaming experience in casino and sports bet is always great.`,
    },
  }
}
