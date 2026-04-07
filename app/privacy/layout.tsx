import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how ASHA777 collects, uses, and protects your personal information. Our Privacy Policy explains our data practices and your privacy rights.",
  keywords: "asha777,asha 777",
  openGraph: {
    title: "Privacy Policy",
    description:
      "Learn how ASHA777 collects, uses, and protects your personal information. Our Privacy Policy explains our data practices and your privacy rights.",
    url: "/privacy",
    siteName: "ASHA777",
    images: [
      {
        url: "/banner/asha777-banner05.webp",
        width: 1200,
        height: 630,
        alt: "ASHA777 Privacy Policy",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy",
    description:
      "Learn how ASHA777 collects, uses, and protects your personal information. Our Privacy Policy explains our data practices and your privacy rights.",
    images: ["/banner/asha777-banner05.webp"],
  },
  alternates: {
    canonical: "/privacy",
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
