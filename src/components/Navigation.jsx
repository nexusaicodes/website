"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { handleSmoothScroll } from "../utils/smoothScroll";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Home", href: "#summary" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between container-padding-mobile py-3 sm:py-4 bg-black/30 backdrop-blur-md z-[9999]">
      {/* Logo and Brand */}
      <div className="flex items-center gap-2 sm:gap-4">
        <Link
          href="/#home"
          scroll={false}
          onClick={(e) => handleSmoothScroll(e, "home")}
        >
          <Image
            src="/logo.svg"
            alt="Nexus AI Logo"
            width={32}
            height={32}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
        </Link>
        <Link
          href="/#home"
          scroll={false}
          onClick={(e) => handleSmoothScroll(e, "home")}
        >
          <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight ml-1 sm:ml-2">
            Nexus AI
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 lg:gap-8 items-center">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            scroll={false}
            onClick={(e) => handleSmoothScroll(e, item.href.substring(1))}
            className="font-semibold text-base lg:text-lg hover:border-b-2 hover:border-white focus:outline-none transition-all"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <button
        className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none touch-manipulation"
        onClick={toggleMobileMenu}
        data-hamburger
        aria-label="Toggle mobile menu"
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
            isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
            isMobileMenuOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 mt-1 ${
            isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]">
          <div
            className="absolute top-0 right-0 w-full h-[100vh] bg-black shadow-xl"
            data-mobile-menu
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/20">
                <span className="text-lg sm:text-xl font-bold text-white">
                  Menu
                </span>
                <button
                  onClick={toggleMobileMenu}
                  className="text-white/70 hover:text-white p-2 touch-manipulation"
                  aria-label="Close mobile menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Mobile Menu Items */}
              <div className="w-full py-4 sm:py-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    scroll={false}
                    onClick={(e) => {
                      handleSmoothScroll(e, item.href.substring(1));
                      setIsMobileMenuOpen(false);
                    }}
                    className="block px-4 sm:px-6 py-4 text-base sm:text-lg font-semibold text-white hover:bg-white/10 transition-colors border-b border-white/10 last:border-b-0 touch-manipulation"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
