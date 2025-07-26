"use client";

import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="text-white min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Nav Bar */}
        <Navigation />

        {/* Main Hero Section */}
        <section
          id="hero"
          className="flex flex-col justify-center flex-1 section-padding-mobile min-h-screen relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-start w-full max-w-5xl container-padding-mobile">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-left leading-tight mb-6 sm:mb-8">
              AI. Design.
              <br />
              Engineering.
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left max-w-3xl opacity-80 mb-8 sm:mb-12">
              Delivering extraordinary impact by blending design, engineering
              and AI expertise.
            </p>
          </div>
        </section>

        <hr className="w-[90%] mx-auto border-t-2 border-white/20 my-0" />

        {/* Latest News Section */}
        <section
          id="news"
          className="section-padding-mobile w-full flex flex-col items-center min-h-screen justify-center relative overflow-hidden"
        >
          <div className="relative z-10 w-full flex flex-col items-center container-padding-mobile">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 sm:mb-12 text-center">
              Latest News
            </h2>
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 max-w-4xl w-full justify-center">
              <div className="bg-white/10 mobile-card flex-1 min-w-[250px]">
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  Nexus AI launches new cloud platform
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80">
                  Our latest platform leverages AI to optimize cloud operations
                  for enterprises.
                </p>
              </div>
              <div className="bg-white/10 mobile-card flex-1 min-w-[250px]">
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  Upcoming Webinar: AI in Business
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80">
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
          className="section-padding-mobile w-full flex flex-col items-center min-h-screen justify-center relative overflow-hidden"
        >
          <div className="relative z-10 w-full flex flex-col items-center container-padding-mobile">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 sm:mb-12 text-center">
              Testimonials
            </h2>
            <div className="flex flex-col md:flex-row gap-6 sm:gap-8 max-w-4xl w-full justify-center">
              <div className="bg-white/10 mobile-card flex-1 min-w-[250px]">
                <p className="text-base sm:text-lg md:text-xl italic mb-4">
                  "Nexus AI transformed our business with their innovative
                  solutions!"
                </p>
                <span className="font-semibold text-sm sm:text-base md:text-lg">- Alex, CEO of TechCorp</span>
              </div>
              <div className="bg-white/10 mobile-card flex-1 min-w-[250px]">
                <p className="text-base sm:text-lg md:text-xl italic mb-4">
                  "Professional, reliable, and truly ahead of the curve."
                </p>
                <span className="font-semibold text-sm sm:text-base md:text-lg">- Priya, CTO of Cloudify</span>
              </div>
              <div className="bg-white/10 mobile-card flex-1 min-w-[250px]">
                <p className="text-base sm:text-lg md:text-xl italic mb-4">
                  "Their AI expertise is unmatched. Highly recommended!"
                </p>
                <span className="font-semibold text-sm sm:text-base md:text-lg">
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
          className="section-padding-mobile w-full flex flex-col items-center min-h-screen justify-center relative overflow-hidden"
        >
          <div className="relative z-10 w-full flex flex-col items-center container-padding-mobile">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 sm:mb-8 text-center">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 max-w-2xl text-center opacity-80">
              Partner with Nexus AI for cutting-edge technological solutions
              tailored to your needs. Let's build the future together.
            </p>
            <a
              href="https://nexusai.zohobookings.com/#/4735220000000042052"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-bold mobile-button rounded-full hover:bg-primary/80 transition"
            >
              Hire Us for Services
            </a>
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
