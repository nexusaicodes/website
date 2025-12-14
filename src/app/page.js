"use client";

import Image from "next/image";
import Link from "next/link";
import Navigation from "../components/Navigation";
import HexagonBackground from "../components/HexagonBackground";
import { handleSmoothScroll } from "../utils/smoothScroll";

export default function Home() {
  return (
    <div className="text-white min-h-screen flex flex-col relative overflow-hidden">
      <HexagonBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Nav Bar */}
        <Navigation />

        {/* Main Hero Section */}
        <section
          id="home"
          className="flex flex-col justify-center flex-1 section-padding-mobile min-h-screen relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-start w-full max-w-5xl container-padding-mobile">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-left leading-tight mb-6 sm:mb-8">
              Technology, Strategy, and Innovation.
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left max-w-4xl opacity-80 mb-8 sm:mb-12">
              Empowering businesses through intelligent technology strategy and
              sustainable innovation.
            </p>
            <Link
              href="#services"
              scroll={false}
              onClick={(e) => handleSmoothScroll(e, "services")}
              className="bg-primary text-white font-bold mobile-button rounded-full hover:bg-primary/80 transition"
            >
              Explore Our Services
            </Link>
          </div>
        </section>

        <hr className="w-[90%] mx-auto border-t-2 border-white/20 my-0" />

        {/* Summary Section */}
        <section
          id="summary"
          className="flex flex-col justify-center flex-1 section-padding-mobile min-h-screen relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-center w-full container-padding-mobile">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center leading-tight mb-6 sm:mb-8">
              Strategic Technology Consulting
            </h2>
            <div className="max-w-5xl w-full mb-8 sm:mb-12">
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-justify opacity-90 mb-4 sm:mb-6">
                We bridge traditional enterprise technology with sustainable
                innovation without compromising cost or scalability. Our
                expertise spans across:
              </p>
              <ul className="text-lg sm:text-xl md:text-2xl lg:text-3xl opacity-90 list-disc list-inside space-y-2 sm:space-y-3">
                <li>Digital Transformation</li>
                <li>Systems Architecture</li>
                <li>Strategic Planning</li>
                <li>EV Infrastructure</li>
                <li>Renewable Energy</li>
              </ul>
            </div>
            <Link
              href="#services"
              scroll={false}
              onClick={(e) => handleSmoothScroll(e, "services")}
              className="bg-primary text-white font-bold mobile-button rounded-full hover:bg-primary/80 transition"
            >
              Explore Our Services
            </Link>
          </div>
        </section>

        <hr className="w-[90%] mx-auto border-t-2 border-white/20 my-0" />

        {/* Services Section */}
        <section
          id="services"
          className="section-padding-mobile w-full flex flex-col items-center min-h-screen justify-center relative overflow-hidden"
        >
          <div className="relative z-10 w-full flex flex-col items-center container-padding-mobile">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl w-full">
              <div className="bg-white/10 mobile-card">
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  Technology & Product Strategy
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80 text-justify">
                  Develop comprehensive technology roadmaps and strategic plans
                  that align with your business objectives and position you for
                  long-term success in the digital age.
                </p>
              </div>
              <div className="bg-white/10 mobile-card">
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  Digital Transformation
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80 text-justify">
                  Navigate the evolving technology landscape with strategic
                  execution that modernizes operations, enhances customer
                  experiences, and drives meaningful business transformation.
                </p>
              </div>
              <div className="bg-white/10 mobile-card">
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  Systems Architecture & Consulting
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80 text-justify">
                  Design and optimize robust, scalable technology architectures
                  that support your current operations while positioning you for
                  future growth and innovation.
                </p>
              </div>
              <div className="bg-white/10 mobile-card">
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  EV Infrastructure & Mobility Solutions
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80 text-justify">
                  Leverage our expertise in electric vehicle charging
                  infrastructure, fleet electrification planning, and mobility
                  technology to accelerate your transition to sustainable
                  transportation.
                </p>
              </div>
              <div className="bg-white/10 mobile-card">
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  Renewable Energy Technology Advisory
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80 text-justify">
                  Navigate the renewable energy sector with technical guidance
                  on solar, wind, and energy storage systems, from feasibility
                  assessment to implementation strategy.
                </p>
              </div>
              <div className="bg-white/10 mobile-card">
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  Deep Tech Assessment
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80 text-justify">
                  Stay ahead of the curve with strategic evaluation of emerging
                  technologies, identifying opportunities and risks to inform
                  your innovation roadmap.
                </p>
              </div>
            </div>
          </div>
        </section>

        <hr className="w-[90%] mx-auto border-t-2 border-white/20 my-0" />

        {/* About Us Section */}
        <section
          id="about"
          className="section-padding-mobile w-full flex flex-col md:flex-row items-center min-h-screen justify-center relative overflow-hidden"
        >
          {/* Text Content */}
          <div className="z-10 w-full flex flex-col items-center max-w-3xl mx-auto container-padding-mobile">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center">
              About Us
            </h2>
            <p className="mb-4 sm:mb-6 font-semibold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
              Strategic technology consulting for the future of business.
            </p>
            <p className="mb-4 text-justify text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed opacity-90">
              At Nexus AI, we bridge the gap between proven enterprise
              technology and emerging sustainable innovation. We help
              organizations navigate digital transformation, optimize systems
              architecture, and explore opportunities in clean technology
              sectors including EV infrastructure and renewable energy. Our
              approach combines strategic planning with practical execution,
              delivering cost-effective solutions that position businesses for
              long-term success in an evolving technology landscape.
            </p>
          </div>
          {/* Image (shown on mobile below text, positioned on desktop) */}
          <div className="flex md:flex-1 justify-center items-center mt-4 md:mt-0 px-4 md:px-0">
            <Image
              src="/saksham.jpg"
              alt="Saksham Saxena, Founder & CEO of Nexus AI"
              width={500}
              height={500}
              className="rounded-xl shadow-lg w-4/5 md:w-auto max-w-sm md:max-w-none"
            />
          </div>
        </section>

        <hr className="w-[90%] mx-auto border-t-2 border-white/20 my-0" />

        {/* Contact Section */}
        <section
          id="contact"
          className="section-padding-mobile w-full flex flex-col items-center min-h-screen justify-center relative overflow-hidden"
        >
          <div className="relative z-10 w-full flex flex-col items-center container-padding-mobile">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center">
              Get in Touch
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 max-w-3xl text-justify opacity-90">
              Let&apos;s have a conversation about your specific challenges and
              opportunities. Whether you&apos;re pursuing digital transformation
              or exploring sustainable technology ventures, we&apos;re here to
              help.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 max-w-6xl w-full">
              <a
                href="https://www.linkedin.com/in/sakshamsaxenanexusai/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 mobile-card hover:bg-white/20 transition-all text-center group"
              >
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  LinkedIn
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80 group-hover:opacity-100">
                  Connect with us online
                </p>
              </a>
              <a
                href="mailto:contact@nexusai.world?subject=Interested%20in%20your%20services"
                className="bg-white/10 mobile-card hover:bg-white/20 transition-all text-center group"
              >
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  Email
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80 group-hover:opacity-100">
                  Send us your query
                </p>
              </a>
              <a
                href="https://wa.me/971588553437?text=Hello%2C%20I'd%20like%20to%20know%20more%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 mobile-card hover:bg-white/20 transition-all text-center group"
              >
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  WhatsApp
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80 group-hover:opacity-100">
                  Chat with us directly
                </p>
              </a>
              <a
                href="https://nexusai.zohobookings.com/#/4735220000000042052"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 mobile-card hover:bg-white/20 transition-all text-center group"
              >
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  Book a Call
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80 group-hover:opacity-100">
                  Schedule a consultation
                </p>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="w-full py-6 sm:py-8 text-center text-xs sm:text-sm mt-auto">
          © {new Date().getFullYear()} AI Nexus Consulting FZ-LLC. All rights
          reserved.
        </footer>
      </div>
    </div>
  );
}
