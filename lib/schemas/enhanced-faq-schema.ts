import { APP_NAME, APP_URL } from "@/lib/constants"

interface FAQItem {
  question: string
  answer: string
}

/**
 * Menghasilkan schema untuk halaman FAQ yang lebih lengkap
 * @param faqItems Array dari item FAQ (pertanyaan dan jawaban)
 * @returns Schema untuk halaman FAQ
 */
export function generateEnhancedFAQSchema(faqItems: FAQItem[] = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    publisher: {
      "@type": "Organization",
      name: APP_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${APP_URL}/logo-asha777.png`,
        width: 112,
        height: 32,
      },
    },
    inLanguage: "en-BD",
    datePublished: "2025-04-22T00:00:00Z",
    dateModified: new Date().toISOString(),
    author: {
      "@type": "Organization",
      name: APP_NAME,
      url: APP_URL,
    },
  }
}
