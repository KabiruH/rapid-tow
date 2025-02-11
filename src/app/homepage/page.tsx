'use client'

import { Button } from "@/components/ui/button"
import { Phone, Clock, Truck, Shield } from "lucide-react"
import { useEffect, useState } from "react"

const backgroundImages = [
  '/pic1.jpg',
  '/pic2.jpg',
  '/pic3.jpg',
  '/pic4.jpg',
  '/pic5.jpg'
]

export default function Homepage() {
  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % backgroundImages.length)
    }, 9000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative min-h-screen">
      {/* Background carousel */}
      <div className="fixed inset-0 w-full h-full -z-10">
        {backgroundImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundAttachment: 'fixed',
            }}
          />
        ))}
        {/* Global overlay */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Scrollable content */}
      <div className="relative">
        {/* Hero Section */}
        <section className=" md:min-h-[90vh] flex items-center justify-center pt-16 md:pt-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-white leading-tight">
                Your Roadside Lifeline, 24/7
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
                Fast, reliable towing and roadside assistance when you need it most. We're here to help, anytime, anywhere.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 px-4 sm:px-0">
                <a href="tel:+1-555-0123" className="w-full sm:w-auto">
                  <Button 
                    size="lg" 
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-6 text-lg"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Emergency Towing
                  </Button>
                </a>
                <Button 
                  variant="secondary" 
                  size="lg" 
                  className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white font-semibold py-6 text-lg backdrop-blur-sm"
                >
                  Our Services
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="mt-1">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              <div className="group bg-black/30 hover:bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-lg border border-white/10 transition-all duration-300">
                <div className="text-center">
                    
                  <Clock className="mx-auto h-10 w-10 md:h-12 md:w-12 text-red-400 group-hover:text-red-300 mb-4 transition-colors" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">24/7 Availability</h3>
                  <p className="text-white/80 text-sm md:text-base">
                    Emergency services available around the clock, because breakdowns don't follow a schedule.
                  </p>
                </div>
              </div>
              
              <div className="group bg-black/30 hover:bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-lg border border-white/10 transition-all duration-300">
                <div className="text-center">
                  <Truck className="mx-auto h-10 w-10 md:h-12 md:w-12 text-red-400 group-hover:text-red-300 mb-4 transition-colors" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Rapid Response</h3>
                  <p className="text-white/80 text-sm md:text-base">
                    Quick arrival times and efficient service to get you back on the road fast.
                  </p>
                </div>
              </div>
              
              <div className="group bg-black/30 hover:bg-black/40 backdrop-blur-md p-6 md:p-8 rounded-lg border border-white/10 transition-all duration-300">
                <div className="text-center">
                  <Shield className="mx-auto h-10 w-10 md:h-12 md:w-12 text-red-400 group-hover:text-red-300 mb-4 transition-colors" />
                  <h3 className="text-lg md:text-xl font-semibold mb-2 text-white">Licensed & Insured</h3>
                  <p className="text-white/80 text-sm md:text-base">
                    Professional, certified technicians you can trust with your vehicle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-4 text-white">
                Stranded? We've Got You Covered
              </h2>
              <p className="text-lg md:text-xl text-white/90 mb-8 px-4 md:px-0">
                Don't let a breakdown ruin your day. Our professional team is just a phone call away.
              </p>
              <a href="tel:+1-555-0123">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-6 text-lg w-full sm:w-auto px-8"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +1 (555) 0123
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}