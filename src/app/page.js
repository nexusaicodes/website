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
              Accelerate Your Startup&apos;s Growth
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left max-w-4xl opacity-80 mb-8 sm:mb-12">
              Put your focus on building value,
              <br />
              let us manage your cloud & AI.
            </p>
            <a
              href="https://nexusai.zohobookings.com/#/4735220000000042052"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-bold mobile-button rounded-full hover:bg-primary/80 transition"
            >
              Take the first step
            </a>
          </div>
        </section>

        <hr className="w-[90%] mx-auto border-t-2 border-white/20 my-0" />

        {/* About Me Section */}
        <section
          id="about"
          className="flex flex-col justify-center flex-1 section-padding-mobile min-h-screen relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-end w-full container-padding-mobile">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-right leading-tight mb-6 sm:mb-8">
              Infrastructure
              <br />
              is hard
            </h2>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-right max-w-4xl opacity-80 mb-8 sm:mb-12">
              But your customers don&apos;t care.
              <br />
              Spend your time on building value,
              <br />
              not on planning your K8s upgrade
              <br />
              or managing your cloud budget.
            </p>
            <a
              href="https://nexusai.zohobookings.com/#/4735220000000042052"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-bold mobile-button rounded-full hover:bg-primary/80 transition"
            >
              Offload it to us
            </a>
          </div>
        </section>

        <hr className="w-[90%] mx-auto border-t-2 border-white/20 my-0" />

        {/* Main Hero Section */}
        <section
          id="hero"
          className="flex flex-col justify-center flex-1 section-padding-mobile min-h-screen relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-start w-full max-w-5xl container-padding-mobile">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-left leading-tight mb-6 sm:mb-8">
              Gen AI is the
              <br />
              new normal
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left max-w-4xl opacity-80 mb-8 sm:mb-12">
              Your customers expect
              <br />
              AI-powered experiences,
              <br />
              and you need to deliver.
            </p>
            <a
              href="https://nexusai.zohobookings.com/#/4735220000000042052"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-bold mobile-button rounded-full hover:bg-primary/80 transition"
            >
              Let&apos;s build it together
            </a>
          </div>
        </section>

        <hr className="w-[90%] mx-auto border-t-2 border-white/20 my-0" />

        {/* Services Section */}
        <section
          id="services"
          className="section-padding-mobile w-full flex flex-col items-center min-h-screen justify-center relative overflow-hidden"
        >
          <div className="relative z-10 w-full flex flex-col items-center container-padding-mobile">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 sm:mb-12 text-center">
              We solve real business problems
            </h2>
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 max-w-6xl w-full justify-center">
              <div className="bg-white/10 mobile-card flex-1 min-w-[300px]">
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  Cloud Cost Reduction
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80 mb-4">
                  Is your AWS bill spiraling out of control? I find and
                  eliminate wasted cloud spend, freeing up cash for R&D and
                  hiring.
                </p>
              </div>
              <div className="bg-white/10 mobile-card flex-1 min-w-[300px]">
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  Cloud-Native Solutions
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80 mb-4">
                  Are you stuck on a legacy monolith? I help you leverage native
                  cloud services to build faster, more resilient systems.
                </p>
              </div>
              <div className="bg-white/10 mobile-card flex-1 min-w-[300px]">
                <h3 className="font-semibold text-xl sm:text-2xl md:text-3xl mb-3 sm:mb-4">
                  AI Workloads
                </h3>
                <p className="text-sm sm:text-base md:text-lg opacity-80 mb-4">
                  Are your customer service or sales teams bogged down? I build
                  and integrate custom AI solutions—like AI-powered
                  voice-of-customer analysis or sales agent assistants—that
                  automate repetitive tasks and directly impact your bottom
                  line. I handle everything from infrastructure setup to model
                  deployment and management.
                </p>
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
              Ready to optimize your cloud & AI?
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl text-center opacity-80">
              Let&apos;s have a conversation about your specific challenges.
              I&apos;ll audit your current setup and show you exactly how we can
              reduce costs, improve performance, and scale your business.
            </p>
            <a
              href="https://nexusai.zohobookings.com/#/4735220000000042052"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white font-bold mobile-button rounded-full hover:bg-primary/80 transition"
            >
              Book a Free Consultation
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
