import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "About ASHA777 become most trusted for Bangladesh Player because our security and technology always updated make your gaming experience in casino and sports bet is always great.",
  keywords: ["asha777", "asha 777"],
  openGraph: {
    title: "About Us",
    description:
      "About ASHA777 become most trusted for Bangladesh Player because our security and technology always updated make your gaming experience in casino and sports bet is always great.",
    url: "https://www.asha-777.com/about",
    siteName: "ASHA777",
    images: [
      {
        url: "/banner/asha777-banner05.webp",
        width: 1200,
        height: 630,
        alt: "ASHA777 - Bangladesh's Trusted Casino & Sports Betting",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description:
      "About ASHA777 become most trusted for Bangladesh Player because our security and technology always updated make your gaming experience in casino and sports bet is always great.",
    images: ["/banner/asha777-banner05.webp"],
  },
  alternates: {
    canonical: "https://www.asha-777.com/about",
  },
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
