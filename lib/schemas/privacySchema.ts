import { APP_NAME, APP_URL } from "@/lib/constants"

/**
 * Menghasilkan schema untuk halaman privacy policy
 * @param lastUpdated Tanggal terakhir update privacy policy
 * @returns Schema untuk halaman privacy policy
 */
export function generatePrivacyPageSchema(lastUpdated = "") {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description: `Learn how ${APP_NAME} collects, uses, and protects your personal information. Our Privacy Policy explains our data practices and your privacy rights.`,
    url: `${APP_URL}/privacy`,
    dateModified: lastUpdated || new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "WebContent",
      headline: "Privacy Policy",
      text: `Privacy policy for ${APP_NAME}, including information collection, use, sharing, and user rights.`,
    },
  }
}
