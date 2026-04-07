import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the Terms & Conditions of ASHA777. By using our platform, you agree to these terms which govern your use of our casino and sports betting services.",
  keywords: "asha777,asha 777",
  openGraph: {
    title: "Terms & Conditions",
    description:
      "Read the Terms & Conditions of ASHA777. By using our platform, you agree to these terms which govern your use of our casino and sports betting services.",
    url: "https://www.asha-777.com/terms",
    siteName: "ASHA777",
    images: [
      {
        url: "/banner/asha777-banner05.webp",
        width: 1200,
        height: 630,
        alt: "ASHA777 Terms & Conditions",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions",
    description:
      "Read the Terms & Conditions of ASHA777. By using our platform, you agree to these terms which govern your use of our casino and sports betting services.",
    images: ["/banner/asha777-banner05.webp"],
  },
  alternates: {
    canonical: "https://www.asha-777.com/terms",
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
