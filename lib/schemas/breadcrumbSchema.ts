import { APP_URL } from "@/lib/constants"

/**
 * Menghasilkan schema untuk breadcrumb
 * @param currentPageName Nama halaman saat ini
 * @param currentPageUrl URL halaman saat ini
 * @returns Schema untuk breadcrumb
 */
export function generateBreadcrumbSchema(currentPageName: string, currentPageUrl: string) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "ASHA777",
        item: APP_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: currentPageName,
        item: currentPageUrl,
      },
    ],
  }
}
