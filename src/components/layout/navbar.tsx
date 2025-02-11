import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/84 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="ml-11 p-11 font-bold text-slate-900 text-xl">Rapid Tow Recovery</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <Link href="/" className="transition-colors text-slate-800 text-base">
              Home
            </Link>
            <Link href="/services" className="transition-colors text-slate-800 text-base">
              Services
            </Link>
            <Link href="/about" className="transition-colors text-slate-800 text-base">
              About
            </Link>
            <Link href="/contact" className="transition-colors text-slate-800 text-base">
              Contact
            </Link>
            <a href="tel:+1-555-0123">
              <Button variant="default" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}