'use client'

import React, { useState } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { href: "/Home", label: "About Us" },
    { href: "/Events", label: "Events" },
    { href: "/awards", label: "Awards" },
    { href: "/Club", label: "Members" },
    { href: "/Teams", label: "Teams" },
    { href: "/Community", label: "Community" },
    { href: "/committee", label: "Committee" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black py-2 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
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
        </nav>

        {/* Call-to-action Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block"
        >
          <Button asChild className=" text-black rounded-2xl  bg-[#f4f2fa] hover:bg-[#f4f2fa]">
            <Link href="/about" className="flex items-center">
              Get in Touch<span className="ml-2 ">→</span>
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
              <Button asChild className="w-full mt-4">
                <Link href="/about" className="flex items-center justify-center">
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