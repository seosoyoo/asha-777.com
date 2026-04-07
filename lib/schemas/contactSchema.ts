import { APP_NAME, APP_URL } from "@/lib/constants"

/**
 * Menghasilkan schema untuk halaman kontak
 * @returns Schema untuk halaman kontak
 */
export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: `Contact ${APP_NAME} Support`,
    description: `Get in touch with ${APP_NAME} customer support. We're available 24/7 to assist with any questions about our casino games, sports betting, account issues, or promotions.`,
    url: `${APP_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: APP_NAME,
      telephone: "+880 1234 567890",
      email: `support@${APP_URL.replace("https://www.", "")}`,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+880 1234 567890",
        contactType: "customer service",
        areaServed: "BD",
        availableLanguage: ["English", "Bengali"],
        contactOption: "TollFree",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          opens: "00:00",
          closes: "23:59",
        },
      },
    },
  }
}
