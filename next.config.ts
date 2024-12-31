import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Настройки Next.js
  async rewrites() {
    return [
      {
        source: "/locales/:path*",
        destination: "/public/locales/:path*", // Убедитесь, что путь совпадает с расположением файлов
      },
    ];
  },
};

export default nextConfig;

