import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/en',
        permanent: true,
      },
    ];
  },
  typescript: {
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
