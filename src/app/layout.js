import { Montserrat } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Nexus AI | Strategic Technology Consulting for Sustainable Innovation",
  description: "Bridging traditional enterprise technology with sustainable innovation. Expert consulting in digital transformation, systems architecture, EV infrastructure, and renewable energy solutions.",
  keywords: "technology strategy, digital transformation, systems architecture, EV infrastructure, renewable energy consulting, enterprise technology, sustainable innovation, product strategy, deep tech assessment",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "Nexus AI | Strategic Technology Consulting",
    description: "Expert technology consulting bridging enterprise needs with sustainable innovation.",
    type: "website",
    locale: "en_US",
    siteName: "Nexus AI",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
