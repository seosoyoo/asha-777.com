import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ScrollToTop from "@/components/scroll-to-top"
import TableOfContentsAbout from "./table-of-contents-about"
import ClientJsonLd from "@/components/client-json-ld"
import FallbackImage from "@/components/fallback-image"
import { generateAboutPageSchema } from "@/lib/schemas/aboutSchema"
import { generateBreadcrumbSchema } from "@/lib/schemas/breadcrumbSchema"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"

// This is a server component by default in the App Router
export default function AboutPage() {
  const currentUrl = "https://www.asha-777.com/about"

  // Generate schema untuk halaman About
  const aboutPageSchema = generateAboutPageSchema()
  const breadcrumbSchema = generateBreadcrumbSchema(currentUrl)

  return (
    <div className="space-y-8">
      {/* Structured data */}
      <ClientJsonLd data={aboutPageSchema} />
      <ClientJsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="mb-6">
        <EnhancedBreadcrumb />
      </div>
      <div className="space-y-12">
        {/* Main content with proper heading hierarchy */}
        <div className="md:grid md:grid-cols-4 gap-6">
          <div className="hidden md:block">
            <TableOfContentsAbout />
          </div>
          <div className="md:col-span-3">
            <div className="md:hidden mb-6">
              <TableOfContentsAbout />
            </div>

            {/* H1 - Main page heading */}
            <h1 className="text-3xl font-bold mb-4">About Us</h1>
            <p className="text-zinc-400 mb-8">
              About ASHA777 become most trusted for Bangladesh Player because our security and technology always updated
              make your gaming experience in casino and sports bet is always great.
            </p>

            {/* Featured Games with Tabs */}
            <section id="introduction" className="py-12">
              <h2 className="text-2xl font-bold mb-6">Introduction to ASHA777</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      <strong>
                        <a href="https://www.asha-777.com" rel="dofollow">
                          ASHA777
                        </a>
                      </strong>{" "}
                      as Bangladesh's premier onlineplatform for casino and sports betting enthusiasts. We are built
                      forpassionate gamers and sports lovers in Bangladesh who seek reliable,thrilling, and rewarding
                      online gaming experiences.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      If you are here for live casino gamesonline, classic slots, or competitive sports betting on your
                      favoriteteam, ASHA777 offers you a trusted, secure, and seamless environment toplay and win.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      We take pride in being one of the mosttalked-about names in the Bangladeshi betting community and
                      ASHA777 israpidly becoming the go-to brand for both casual players and professionalpunters.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="our-story" className="py-12">
              <h2 className="text-2xl font-bold mb-6">Our Story: How ASHA777 Was Born</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      ASHA777 was founded by a group of sportsfanatics, casino lovers, and tech innovators passionate
                      about creating aworld-class gaming hub for Bangladesh.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      The word ASHA means hope in Bengali andthat's exactly what we aim to bring: hope, excitement, and
                      opportunity toevery player who joins our platform.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      Our founders noticed a gap in theBangladeshi market for a reliable, safe, and transparent online
                      casino andsports betting platform. With years of experience in international gaming,our team
                      decided to launch a homegrown platform that meets global standardswhile understanding the unique
                      preferences of Bangladeshi players.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      Since our inception, ASHA777 has growninto a dynamic, player-first brand trusted by thousands
                      across Dhaka,Chattogram, Sylhet, Rajshahi, and beyond.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="what-we-offer" className="py-12">
              <h2 className="text-2xl font-bold mb-6">What We Offer at ASHA777</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      At ASHA777, we deliver a wide selection of entertainment options tailored to meet every gaming
                      style.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">Casino Games Online</h3>
                    <p className="mb-6 text-zinc-300">
                      From classic slots to modern slots, roulette, baccarat, and blackjack, we provide premium casino
                      experiences powered by industry leading providers.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      <strong>Highlights:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>1000+ slot games</li>
                      <li>Live casino tables with real dealers</li>
                      <li>Progressive jackpot games</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">Sports Betting</h3>
                    <p className="mb-6 text-zinc-300">
                      Bet on your favorite sports, both local and international. From cricket, football, kabaddi to
                      tennis — ASHA777 covers them all.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      <strong>Features:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Live sports betting</li>
                      <li>Pre-match & in-play betting</li>
                      <li>Competitive odds on local and global tournaments</li>
                      <li>Cricket specials for BPL & IPL seasons</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">eSports & Virtual Sports</h3>
                    <p className="mb-6 text-zinc-300">
                      Join the fastest-growing online gaming segments with eSports betting and virtual sports leagues,
                      exclusively at ASHA777.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="why-players-choose-us" className="py-12">
              <h2 className="text-2xl font-bold mb-6">Why Bangladeshi Players Choose ASHA777</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div className="aspect-square relative bg-zinc-800 rounded-lg overflow-hidden">
                  <FallbackImage
                    src="/banner/asha777-banner05.png"
                    alt="ASHA777 VIP Exclusive Promotion"
                    title="ASHA777 VIP Exclusive Promotion"
                    fill
                    className="object-cover"
                    priority
                    fallbackSrc="/placeholder.svg?height=600&width=600"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <div className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm inline-block mb-3 w-fit">
                      LIMITED TIME
                    </div>
                    <h3 className="text-2xl font-bold mb-2">VIP Exclusive Limited Promo</h3>
                    <p className="mb-4 text-zinc-300">
                      Everyone loves a good bonus. At Asha777, they don't just hand out welcome offers they keep the
                      rewards coming.
                    </p>
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black w-fit">
                      <a href="https://asha777-login.pages.dev" rel="nofollow noreferrer noopener">
                        Claim Offer
                      </a>
                    </Button>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-yellow-400">
                    Thousands of players across Bangladesh trust ASHA777 because we offer:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-yellow-500 rounded-full p-1 mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-black"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">100% Safe & Legal Platform:</span>
                        <p className="text-sm text-zinc-400">
                          Operated under strict regulations, ensuring data safety and fair play.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-500 rounded-full p-1 mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-black"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Tailored for Bangladesh:</span>
                        <p className="text-sm text-zinc-400">
                          From cricket bets to local tournaments, ASHA777 understands what Bangladesh wants.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-500 rounded-full p-1 mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-black"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Fast Deposits & Withdrawals:</span>
                        <p className="text-sm text-zinc-400">Including bKash, Nagad, Rocket.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-500 rounded-full p-1 mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-black"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">24/7 Bangla Customer Support:</span>
                        <p className="text-sm text-zinc-400">
                          Friendly and responsive support staff, ready in your native language.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-yellow-500 rounded-full p-1 mr-3 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-3 w-3 text-black"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <span className="font-medium">Exciting Bonuses & Promotions:</span>
                        <p className="text-sm text-zinc-400">
                          Welcome bonuses, cashback offers, weekly free spins, and much more.
                        </p>
                      </div>
                    </li>
                  </ul>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black w-fit">
                    <a href="https://www.asha-777.com" rel="nofollow noreferrer noopener">
                      Register
                    </a>
                  </Button>
                </div>
              </div>
            </section>

            <section id="comitment-responsible-gaming" className="py-12">
              <h2 className="text-2xl font-bold mb-6">Commitment to Responsible Gaming</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      ASHA777 is dedicated to creating a safe, fun, and responsible betting environment. We encourage
                      all players to enjoy our platform responsibly, offering tools like:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Deposit limits</li>
                      <li>Self-exclusion options</li>
                      <li>Reality checks</li>
                      <li>Professional support resources for those who need help</li>
                    </ul>
                    <p className="mb-6 text-zinc-300">
                      Our responsible gaming policy ensures that ASHA777 remains a positive force in the Bangladeshi
                      gaming industry.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="sports-betting" className="py-12">
              <h2 className="text-2xl font-bold mb-6">Sports Betting with ASHA777</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      No other platform understands Bangladesh's sports betting culture like{" "}
                      <strong>
                        <a href="https://www.asha-777.com" rel="dofollow">
                          ASHA777 Bet
                        </a>
                      </strong>
                      . Cricket fans can bet on:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Bangladesh Premier League (BPL)</li>
                      <li>Indian Premier League (IPL)</li>
                      <li>International cricket matches (ODI, T20, Test)</li>
                    </ul>
                    <p className="mb-6 text-zinc-300">Other sports available:</p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Football: Premier League, La Liga, Serie A</li>
                      <li>Tennis Grand Slams</li>
                      <li>Kabaddi tournaments</li>
                      <li>MMA & Boxing fights</li>
                    </ul>
                    <p className="mb-6 text-zinc-300">
                      Enjoy live betting on your mobile with real-time odds and instant updates.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="casino-games" className="py-12">
              <h2 className="text-2xl font-bold mb-6">Casino Games Online You'll Love at ASHA777</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      With over 1000 games to choose from,{" "}
                      <strong>
                        <a href="https://www.asha-777.com" rel="dofollow">
                          ASHA777 Casino
                        </a>
                      </strong>{" "}
                      ensures endless entertainment:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>
                        <strong>Popular Slots:</strong> Sweet Bonanza, Gates of Olympus, Book of Dead
                      </li>
                      <li>
                        <strong>Live Casino:</strong> Real dealers, real winnings stream roulette, blackjack, baccarat
                        in HD
                      </li>
                      <li>
                        <strong>Table Games:</strong> Virtual versions of your favorite casino classics
                      </li>
                      <li>
                        <strong>Progressive Jackpots:</strong> Life-changing prizes waiting to be claimed
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="vission-future" className="py-12">
              <h2 className="text-2xl font-bold mb-6">ASHA777 Vision for the Future</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      Our mission doesn't stop here. The future of ASHA777 is filled with exciting plans:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Launching exclusive ASHA777 mobile app</li>
                      <li>Expanding into eSports betting</li>
                      <li>Sponsoring local sports tournaments</li>
                      <li>Hosting ASHA777 exclusive tournaments for Bangladeshi players</li>
                      <li>Becoming the most trusted gaming brand in South Asia</li>
                    </ul>
                    <p className="mb-6 text-zinc-300">
                      We're not just building a gaming platform, we're building a community.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </div>
  )
}
