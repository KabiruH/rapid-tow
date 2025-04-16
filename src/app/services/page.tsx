// app/services/page.tsx
import { Button } from "@/components/ui/button"
import { Phone, Truck, Car, Battery, Key, AlertTriangle, MapPin, ArrowRight } from "lucide-react"

const services = [
  {
    title: "Emergency Towing",
    icon: Truck,
    description: "24/7 emergency towing service for breakdowns, accidents, or any roadside emergency. Our rapid response team will be at your location quickly with the right equipment to safely transport your vehicle.",
    features: [
      "Available 24/7, 365 days a year",
      "Quick response times",
      "Local and long-distance towing",
      "Careful handling of all vehicle types"
    ]
  },
  {
    title: "Roadside Assistance",
    icon: Car,
    description: "Stuck on the side of the road? Our comprehensive roadside assistance services cover everything from minor issues to major problems, getting you back on the road safely.",
    features: [
      "Flat tire changes",
      "Fuel delivery",
      "Minor mechanical repairs",
      "Jump start services"
    ]
  },
  {
    title: "Battery Services",
    icon: Battery,
    description: "From jump-starts to battery replacement, our technicians can diagnose and solve your battery issues on the spot. We carry a variety of batteries to fit most vehicles.",
    features: [
      "Battery testing",
      "Jump-start service",
      "Battery replacement",
      "Electrical system checks"
    ]
  },
  {
    title: "Lockout Services",
    icon: Key,
    description: "Locked your keys in your car? Our skilled technicians use professional tools and techniques to safely unlock your vehicle without causing any damage.",
    features: [
      "Car door unlocking",
      "Trunk unlocking",
      "Key extraction",
      "Key replacement assistance"
    ]
  },
  {
    title: "Accident Recovery",
    icon: AlertTriangle,
    description: "Professional accident recovery services with specialized equipment to handle any situation. We work efficiently while prioritizing safety and minimizing further damage.",
    features: [
      "Accident scene cleanup",
      "Vehicle recovery",
      "Debris removal",
      "Safe transport to repair facility"
    ]
  },
  {
    title: "Long Distance Towing",
    icon: MapPin,
    description: "Need to transport your vehicle across state lines? Our long-distance towing service ensures safe and timely delivery of your vehicle to its destination.",
    features: [
      "Interstate transport",
      "Enclosed transport available",
      "Regular updates during transit",
      "Insurance coverage"
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url(/pic2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <main className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Our Services
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Professional towing and roadside assistance services available 24/7. Whatever your vehicle emergency, we're here to help.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.title}
                className="group bg-black/30 backdrop-blur-md p-6 md:p-8 rounded-lg border border-white/10 hover:bg-black/40 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-red-400 mr-3" />
                  <h2 className="text-xl font-semibold text-white">{service.title}</h2>
                </div>
                
                <p className="text-white/80 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <ArrowRight className="w-4 h-4 text-red-400 mr-2 mt-1 flex-shrink-0" />
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/10">
                <a href="tel:+1-888-673-7630">
                  <Button 
                    variant="secondary"
                    className="w-full bg-white/10 hover:bg-white/20 text-white"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Request Service
                  </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-black/30 backdrop-blur-md p-8 rounded-lg border border-white/10 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Need Immediate Assistance?
              </h2>
              <p className="text-white/90 mb-6">
                Our professional team is available 24/7 to help you with any vehicle emergency.
              </p>
              <a href="tel:+1-888-673-7630">
                <Button 
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-6"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: +1-888-673-7630
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}