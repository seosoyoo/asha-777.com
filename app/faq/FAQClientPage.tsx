"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import ClientJsonLd from "@/components/client-json-ld"
import Link from "next/link"
import { generateFAQPageSchema } from "@/lib/schemas/faqSchema"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"

// FAQ data structure
interface FAQItem {
  question: string
  answer: string
}

interface FAQCategory {
  id: string
  title: string
  faqs: FAQItem[]
}

export default function FAQClientPage() {
  const [activeCategory, setActiveCategory] = useState("general")

  const faqCategories: FAQCategory[] = [
    {
      id: "general",
      title: "General Questions",
      faqs: [
        {
          question: "What is ASHA777?",
          answer:
            "ASHA777 is the best casino games online and sports betting platform like cricket bet, football, volleyball and other sports bet in Bangladesh. With new high technology and uptodate security system will make your experience of fun is unlimited.",
        },
        {
          question: "Is ASHA777 licensed and regulated?",
          answer:
            "Yes, ASHA777 operates under a valid gambling license and is fully regulated by relevant authorities. We adhere to strict standards of fair play, security, and responsible gambling practices to ensure a safe gaming environment for all our players.",
        },
        {
          question: "How do I create an account?",
          answer:
            "Creating an account is simple. Click on the 'Sign Up' button at the top of the page, fill in the required information, and follow the verification process. Once completed, you'll have full access to all our games and promotions.",
        },
        {
          question: "Is my personal information secure?",
          answer:
            "Absolutely. We use advanced encryption technology to protect all personal and financial information. Our privacy policy ensures that your data is never shared with unauthorized third parties.",
        },
      ],
    },
    {
      id: "account",
      title: "Account & Security",
      faqs: [
        {
          question: "How do I reset my password?",
          answer:
            "It's so easy, our support will solve this issue so fast, you just click on 'Forgot Password' link. Enter your registered email address, and we will send you instructions to create a new password.",
        },
        {
          question: "Can I have multiple accounts?",
          answer:
            "Of course no, 1 player only can have 1 account. Creating multiple accounts is against our terms of service and may result in account suspension.",
        },
        {
          question: "How do I verify my account?",
          answer:
            "Account verification requires submitting identification documents such as a valid ID, proof of address, and in some cases, proof of payment method. This process helps ensure the security of your account and is required by regulatory standards.",
        },
      ],
    },
    {
      id: "payments",
      title: "Deposits & Withdrawals",
      faqs: [
        {
          question: "What payment methods are accepted?",
          answer:
            "We accept various payment methods including credit/debit cards (Visa, Mastercard), bKash, Nagad, and cryptocurrencies (Bitcoin, Ethereum, USDT). Available methods may vary by region.",
        },
        {
          question: "What are the minimum and maximum deposit amounts?",
          answer:
            "The minimum deposit is ৳20, while maximum deposits vary by payment method. For specific limits on your preferred payment method, please check the cashier section after logging in.",
        },
        {
          question: "How long do withdrawals take to process?",
          answer:
            "Withdrawal processing times vary by method, but usually not rather than 3 minutes your money will delivered on your account, we have fastest transaction in this platform.",
        },
        {
          question: "Are there any fees for deposits or withdrawals?",
          answer:
            "ASHA777 does not charge fees for deposits. For withdrawals, there may be small processing fees depending on the payment method. These fees are clearly displayed before confirming your withdrawal.",
        },
      ],
    },
    {
      id: "games",
      title: "Games & Gameplay",
      faqs: [
        {
          question: "What types of games are available?",
          answer:
            "We offer a diverse selection of games including slots, table games (blackjack, roulette, baccarat, poker), live dealer games, and specialty games. Our library features titles from top software providers in the industry.",
        },
        {
          question: "Are the games fair?",
          answer:
            "Yes, all our games use certified Random Number Generators (RNGs) that are regularly audited by independent testing agencies to ensure fair outcomes. Our live dealer games are conducted by professional dealers and streamed in real-time.",
        },
        {
          question: "Can I play games for free?",
          answer:
            "ASHA777 have games that offer demo versions that allow you to play for free. This is a great way to learn game mechanics before playing with real money.",
        },
        {
          question: "What is the Return to Player (RTP) percentage?",
          answer:
            "RTP varies by game, typically ranging from 94% to 98%. This information is available in each game's information section. Higher RTP percentages generally mean better long-term returns for players.",
        },
      ],
    },
    {
      id: "bonuses",
      title: "Bonuses & Promotions",
      faqs: [
        {
          question: "How do I claim the welcome bonus?",
          answer:
            "The welcome bonus is automatically offered during your first deposit. Simply select the bonus option in the cashier section when making your deposit. Make sure to read the terms and conditions before claiming.",
        },
        {
          question: "What are wagering requirements?",
          answer:
            "Wagering requirements specify how many times you need to bet the bonus amount before you can withdraw winnings. For example, a 30x wagering requirement on a ৳1000 bonus means you need to place bets totaling ৳30,000 before withdrawing.",
        },
        {
          question: "Do bonuses expire?",
          answer:
            "Yes, all bonuses have an expiration date, typically ranging from 7 to 30 days. The specific timeframe is mentioned in the bonus terms and conditions. Unused bonuses and any associated winnings will be forfeited after expiration.",
        },
        {
          question: "Can I withdraw bonus funds?",
          answer:
            "Bonus funds cannot be withdrawn directly. Once these requirements are met, the bonus funds and any winnings become withdrawable as real money.",
        },
      ],
    },
  ]

  // Flatten all FAQ items for schema
  const allFAQs: FAQItem[] = faqCategories.flatMap((category) => category.faqs)

  // Generate FAQ schema with actual FAQ data
  const faqSchema = generateFAQPageSchema(allFAQs)

  // Last updated date for content freshness
  const lastUpdated = "April 22, 2025"

  return (
    <div className="space-y-8">
      {/* Structured data */}
      <ClientJsonLd data={faqSchema} />

      {/* Breadcrumb */}
      <div className="mb-6">
        <EnhancedBreadcrumb includeSchema={true} />
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-zinc-300 mb-1">Find answers to the most common questions about ASHA777.</p>
          <p className="text-sm text-zinc-400">Last updated: {lastUpdated}</p>
        </div>

        <Tabs defaultValue="general" onValueChange={setActiveCategory}>
          <TabsList className="mb-6 flex flex-wrap">
            {faqCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>

          {faqCategories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <Accordion type="single" collapsible className="w-full">
                {category.faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                    <AccordionContent>
                      <p className="text-zinc-300">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
          <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
          <p className="mb-4">Our customer support is standby 24/7 for all of your question and problems.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="inline-block">
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black w-full">Contact Support</Button>
            </Link>
            <Link href="/about" className="inline-block">
              <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 w-full">
                About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
