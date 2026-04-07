"use client"

import { useState, useEffect } from "react"
import { getHomeContent } from "@/lib/content-loader"
import BannerSlider from "@/components/banner-slider"
import ScrollToTop from "@/components/scroll-to-top"
import TableOfContents from "@/components/table-of-contents"
import ClientJsonLd from "@/components/client-json-ld"
import PromotionPopup from "@/components/promotion-popup"
import GameGrid from "@/components/games/game-grid"
import GameProviders from "@/components/game-providers"
import PaymentProviders from "@/components/payment-providers"
import OneStopHubPlatform from "@/components/one-stop-hub-platform"
import ReasonChooseUs from "@/components/reason-choose-us"
import VIPPromotions from "@/components/vip-promotions"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { generateHomePageSchema } from "@/lib/schemas/homeSchema"
import { generateWebsiteSchema } from "@/lib/schemas/websiteSchema"
import { generateOrganizationSchema } from "@/lib/schemas/organizationSchema"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"

// Generate schema data
const homePageSchema = generateHomePageSchema()
const websiteSchema = generateWebsiteSchema()
const organizationSchema = generateOrganizationSchema()

export default function Home() {
  const [content, setContent] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [showAllGames, setShowAllGames] = useState(false)
  const [activeGameCategory, setActiveGameCategory] = useState("all")

  useEffect(() => {
    // Load content dynamically
    const loadContent = async () => {
      setIsLoading(true)
      const data = await getHomeContent()
      setContent(data)
      setIsLoading(false)
    }

    loadContent()
  }, [])

  // Generate schema data
  // const homePageSchema = generateHomePageSchema()
  // const websiteSchema = generateWebsiteSchema()
  // const organizationSchema = generateOrganizationSchema()

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]" aria-label="Loading content">
        <div
          className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-500"
          aria-hidden="true"
        ></div>
      </div>
    )
  }

  // Filter games by category
  const filteredGames =
    activeGameCategory === "all"
      ? content.featuredGames.games
      : content.featuredGames.games.filter((game: any) => game.category === activeGameCategory)

  // Calculate how many games to show
  const gamesToShow = showAllGames ? filteredGames : filteredGames.slice(0, 12)

  return (
    <div className="space-y-12">
      {/* Structured data */}
      <ClientJsonLd data={homePageSchema} />
      <ClientJsonLd data={websiteSchema} />
      <ClientJsonLd data={organizationSchema} />

      {/* Breadcrumb - only needed on homepage for consistency */}
      <div className="mb-6">
        <EnhancedBreadcrumb includeSchema={true} />
      </div>

      {/* Promotion Popup */}
      <PromotionPopup />

      {/* Banner Slider */}
      <BannerSlider />

      {/* Main content with proper heading hierarchy */}
      <div className="md:grid md:grid-cols-4 gap-6">
        <div className="hidden md:block">
          <TableOfContents />
        </div>
        <div className="md:col-span-3">
          <div className="md:hidden mb-6">
            <TableOfContents />
          </div>

          {/* H1 - Main page heading */}
          <h1 className="text-3xl font-bold mb-4">ASHA777 - Bangladesh's Leading Casino & Sports Betting</h1>
          <p className="text-zinc-400 mb-8">
            ASHA777 is the most trusted and most choice from Bangladesh's Player to play casino games online and cricket
            betting, login and claim your daily Bonus now.
          </p>

          {/* Featured Games with Tabs */}
          <section id="featured-games" className="py-12">
            <h2 className="text-2xl font-bold mb-6">{content.featuredGames.title}</h2>

            <Tabs defaultValue="all" onValueChange={setActiveGameCategory}>
              <TabsList className="mb-6">
                <TabsTrigger value="all">All Games</TabsTrigger>
                <TabsTrigger value="slots">Slots</TabsTrigger>
                <TabsTrigger value="casino">Casino</TabsTrigger>
                <TabsTrigger value="sports">Sports</TabsTrigger>
                <TabsTrigger value="poker">Poker</TabsTrigger>
                <TabsTrigger value="fishing">Fishing</TabsTrigger>
                <TabsTrigger value="esports">ESports</TabsTrigger>
              </TabsList>
            </Tabs>

            <GameGrid games={gamesToShow} />

            {filteredGames.length > 12 && !showAllGames && (
              <div className="mt-8 text-center">
                <Button onClick={() => setShowAllGames(true)} className="bg-yellow-500 hover:bg-yellow-600 text-black">
                  View More Games
                </Button>
              </div>
            )}

            <div className="mt-8 text-center">
              <Link href="/games">
                <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10">
                  {content.featuredGames.viewAll}
                </Button>
              </Link>
            </div>
          </section>

          {/* Game Providers */}
          <GameProviders />

          {/* VIP Promotions */}
          <VIPPromotions />

          {/* Payment Providers */}
          <PaymentProviders />

          {/* One Stop Hub Platform */}
          <OneStopHubPlatform />

          {/* Reason Choose Us */}
          <ReasonChooseUs />
        </div>
      </div>

      {/* Scroll to Top Button */}
      <ScrollToTop />
    </div>
  )
}
