import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/log_in',
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;