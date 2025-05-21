import Image from "next/image";
import Link from "next/link";
import {
  BrainCog,
  Palette,
  Laptop2,
  Rocket,
  RefreshCcw,
  Globe,
} from "lucide-react";

function ServicesSection() {
  const services = [
    {
      icon: <BrainCog className="w-8 h-8 text-white mx-auto color-white" />,
      title: "We Strategise Intelligently",
      description:
        "Transform raw ideas into blueprints using AI and behavioral insights.",
    },
    {
      icon: <Palette className="w-8 h-8 text-white mx-auto" />,
      title: "We Design with Data",
      description: "Create adaptive UI with AI-driven journey predictions.",
    },
    {
      icon: <Laptop2 className="w-8 h-8 text-white mx-auto" />,
      title: "We Develop Smarter",
      description:
        "Build scalable, clean apps with modern frameworks and AI-assisted code.",
    },
    {
      icon: <Rocket className="w-8 h-8 text-white mx-auto" />,
      title: "We Market with Precision",
      description: "Use AI for ASO/SEO and targeting the right audience.",
    },
    {
      icon: <RefreshCcw className="w-8 h-8 text-white mx-auto" />,
      title: "We Maintain & Evolve",
      description:
        "ML-based monitoring, anomaly detection, and update suggestions.",
    },
    {
      icon: <Globe className="w-8 h-8 text-white mx-auto" />,
      title: "We Avail Everywhere",
      description: "Responsive apps for every device, network, and region.",
    },
  ];
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="text-center bg-muted/10 p-6 rounded-2xl shadow transition"
          >
            {service.icon}
            <h3 className="text-lg font-semibold text-white mt-4">
              {service.title}
            </h3>
            <p className="text-sm text-white mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="text-center mt-10">
        <Link href="/" as={"/"}>
          <Image
            priority={true}
            src="/logo.svg"
            alt="Nexus AI Logo"
            width={256}
            height={256}
            className="mx-auto mb-4"
          />
        </Link>
        <Link href="/">
          <h1 className="text-4xl font-bold">Nexus AI</h1>
        </Link>
        <h2 className="text-3xl font-semibold text-center text-white mt-16 mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-300 text-base max-w-xl mx-auto">
          From strategy to scale — AI powering every step.
        </p>
      </div>

      {/* Single Service Block */}
      <ServicesSection></ServicesSection>

      <div className="h-16 rounded-full flex items-center justify-center">
        <a
          href="https://nexusai.zohobookings.com/#/4735220000000042052"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-blue-500 font-bold text-white text-2xl px-12 py-4 rounded-full">
            Book a Meeting
          </button>
        </a>
      </div>

      <div className="mt-12">
        <p className="text-sm opacity-50 text-center">
          © {new Date().getFullYear()} AI Nexus Consulting FZ-LLC. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
