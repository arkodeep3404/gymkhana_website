'use client'

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, ChevronDown } from 'lucide-react'
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const navItems = [
    { href: "/Home", label: "About Us" },
    { href: "/Events", label: "Events" },
    { href: "/awards", label: "Awards" },
  ]

  const communityItems = [
    { href: "/Club", label: "Clubs" },
    { href: "/committee", label: "Committee" },
    { href: "https://alumni.iem.edu.in/", label: "Alumni" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black py-2 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center justify-start">
          <Image
            src="/logo.webp"
            alt="IEM Kolkata logo"
            width={120}
            height={60}
            className="w-auto h-20 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xl font-medium text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <div className="relative">
            <button
              className="text-xl font-medium text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 transition-colors flex items-center"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Community <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg py-1">
                {communityItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Call-to-action Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Button asChild className="text-black rounded-2xl bg-[#f4f2fa] hover:bg-[#f4f2fa]">
            <Link href="https://iem.edu.in/contact-us/" className="flex items-center">
              Get in Touch<span className="ml-2">→</span>
            </Link>
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-black border-t dark:border-gray-800">
          <ul className="space-y-2 p-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <button
                className="flex items-center justify-between w-full py-2 text-sm font-medium text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                Community
                <ChevronDown className={`h-4 w-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isDropdownOpen && (
                <ul className="pl-4 mt-2 space-y-2">
                  {communityItems.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block py-2 text-sm font-medium text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Button asChild className="w-full mt-4">
                <Link href="/contact" className="flex items-center justify-center">
                  Get in Touch<span className="ml-2">→</span>
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}

export default Navbar

