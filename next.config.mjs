/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  // Allow development access from local network (e.g., mobile devices)
  allowedDevOrigins: [/^http:\/\/192\.168\.\d{1,3}\.\d{1,3}(:\d+)?$/],
};

export default nextConfig;
