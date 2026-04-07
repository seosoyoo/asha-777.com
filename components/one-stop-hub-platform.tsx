"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function OneStopHubPlatform() {
  return (
    <section id="one-stop-hub-platform" className="py-12" aria-labelledby="one-stop-hub-platform-heading">
      <h2 id="one-stop-hub-platform-heading" className="text-2xl font-bold mb-6">
        ASHA777 - Your One Stop Hub Casino Bet Platform
      </h2>

      <Tabs defaultValue="bet">
        <TabsList className="w-full grid grid-cols-3 mb-6">
          <TabsTrigger value="bet">Betting Platform</TabsTrigger>
          <TabsTrigger value="casino">Online Casino</TabsTrigger>
          <TabsTrigger value="app">Download App</TabsTrigger>
        </TabsList>

        <TabsContent value="bet">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>ASHA777 Bet - Explore The Heart of the Action</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-yellow-400 mb-3">Cricket Bet: The People's Game</h3>
                <p className="mb-6 text-zinc-300">
                  Cricket is more than a sport in Bangladesh, it's a way of life. Asha777 gets that. Bet on everything
                  from toss winners to top run scorers in, and yes, live betting is 100% on:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                  <li>Bangladesh Premier League (BPL)</li>
                  <li>Indian Premier League (IPL)</li>
                  <li>ICC Tournaments</li>
                  <li>T20 Internationals</li>
                  <li>Test Matches</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-yellow-400 mb-3">Football Frenzy</h3>
                <p className="mb-6 text-zinc-300">
                  From the Premier League to the UEFA Champions League, bet on match results, goal scorers, corners, and
                  more. Local leagues? Covered. International rivalries? Absolutely.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-yellow-400 mb-3">Even More Sports</h3>
                <p className="mb-6 text-zinc-300">
                  Odds are updated in real-time, so you're never out of the loop. If it's got a scoreboard, you can bet
                  on it at Asha777:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                  <li>Basketball</li>
                  <li>Tennis</li>
                  <li>Kabaddi</li>
                  <li>T20 Internationals</li>
                  <li>eSports (Dota 2, LoL, CS:GO)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="casino">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>ASHA777 Casino - Play Live with Real Human No Bots</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-yellow-400 mb-3">It's Not Just Luck, It's Lifestyle</h3>
                <p className="mb-6 text-zinc-300">
                  Sure, the odds matter. But so does the experience and Asha777 nails both. Fancy a spin? The casino
                  game selection includes everything from fruit classics to themed adventures and progressive jackpots.
                  With generous RTPs and slick designs, these games aren't just fun they're seriously rewarding.
                </p>
                <p className="mb-6 text-zinc-300">
                  Sometimes, nothing beats the classics. Blackjack, Roulette, Baccarat, and Poker—whether automated or
                  with a live dealer, Asha777 offers all your casino favorites.
                </p>
                <p className="mb-6 text-zinc-300">
                  Ever wanted to step into a real casino without leaving home? The Live Casino at Asha777 features
                  professional dealers, real-time interaction, and HD streaming.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="app">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>ASHA777 App - Bet Anytime, Anywhere</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-yellow-400 mb-3">Deposit Methods</h3>
                <p className="mb-6 text-zinc-300">
                  Prefer playing on your phone? Download Asha777 App directly from the official site or our referral
                  link, you will get VIP limited event. It's packed with features like:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                  <li>Clean user interface</li>
                  <li>One-click logins</li>
                  <li>Push notifications for promotions</li>
                  <li>Full access to casino + sportsbook</li>
                  <li>No need to be glued to your computer take the action wherever you go.</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
