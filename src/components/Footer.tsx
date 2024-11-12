import React from "react";

import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export const Footer = () => {
  return (
    <footer className="w-full border-t bg-white">
      <div className="container px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-700">Contact Us</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@sportfields.com" className="hover:underline">
                  info@sportfields.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>123 Sports Avenue, Athletic City, AC 12345</span>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-700">Quick Links</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="/fields" className="hover:underline">
                Find a Field
              </a>
              <a href="/games" className="hover:underline">
                Join a Game
              </a>
              <a href="/about" className="hover:underline">
                About Us
              </a>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-700">Sports</h3>
            <nav className="flex flex-col space-y-2 text-sm">
              <a href="/sports/soccer" className="hover:underline">
                Soccer
              </a>
              <a href="/sports/basketball" className="hover:underline">
                Basketball
              </a>
              <a href="/sports/tennis" className="hover:underline">
                Tennis
              </a>
              <a href="/sports/volleyball" className="hover:underline">
                Volleyball
              </a>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-700">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-teal-700">
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-700">
                <Twitter className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-gray-500 hover:text-teal-700">
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
            <p className="text-sm text-gray-500">
              Stay updated with the latest sports events and field availability
            </p>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} PlayDay. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}