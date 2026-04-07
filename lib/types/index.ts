// Helper Types for Type Safety

// Game Object Type
export type Game = {
  id: string
  title: string
  provider: string
  image: string
  category: string
  rating?: number
  isNew?: boolean
  isHot?: boolean
}

// SEO Metadata Type
export type SEOMetadata = {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  ogType?: string
  twitterCard?: string
}

// Page Metadata Type
export type PageMetadata = {
  seo: SEOMetadata
  createdAt?: string
  updatedAt?: string
  author?: string
}

// Regional Settings Type
export type RegionalSettings = {
  language: string
  country: string
  currency: string
  timezone: string
}

// User Preferences Type
export type UserPreferences = {
  theme: "light" | "dark" | "system"
  fontSize: "sm" | "md" | "lg"
  reducedMotion: boolean
}
