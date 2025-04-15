import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ["en", "he"],
    defaultLocale: "en",
    // localeDetection: false,
  },
};

export default nextConfig;
