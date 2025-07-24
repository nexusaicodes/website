"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  // Simple dropdown state for demonstration
  const [openDropdown, setOpenDropdown] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    function handleClickOutside(event) {
      const navItems = document.querySelectorAll("[data-nav-item]");
      const dropdowns = document.querySelectorAll("[data-dropdown]");

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

      if (!clickedInsideNav && !clickedInsideDropdown) {
        setOpenDropdown(null);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
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

  return (
    <div className="text-white min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Nav Bar */}
        <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-8 py-4 bg-black/30 backdrop-blur-md z-[9999]">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="Nexus AI Logo"
                width={48}
                height={48}
              />
            </Link>
            <Link href="/">
              <span className="text-2xl font-bold tracking-tight ml-2">
                Nexus AI
              </span>
            </Link>
          </div>
          <div className="flex gap-8 items-center mr-8">
            {navItems.map((item, idx) => (
              <div key={item.label} className="relative group" data-nav-item>
                <button
                  className={`font-semibold text-lg hover:border-b-2 focus:outline-none transition-colors flex items-center ${
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
                    setOpenDropdown(openDropdown === idx ? null : idx);
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
                    className="absolute left-0 mt-2 w-48 bg-black/90 rounded shadow-lg py-2 z-30"
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
        </nav>

        {/* Main Hero Section */}
        <section
          id="hero"
          className="flex flex-col justify-center flex-1 py-24 min-h-screen relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-start w-full max-w-5xl pl-4 md:pl-16">
            <h1 className="text-[4rem] md:text-[6rem] font-extrabold text-left leading-tight mb-8">
              AI. Design.
              <br />
              Engineering.
            </h1>
            <p className="text-2xl md:text-3xl text-left max-w-3xl opacity-80 mb-12">
              Delivering extraordinary impact by blending design, engineering
              and AI expertise.
            </p>
          </div>
        </section>

        <hr className="w-[90%] mx-auto border-t-2 border-white/20 my-0" />

        {/* Latest News Section */}
        <section
          id="news"
          className="py-16 w-full flex flex-col items-center min-h-screen justify-center relative overflow-hidden"
        >
          <div className="relative z-10 w-full flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
              Latest News
            </h2>
            <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full justify-center">
              <div className="bg-white/10 rounded-xl p-6 flex-1 min-w-[250px]">
                <h3 className="font-semibold text-2xl mb-2">
                  Nexus AI launches new cloud platform
                </h3>
                <p className="text-base opacity-80">
                  Our latest platform leverages AI to optimize cloud operations
                  for enterprises.
                </p>
              </div>
              <div className="bg-white/10 rounded-xl p-6 flex-1 min-w-[250px]">
                <h3 className="font-semibold text-2xl mb-2">
                  Upcoming Webinar: AI in Business
                </h3>
                <p className="text-base opacity-80">
                  Join us for a live session on integrating AI into your
                  business workflows. Register now!
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="w-[90%] mx-auto border-t-2 border-white/20 my-0" />

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-16 w-full flex flex-col items-center min-h-screen justify-center relative overflow-hidden"
        >
          <div className="relative z-10 w-full flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-12">
              Testimonials
            </h2>
            <div className="flex flex-col md:flex-row gap-8 max-w-4xl w-full justify-center">
              <div className="bg-white/10 rounded-xl p-6 flex-1 min-w-[250px]">
                <p className="text-lg italic mb-4">
                  “Nexus AI transformed our business with their innovative
                  solutions!”
                </p>
                <span className="font-semibold">- Alex, CEO of TechCorp</span>
              </div>
              <div className="bg-white/10 rounded-xl p-6 flex-1 min-w-[250px]">
                <p className="text-lg italic mb-4">
                  “Professional, reliable, and truly ahead of the curve.”
                </p>
                <span className="font-semibold">- Priya, CTO of Cloudify</span>
              </div>
              <div className="bg-white/10 rounded-xl p-6 flex-1 min-w-[250px]">
                <p className="text-lg italic mb-4">
                  “Their AI expertise is unmatched. Highly recommended!”
                </p>
                <span className="font-semibold">
                  - Omar, Founder of DataNext
                </span>
              </div>
            </div>
          </div>
        </section>

        <hr className="w-[90%] mx-auto border-t-2 border-white/20 my-0" />

        {/* CTA Section */}
        <section
          id="contact"
          className="py-16 w-full flex flex-col items-center min-h-screen justify-center relative overflow-hidden"
        >
          <div className="relative z-10 w-full flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl mb-8 max-w-2xl text-center opacity-80">
              Partner with Nexus AI for cutting-edge technological solutions
              tailored to your needs. Let's build the future together.
            </p>
            <a
              href="https://nexusai.zohobookings.com/#/4735220000000042052"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-bold px-10 py-4 rounded-full text-xl hover:bg-primary/80 transition"
            >
              Hire Us for Services
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-8 text-center text-sm mt-auto">
          © {new Date().getFullYear()} AI Nexus Consulting FZ-LLC. All rights
          reserved.
        </footer>
      </div>
    </div>
  );
}
