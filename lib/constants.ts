/**
 * Konstanta aplikasi
 * File ini berisi semua konstanta yang digunakan di seluruh aplikasi
 */

// Metadata aplikasi
export const APP_NAME = "ASHA777"
export const APP_DESCRIPTION = "Bangladesh's Leading Casino & Sports Betting"
export const APP_URL = "https://www.asha-777.com"
export const APP_FULL_DESCRIPTION =
  "Asha777 is the most trusted and most choice from Bangladesh's Player to play casino games online and cricket betting, login and claim your daily Bonus now."

// Konfigurasi regional
export const APP_LOCALE = "en" // Using English only
export const APP_REGION = "BD" // Target region: Bangladesh
export const APP_CURRENCY = "BDT" // Bangladesh Taka
export const APP_HREFLANG = "en-bd" // hreflang untuk Bangladesh

// Tambahkan konstanta untuk OpenGraph
export const OG_IMAGE_WIDTH = 1600
export const OG_IMAGE_HEIGHT = 600
export const OG_DEFAULT_IMAGE = "/banner/asha777-banner01.webp"
export const OG_DEFAULT_ALT = "ASHA777 - Bangladesh's Leading Casino & Sports Betting Platform"

// Kategori game
export const GAME_CATEGORIES = [
  { id: "all", name: "All Games" },
  { id: "slots", name: "Slots" },
  { id: "casino", name: "Casino" },
  { id: "sports", name: "Sports" },
  { id: "poker", name: "Poker" },
  { id: "fishing", name: "Fishing" },
  { id: "esports", name: "Esport" },
]

// Metode pembayaran
export const PAYMENT_METHODS = [
  { name: "bKash", logo: "bKash", image: "/payment-providers/asha777-bkash.jpg" },
  { name: "Nagad", logo: "Nagad", image: "/payment-providers/asha777-nagad.png" },
  { name: "Rocket", logo: "Rocket", image: "/payment-providers/asha777-rocket.png" },
  { name: "USDT", logo: "USDT", image: "/payment-providers/asha777-usdt.jpg" },
]

// Platform media sosial
export const SOCIAL_MEDIA = [
  { name: "Facebook", icon: "Facebook" },
  { name: "Twitter", icon: "Twitter" },
  { name: "Instagram", icon: "Instagram" },
  { name: "Youtube", icon: "Youtube" },
  { name: "Twitch", icon: "Twitch" },
  { name: "Discord", icon: "Disc" },
  { name: "Telegram", icon: "MessageSquare" },
]

// Navigasi utama
export const MAIN_NAVIGATION = [
  { name: "Home", href: "/" },
  { name: "Games", href: "/games" },
  { name: "Promotions", href: "/promotions" },
  { name: "About", href: "/about" },
  { name: "FAQ", href: "/faq" },
]

// Navigasi footer
export const FOOTER_LINKS = {
  games: [
    { name: "Slots", href: "/games?category=slots" },
    { name: "Casino", href: "/games?category=casino" },
    { name: "Sports", href: "/games?category=sports" },
    { name: "Poker", href: "/games?category=poker" },
    { name: "Fishing", href: "/games?category=fishing" },
    { name: "eSports", href: "/games?category=esports" },
  ],
  support: [
    { name: "About Us", href: "/about" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact Us", href: "/contact" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
}

// SEO Constants
export const SEO_TITLE_TEMPLATE = "ASHA777 | %s"
export const SEO_DEFAULT_TITLE = "ASHA777 - Bangladesh's Leading Casino & Sports Betting"
export const SEO_DESCRIPTION =
  "Asha777 is the most trusted choice for Bangladesh players to play casino games online and cricket betting. Login and claim your daily bonus now."
export const SEO_CANONICAL = "https://www.asha-777.com"
export const SEO_SITE_NAME = "ASHA777 - Bangladesh's Leading Casino & Sports Betting Platform"
export const SEO_LOCALE = "en_BD"
export const SEO_TYPE = "website"
