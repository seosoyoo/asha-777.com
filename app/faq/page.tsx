import type { Metadata } from "next"
import { APP_NAME, APP_URL } from "@/lib/constants"
import FAQClientPage from "./FAQClientPage"

export const metadata: Metadata = {
  title: "FAQ Frequently Asked Questions",
  description: `FAQ ${APP_NAME} with Our Customer Service that standby 24/7 for you always ready to answer and helping any question and problem for you.`,
  alternates: {
    canonical: `${APP_URL}/faq`,
  },
  openGraph: {
    title: "FAQ Frequently Asked Questions",
    description: `FAQ ${APP_NAME} with Our Customer Service that standby 24/7 for you always ready to answer and helping any question and problem for you.`,
    url: `${APP_URL}/faq`,
    type: "website",
  },
}

export default function FAQPage() {
  return <FAQClientPage />
}
