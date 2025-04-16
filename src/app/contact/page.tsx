// app/contact/page.tsx
import { ContactForm } from "@/components/contactForm/ContactForm"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div 
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: 'url(/pic4.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <main className="relative pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                Contact Us
              </h1>
              <p className="text-lg text-white/90 max-w-2xl mx-auto">
                Need assistance? We're here to help. Contact us through the form below or use our direct contact information.
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/10">
                  <h2 className="text-xl font-semibold text-white mb-6">
                    Get in Touch
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <Phone className="w-5 h-5 text-red-400 mt-1" />
                      <div>
                        <p className="text-white font-medium">Phone</p>
                        <a href="tel:+1-888-673-7630" className="text-white/80 hover:text-white">
                        +1-888-673-7630
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-5 h-5 text-red-400 mt-1" />
                      <div>
                        <p className="text-white font-medium">Email</p>
                        <a href="mailto:kelvin@rapidtowandrecovery.com" className="text-white/80 hover:text-white">
                        kelvin@rapidtowandrecovery.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MapPin className="w-5 h-5 text-red-400 mt-1" />
                      <div>
                        <p className="text-white font-medium">Location</p>
                        <p className="text-white/80">
                          TX
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Clock className="w-5 h-5 text-red-400 mt-1" />
                      <div>
                        <p className="text-white font-medium">Hours</p>
                        <p className="text-white/80">
                          24/7 Emergency Service
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-black/30 backdrop-blur-md p-6 rounded-lg border border-white/10">
                  <h2 className="text-xl font-semibold text-white mb-4">
                    Emergency Service
                  </h2>
                  <p className="text-white/80 mb-4">
                    For immediate assistance, call our 24/7 emergency line. We'll dispatch the nearest available tow truck to your location.
                  </p>
                  <a href="tel:+1-888-673-7630" className="inline-block text-lg font-semibold text-red-400 hover:text-red-300">
                  +1-888-673-7630
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-black/30 backdrop-blur-md p-6 md:p-8 rounded-lg border border-white/10">
                <h2 className="text-xl font-semibold text-white mb-6">
                  Send Us a Message
                </h2>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}