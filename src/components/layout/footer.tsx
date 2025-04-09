import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-8 md:py-12 ml-11">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-lg font-semibold">Rapid Tow Recovery</h3>
            <p className="mt-1 text-sm text-muted-foreground">Your roadside lifeline, 24/7</p>
            <a 
              href="tel:+1-555-0123" 
              className="mt-4 flex items-center text-sm hover:text-primary"
            >
              <Phone className="mr-2 h-4 w-4" />
              +1 (555) 0123
            </a>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <Link href="/services" className="hover:text-primary">Services</Link>
              <Link href="/about" className="hover:text-primary">About Us</Link>
              <Link href="/contact" className="hover:text-primary">Contact</Link>
            </nav>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Emergency Towing</li>
              <li>Roadside Assistance</li>
              <li>Vehicle Recovery</li>
              <li>Long Distance Towing</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                24/7 Emergency Service
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                TX
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-4 w-4" />
                kelvin@rapidtowandrecovery.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Rapid Tow Recovery. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}