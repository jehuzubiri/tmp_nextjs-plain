/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
      },
      //@DESC: here is required when using an image from other domains
      // {
      //   protocol: 'https',
      //   hostname: 'euro-assets.s3.ap-northeast-1.amazonaws.com',
      // },
    ],
  },
  //@DESC: creates a file called /robots.txt with an api return from /api/robots
  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots',
      },
    ];
  },
};

module.exports = nextConfig;
