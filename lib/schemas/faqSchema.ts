import { APP_NAME, APP_URL } from "../config"

interface FAQItem {
  question: string
  answer: string
}

// Perbaikan untuk FAQ schema yang lebih lengkap
export function generateFAQPageSchema(faqItems: FAQItem[] = []) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    name: "FAQ Frequently Ask Question",
    description: `FAQ ${APP_NAME} with Our Customer Service that standby 24/7 for you always ready to answer and helping any question and problem for you.`,
    url: `${APP_URL}/faq`,
    inLanguage: "en-BD", // Spesifik untuk Bangladesh
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    author: {
      "@type": "Organization",
      name: APP_NAME,
      url: APP_URL,
    },
    publisher: {
      "@type": "Organization",
      name: APP_NAME,
      logo: {
        "@type": "ImageObject",
        url: `${APP_URL}/logo-asha777.png`,
      },
    },
    datePublished: "2025-04-22T00:00:00Z",
    dateModified: "2025-04-22T00:00:00Z",
  }
}
