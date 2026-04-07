"use client"

import Image from "next/image"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube, Twitch, Disc, MessageSquare } from "lucide-react"
import { PAYMENT_METHODS, SOCIAL_MEDIA, FOOTER_LINKS } from "@/lib/constants"
import { handleImageError } from "@/lib/utils"

export default function Footer() {
  // Map ikon media sosial
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case "Facebook":
        return <Facebook className="h-5 w-5" aria-hidden="true" />
      case "Twitter":
        return <Twitter className="h-5 w-5" aria-hidden="true" />
      case "Instagram":
        return <Instagram className="h-5 w-5" aria-hidden="true" />
      case "Youtube":
        return <Youtube className="h-5 w-5" aria-hidden="true" />
      case "Twitch":
        return <Twitch className="h-5 w-5" aria-hidden="true" />
      case "Disc":
        return <Disc className="h-5 w-5" aria-hidden="true" />
      case "MessageSquare":
        return <MessageSquare className="h-5 w-5" aria-hidden="true" />
      default:
        return <Facebook className="h-5 w-5" aria-hidden="true" />
    }
  }

  return (
    <footer className="bg-zinc-900 border-t border-zinc-700 py-8">
      <div className="container mx-auto px-4">
        {/* Payment Providers Section */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4 text-yellow-400 text-center">Payment Methods</h3>
          <div className="flex justify-center items-center mb-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {PAYMENT_METHODS.map((provider, index) => (
                <div key={index} className="flex flex-col items-center">
                  {/* Fixed height container to prevent layout shift */}
                  <div className="w-24 h-14 bg-zinc-800/80 rounded-lg flex items-center justify-center mb-2 p-2">
                    <div className="relative w-full h-full">
                      <Image
                        src={provider.image || "/placeholder.svg"}
                        alt={`${provider.name} payment method for ASHA777`}
                        width={96}
                        height={56}
                        sizes="96px"
                        className="object-contain"
                        loading="eager" // Change from lazy to eager for above-fold content
                        onError={(e) => handleImageError(e, 80, 40)}
                      />
                    </div>
                  </div>
                  <p className="text-sm text-white font-medium text-center h-5">{provider.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mb-8">
          <h3 className="text-lg font-bold mb-4 text-yellow-400 text-center">Connect With Us</h3>
          <div className="flex flex-wrap gap-4 justify-center">
            {SOCIAL_MEDIA.map((platform, index) => (
              <Link
                key={index}
                href="/"
                className="flex items-center justify-center w-10 h-10 bg-zinc-800 rounded-full hover:bg-yellow-500 hover:text-black transition-colors"
                aria-label={`Follow us on ${platform.name}`}
              >
                {getSocialIcon(platform.icon)}
              </Link>
            ))}
          </div>
        </div>

        {/* Separator after Connect With Us */}
        <div className="border-t border-zinc-700 my-8"></div>

        {/* Footer columns - changed from 4 to 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="min-h-[150px]">
            <div className="mb-4 overflow-visible flex justify-start">
              <div className="relative h-12 w-40">
                <Image
                  src="/logo-asha777.png"
                  alt="ASHA777 Logo"
                  title="ASHA777 Logo"
                  fill
                  className="object-contain object-left"
                  sizes="160px"
                  priority={true}
                  onError={(e) => handleImageError(e, 160, 48, "ASHA777 Logo")}
                />
              </div>
            </div>
            <p className="text-zinc-200 text-sm">
              ASHA777 is the most trusted and most choice from Bangladesh's Player to play casino games online and
              cricket betting, login and claim your daily Bonus now.
            </p>
          </div>

          <div className="min-h-[150px]">
            <h3 className="text-lg font-bold mb-4">Games</h3>
            <ul className="space-y-2 text-sm">
              {FOOTER_LINKS.games.slice(0, 6).map((link, index) => (
                <li key={`games-${index}`}>
                  <Link
                    href={link.href}
                    className="text-zinc-200 hover:text-yellow-400"
                    aria-label={`Browse ${link.name} games`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              
            </ul>
          </div>

          <div className="min-h-[150px]">
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
            {FOOTER_LINKS.support.slice(0, 5).map((link, index) => (
                <li key={`support-${index}`}>
                  <Link
                    href={link.href}
                    className="text-zinc-200 hover:text-yellow-400"
                    aria-label={`Visit ${link.name} page`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-zinc-700 text-center text-zinc-300 text-sm">
          <p>© {new Date().getFullYear()} ASHA777. All rights reserved.</p>
          <p className="mt-2">
            Build by Soyo
          </p>
        </div>
      </div>
    </footer>
  )
}
