"use client";

import Image from "next/image";
import React from "react";
import Navigation from "../../components/Navigation";

export default function ServicesPage() {
  // Section data for easier mapping
  const sections = [
    {
      id: "cloud-excellence",
      title: "Cloud Excellence & Optimization",
      strong:
        "Accelerate your cloud journey with purpose-built solutions that reduce costs and amplify performance.",
      body: "Leverage AWS-certified expertise to modernize your infrastructure, optimize cloud spending, and unlock scalable growth. We transform legacy constraints into competitive advantages through strategic cloud migrations, intelligent cost optimization, and future-ready architectures that evolve with your business needs.",
      image: "/cloud.jpeg",
    },
    {
      id: "ai-development",
      title: "AI-First Software Engineering",
      strong:
        "Revolutionize your development approach with intelligent, scalable architectures that deliver measurable value.",
      body: "From concept to deployment, we build software solutions powered by artificial intelligence and designed for scale. Our proven methodology combines years of practical experience with cutting-edge AI capabilities to create adaptable platforms that drive innovation, reduce technical debt, and accelerate time-to-market.",
      image: "/aiguy.jpeg",
    },
    {
      id: "digital-journey",
      title: "Digital Journey Transformation",
      strong:
        "Establish your digital presence with strategic foundation-building that drives engagement and growth.",
      body: "Navigate the complexities of digital transformation with comprehensive solutions spanning web presence, mobile applications, and integrated online ecosystems. We design and deliver seamless digital experiences that connect with your audience and establish lasting competitive advantage in the digital landscape.",
      image: "/digital.jpeg",
    },
    {
      id: "ai-for-enterprise",
      title: "Enterprise AI Solutions",
      strong:
        "Turn AI experiments into scalable business solutions that deliver real impact.",
      body: "From generative AI implementations to private LLM deployments, we transform artificial intelligence from concept to production-ready solutions. Our end-to-end approach encompasses AI strategy, custom model development, and enterprise-grade infrastructure that aligns with your business goals and unlocks new sources of value.",
      image: "/aisoln.jpeg",
    },
  ];

  return (
    <div className="text-white min-h-screen flex flex-col relative overflow-hidden">
      <div className="absolute inset-0 bg-black/60 z-0" />
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Nav Bar */}
        <Navigation />

        {/* Hero Section (Services Hero) */}
        <section
          id="hero"
          className="flex flex-col justify-center flex-1 section-padding-mobile min-h-screen relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col items-start w-full max-w-5xl container-padding-mobile">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-left leading-tight mb-6 sm:mb-8">
              Our Services
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left max-w-3xl opacity-80 mb-8 sm:mb-12">
              Transforming businesses through strategic technology solutions and
              AI-first innovation.
            </p>
          </div>
        </section>

        <hr className="w-[90%] mx-auto border-t-2 border-white/20 my-0" />

        {/* Service Sections with alternating alignment */}
        {sections.map((section, idx) => (
          <React.Fragment key={section.id}>
            <section
              id={section.id}
              className={`section-padding-mobile w-full flex flex-col md:flex-row ${idx % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"} items-center min-h-screen justify-center relative overflow-hidden`}
            >
              {/* Text Content */}
              <div className="z-10 w-full flex flex-col items-center max-w-3xl mx-auto container-padding-mobile">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-center">
                  {section.title}
                </h3>
                <p className="mb-4 sm:mb-6 font-semibold text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
                  {section.strong}
                </p>
                <p className="mb-4 text-justify md:text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                  {section.body}
                </p>
              </div>
              {/* Image (shown on mobile below text, positioned on desktop) */}
              <div className="flex md:flex-1 justify-center items-center mt-4 md:mt-0 px-4 md:px-0">
                <Image
                  src={section.image}
                  alt={section.title + " visual"}
                  width={500}
                  height={500}
                  className="rounded-xl shadow-lg w-4/5 md:w-auto max-w-sm md:max-w-none"
                />
              </div>
            </section>
            <hr className="w-[90%] mx-auto border-t-2 border-white/20 my-0" />
          </React.Fragment>
        ))}

        {/* CTA Section (from home page) */}
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
