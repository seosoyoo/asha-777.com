import { Card, CardContent } from "@/components/ui/card"
import ScrollToTop from "@/components/scroll-to-top"
import TableOfContentsPrivacy from "./table-of-contents-privacy"
import ClientJsonLd from "@/components/client-json-ld"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"
import { generateBreadcrumbSchema } from "@/lib/utils"

export default function PrivacyPage() {
  // Define appropriate schema for a privacy policy page
  const description =
    "Learn how ASHA777 collects, uses, and protects your personal information. Our Privacy Policy explains our data practices and your privacy rights."
  const privacyPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Privacy Policy",
    description: description,
    url: "https://www.asha-777.com/privacy",
    mainEntity: {
      "@type": "WebContent",
      headline: "Privacy Policy",
      text: "Privacy policy for ASHA777, including information collection, use, sharing, and user rights.",
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

  const breadcrumbSchema = generateBreadcrumbSchema("https://www.asha-777.com/privacy")
  const lastUpdated = "April 15, 2025"

  return (
    <div className="space-y-8">
      {/* Structured data */}
      <ClientJsonLd data={privacyPageSchema} />
      <ClientJsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="mb-6">
        <EnhancedBreadcrumb />
      </div>
      <div className="space-y-12">
        {/* Main content with proper heading hierarchy */}
        <div className="md:grid md:grid-cols-4 gap-6">
          <div className="hidden md:block">
            <TableOfContentsPrivacy />
          </div>
          <div className="md:col-span-3">
            <div className="md:hidden mb-6">
              <TableOfContentsPrivacy />
            </div>

            {/* H1 - Main page heading */}
            <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-zinc-400 mb-2">Last Updated: {lastUpdated}</p>
            <p className="text-zinc-400 mb-8">
              This Privacy Policy describes how <a href="https://www.asha-777.com" rel="dofollow">ASHA777</a> ("we", "our", or "us") collects, uses, and shares your personal
              information when you use our website, mobile applications, and related services (collectively, the
              "Platform").
            </p>

            <section id="introduction" className="py-12">
              <h2 className="text-2xl font-bold mb-6">1. Introduction</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      At ASHA777, we are committed to protecting your privacy and ensuring the security of your personal
                      information. This Privacy Policy is designed to help you understand what information we collect,
                      how we use it, and what choices you have regarding your personal data.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      If you do not agree with our practices, please do not use our Platform. We encourage you to review
                      this Privacy Policy periodically.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="information-collection" className="py-12">
              <h2 className="text-2xl font-bold mb-6">2. Information We Collect</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">2.1 Information You Provide to Us</h3>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>
                        <strong>Account Information:</strong> When you register for an account, we collect your name,
                        email address, phone number, date of birth, and other information necessary to verify your
                        identity and comply with legal requirements.
                      </li>
                      <li>
                        <strong>Financial Information:</strong> To process deposits and withdrawals, we collect payment
                        information, including payment method details, transaction history, and banking information.
                      </li>
                      <li>
                        <strong>Identity Verification:</strong> To comply with regulatory requirements, we may collect
                        government-issued identification, proof of address, and other documentation to verify your
                        identity.
                      </li>
                      <li>
                        <strong>Communications:</strong> When you contact our customer support, we collect information
                        about your communication with us, including the content of messages, emails, or calls.
                      </li>
                      <li>
                        <strong>User Content:</strong> Information you provide when participating in surveys,
                        promotions, or posting reviews or comments on our Platform.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">
                      2.2 Information We Collect Automatically
                    </h3>
                    <p className="mb-6 text-zinc-300">
                      When you use our Platform, we automatically collect certain information, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>
                        <strong>Device Information:</strong> Information about the device you use to access our
                        Platform, including device type, operating system, browser type, and device identifiers.
                      </li>
                      <li>
                        <strong>Usage Information:</strong> Information about your interactions with our Platform, such
                        as the games you play, bets you place, pages you visit, features you use, and the time,
                        frequency, and duration of your activities.
                      </li>
                      <li>
                        <strong>Location Information:</strong> With your consent, we may collect precise location
                        information from your device. We also infer your general location from your IP address.
                      </li>
                      <li>
                        <strong>Log Data:</strong> Server logs, including IP addresses, access times, and error logs.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">2.3 Information from Third Parties</h3>
                    <p className="mb-6 text-zinc-300">
                      We may receive information about you from third parties, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>
                        <strong>Identity Verification Services:</strong> Information to verify your identity and comply
                        with regulatory requirements.
                      </li>
                      <li>
                        <strong>Payment Processors:</strong> Information about your payment transactions.
                      </li>
                      <li>
                        <strong>Fraud Prevention Services:</strong> Information to help detect and prevent fraudulent
                        activities.
                      </li>
                      <li>
                        <strong>Marketing Partners:</strong> Information about your interests and preferences to provide
                        personalized marketing.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="information-use" className="py-12">
              <h2 className="text-2xl font-bold mb-6">3. How We Use Your Information</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>
                        <strong>Providing and Improving Our Services:</strong> To operate our Platform, process
                        transactions, maintain your account, and improve our services.
                      </li>
                      <li>
                        <strong>Personalization:</strong> To personalize your experience, recommend games, and provide
                        tailored content and promotions.
                      </li>
                      <li>
                        <strong>Communication:</strong> To communicate with you about your account, respond to your
                        inquiries, and send you updates, notifications, and marketing messages.
                      </li>
                      <li>
                        <strong>Security and Fraud Prevention:</strong> To protect our Platform, verify your identity,
                        prevent fraud, and ensure compliance with our terms and applicable laws.
                      </li>
                      <li>
                        <strong>Analytics:</strong> To analyze usage patterns, monitor the effectiveness of our
                        marketing campaigns, and improve our Platform.
                      </li>
                      <li>
                        <strong>Responsible Gambling:</strong> To promote responsible gambling and help users manage
                        their gambling activity.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">Legal Basis for Processing</h3>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>
                        <strong>Performance of a Contract:</strong> Processing necessary to provide our services and
                        fulfill our contractual obligations to you.
                      </li>
                      <li>
                        <strong>Legitimate Interests:</strong> Processing necessary for our legitimate interests, such
                        as improving our services, preventing fraud, and marketing our products.
                      </li>
                      <li>
                        <strong>Consent:</strong> Processing based on your consent, which you can withdraw at any time.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="information-sharing" className="py-12">
              <h2 className="text-2xl font-bold mb-6">4. Information Sharing</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      We may share your personal information with the following categories of recipients:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>
                        <strong>Service Providers:</strong> Third-party vendors who provide services on our behalf, such
                        as payment processing, identity verification, customer support, and marketing.
                      </li>
                      <li>
                        <strong>Game Providers:</strong> Companies that provide games available on our Platform.
                      </li>
                      <li>
                        <strong>Regulatory Authorities:</strong> Government agencies and regulatory bodies as required
                        by law or to comply with legal obligations.
                      </li>
                      <li>
                        <strong>Business Partners:</strong> Companies with whom we partner to offer joint promotions or
                        services.
                      </li>
                      <li>
                        <strong>Professional Advisors:</strong> Legal, financial, and other professional advisors in
                        connection with corporate transactions or legal proceedings.
                      </li>
                      <li>
                        <strong>Affiliated Companies:</strong> Our parent company, subsidiaries, and affiliates.
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">Legal Disclosures</h3>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Comply with applicable laws, regulations, or legal processes.</li>
                      <li>Protect the rights, property, or safety of ASHA777, our users, or others.</li>
                      <li>Enforce our terms and conditions or other agreements.</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="cookies" className="py-12">
              <h2 className="text-2xl font-bold mb-6">5. Cookies & Tracking</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      We use cookies and similar tracking technologies to collect information about your browsing
                      activities and to distinguish you from other users of our Platform.
                    </p>
                    <p className="mb-6 text-zinc-300">We use the following types of cookies:</p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>
                        <strong>Essential Cookies:</strong> Necessary for the operation of our Platform.
                      </li>
                      <li>
                        <strong>Analytical/Performance Cookies:</strong> Allow us to recognize and count the number of
                        visitors and see how visitors move around our Platform.
                      </li>
                      <li>
                        <strong>Targeting Cookies:</strong> Record your visit to our Platform, the pages you have
                        visited, and the links you have followed.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="data-security" className="py-12">
              <h2 className="text-2xl font-bold mb-6">6. Data Security</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">These measures include:</p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>Encryption of sensitive data</li>
                      <li>Secure socket layer (SSL) technology</li>
                      <li>Firewalls and intrusion detection systems</li>
                      <li>Regular security assessments and penetration testing</li>
                      <li>Access controls and authentication procedures</li>
                      <li>Staff training on data protection and security</li>
                    </ul>
                    <p className="mb-6 text-zinc-300">
                      While we strive to protect your personal information, no method of transmission over the Internet
                      or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-medium text-yellow-400 mb-3">Data Retention</h3>
                    <p className="mb-6 text-zinc-300">
                      We retain your personal information for as long as necessary to fulfill the purposes for which we
                      collected it, including for the purposes of satisfying any legal, accounting, or reporting
                      requirements.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      The purposes for which we process your personal information, and whether we can achieve those
                      purposes through other means, as well as applicable legal requirements.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="user-rights" className="py-12">
              <h2 className="text-2xl font-bold mb-6">7. Your Rights</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">These may include:</p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>
                        <strong>Access:</strong> The right to request a copy of the personal information we hold about
                        you.
                      </li>
                      <li>
                        <strong>Rectification:</strong> The right to request that we correct any inaccurate or
                        incomplete personal information.
                      </li>
                      <li>
                        <strong>Restriction:</strong> The right to request that we restrict the processing of your
                        personal information in certain circumstances.
                      </li>
                      <li>
                        <strong>Data Portability:</strong> The right to receive your personal information in a
                        structured, commonly used, and machine-readable format.
                      </li>
                      <li>
                        <strong>Objection:</strong> The right to object to the processing of your personal information
                        in certain circumstances.
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="children-privacy" className="py-12">
              <h2 className="text-2xl font-bold mb-6">8. Children's Privacy</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      Our Platform is not intended for individuals under the age of 18 (or the legal age for gambling in
                      your jurisdiction, whichever is higher).
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="international-transfers" className="py-12">
              <h2 className="text-2xl font-bold mb-6">9. International Data Transfers</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      We may transfer your personal information to countries other than the country in which you reside.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      When we transfer your personal information internationally, we take appropriate safeguards to
                      ensure that your personal information receives an adequate level of protection, including:
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-zinc-300">
                      <li>
                        Implementing appropriate contractual measures, such as standard contractual clauses approved by
                        relevant authorities.
                      </li>
                      <li>
                        For transfers to service providers, ensuring they have appropriate technical and organizational
                        measures to protect your personal information.
                      </li>
                    </ul>
                    <p className="mb-6 text-zinc-300">
                      By using our Platform, you acknowledge and consent to the transfer of your personal information to
                      countries outside your country of residence, subject to the safeguards described above.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </section>

            <section id="policy-changes" className="py-12">
              <h2 className="text-2xl font-bold mb-6">10. Changes to This Policy</h2>
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="space-y-6 p-6">
                  <div>
                    <p className="mb-6 text-zinc-300">
                      We may update this Privacy Policy from time to time to reflect changes in our practices, services,
                      or applicable laws.
                    </p>
                    <p className="mb-6 text-zinc-300">
                      We encourage you to review this Privacy Policy periodically to stay informed about our data
                      practices. Your continued use of our Platform after any changes to this Privacy Policy constitutes
                      your acceptance of the updated Privacy Policy.
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
