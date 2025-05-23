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
  title: 'Rapid Tow Recovery - 24/7 Emergency Towing Services in Texas',
  description: 'Your trusted 24/7 towing service in Texas. Professional breakdown recovery, accident towing, and roadside assistance throughout the state. Quick response guaranteed.',
  keywords: 'towing service Texas, breakdown recovery Texas, emergency towing Houston, car recovery Dallas, 24/7 towing Austin, roadside assistance San Antonio, vehicle recovery Fort Worth, tow truck Texas, car breakdown El Paso, accident recovery Texas',
  openGraph: {
    title: 'Rapid Tow Recovery Texas - 24/7 Emergency Towing Services',
    description: 'Professional towing services in Texas. Available 24/7 for emergency breakdown recovery and roadside assistance across the state.',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/RPR.jpg',
        width: 1200,
        height: 630,
        alt: 'Rapid Tow Recovery Texas'
      }
    ],
    siteName: 'Rapid Tow Recovery'
  },
  alternates: {
    canonical: 'https://www.rapidtowandrecovery.com'
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
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','GTM-XXXXX');`
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData)
          }}
        />
        <meta name="google-site-verification" content="DgQu451NUSXANFgJCJl4ECU_9S0OC4W2Mt8pQ_6SXpI" />

        <script src="https://cdn.mysitemapgenerator.com/api/embedmap.m.js"></script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Toaster />
          <Footer />
        </div>
      </body>
    </html>
  )
}