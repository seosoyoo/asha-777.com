import type React from "react"
import ClientLayout from "./client-layout"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import type { Metadata, Viewport } from "next"
import { Suspense } from "react"
import { APP_NAME, APP_DESCRIPTION, APP_URL, APP_FULL_DESCRIPTION } from "@/lib/constants"
import { SkipToContent } from "@/components/skip-to-content"

export const metadata: Metadata = {
  title: {
    default: `${APP_NAME} - ${APP_DESCRIPTION}`,
    template: `${APP_NAME} | %s `,
  },
  description: APP_FULL_DESCRIPTION,
  keywords: [
    "asha777",
    "asha 777",
  ],
  authors: [{ name: "Soyoo" }],
  creator: "Soyo",
  publisher: APP_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(APP_URL),
  alternates: {
    canonical: APP_URL,
    languages: {
      "en-BD": `${APP_URL}`,
      "x-default": `${APP_URL}`,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_BD", // Specific English locale for Bangladesh
    url: APP_URL,
    title: `${APP_NAME} - ${APP_DESCRIPTION}`,
    description: APP_FULL_DESCRIPTION,
    siteName: `${APP_NAME} - ${APP_DESCRIPTION}`,
    images: [
      {
        url: "/banner/asha777-banner01.webp",
        width: 1200,
        height: 630,
        alt: "ASHA777 - Bangladesh's Leading Casino & Sports Betting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${APP_NAME} - ${APP_DESCRIPTION}`,
    description: APP_FULL_DESCRIPTION,
    images: [
      {
        url: "/banner/asha777-banner04.webp",
        alt: "ASHA777 - Bangladesh's Leading Casino & Sports Betting",
      },
    ],
    creator: "@asha777_official",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "pLtuGq_WD13mw7-XVFiHiKo3npquMS5eJn6rHOuwCOQ",
    yandex: "a2246738ea030495",
  },
  generator: "Soyo",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#18181b" },
    { media: "(prefers-color-scheme: light)", color: "#18181b" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Favicon with varied sizes */}
        <link rel="icon" type="image/png" href="/favicon-asha777.png" />
        <link rel="icon" type="image/png" href="/favicon-asha777.png" sizes="32x32" />
        <link rel="icon" type="image/png" href="/favicon-asha777.png" sizes="16x16" />
        <link rel="apple-touch-icon" type="image/png" href="/favicon-asha777.png" sizes="180x180" />

        {/* DNS Prefetch and Preconnect for important domains */}
        <link rel="dns-prefetch" href="https://asha777-login.pages.dev" />
        <link rel="preconnect" href="https://asha777-login.pages.dev" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://vitals.vercel-insights.com" />

        {/* Preload critical resources */}
        <link rel="preload" href="/logo-asha777.png" as="image" type="image/png" fetchPriority="high" />
        <link rel="preload" href="/logo-asha777.png" as="image" type="image/png" />
        <link rel="preload" href="/banner/asha777-banner01.webp" as="image" type="image/png" />

        {/* Preload critical fonts */}
        <link rel="preload" href="/fonts/system-font.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />

        {/* hreflang tags for Bangladesh */}
        <link rel="alternate" hrefLang="en-bd" href="https://www.asha-777.com/" />
        <link rel="alternate" hrefLang="x-default" href="https://www.asha-777.com/" />

        <meta name="theme-color" content="#18181b" />
      </head>
      <body className="bg-black text-white min-h-screen">
        <SkipToContent />
        <div id="main-content">
          <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
            <ClientLayout>{children}</ClientLayout>
          </Suspense>
          <Analytics />
        <SpeedInsights />
        </div>
      </body>
    </html>
  )
}
