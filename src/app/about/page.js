import Image from "next/image";

export default function AboutPage() {
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
        <p className="text-lg mt-2 opacity-80">Our Story</p>
      </div>

      {/* About Section */}
      <div className="mt-12 text-center max-w-2xl">
        <p className="text-lg opacity-80 text-justify">
          At Nexus AI, we are passionate about harnessing the power of
          artificial intelligence and cloud computing to drive innovation and
          transformation in businesses. Our journey began with a vision to
          empower organizations with cutting-edge AI solutions that enhance
          efficiency, productivity, and decision-making.
        </p>
        <p className="text-lg opacity-80 mt-4 text-justify">
          Our team of experts combines deep industry knowledge with advanced
          technical skills to deliver tailored solutions that meet the unique
          needs of our clients. We believe in collaboration and partnership,
          working closely with our clients to understand their challenges and
          goals.
        </p>
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
