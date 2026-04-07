import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Promotions Limited Time Offer",
  description:
    "ASHA777 Promotions known for its massive bonus for casino online and betting platform, with limited time event offer, sign up only from our official referral.",
  keywords: ["asha777", "asha 777"],
  openGraph: {
    title: "Promotions Limited Time Offer",
    description:
      "ASHA777 Promotions known for its massive bonus for casino online and betting platform, with limited time event offer, sign up only from our official referral.",
    url: "https://www.asha-777.com/promotions",
    siteName: "ASHA777",
    images: [
      {
        url: "/banner/asha777-banner03.webp",
        width: 1200,
        height: 630,
        alt: "ASHA777 - Bangladesh's Trusted Casino & Sports Betting",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Promotions Limited Time Offer",
    description:
      "ASHA777 Promotions known for its massive bonus for casino online and betting platform, with limited time event offer, sign up only from our official referral.",
    images: ["/banner/asha777-banner03.webp"],
  },
  alternates: {
    canonical: "https://www.asha-777.com/promotions",
  },
}

export default function PromotionsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
