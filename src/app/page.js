import Image from "next/image";
import { CircleUserRound, Notebook, CalendarPlus, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
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
        <p className="text-2xl mt-8 opacity-80">
          AI-Powered Digital Consulting to Build, Scale & Evolve.
        </p>
        <p className="text-lg mt-8 opacity-80">
          <button className="bg-[#324057] font-bold text-white px-12 py-4 rounded-full">
            <Link href="/services">Explore Services</Link>
          </button>
        </p>
      </div>

      {/* Quick Links Section */}
      <div className="mt-12 text-center max-w-2xl">
        <div className="flex justify-center space-x-6">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <Link href="/about">
                <CircleUserRound
                  width={56}
                  height={56}
                  className="hover:text-black transition-colors duration-300 ease-in-out"
                />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <a
                href="https://substack.com/@nexusaistories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Notebook
                  width={56}
                  height={56}
                  className="hover:text-black transition-colors duration-300 ease-in-out"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <a
                href="https://nexusai.zohobookings.com/#/4735220000000042052"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CalendarPlus
                  width={56}
                  height={56}
                  className="hover:text-black transition-colors duration-300 ease-in-out"
                />
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full flex items-center justify-center">
              <a href="mailto:contact@nexusai.world">
                <Mail
                  width={56}
                  height={56}
                  className="hover:text-black transition-colors duration-300 ease-in-out"
                />
              </a>
            </div>
          </div>
        </div>
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
