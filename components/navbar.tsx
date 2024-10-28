"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Menu, X } from "react-feather"; // For mobile menu icon
import Image from "next/image";

export const Navbar = () => {
  const [active, setActive] = useState<string | null>("About Us");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-black py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Title/Logo */}
        <div className="text-2xl font-semibold">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="IEM Kolkata logo"
              className="w-full h-auto object-cover"
              height={500}
              width={500}
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4">
          <Link href="/Home" className="hover:text-blue-500">
            About Us
          </Link>
          <Link href="/Events" className="hover:text-blue-500">
            Events
          </Link>
          <Link href="/awards" className="hover:text-blue-500">
            Awards
          </Link>
          <Link href="/Club" className="hover:text-blue-500">
            Clubs & Community
          </Link>
        </nav>

        {/* Call-to-action Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-black text-white px-4 py-2 rounded-full hover:bg-neutral-800"
        >
          <Link href="/about" className="flex items-center">
            Get in Touch<span className="ml-2">→</span>
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black dark:text-white focus:outline-none"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white dark:bg-black">
          <ul className="space-y-4 p-4">
            <li>
              <Link href="/about-us" className="text-black dark:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/events" className="text-black dark:text-white">
                Events
              </Link>
            </li>
            <li>
              <Link href="/awards" className="text-black dark:text-white">
                Awards
              </Link>
            </li>
            <li>
              <Link
                href="/clubs-community"
                className="text-black dark:text-white"
              >
                Clubs & Community
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
