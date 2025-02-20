import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"
import "./globals.css"
import { Toaster } from 'sonner'
import { schemaData } from './schema'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: 'Rapid Tow Recovery - 24/7 Emergency Towing Services in Nairobi',
  description: 'Your trusted 24/7 towing service in Nairobi, Kenya. Professional breakdown recovery, accident towing, and roadside assistance across Nairobi County. Quick response guaranteed.',
  keywords: 'towing service Nairobi, breakdown recovery Kenya, emergency towing Nairobi, car recovery Nairobi, 24/7 towing Kenya, roadside assistance Nairobi, vehicle recovery Westlands, tow truck Kilimani, car breakdown Karen, accident recovery Parklands',
  openGraph: {
    title: 'Rapid Tow Recovery Nairobi - 24/7 Emergency Towing Services',
    description: 'Professional towing services in Nairobi. Available 24/7 for emergency breakdown recovery and roadside assistance across Nairobi County.',
    locale: 'en_KE',
    type: 'website',
  },
  alternates: {
    canonical: 'https://rapidtowrecovery.com'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar/>
          <main className="flex-1">{children}</main>
          <Toaster/>
          <Footer />
        </div>
      </body>
    </html>
  )
} 