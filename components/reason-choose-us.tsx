"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReasonChooseUs() {
  return (
    <section id="reason-choose-us" className="py-12" aria-labelledby="reason-choose-us-heading">
      <h2 id="reason-choose-us-heading" className="text-2xl font-bold mb-6">
        Reason Choose ASHA777
      </h2>

      <Tabs defaultValue="reason">
        <TabsList className="w-full grid grid-cols-2 mb-6">
          <TabsTrigger value="reason">Reason Why?</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <TabsContent value="reason">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Reason Completed Platform</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-yellow-400 mb-3">Why Bangladesh's Players choose ASHA777?</h3>
                <p className="mb-6 text-zinc-300">
                  In the fast-paced world of online casino gaming, one name is making waves in Bangladesh, it's Asha777.
                  It's more than just a betting platform, it's where entertainment, excitement, and real money collide.
                  if you're a seasoned sports bettor and looking to hit the jackpot on a our game, we have the tools,
                  the games, and the vibe to make it happen.
                </p>
                <p className="mb-6 text-gray-300">
                  No more sketchy websites or complicated systems, Asha777 is built with Bangladeshi players in mind.
                  Local payment options? Check. Cricket betting? Of course. Live casino games with real dealers? You got
                  it. Let's take a deeper look into what makes Asha777 the go to gaming platform in 2025.
                </p>
                <p className="mb-6 text-gray-300">
                  With so many online casinos out there, standing out is no small feat, But Asha777 has managed to do
                  just that and here's how:
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-zinc-300">
                  <li>
                    <span>Built for Bangladesh</span>
                    <p>
                      Asha777 speaks your language literally and figuratively. From BDT currency support to bKash,
                      Nagad, and Rocket deposits, it's a platform that just gets how things work here.
                    </p>
                  </li>
                  <li>
                    <span>Smooth as Silk on Mobile</span>
                    <p>
                      No one wants a clunky app or slow load times. The Asha777 mobile site and app run like a dream on
                      both Android and iOS, letting you bet on the go without any hiccups.
                    </p>
                  </li>
                  <li>
                    <span>Game Galore</span>
                    <p>
                      Thousands of titles from the likes of Pragmatic Play, JILI, Evolution Gaming, and more. Slots,
                      table games, live dealer action—name it, Asha777 has it.
                    </p>
                  </li>
                  <li>
                    <span>Sports, But Better</span>
                    <p>
                      From nail-biting BPL cricket matches to heart-pounding football showdowns, the sportsbook at
                      Asha777 delivers live odds, in-play action, and all the markets you crave.
                    </p>
                  </li>
                  <li>
                    <span>Fast & Secure Payments</span>
                    <p>
                      Your money, your way. With instant deposits, lightning-fast withdrawals, and encrypted
                      transactions, Asha777 puts safety first without slowing things down.
                    </p>
                  </li>
                  <li>
                    <span>Bonuses That Actually Deliver</span>
                    <p>
                      No fluff, just value. Welcome bonuses, daily spins, cashback offers, you'll always find something
                      extra waiting in your account.
                    </p>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="register">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardHeader>
              <CardTitle>Step-by-Step: How to Join</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-yellow-400 mb-3">Login & Account Security</h3>
                <p className="mb-6 text-zinc-300">
                  No more waiting. If you've been searching for a reliable, fun, and rewarding casino and sportsbook in
                  Bangladesh. It's your time. Play smart. Win big, Join today.
                </p>
                <p className="mb-6 text-zinc-300">
                  We takes security seriously. Your account is protected by top-grade encryption, optional two-factor
                  authentication (2FA), and round-the-clock monitoring.
                </p>
                <p className="mb-6 text-zinc-300">
                  Forgot your password? No stress—recover it easily via email or mobile in seconds. And don't worry,
                  Asha777 never shares your data. Privacy is part of the package.
                </p>
                <ol className="list-decimal pl-5 space-y-2 text-zinc-300">
                  <li>Go to the official site.</li>
                  <li>Click "Register" and fill out your info (name, mobile, email).</li>
                  <li>Set a secure password and verify via SMS or email.</li>
                  <li>Boom you're in! Play your first game with first deposit. Done and dusted in under 5 minutes.</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-medium text-yellow-400 mb-3">Tailored for Bangladesh - Local Vibes Only</h3>
                <p className="mb-6 text-zinc-300">
                  Everything about Asha777 screams local-friendly. From the payment methods to support agents who speak
                  your language, the platform is built to fit seamlessly into your daily life.
                </p>
                <p className="mb-6 text-zinc-300">
                  Bangladeshi time zones? Synced. Cricket-focused promotions? You bet. Bangla-speaking customer support?
                  Available 24/7.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
