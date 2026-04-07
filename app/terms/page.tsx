import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import ScrollToTop from "@/components/scroll-to-top"
import TableOfContentsTerms from "./table-of-contents-terms"
import ClientJsonLd from "@/components/client-json-ld"
import Link from "next/link"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { generateBreadcrumbSchema } from "@/lib/utils"

export default function TermsPage() {
  // Define appropriate schema for a terms page
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Terms & Conditions",
    description:
      "Read the Terms & Conditions of ASHA777. By using our platform, you agree to these terms which govern your use of our casino and sports betting services.",
    url: "https://www.asha-777.com/terms",
    mainEntity: {
      "@type": "WebContent",
      headline: "Terms & Conditions",
      text: "Terms and conditions for using the ASHA777 platform, including account rules, betting rules, and more.",
    },
    publisher: {
      "@type": "Organization",
      name: "ASHA777",
      url: "https://www.asha-777.com",
      logo: {
        "@type": "ImageObject",
        url: "https://www.asha-777.com/logo-asha777.png",
        width: 112,
        height: 32,
      },
    },
    datePublished: "2025-04-15T00:00:00Z",
    dateModified: "2025-04-15T00:00:00Z",
  }

  const lastUpdated = "April 15, 2025"
  const breadcrumbSchema = generateBreadcrumbSchema("https://www.asha-777.com/terms")

  return (
    <div className="space-y-8">
      {/* Structured data */}
      <ClientJsonLd data={schema} />
      <ClientJsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="mb-6">
        <EnhancedBreadcrumb />
      </div>
      <div className="space-y-12">
        {/* Main content with proper heading hierarchy */}
        <div className="md:grid md:grid-cols-4 gap-6">
          <div className="hidden md:block">
            <TableOfContentsTerms />
          </div>
          <div className="md:col-span-3">
            <div className="md:hidden mb-6">
              <TableOfContentsTerms />
            </div>

            {/* H1 - Main page heading */}
            <h1 className="text-3xl font-bold mb-4">Terms & Conditions</h1>
            <p className="text-zinc-400 mb-2">Last Updated: {lastUpdated}</p>
            <p className="text-zinc-400 mb-8">
              Please read these Terms and Conditions carefully before using the <a href="https://www.asha-777.com" rel="dofollow">ASHA777</a> platform. By accessing our
              platform, you agree by these terms.
            </p>

            <section id="introduction" className="py-12">
              <h2 className="text-2xl font-bold mb-6">1. Introduction</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      1.1. These Terms and Conditions constitute a legally binding agreement between you (the "User" or
                      "you") and ASHA777 (the "Company", "we", "us", or "our") regarding your use of the ASHA777.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      1.2. By registering an account, accessing, or using the Platform in any way, you acknowledge that
                      you have read, understood, and agree to be bound by these Terms and Conditions, as well as our
                      Privacy Policy and any other rules or policies referenced herein.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      1.3. If you do not agree with any part of these Terms and Conditions, you must not use our
                      Platform.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="eligibility" className="py-12">
              <h2 className="text-2xl font-bold mb-6">2. Eligibility</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      2.1. You must be at least 18 years of age (or the legal age for gambling in your jurisdiction,
                      whichever is higher) to use our Platform.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      2.2. You must be a resident of a jurisdiction where online gambling is legal. It is your
                      responsibility to ensure that your use of the Platform complies with all applicable laws in your
                      jurisdiction.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      2.3. Employees, directors, officers, and contractors of ASHA777, as well as their immediate family
                      members, are prohibited from using the Platform.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      2.4. We reserve the right to verify your age and identity at any time. If we discover that you are
                      underage or have provided false information, we will terminate your account and forfeit any funds
                      in your account.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="account-rules" className="py-12">
              <h2 className="text-2xl font-bold mb-6">3. Account Rules</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      3.1. <strong>Account Creation:</strong> To use our Platform, you must create an account by
                      providing accurate and complete information.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      3.2. <strong>One Account Per Person:</strong> Each user is permitted to have only one account.
                      Multiple accounts operated by the same individual are prohibited and may result in account
                      termination and forfeiture of funds.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      3.3. <strong>Account Security:</strong> You are solely responsible for all activities that occur
                      under your account. You must notify us immediately of any unauthorized use of your account or any
                      other breach of security.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      3.4. <strong>Account Verification:</strong> We may require you to verify your identity, address,
                      and payment methods at any time. This may include providing government-issued identification,
                      proof of address, and other documentation.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      3.5. <strong>Account Termination:</strong> We reserve the right to suspend or terminate your
                      account at our sole discretion, including but not limited to cases of:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Violation of these Terms and Conditions</li>
                      <li>Suspected fraudulent activity</li>
                      <li>Abusive behavior towards staff or other users</li>
                      <li>Extended periods of inactivity</li>
                      <li>Legal or regulatory requirements</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="deposits-withdrawals" className="py-12">
              <h2 className="text-2xl font-bold mb-6">4. Deposits & Withdrawals</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      4.1. <strong>Deposits:</strong> You may deposit funds into your account using the payment methods
                      available on the Platform. Minimum and maximum deposit limits may apply.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      4.2. <strong>Payment Methods:</strong> All payment methods must be registered in your name. The
                      use of third-party payment methods is strictly prohibited.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      4.3. <strong>Withdrawals:</strong> You may withdraw funds from your account subject to our
                      withdrawal policies. Withdrawals will generally be processed using the same method used for
                      deposits.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      4.4. <strong>Verification:</strong> We may require additional verification before processing
                      withdrawals, especially for large amounts or first-time withdrawals.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      4.5. <strong>Processing Times:</strong> While we strive to process withdrawals promptly,
                      processing times may vary depending on the payment method and other factors. We do not guarantee
                      specific processing times.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      4.6. <strong>Fees:</strong> We reserve the right to charge reasonable fees for deposits and
                      withdrawals. Any applicable fees will be clearly displayed before you confirm the transaction.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      4.7. <strong>Currency:</strong> All transactions on the Platform are conducted in Bangladeshi Taka
                      (BDT) unless otherwise specified.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="betting-rules" className="py-12">
              <h2 className="text-2xl font-bold mb-6">5. Betting Rules</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      5.1. <strong>Bet Acceptance:</strong> All bets are subject to our acceptance. We reserve the right
                      to refuse any bet at our sole discretion.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      5.2. <strong>Bet Confirmation:</strong> A bet is only valid when it has been recorded and
                      confirmed by our system. You are responsible for checking that your bets have been accepted
                      correctly.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      5.3. <strong>Bet Limits:</strong> We may impose limits on the amount you can bet on any event or
                      game. These limits may vary by user and may be changed without notice.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      5.4. <strong>Bet Cancellation:</strong> Once accepted, bets cannot be cancelled or changed by the
                      user. We reserve the right to void bets in certain circumstances, including but not limited to:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Technical errors affecting odds or results</li>
                      <li>Suspected match-fixing or other integrity issues</li>
                      <li>Obvious errors in odds or markets</li>
                      <li>Postponed or abandoned events</li>
                    </ul>
                    <p className="mb-6 text-zinc-300">
                      5.5. <strong>Settlement of Bets:</strong> All bets will be settled according to our official
                      results, which are final. For sports betting, we use official results as declared by the relevant
                      governing body.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      5.6. <strong>Late Bets:</strong> Bets placed after an event has started or after the outcome is
                      known will be void, and the stake will be returned.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      5.7. <strong>Responsible Gambling:</strong> We encourage responsible gambling and provide tools to
                      help you manage your gambling activity, including deposit limits, time-outs, and self-exclusion
                      options.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="bonus-terms" className="py-12">
              <h2 className="text-2xl font-bold mb-6">6. Bonus Terms</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      6.1. <strong>Bonus Eligibility:</strong> Bonuses are offered at our discretion and may be limited
                      to certain users, regions, or time periods.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      6.2. <strong>Wagering Requirements:</strong> Most bonuses are subject to wagering requirements,
                      which must be met before any winnings can be withdrawn. Specific requirements will be stated in
                      the terms of each bonus offer.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      6.3. <strong>Game Contributions:</strong> Different games may contribute differently towards
                      meeting wagering requirements. These contributions will be specified in the bonus terms.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      6.4. <strong>Maximum Bet:</strong> When playing with bonus funds, maximum bet limits may apply.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      6.5. <strong>Expiry:</strong> Bonuses and any associated wagering requirements must be completed
                      within the specified timeframe. Unused bonuses will expire after this period.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      6.6. <strong>Bonus Abuse:</strong> We have zero tolerance for bonus abuse. This includes, but is
                      not limited to, opening multiple accounts, colluding with other players, or exploiting technical
                      issues. Suspected bonus abuse may result in account termination and forfeiture of funds.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      6.7. <strong>Modification or Termination:</strong> We reserve the right to modify or terminate any
                      bonus offer at any time, for any reason.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="privacy-data" className="py-12">
              <h2 className="text-2xl font-bold mb-6">7. Privacy & Data</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      7.1. <strong>Privacy Policy:</strong> Our Privacy Policy, which is incorporated into these Terms
                      by reference, explains how we collect, use, and protect your personal information.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      7.2. <strong>Data Collection:</strong> We collect and process personal data necessary for the
                      operation of our Platform, including but not limited to identity verification, fraud prevention,
                      and compliance with legal obligations.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      7.3. <strong>Third-Party Sharing:</strong> We may share your personal data with third parties as
                      described in our Privacy Policy, including service providers, regulatory authorities, and law
                      enforcement agencies.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      7.4. <strong>Marketing Communications:</strong> We may send you marketing communications about our
                      products and services.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      7.6. <strong>Cookies:</strong> We use cookies and similar technologies to enhance your experience
                      on our Platform.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="intellectual-property" className="py-12">
              <h2 className="text-2xl font-bold mb-6">8. Intellectual Property</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      8.1. <strong>Ownership:</strong> All content on the Platform, including but not limited to text,
                      graphics, logos, icons, images, audio clips, digital downloads, and software, is the property of
                      ASHA777.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      8.2. <strong>Limited License:</strong> We grant you a limited, non-exclusive, non-transferable,
                      and revocable license to access and use the Platform for personal, non-commercial purposes in
                      accordance with these Terms.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      8.3. <strong>Restrictions:</strong> You may not:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>
                        Modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create
                        derivative works from, transfer, or sell any information or content obtained from the Platform
                      </li>
                      <li>Remove any copyright, trademark, or other proprietary notices from the Platform</li>
                    </ul>
                    <p className="mb-6 text-zinc-300">
                      8.4. <strong>User Content:</strong> By submitting content to the Platform (such as reviews or
                      comments), you grant us a worldwide, non-exclusive, royalty-free, perpetual, irrevocable, and
                      fully sublicensable right to use, reproduce.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="liability" className="py-12">
              <h2 className="text-2xl font-bold mb-6">9. Limitation of Liability</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      9.1. <strong>No Warranties:</strong> The Platform is provided on an "as is" and "as available"
                      basis. We make no warranties or representations, express or implied, regarding the operation of
                      the Platform or the information, content, or materials included on the Platform.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      9.2. <strong>Disclaimer:</strong> To the fullest extent permitted by law, we disclaim all
                      warranties, express or implied, including but not limited to implied warranties of
                      merchantability, fitness for a particular purpose, and non-infringement.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      9.3. <strong>Limitation of Liability:</strong> In no event shall ASHA777, its directors, officers,
                      employees, or agents be liable for any direct, indirect, incidental, special, consequential, or
                      punitive damages:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Any content obtained from the Platform</li>
                      <li>Unauthorized access, use, or alteration of your transmissions or content</li>
                    </ul>
                    <p className="mb-6 text-zinc-300">
                      9.4. <strong>Maximum Liability:</strong> Our total liability to you for any claim arising from or
                      relating to these Terms or your use of the Platform shall not exceed the amount you have deposited
                      in your account in the 30 days preceding the claim.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      9.5. <strong>Indemnification:</strong> You agree to indemnify, defend, and hold harmless ASHA777,
                      its directors, officers, employees, and agents from and against any claims, liabilities, damages,
                      losses, and expenses.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="governing-law" className="py-12">
              <h2 className="text-2xl font-bold mb-6">10. Governing Law</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      10.1. <strong>Applicable Law:</strong> These Terms and your use of the Platform shall be governed
                      by and construed in accordance with the laws of Bangladesh, without regard to its conflict of law
                      principles.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      10.2. <strong>Dispute Resolution:</strong> Any dispute arising out of or in connection with these
                      Terms or your use of the Platform shall be resolved through negotiation in good faith. If the
                      dispute cannot be resolved through negotiation, it shall be submitted to the exclusive
                      jurisdiction of the courts of Bangladesh.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      10.3. <strong>Severability:</strong> If any provision of these Terms is found to be invalid or
                      unenforceable, the remaining provisions shall remain in full force and effect.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      10.4. <strong>No Waiver:</strong> Our failure to enforce any right or provision of these Terms
                      will not be considered a waiver of such right or provision.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="changes-to-terms" className="py-12">
              <h2 className="text-2xl font-bold mb-6">11. Changes to Terms</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      11.1. <strong>Modifications:</strong> We reserve the right to modify these Terms at any time. We
                      will notify you of any material changes by posting the new Terms on the Platform and updating the
                      "Last Updated" date.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      11.2. <strong>Continued Use:</strong> Your continued use of the Platform after any such changes
                      constitutes your acceptance of the new Terms.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      11.3. <strong>Regular Review:</strong> We encourage you to review these Terms regularly to stay
                      informed about our policies and practices.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <div className="mt-12 p-6 bg-zinc-900 border border-zinc-800 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Acceptance of Terms</h3>
              <p className="mb-6 text-zinc-300">
                By using the ASHA777 platform, you acknowledge that you have read, understood, and agree to be bound by
                these Terms and Conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/" className="inline-block">
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black w-full">Return to Home</Button>
                </Link>
                <Link href="/contact" className="inline-block">
                  <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 w-full">
                    Contact Support
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </div>
  )
}
