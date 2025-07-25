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
