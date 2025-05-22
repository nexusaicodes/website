import Image from "next/image";
import Link from "next/link";
import {
  BrainCog,
  Palette,
  Laptop2,
  Rocket,
  RefreshCcw,
  Globe,
  CloudCog,
  Network,
  Layers,
  ShieldCheck,
  BarChart4,
  Zap,
} from "lucide-react";

const ServicesSection = (services) => {
  return (
    <section className="py-8 px-6 max-w-5xl mx-auto">
      <hr className="mb-10"></hr>
      <h2 className="text-center font-bold text-2xl mb-8">
        {services.heading}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.list.map((service, idx) => (
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
};

const digitalJourneyServices = {
  heading: "Digital Journey",
  list: [
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
  ],
};

const cloudJourneyServices = {
  heading: "Cloud Journey",
  list: [
    {
      icon: <CloudCog className="w-8 h-8 text-white mx-auto" />,
      title: "We Architect the Cloud",
      description:
        "Design scalable, AI-ready cloud infrastructure tailored to your business goals.",
    },
    {
      icon: <Network className="w-8 h-8 text-white mx-auto" />,
      title: "We Migrate Seamlessly",
      description:
        "Effortless cloud migration with zero-downtime strategy and smart dependency mapping.",
    },
    {
      icon: <Layers className="w-8 h-8 text-white mx-auto" />,
      title: "We Build Cloud-Native Apps",
      description:
        "Leverage microservices, containers, and AI-enhanced CI/CD pipelines for agility.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-white mx-auto" />,
      title: "We Secure Intelligently",
      description:
        "Implement proactive, AI-driven threat detection and automated security compliance.",
    },
    {
      icon: <BarChart4 className="w-8 h-8 text-white mx-auto" />,
      title: "We Optimize for ROI",
      description:
        "Continuous cost-performance optimization with predictive usage analytics.",
    },
    {
      icon: <Zap className="w-8 h-8 text-white mx-auto" />,
      title: "We Automate Everything",
      description:
        "From backups to auto-scaling, we integrate smart automation across your stack.",
    },
  ],
};

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
          From platform to cloud — AI powering every step.
        </p>
      </div>

      {/* Single Service Block */}
      <ServicesSection {...digitalJourneyServices}></ServicesSection>
      <ServicesSection {...cloudJourneyServices}></ServicesSection>

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
