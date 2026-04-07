import type { MetadataRoute } from "next"
import { getGamesContent } from "@/lib/content-loader"
import { APP_URL, GAME_CATEGORIES } from "@/lib/constants"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = APP_URL
  const lastModified = new Date()

  // URL untuk halaman statis
  const staticPages = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/games`,
      lastModified,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/promotions`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly" as const,
      priority: 0.4,
    },
  ]

  return [...staticPages]
}
