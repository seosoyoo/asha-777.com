import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ASHA777 - Bangladesh's Leading Casino & Sports Betting",
  description:
    "Asha777 is the most trusted and most choice from Bangladesh's Player to play casino games online and cricket betting, login and claim your daily Bonus now.",
  keywords: ["asha777", "asha 777"],
  openGraph: {
    title: "ASHA777 - Bangladesh's Leading Casino & Sports Betting",
    description:
      "Asha777 is the most trusted and most choice from Bangladesh's Player to play casino games online and cricket betting, login and claim your daily Bonus now.",
    url: "https://www.asha-777.com",
    siteName: "ASHA777",
    images: [
      {
        url: "/banner/asha777-banner01.webp",
        width: 1200,
        height: 630,
        alt: "ASHA777 - Bangladesh's Leading Casino & Sports Betting",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASHA777 - Bangladesh's Leading Casino & Sports Betting",
    description:
      "Asha777 is the most trusted and most choice from Bangladesh's Player to play casino games online and cricket betting, login and claim your daily Bonus now.",
    images: ["/banner/asha777-banner04.png"],
  },
  alternates: {
    canonical: "https://www.asha-777.com",
  },
}

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
