"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    function handleClickOutside(event) {
      const navItems = document.querySelectorAll("[data-nav-item]");
      const dropdowns = document.querySelectorAll("[data-dropdown]");
      const mobileMenu = document.querySelector("[data-mobile-menu]");
      const hamburgerButton = document.querySelector("[data-hamburger]");

      let clickedInsideNav = false;
      navItems.forEach((item) => {
        if (item.contains(event.target)) {
          clickedInsideNav = true;
        }
      });

      let clickedInsideDropdown = false;
      dropdowns.forEach((dropdown) => {
        if (dropdown.contains(event.target)) {
          clickedInsideDropdown = true;
        }
      });

      const clickedInsideMobileMenu = mobileMenu?.contains(event.target);
      const clickedHamburger = hamburgerButton?.contains(event.target);

      if (
        !clickedInsideNav &&
        !clickedInsideDropdown &&
        !clickedInsideMobileMenu &&
        !clickedHamburger
      ) {
        setOpenDropdown(null);
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

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
    {
      label: "About",
      dropdown: [
        { title: "Our Story", href: "/about#story" },
        { title: "Team", href: "/about#team" },
      ],
    },
    {
      label: "Services",
      dropdown: [
        { title: "Cloud Excellence", href: "/services#cloud-excellence" },
        { title: "AI-First Development", href: "/services#ai-development" },
        { title: "Digital Journey", href: "/services#digital-journey" },
        { title: "AI for Enterprise", href: "/services#ai-for-enterprise" },
      ],
    },
    {
      label: "News & Events",
      dropdown: [
        { title: "Latest News", href: "/news" },
        { title: "Events", href: "/events" },
      ],
    },
    {
      label: "Contact Us",
      dropdown: [
        {
          title: "Email Us",
          href: "mailto:contact@nexusai.world?subject=Interested%20in%20your%20services",
        },
        {
          title: "WhatsApp Us",
          href: "https://wa.me/971588553437?text=Hello%2C%20I'd%20like%20to%20know%20more%20about%20your%20services",
        },
        {
          title: "Book a Meeting",
          href: "https://nexusai.zohobookings.com/#/4735220000000042052",
        },
      ],
    },
  ];

  const toggleMobileMenu = () => {
    console.log("Toggle mobile menu clicked, current state:", isMobileMenuOpen);
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setOpenDropdown(null); // Close any open dropdowns when toggling mobile menu
  };

  const handleDropdownClick = (idx) => {
    setOpenDropdown(openDropdown === idx ? null : idx);
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between container-padding-mobile py-3 sm:py-4 bg-black/30 backdrop-blur-md z-[9999]">
      {/* Logo and Brand */}
      <div className="flex items-center gap-2 sm:gap-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Nexus AI Logo"
            width={32}
            height={32}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
        </Link>
        <Link href="/">
          <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight ml-1 sm:ml-2">
            Nexus AI
          </span>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-6 lg:gap-8 items-center">
        {navItems.map((item, idx) => (
          <div key={item.label} className="relative group" data-nav-item>
            <button
              className={`font-semibold text-base lg:text-lg hover:border-b-2 focus:outline-none transition-colors flex items-center ${
                hoveredItem !== null && hoveredItem !== idx
                  ? "text-white/50"
                  : ""
              }`}
              onMouseEnter={() => {
                setHoveredItem(idx);
              }}
              onMouseLeave={() => {
                setHoveredItem(null);
              }}
              onClick={() => {
                handleDropdownClick(idx);
              }}
            >
              {item.label}
              <span
                className="inline-block ml-2"
                style={{
                  width: "0.5rem",
                  height: "0.5rem",
                  border: "solid white",
                  borderWidth: "0 0.125rem 0.125rem 0",
                  transform: "rotate(45deg) translate(0, -0.125rem)",
                }}
                aria-hidden="true"
              />
            </button>
            {item.dropdown && openDropdown === idx && (
              <div
                className="absolute left-0 mt-2 w-48 bg-black/90 rounded shadow-lg py-2"
                data-dropdown
              >
                {item.dropdown.map((sub) => (
                  <a
                    key={sub.title}
                    href={sub.href}
                    className="block px-4 py-2 text-white hover:bg-primary/30 text-base"
                  >
                    {sub.title}
                  </a>
                ))}
              </div>
            )}
          </div>
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
        <div
          className="md:hidden fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999]"
        >
          <div
            className="absolute top-0 right-0 w-full h-[100vh] bg-black shadow-xl"
            data-mobile-menu
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 sm:p-6 border-b border-white/20">
                <span className="text-lg sm:text-xl font-bold text-white">Menu</span>
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
                {navItems.map((item, idx) => (
                  <div
                    key={item.label}
                    className="border-b border-white/10 last:border-b-0"
                  >
                    <button
                      className="w-full text-left px-4 sm:px-6 py-4 text-base sm:text-lg font-semibold text-white flex items-center justify-between hover:bg-white/10 transition-colors touch-manipulation"
                      onClick={() => handleDropdownClick(idx)}
                    >
                      {item.label}
                      <span
                        className={`inline-block transition-transform duration-200 ${
                          openDropdown === idx ? "rotate-180" : ""
                        }`}
                        style={{
                          width: "0.5rem",
                          height: "0.5rem",
                          border: "solid white",
                          borderWidth: "0 0.125rem 0.125rem 0",
                          transform: "rotate(45deg) translate(0, -0.125rem)",
                        }}
                        aria-hidden="true"
                      />
                    </button>
                    {item.dropdown && openDropdown === idx && (
                      <div className="bg-white/5">
                        {item.dropdown.map((sub) => (
                          <a
                            key={sub.title}
                            href={sub.href}
                            className="block px-4 sm:px-6 py-3 text-white/80 hover:text-white hover:bg-white/10 transition-colors text-sm sm:text-base touch-manipulation"
                            onClick={() => {
                              console.log(
                                "Mobile dropdown item clicked:",
                                sub.title,
                              );
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            {sub.title}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
