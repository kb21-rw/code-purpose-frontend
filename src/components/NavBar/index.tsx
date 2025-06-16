"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Contact", href: "#" },
  ];

  return (
    <header
      className={`w-full z-50 transition-colors duration-300 ${
        isOpen ? "bg-blue-600" : "bg-black/50"
      } backdrop-blur-sm`}
    >
      <div className="max-w-screen-xl mx-auto px-4 md:px-10 lg:px-20 py-2 relative">
        {/* Navbar row */}
        <div className="flex items-center justify-between">
          {/* Left empty (no logo) */}
          <div />

          {/* Desktop menu */}
          <div className="hidden md:flex md:space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-white hover:text-gray-300"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isOpen
                      ? "M6 18L18 6M6 6l12 12" // X icon
                      : "M4 6h16M4 12h16M4 18h16" // Hamburger icon
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu: positioned absolutely on the right */}
        {isOpen && (
          <div className="absolute right-4 top-14 bg-blue-600 p-4 rounded shadow-md space-y-2 md:hidden w-48 text-right">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block text-white hover:text-gray-300"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
