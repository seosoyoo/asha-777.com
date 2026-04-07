import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "FAQ Frequently Asked Questions",
  description:
    "FAQ ASHA777 with Our Customer Service that standby 24/7 for you always ready to answer and helping any question and problem for you.",
  keywords: ["asha777", "asha 777"],
  openGraph: {
    title: "FAQ Frequently Asked Questions",
    description:
      "FAQ ASHA777 with Our Customer Service that standby 24/7 for you always ready to answer and helping any question and problem for you.",
    url: "https://www.asha-777.com/faq",
    siteName: "ASHA777",
    images: [
      {
        url: "/banner/asha777-banner03.webp",
        width: 1200,
        height: 630,
        alt: "ASHA777 FAQ and Support",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ Frequently Asked Questions",
    description:
      "FAQ ASHA777 with Our Customer Service that standby 24/7 for you always ready to answer and helping any question and problem for you.",
    images: ["/banner/asha777-banner03.webp"],
  },
  alternates: {
    canonical: "https://www.asha-777.com/faq",
  },
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
