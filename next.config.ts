const { initOpenNextCloudflareForDev } = require("@opennextjs/cloudflare");

const nextConfig = {
  images: {
    domains: ['99webpage.com', 'www.radiustheme.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '99webpage.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.radiustheme.com',
        pathname: '**',
      },
    ],    
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// 👇 Only run Cloudflare dev init in development mode
if (process.env.NODE_ENV === "production" && !process.env.BUILD) {
  initOpenNextCloudflareForDev();
}

module.exports = nextConfig;
