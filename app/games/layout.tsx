import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Collection Games High Winning Rate",
  description:
    "ASHA777 browse our games with huge of list that have high winning rate from Casino Online and Sports Betting like cricket, football, esports, etc in Bangladesh.",
  keywords: ["asha777", "asha 777"],
  openGraph: {
    title: "Collection Games High Winning Rate",
    description:
      "ASHA777 browse our games with huge of list that have high winning rate from Casino Online and Sports Betting like cricket, football, esports, etc in Bangladesh.",
    url: "https://www.asha-777.com/games",
    siteName: "ASHA777",
    images: [
      {
        url: "/banner/asha777-banner02.webp",
        width: 1200,
        height: 630,
        alt: "ASHA777 Games Collection",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Collection Games High Winning Rate",
    description:
      "ASHA777 browse our games with huge of list that have high winning rate from Casino Online and Sports Betting like cricket, football, esports, etc in Bangladesh.",
    images: ["/banner/asha777-banner02.webp"],
  },
  alternates: {
    canonical: "https://www.asha-777.com/games",
  },
}

export default function GamesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
