// app/about/page.tsx
import { Button } from "@/components/ui/button"
import { Phone, Star, Users, Shield, Clock, Wrench } from "lucide-react"

const values = [
  {
    icon: Clock,
    title: "Always Available",
    description: "24/7 service, because emergencies don't wait for business hours. We're here when you need us most."
  },
  {
    icon: Shield,
    title: "Trusted & Licensed",
    description: "Fully licensed, bonded, and insured. Your vehicle is in safe hands with our certified professionals."
  },
  {
    icon: Users,
    title: "Customer First",
    description: "We prioritize your safety and satisfaction, treating every customer with respect and understanding."
  },
  {
    icon: Wrench,
    title: "Professional Service",
    description: "Our team is trained to handle any situation with the right tools and expertise."
  }
]

const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "24/7", label: "Availability" },
  { value: "30min", label: "Average Response" },
  { value: "10k+", label: "Satisfied Customers" }
]

export default function AboutPage() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url(/pic5.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <main className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              
            <img
    src="/RPR.jpg"
    alt="Rapid Tow Recovery Logo"
    className="absolute top-1/6 -translate-x-1/5 -translate-y-1/2 h-36 w-36 rounded-full object-cover opacity-12 z-1/2 mb-11"
  />
              About Rapid Tow Recovery
            </h1>
            <p className="text-lg text-white/90 max-w-2xl mx-auto">
              Your trusted partner on the road since 2017, providing reliable towing and roadside assistance services 24/7.
            </p>
          </div>

          {/* Our Story */}
          <div className="bg-black/30 backdrop-blur-md p-8 rounded-lg border border-white/10 mb-16">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">Our Story</h2>
              <div className="space-y-4 text-white/80">
                <p>
                  Founded in 2017, Rapid Tow Recovery began with a simple mission: to provide reliable, professional, and prompt towing services when people need them most. What started with a single tow truck has grown into a full-service vehicle recovery operation.
                </p>
                <p>
                  Our journey has been driven by a commitment to excellence and a deep understanding of how stressful vehicle breakdowns can be. We've built our reputation on being there for our customers, no matter the time or weather conditions.
                </p>
                <p>
                  Today, we're proud to be one of the most trusted names in roadside assistance, serving our community with the same dedication and care that we started with. Our team has grown, our fleet has expanded, but our core values remain the same.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            {stats.map((stat) => (
              <div 
                key={stat.label}
                className="bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/10 text-center"
              >
                <div className="text-3xl font-bold text-red-400 mb-2">{stat.value}</div>
                <div className="text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white text-center mb-8">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value) => (
                <div 
                  key={value.title}
                  className="bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/10"
                >
                  <div className="flex items-center mb-4">
                    <value.icon className="w-8 h-8 text-red-400 mr-3" />
                    <h3 className="text-xl font-semibold text-white">{value.title}</h3>
                  </div>
                  <p className="text-white/80">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Team Section */}
          <div className="bg-black/30 backdrop-blur-md p-8 rounded-lg border border-white/10 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Our Team</h2>
              <p className="text-white/80 mb-6">
                Our team consists of certified professionals with years of experience in vehicle recovery and roadside assistance. Each member is committed to providing the highest level of service and safety.
              </p>
              <ul className="text-white/80 mb-6 text-left max-w-md mx-auto space-y-2">
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-red-400 mr-2" />
                  Certified towing operators
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-red-400 mr-2" />
                  Professional mechanics
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-red-400 mr-2" />
                  Trained customer service staff
                </li>
                <li className="flex items-center">
                  <Star className="w-4 h-4 text-red-400 mr-2" />
                  Emergency response specialists
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-black/30 backdrop-blur-md p-8 rounded-lg border border-white/10 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-4">
                Ready to Experience Our Service?
              </h2>
              <p className="text-white/90 mb-6">
                Whether you need emergency assistance or have questions about our services, we're here to help.
              </p>
              <a href="tel: +1-888-673-7630">
                <Button 
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold py-6"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}