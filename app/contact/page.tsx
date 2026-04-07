"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Facebook, Instagram, Twitter, Mail, Phone, MessageSquare, MapPin, Clock, CheckCircle2 } from "lucide-react"
import ClientJsonLd from "@/components/client-json-ld"
import Link from "next/link"
import { generateContactPageSchema } from "@/lib/schemas/contactSchema"
import { generateBreadcrumbSchema } from "@/lib/schemas/breadcrumbSchema"
import { EnhancedBreadcrumb } from "@/components/enhanced-breadcrumb"

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
    preferredContact: "email",
  })
  const [currentUrl, setCurrentUrl] = useState("")

  useEffect(() => {
    // Dapatkan URL saat ini untuk breadcrumb
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href)
    }
  }, [])

  // Generate schema untuk halaman Contact
  const contactPageSchema = generateContactPageSchema()
  const breadcrumbSchema = generateBreadcrumbSchema(currentUrl)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, preferredContact: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, topic: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus("submitting")

    // Simulate form submission
    setTimeout(() => {
      // In a real implementation, you would send the form data to your backend
      console.log("Form submitted:", formData)
      setFormStatus("success")

      // Reset form after successful submission
      setFormData({
        name: "",
        email: "",
        topic: "",
        message: "",
        preferredContact: "email",
      })

      // Reset status after 5 seconds
      setTimeout(() => {
        setFormStatus("idle")
      }, 5000)
    }, 1500)
  }

  return (
    <div className="space-y-8">
      {/* Structured data */}
      <ClientJsonLd data={contactPageSchema} />
      <ClientJsonLd data={breadcrumbSchema} />

      {/* Breadcrumb */}
      <div className="mb-6">
        <EnhancedBreadcrumb />
      </div>

      <div className="space-y-12">
        {/* Page Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Our customer support team is available 24/7 to assist you with any questions or concerns. Choose your
            preferred method of contact below.
          </p>
        </div>

        <Tabs defaultValue="contact-form" className="max-w-4xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="contact-form">Contact Form</TabsTrigger>
            <TabsTrigger value="live-chat">Live Chat</TabsTrigger>
            <TabsTrigger value="contact-info">Contact Info</TabsTrigger>
          </TabsList>

          {/* Contact Form Tab */}
          <TabsContent value="contact-form">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Send Us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-zinc-800 border-zinc-700"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-zinc-800 border-zinc-700"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="topic">Topic</Label>
                    <Select value={formData.topic} onValueChange={handleSelectChange} required>
                      <SelectTrigger className="bg-zinc-800 border-zinc-700">
                        <SelectValue placeholder="Select a topic" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="account">Account Issues</SelectItem>
                        <SelectItem value="deposit">Deposits & Withdrawals</SelectItem>
                        <SelectItem value="bonus">Bonuses & Promotions</SelectItem>
                        <SelectItem value="games">Games & Betting</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="feedback">Feedback & Suggestions</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your issue or question in detail..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px] bg-zinc-800 border-zinc-700"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label>Preferred Contact Method</Label>
                    <RadioGroup
                      value={formData.preferredContact}
                      onValueChange={handleRadioChange}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email-contact" />
                        <Label htmlFor="email-contact" className="cursor-pointer">
                          Email
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone-contact" />
                        <Label htmlFor="phone-contact" className="cursor-pointer">
                          Phone
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="whatsapp" id="whatsapp-contact" />
                        <Label htmlFor="whatsapp-contact" className="cursor-pointer">
                          WhatsApp
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-black"
                    disabled={formStatus === "submitting"}
                  >
                    {formStatus === "submitting" ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                  {formStatus === "success" && (
                    <div className="bg-green-900/30 border border-green-800 text-green-400 p-4 rounded-md flex items-start">
                      <CheckCircle2 className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                      <p>
                        Thank you for contacting us! Your message has been sent successfully. Our support team will get
                        back to you as soon as possible.
                      </p>
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="bg-red-900/30 border border-red-800 text-red-400 p-4 rounded-md">
                      <p>
                        There was an error sending your message. Please try again or use one of our other contact
                        methods.
                      </p>
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Live Chat Tab */}
          <TabsContent value="live-chat">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Live Chat Support</CardTitle>
                <CardDescription>
                  Connect with our support team instantly through live chat for immediate assistance.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-zinc-800 p-6 rounded-lg text-center">
                  <MessageSquare className="h-12 w-12 mx-auto mb-4 text-yellow-500" />
                  <h3 className="text-xl font-bold mb-2">24/7 Live Chat Support</h3>
                  <p className="text-zinc-400 mb-6">
                    Our live chat agents are available around the clock to assist you with any questions or issues.
                  </p>
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">
                    <a href="https://asha777-login.pages.dev" rel="nofollow noreferrer noopener">
                      Start Live Chat
                    </a>
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2" />
                      <h4 className="font-medium">Instant Responses</h4>
                    </div>
                    <p className="text-sm text-zinc-400">Get immediate answers to your questions</p>
                  </div>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2" />
                      <h4 className="font-medium">Multilingual Support</h4>
                    </div>
                    <p className="text-sm text-zinc-400">Chat with us in English or Bengali</p>
                  </div>
                  <div className="bg-zinc-800 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mr-2" />
                      <h4 className="font-medium">Secure Conversations</h4>
                    </div>
                    <p className="text-sm text-zinc-400">All chats are encrypted and confidential</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Contact Info Tab */}
          <TabsContent value="contact-info">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
                <CardDescription>Reach out to us through any of the following contact methods.</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Phone Support</h3>
                        <p className="text-zinc-400 mb-1">+880 1234 567890</p>
                        <p className="text-sm text-zinc-500">Toll-free for Bangladesh</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Email Support</h3>
                        <p className="text-zinc-400 mb-1">support@asha-777.com</p>
                        <p className="text-sm text-zinc-500">We respond within 24 hours</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Headquarters</h3>
                        <p className="text-zinc-400 mb-1">Dhaka, Bangladesh</p>
                        <p className="text-sm text-zinc-500">International Operations</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-yellow-500 mr-3 mt-1" />
                      <div>
                        <h3 className="font-medium mb-1">Support Hours</h3>
                        <p className="text-zinc-400 mb-1">24 hours / 7 days a week</p>
                        <p className="text-sm text-zinc-500">Always here to help</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="font-medium mb-3">Connect With Us</h3>
                    <div className="flex flex-wrap gap-4">
                      <a
                        href="https://asha777-login.pages.dev"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
                      >
                        <Facebook className="h-5 w-5 text-zinc-400" />
                      </a>
                      <a
                        href="https://asha777-login.pages.dev"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
                      >
                        <Twitter className="h-5 w-5 text-zinc-400" />
                      </a>
                      <a
                        href="https://asha777-login.pages.dev"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
                      >
                        <Instagram className="h-5 w-5 text-zinc-400" />
                      </a>
                      <a
                        href="https://asha777-login.pages.dev"
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="flex items-center justify-center w-12 h-12 bg-zinc-800 rounded-full hover:bg-zinc-700 transition-colors"
                      >
                        <MessageSquare className="h-5 w-5 text-zinc-400" />
                      </a>
                    </div>

                    <div className="mt-8 pt-6 border-t border-zinc-800">
                      <h3 className="font-medium mb-3">Frequently Asked Questions</h3>
                      <p className="text-zinc-400 mb-4">
                        Find quick answers to common questions in our comprehensive FAQ section.
                      </p>
                      <Link href="/faq">
                        <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10">
                          Visit FAQ Page
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Additional Support Information */}
        <div className="max-w-4xl mx-auto mt-12">
          <h2 className="text-2xl font-bold mb-6">How We Can Help You</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-lg">Account Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Registration issues</li>
                  <li>• Login problems</li>
                  <li>• Account verification</li>
                  <li>• Password recovery</li>
                  <li>• Account security</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-lg">Payment Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Deposit assistance</li>
                  <li>• Withdrawal queries</li>
                  <li>• Payment methods</li>
                  <li>• Transaction issues</li>
                  <li>• Payment verification</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-zinc-900 border-zinc-800">
              <CardHeader>
                <CardTitle className="text-lg">Gaming Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-zinc-400">
                  <li>• Game rules</li>
                  <li>• Technical issues</li>
                  <li>• Bonus inquiries</li>
                  <li>• Betting questions</li>
                  <li>• Responsible gaming</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Response Time Commitment */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-6 max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-bold mb-3">Our Response Time Commitment</h3>
          <p className="text-zinc-400 mb-6">
            At <a href="https://www.asha-777.com" rel="dofollow"><strong>ASHA777</strong></a>, we pride ourselves on providing timely and helpful support to all our players.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h4 className="font-medium text-yellow-400 mb-2">Live Chat</h4>
              <p className="text-sm">Immediate response</p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h4 className="font-medium text-yellow-400 mb-2">Email</h4>
              <p className="text-sm">Response within 24 hours</p>
            </div>
            <div className="bg-zinc-800 p-4 rounded-lg">
              <h4 className="font-medium text-yellow-400 mb-2">Phone</h4>
              <p className="text-sm">Average wait time: 2 minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
