"use client"

import Image from "next/image"
import { handleImageError } from "@/lib/utils"

export default function PaymentProviders() {
  const providers = [
    { name: "bKash", logo: "bKash", image: "/payment-providers/asha777-bkash.jpg" },
    { name: "Nagad", logo: "Nagad", image: "/payment-providers/asha777-nagad.png" },
    { name: "Rocket", logo: "Rocket", image: "/payment-providers/asha777-rocket.png" },
    { name: "USDT", logo: "USDT", image: "/payment-providers/asha777-usdt.jpg" },
    { name: "bKash", logo: "bKash", image: "/payment-providers/asha777-bkash.jpg" },
    { name: "Nagad", logo: "Nagad", image: "/payment-providers/asha777-nagad.png" },
    { name: "Rocket", logo: "Rocket", image: "/payment-providers/asha777-rocket.png" },
    { name: "USDT", logo: "USDT", image: "/payment-providers/asha777-usdt.jpg" },
  ]

  return (
    <section id="payment-providers" className="py-12" aria-labelledby="payment-providers-heading">
      <h2 id="payment-providers-heading" className="text-2xl font-bold mb-6">
        Payment Methods
      </h2>
      <div className="relative overflow-hidden">
        <div className="flex animate-marquee-reverse">
          {[...providers, ...providers].map((provider, index) => (
            <div key={index} className="flex-shrink-0 mx-4 flex flex-col items-center">
              {/* Rectangular image container */}
              <div className="w-32 h-20 bg-zinc-800/50 rounded-lg flex items-center justify-center mb-2 p-2 hover:bg-zinc-700/50 transition-colors">
                <div className="relative w-full h-full">
                  <Image
                    src={provider.image || "/placeholder.svg"}
                    alt={`${provider.name} payment method`}
                    title={`${provider.name} payment method`}
                    fill
                    sizes="128px"
                    className="object-contain"
                    loading="lazy"
                    onError={(e) => handleImageError(e, 96, 48)}
                  />
                </div>
              </div>
              <p className="text-sm text-center">{provider.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
