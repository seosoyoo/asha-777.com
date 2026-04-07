"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { GAME_CATEGORIES, MAIN_NAVIGATION } from "@/lib/constants"
import { handleImageError } from "@/lib/utils"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-zinc-900 border-b border-zinc-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center" aria-label="ASHA777 Home">
              <div className="relative h-8 w-32">
                <Image
                  src="/logo-asha777.png"
                  alt="ASHA777 Logo"
                  title="ASHA777 Logo"
                  fill
                  priority
                  sizes="(max-width: 768px) 128px, 128px"
                  className="object-contain"
                  onError={(e) => handleImageError(e, 128, 32)}
                />
              </div>
            </Link>

            <nav className="hidden md:ml-10 md:flex md:space-x-8">
              {MAIN_NAVIGATION.map((item, index) =>
                item.name === "Games" ? (
                  <DropdownMenu key={index}>
                    <DropdownMenuTrigger asChild>
                      <button
                        className="flex items-center text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium"
                        aria-label="Games menu"
                      >
                        Games <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="bg-zinc-900 border-zinc-600">
                      {GAME_CATEGORIES.filter((cat) => cat.id !== "all").map((category, idx) => (
                        <DropdownMenuItem key={idx} className="hover:bg-zinc-800 focus:bg-zinc-800">
                          <Link
                            href={`/games?category=${category.id}`}
                            className="w-full"
                            aria-label={`Browse ${category.name} games`}
                          >
                            {category.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    key={index}
                    href={item.href}
                    className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium"
                    aria-label={`Visit ${item.name} page`}
                  >
                    {item.name}
                  </Link>
                ),
              )}
            </nav>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-4">
            <Link href="https://ash521.com/m/index.html?affiliateCode=aliance" rel="nofollow noopener noreferrer" aria-label="Login to your account">
              <Button
                variant="outline"
                className="border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/20 font-medium"
              >
                Login
              </Button>
            </Link>
            <Link href="https://ash521.com/m/index.html?affiliateCode=aliance" rel="nofollow noopener noreferrer" aria-label="Create a new account">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">Sign Up</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              type="button"
              className="text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {MAIN_NAVIGATION.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-3 py-2 text-base font-medium text-white hover:bg-zinc-800"
                onClick={() => setIsMenuOpen(false)}
                aria-label={`Visit ${item.name} page`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 flex flex-col space-y-2">
              <Link
                href="https://ash521.com/m/index.html?affiliateCode=aliance"
                rel="nofollow noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Login to your account"
              >
                <Button
                  variant="outline"
                  className="w-full border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/20 font-medium"
                >
                  Login
                </Button>
              </Link>
              <Link
                href="https://ash521.com/m/index.html?affiliateCode=aliance"
                rel="nofollow noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Create a new account"
              >
                <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
