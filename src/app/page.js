import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-[#2c3755] text-white min-h-screen flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="text-center mt-10">
        <Image
          src="/logo.png"
          alt="Nexus AI Logo"
          width={128}
          height={128}
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold">Welcome to Nexus AI</h1>
        <p className="text-lg mt-2 opacity-80">
          Innovating AI Solutions for the Future
        </p>
      </div>

      {/* About Section */}
      <div className="mt-12 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold">About Us</h2>
        <p className="mt-2 opacity-80">
          Nexus AI specializes in cutting-edge AI solutions tailored to meet
          business needs, helping companies enhance efficiency and automation.
        </p>
      </div>

      {/* Services Section */}
      <div className="mt-12 text-center max-w-2xl">
        <h2 className="text-2xl font-semibold">Our Services</h2>
        <ul className="mt-4 space-y-2 opacity-80">
          <li>- AI Consulting & Strategy</li>
          <li>- Custom AI Model Development</li>
          <li>- AI-Powered Automation</li>
          <li>- Data Analytics & Insights</li>
        </ul>
      </div>

      {/* Call-to-Action Section */}
      <div className="mt-12">
        <Button className="px-6 py-3 text-lg font-semibold bg-blue-600 hover:bg-blue-700">
          Schedule a Demo
        </Button>
      </div>

      {/* Contact Section */}
      <div className="mt-12 text-center opacity-80">
        <p>
          Contact us at:{" "}
          <a href="mailto:contact@nexusai.com" className="underline">
            contact@nexusai.com
          </a>
        </p>
      </div>
    </div>
  );
}
