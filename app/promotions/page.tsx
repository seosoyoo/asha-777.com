import { Card, CardContent } from "@/components/ui/card"
import ScrollToTop from "@/components/scroll-to-top"
import TableOfContentsPromotions from "./table-of-contents-promotions"
import ClientJsonLd from "@/components/client-json-ld"
import { generatePromotionsPageSchema } from "@/lib/schemas/promotionsSchema"
import { generateBreadcrumbSchema } from "@/lib/schemas/breadcrumbSchema"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"

export default function PromotionsPage() {
  // Define schema for structured data
  const promotionsPageSchema = generatePromotionsPageSchema()
  const breadcrumbSchema = generateBreadcrumbSchema("https://www.asha-777.com/promotions")

  return (
    <div className="space-y-8">
      {/* Structured data */}
      <ClientJsonLd data={promotionsPageSchema} />
      <ClientJsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="mb-6">
        <EnhancedBreadcrumb />
      </div>
      <div className="space-y-12">
        {/* Main content with proper heading hierarchy */}
        <div className="md:grid md:grid-cols-4 gap-6">
          <div className="hidden md:block">
            <TableOfContentsPromotions />
          </div>
          <div className="md:col-span-3">
            <div className="md:hidden mb-6">
              <TableOfContentsPromotions />
            </div>

            {/* H1 - Main page heading */}
            <h1 className="text-3xl font-bold mb-4">Promotions Limited Time Offer</h1>
            <p className="text-zinc-400 mb-8">
              <a href="https://www.asha-777.com" rel="dofollow"><strong>ASHA777</strong></a> Promotions known for its massive bonus for casino online and betting platform, with limited time
              event offer, sign up only from our official referral.
            </p>

            <section id="why-choose-us" className="py-12">
              <h2 className="text-2xl font-bold mb-6">Why Choose ASHA777 Promotions?</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      Unlike many other betting platforms in Bangladesh, ASHA777 understands what local players are
                      looking for - big bonuses, easy wagering terms, frequent free spins, cashback offers, and
                      exclusive tournaments. Every promotion at ASHA777 is designed to boost your gaming experience,
                      increase your chances of winning, and give you more reasons to stay loyal to the platform.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">
                      Top reasons why ASHA777 promotions stand out:
                    </h3>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Regular welcome bonuses for new members.</li>
                      <li>Daily and weekly cashback offers.</li>
                      <li>Special slot free spins promotions.</li>
                      <li>Exclusive sports betting bonuses for cricket, football, and kabaddi matches.</li>
                      <li>VIP rewards and loyalty program for high-rollers.</li>
                      <li>Limited-time seasonal offers during festivals and international tournaments.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="casino-promotions" className="py-12">
              <h2 className="text-2xl font-bold mb-6">Casino Promotions at ASHA777</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      ASHA777 has one of the largest online casino sections in Bangladesh, featuring hundreds of popular
                      slot games and live dealer tables. To make things even better, the casino section is packed with
                      promotions to reward every type of player - whether you're a casual gamer or a serious high-stakes
                      player.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">ASHA777 Welcome Bonus</h3>
                    <p className="mb-6 text-zinc-300">
                      All new players registering at ASHA777 are greeted with a generous 100% Welcome Bonus up to BDT
                      20,000 on their first deposit. This bonus is perfect for new players looking to double their
                      starting bankroll and explore the wide range of slots and table games available.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      <strong>How to Claim:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Sign up at ASHA777.</li>
                      <li>Do your first deposit only from 500BDT.</li>
                      <li>Bonus will instantly go to your account without terms.</li>
                      <li>Wagering Requirement: 25x on slots within 7 days.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">Free Spins Frenzy</h3>
                    <p className="mb-6 text-zinc-300">
                      ASHA777 regularly runs Free Spins promotions on popular slot games like Mahjong Ways 2, Lucky
                      Neko, and Gates of Olympus. Players can win up to 100 Free Spins daily simply by playing their
                      favorite games or joining scheduled tournaments.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      <strong>Deposit BDT 2,000 today and receive 50 Free Spins on Sweet Bonanza.</strong>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">Weekly Cashback up to 15%</h3>
                    <p className="mb-6 text-zinc-300">
                      Nobody likes losing, but with ASHA777's Weekly Casino Cashback, players can recover up to 15% of
                      their net losses every Monday. This offer is available for all registered casino players and is
                      automatically calculated based on your activity.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">VIP Loyalty Program</h3>
                    <p className="mb-6 text-zinc-300">
                      High-rollers and loyal members get access to the ASHA777 VIP Club - an invitation-only loyalty
                      program that offers:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Personal account manager</li>
                      <li>Faster withdrawals</li>
                      <li>Birthday gifts</li>
                      <li>Exclusive deposit bonuses</li>
                      <li>Higher cashback rates</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="sports-betting-promotions" className="py-12">
              <h2 className="text-2xl font-bold mb-6">Sports Betting Promotions at ASHA777</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      Sports enthusiasts in Bangladesh love to bet on cricket, football, kabaddi, and tennis. ASHA777
                      has made sure its sportsbook offers exciting bonuses tailored for sports bettors.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">Cricket Betting Bonus</h3>
                    <p className="mb-6 text-zinc-300">
                      During every major cricket event like the IPL, BPL, or Asia Cup, ASHA777 offers a 20% Deposit
                      Bonus up to BDT 5,000 for all cricket bets.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">Football Free Bets</h3>
                    <p className="mb-6 text-zinc-300">
                      Football fans can claim a BDT 500 Free Bet every weekend by placing at least BDT 2,000 on any
                      football match. The free bet can be used on EPL, La Liga, UEFA Champions League, and Bangladesh
                      Premier League matches.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">Accumulator Bonus</h3>
                    <p className="mb-6 text-zinc-300">
                      For players who love placing accumulator (multi-leg) bets, ASHA777 offers a bonus boost up to 50%
                      extra winnings depending on the number of selections in your bet slip.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">Mobile Promotions</h3>
                    <p className="mb-6 text-zinc-300">
                      Since most Bangladeshi players prefer to play on their smartphones, ASHA777 regularly launches
                      Mobile Exclusive Bonuses. These offers can only be claimed via the{" "}
                      <strong>
                        <a href="https://www.asha-777.com/promotions" rel="dofollow">
                          ASHA777 App
                        </a>
                      </strong>{" "}
                      or mobile browser.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">Current Mobile Promo:</h3>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Log in through the mobile app.</li>
                      <li>Make a minimum deposit of BDT 1,000.</li>
                      <li>Get a BDT 500 Free Bet Voucher for any sports or slot game.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">Seasonal & Festival Offers</h3>
                    <p className="mb-6 text-zinc-300">
                      Every major festival in Bangladesh, from Eid-ul-Fitr to Pohela Boishakh, comes with special
                      promotions at ASHA777. Expect extra deposit bonuses, exclusive jackpots, and prize draws during
                      these events.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="promotions-update" className="py-12">
              <h2 className="text-2xl font-bold mb-6">How to Stay Updated with ASHA777 Promotions?</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      The promotions at ASHA777 are frequently updated. To make sure you never miss out:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Visit the Promotions Page daily.</li>
                      <li>Subscribe to the ASHA777 Newsletter.</li>
                      <li>Follow them on Facebook and Instagram.</li>
                      <li>Enable push notifications via the ASHA777 mobile app.</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">
                      Easy Deposit & Withdrawal for Bangladeshi Players
                    </h3>
                    <p className="mb-6 text-zinc-300">
                      To support seamless participation in promotions, ASHA777 provides convenient banking options
                      specially tailored for Bangladesh:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Bkash</li>
                      <li>Nagad</li>
                      <li>Rocket</li>
                      <li>Bank Transfer</li>
                      <li>USDT</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="player-love-promotions" className="py-12">
              <h2 className="text-2xl font-bold mb-6">Why Bangladeshi Players Love ASHA777 Promotions</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      ASHA777 isn't just another betting platform - it's a player-focused brand that puts customer
                      satisfaction first. Promotions here aren't just clickbait offers; they're well-structured,
                      achievable, and offer real value to players in Bangladesh.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      <strong>Key Advantages:</strong>
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Local currency support.</li>
                      <li>Mobile-friendly promotions.</li>
                      <li>Low wagering requirements.</li>
                      <li>Sports-specific bonuses for cricket and kabaddi.</li>
                      <li>Fair and transparent bonus policies.</li>
                    </ul>
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
