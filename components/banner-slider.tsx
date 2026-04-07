"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"

interface BannerSlide {
  id: number
  image: string
  alt?: string
}

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isLoaded, setIsLoaded] = useState(false)

  const banners: BannerSlide[] = [
    {
      id: 1,
      image: "/banner/asha777-banner01.webp",
      alt: "ASHA777 Casino and Sports Betting - Welcome Bonus Offer",
    },
    {
      id: 2,
      image: "/banner/asha777-banner02.webp",
      alt: "ASHA777 Featured Games Collection - Play and Win",
    },
    {
      id: 3,
      image: "/banner/asha777-banner03.webp",
      alt: "ASHA777 Promotions and Special Offers - Limited Time",
    },
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
    }, 5000)
    return () => clearInterval(interval)
  }, [banners.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  if (!isLoaded) return null

  return (
    <div className="relative w-full overflow-hidden rounded-xl">
      {/* Full-width responsive container with consistent aspect ratio */}
      <div className="relative w-full" style={{ paddingBottom: "40%" }}>
        {/* Slides */}
        <div className="absolute inset-0">
          {banners.map((banner, index) => (
            <div
              key={banner.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                currentSlide === index ? "opacity-100" : "opacity-0 pointer-events-none"
              }`}
              aria-hidden={currentSlide !== index}
            >
              <div className="absolute inset-0 bg-zinc-900/30"></div>
              <Image
                src={banner.image || "/placeholder.svg"}
                alt={banner.alt || `ASHA777 Banner ${banner.id}`}
                title={`ASHA777 Banner ${banner.id}`}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement
                  target.src = "/placeholder.svg"
                }}
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows - made larger and more visible on mobile */}
        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center bg-black/60 hover:bg-black/80 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10"
          onClick={prevSlide}
          aria-label="Previous slide"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </button>
        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 flex items-center justify-center bg-black/60 hover:bg-black/80 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10"
          onClick={nextSlide}
          aria-label="Next slide"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
        </button>

        {/* Indicators - made larger for mobile */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex space-x-3" role="tablist">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all ${
                currentSlide === index ? "bg-yellow-500 scale-110" : "bg-white/70"
              }`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              aria-selected={currentSlide === index}
              role="tab"
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}
