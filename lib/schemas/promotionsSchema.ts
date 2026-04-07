import { APP_NAME, APP_URL } from "@/lib/constants"

/**
 * Generates schema for promotions page
 * @returns Schema for promotions page with appropriate type
 */
export function generatePromotionsPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "SpecialAnnouncement",
    name: "Promotions Limited Time Offer",
    description: `${APP_NAME} Promotions known for its massive bonus for casino online and betting platform, with limited time event offer, sign up only from our official referral.`,
    text: "ASHA777 offers exclusive promotions including welcome bonuses, daily free spins, weekly cashback, and VIP rewards for Bangladeshi players. Limited time offers available now.",
    datePosted: "2025-04-01T00:00:00Z",
    expires: "2025-05-31T23:59:59Z",
    spatialCoverage: {
      "@type": "Country",
      name: "Bangladesh",
    },
    url: `${APP_URL}/promotions`,
    image: `${APP_URL}/banner/asha777-banner03.png`,
    publisher: {
      "@type": "Organization",
      name: APP_NAME,
      url: APP_URL,
      logo: {
        "@type": "ImageObject",
        url: `${APP_URL}/logo-asha777.png`,
        width: 112,
        height: 32,
      },
    },
    offers: [
      {
        "@type": "Offer",
        name: "Welcome Bonus",
        description: "100% bonus up to ৳10,000 on your first deposit",
        availability: "https://schema.org/InStock",
        price: "0",
        priceCurrency: "BDT",
        validFrom: "2025-04-01T00:00:00Z",
        validThrough: "2025-05-31T23:59:59Z",
      },
      {
        "@type": "Offer",
        name: "Weekly Cashback",
        description: "Get up to 15% cashback on your weekly losses",
        availability: "https://schema.org/InStock",
        price: "0",
        priceCurrency: "BDT",
        validFrom: "2025-04-01T00:00:00Z",
        validThrough: "2025-05-31T23:59:59Z",
      },
    ],
  }
}
