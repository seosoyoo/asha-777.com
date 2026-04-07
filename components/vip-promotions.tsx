"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { handleImageError } from "@/lib/utils"

export default function VIPPromotions() {
  return (
    <section id="vip-promotions" className="py-12" aria-labelledby="vip-promotions-heading">
      <h2 id="vip-promotions-heading" className="text-2xl font-bold mb-6">
        Bonuses & Promotions - More Bang for Your BDT
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="aspect-square relative bg-zinc-800 rounded-lg overflow-hidden">
          <Image
            src="/banner/asha777-banner04.webp"
            alt="ASHA777 VIP Exclusive Promotion"
            title="ASHA777 VIP Exclusive Promotion"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority
            onError={(e) => handleImageError(e, 600, 600)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <div className="bg-yellow-600 text-black font-bold px-3 py-1 rounded-full text-sm inline-block mb-3 w-fit">
              LIMITED TIME
            </div>
            <h3 className="text-2xl font-bold mb-2">VIP Exclusive Limited Promo</h3>
            <p className="mb-4 text-zinc-300">
              Everyone loves a good bonus. At Asha777, they don't just hand out welcome offers they keep the rewards
              coming.
            </p>
            <Link href="https://asha777-login.pages.dev" rel="nofollow noreferrer noopener" aria-label="Claim VIP exclusive offer">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black w-fit">Claim Offer</Button>
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-yellow-400">Register From Our Referral Link</h3>
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
                <span className="font-medium">Welcome Bonus: 100% Up to ৳10,000</span>
                <p className="text-sm text-zinc-400">
                  New here? Asha777 doubles your first deposit, giving you more chances to play and win right out of the
                  gate.
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
                <span className="font-medium">Daily Free Spins</span>
                <p className="text-sm text-zinc-400">
                  Spin your favorite slots every day and collect free spins. No strings attached just pure fun.
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
                <span className="font-medium">Weekly Cashback</span>
                <p className="text-sm text-zinc-400">
                  Lose some, win some and get up to 10% back every week. Because even when luck isn't on your side.
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
                <span className="font-medium">Reload Bonuses</span>
                <p className="text-sm text-zinc-400">
                  Returning players get rewarded with extra cash every time they top up.
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
                <span className="font-medium">VIP Program</span>
                <p className="text-sm text-zinc-400">
                  Play regularly? Get access to VIP perks like personal account managers, faster withdrawals, birthday
                  gifts, and more.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
