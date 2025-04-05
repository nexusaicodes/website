import Image from "next/image";
import { CircleUserRound, Notebook, CalendarPlus, Mail } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center p-6">
      {/* Hero Section */}
      <div className="text-center mt-10">
        <Image
          src="/logo.svg"
          alt="Nexus AI Logo"
          width={256}
          height={256}
          className="mx-auto mb-4"
        />
        <h1 className="text-4xl font-bold">Nexus AI</h1>
        <p className="text-lg mt-2 opacity-80">
          Unlock the potential of AI and Cloud for your business
        </p>
      </div>

      {/* Services Section */}
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
                href="https://calendly.com/meta-nexusai/15min"
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
