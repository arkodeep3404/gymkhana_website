"use client";

import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils"; // Utility for className handling
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
            <span>
              <Image
                src="/logo.png"
                alt="IEM Kolkata logo"
                className="w-full h-auto object-cover"
                height={500}
                width={500}
              />
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <MenuItem item="About Us" active={active} setActive={setActive} />
          <MenuItem item="Events" active={active} setActive={setActive} />
          <MenuItem item="Awards" active={active} setActive={setActive} />
          <MenuItem
            item="Clubs & Community"
            active={active}
            setActive={setActive}
          />
        </nav>

        {/* Call-to-action Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block bg-black text-white px-4 py-2 rounded-full hover:bg-neutral-800 flex items-center"
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
              <Link href="/about" className="text-black dark:text-white">
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

// Reuse MenuItem component from previous code
const MenuItem = ({
  setActive,
  active,
  item,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative">
      <motion.p
        transition={{ duration: 0.3 }}
        className={cn(
          "cursor-pointer text-neutral-600 hover:text-black",
          active === item ? "font-bold text-black" : "dark:text-neutral-300"
        )}
      >
        {item}
      </motion.p>
    </div>
  );
};

export default Navbar;
