import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="text-white min-h-screen flex flex-col items-center container-padding-mobile">
      {/* Hero Section */}
      <div className="text-center mt-8 sm:mt-10">
        <Link href="/" as={"/"}>
          <Image
            priority={true}
            src="/logo.svg"
            alt="Nexus AI Logo"
            width={200}
            height={200}
            className="mx-auto mb-4 w-32 h-32 sm:w-40 sm:h-40 md:w-64 md:h-64"
          />
        </Link>
        <Link href="/">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Nexus AI</h1>
        </Link>
        <p className="text-base sm:text-lg mt-2 opacity-80">Our Story</p>
      </div>

      {/* About Section */}
      <div className="mt-8 sm:mt-12 text-center max-w-2xl">
        <p className="text-base sm:text-lg opacity-80 text-justify leading-relaxed">
          At Nexus AI, we are passionate about harnessing the power of
          artificial intelligence and cloud computing to drive innovation and
          transformation in businesses. Our journey began with a vision to
          empower organizations with cutting-edge AI solutions that enhance
          efficiency, productivity, and decision-making.
        </p>
        <p className="text-base sm:text-lg opacity-80 mt-4 sm:mt-6 text-justify leading-relaxed">
          Our team of experts combines deep industry knowledge with advanced
          technical skills to deliver tailored solutions that meet the unique
          needs of our clients. We believe in collaboration and partnership,
          working closely with our clients to understand their challenges and
          goals.
        </p>
      </div>

      <div className="mt-8 sm:mt-12">
        <p className="text-xs sm:text-sm opacity-50 text-center">
          © {new Date().getFullYear()} AI Nexus Consulting FZ-LLC. All rights
          reserved.
        </p>
      </div>
    </div>
  );
}
