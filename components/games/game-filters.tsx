"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import { GAME_CATEGORIES } from "@/lib/constants"
import { fixAriaAttributes } from "@/lib/utils" // Add this import

interface GameFiltersProps {
  onCategoryChange: (category: string) => void
  onSearchChange: (query: string) => void
  defaultCategory?: string
}

export default function GameFilters({ onCategoryChange, onSearchChange, defaultCategory = "all" }: GameFiltersProps) {
  const [searchQuery, setSearchQuery] = useState("")

  // Add useEffect to fix ARIA attributes after rendering
  useEffect(() => {
    // Fix any invalid ARIA attributes after the component renders
    fixAriaAttributes()
  }, [])

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearchChange(query)
  }

  const handleCategoryChange = (category: string) => {
    onCategoryChange(category)
    // Fix ARIA attributes after category change
    setTimeout(fixAriaAttributes, 0)
  }

  return (
    <div className="space-y-6">
      <div className="overflow-hidden">
        <Tabs defaultValue={defaultCategory} onValueChange={handleCategoryChange}>
          <TabsList className="w-full overflow-x-auto scrollbar-hide flex whitespace-nowrap">
            {GAME_CATEGORIES.map((category) => (
              <TabsTrigger key={category.id} value={category.id} id={`tab-${category.id}`}>
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      <div className="relative w-full md:w-1/3">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-400" />
        <Input
          placeholder="Search games..."
          className="pl-10 bg-zinc-900 border-zinc-700"
          value={searchQuery}
          onChange={handleSearchChange}
          aria-label="Search games"
        />
      </div>
    </div>
  )
}
