import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with ASHA777 customer support. We're available 24/7 to assist with any questions about our casino games, sports betting, account issues, or promotions.",
  keywords: ["asha777", "asha 777"],
  openGraph: {
    title: "Contact Us",
    description:
      "Get in touch with ASHA777 customer support. We're available 24/7 to assist with any questions about our casino games, sports betting, account issues, or promotions.",
    url: "https://www.asha-777.com/contact",
    siteName: "ASHA777",
    images: [
      {
        url: "/banner/asha777-banner03.webp",
        width: 1200,
        height: 630,
        alt: "ASHA777 Contact Support",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us",
    description:
      "Get in touch with ASHA777 customer support. We're available 24/7 to assist with any questions about our casino games, sports betting, account issues, or promotions.",
    images: ["/banner/asha777-banner03.webp"],
  },
  alternates: {
    canonical: "https://www.asha-777.com/contact",
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
