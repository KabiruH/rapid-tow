'use client'

import { useState } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/84 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="flex flex-1 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="ml-2 md:ml-11 md:p-11 font-bold text-slate-900 text-xl">Rapid Tow Recovery</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-slate-800" />
            ) : (
              <Menu className="h-6 w-6 text-slate-800" />
            )}
          </button>

          {/* Desktop Navigation */}
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
            <a href="tel: +1 (888) 673-7630">
              <Button variant="default" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <nav className="flex flex-col space-y-4 px-4 py-6 bg-white border-t">
            <Link 
              href="/" 
              className="text-slate-800 text-base hover:text-slate-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className="text-slate-800 text-base hover:text-slate-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link 
              href="/about" 
              className="text-slate-800 text-base hover:text-slate-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-slate-800 text-base hover:text-slate-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <a 
              href="tel: +1 (888) 673-7630" 
              className="w-full"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button variant="default" size="lg" className="w-full">
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}