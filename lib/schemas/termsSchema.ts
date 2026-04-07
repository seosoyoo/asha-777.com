import { APP_NAME, APP_URL } from "@/lib/constants"

/**
 * Menghasilkan schema untuk halaman terms & conditions
 * @param lastUpdated Tanggal terakhir update terms & conditions
 * @returns Schema untuk halaman terms & conditions
 */
export function generateTermsPageSchema(lastUpdated = "") {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions",
    description: `Read the Terms & Conditions of ${APP_NAME}. By using our platform, you agree to these terms which govern your use of our casino and sports betting services.`,
    url: `${APP_URL}/terms`,
    dateModified: lastUpdated || new Date().toISOString().split("T")[0],
    mainEntity: {
      "@type": "WebContent",
      headline: "Terms & Conditions",
      text: `Terms and conditions for using the ${APP_NAME} platform, including account rules, betting rules, and more.`,
    },
  }
}
