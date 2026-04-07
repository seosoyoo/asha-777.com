"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

export default function PromotionPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      // Check if the popup has been closed before
      const popupClosed = localStorage.getItem("promotionPopupClosed")
      if (!popupClosed) {
        setIsOpen(true)
      }
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const closePopup = () => {
    setIsOpen(false)
    // Set a flag in localStorage to prevent the popup from showing again in this session
    localStorage.setItem("promotionPopupClosed", "true")
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80">
      <Card className="w-full max-w-md bg-zinc-900 border-zinc-800 relative">
        <Tabs defaultValue="welcome" className="w-full">
          <TabsList className="w-full grid grid-cols-3 bg-zinc-800">
            <TabsTrigger value="welcome">Welcome</TabsTrigger>
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="vip">VIP</TabsTrigger>
          </TabsList>

          <TabsContent value="welcome">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Welcome Bonus</h3>
                <p className="text-lg mb-4">Get up to ৳1000 after your first game</p>
                <div className="bg-yellow-500 text-black font-bold px-3 py-1 rounded-full text-sm inline-block mb-3">
                  NEW PLAYERS
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-1 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black"
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
                  <span>100% Match Bonus up to ৳1000</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-1 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black"
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
                  <span>100 Free Spins on VIP Account</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-1 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black"
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
                  <span>24/7 VIP Support</span>
                </div>
              </div>
              <div className="mt-6">
                <Link href="https://asha777-login.pages.dev" rel="nofollow noreferrer noopener" className="w-full">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Claim Now</Button>
                </Link>
              </div>
            </CardContent>
          </TabsContent>

          <TabsContent value="daily">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">Daily Cashback</h3>
                <p className="text-lg mb-4">Get up to 77% cashback from all your daily losses!</p>
                <div className="bg-green-500 text-black font-bold px-3 py-1 rounded-full text-sm inline-block mb-3">
                  DAILY OFFER
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-1 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black"
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
                  <span>10% Cashback on All Losses</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-1 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black"
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
                  <span>No Wagering Requirements</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-1 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black"
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
                  <span>Automatic Daily Credit</span>
                </div>
              </div>
              <div className="mt-6">
                <Link href="https://asha777-login.pages.dev" rel="nofollow noreferrer noopener" className="w-full">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Activate Now</Button>
                </Link>
              </div>
            </CardContent>
          </TabsContent>

          <TabsContent value="vip">
            <CardContent className="p-6">
              <div className="text-center mb-4">
                <h3 className="text-2xl font-bold text-yellow-400 mb-2">VIP Program</h3>
                <p className="text-lg mb-4">Join our exclusive VIP program for premium benefits!</p>
                <div className="bg-purple-500 text-black font-bold px-3 py-1 rounded-full text-sm inline-block mb-3">
                  EXCLUSIVE
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-1 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black"
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
                  <span>Personal VIP Account Manager</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-1 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black"
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
                  <span>Higher Deposit & Withdrawal Limits</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-yellow-500 rounded-full p-1 mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-black"
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
                  <span>Exclusive VIP Tournaments & Events</span>
                </div>
              </div>
              <div className="mt-6">
                <Link href="https://asha777-login.pages.dev" rel="nofollow noreferrer noopener" className="w-full">
                  <Button className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">Join VIP Program</Button>
                </Link>
              </div>
            </CardContent>
          </TabsContent>
        </Tabs>

        {/* Close button moved to bottom center */}
        <div className="flex justify-center mt-4 mb-4">
          <Button
            variant="outline"
            className="text-zinc-400 hover:text-white border-zinc-700 hover:bg-zinc-800"
            onClick={closePopup}
          >
            <X className="h-4 w-4 mr-2" /> Close
          </Button>
        </div>
      </Card>
    </div>
  )
}
