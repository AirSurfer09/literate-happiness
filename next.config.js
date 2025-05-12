/** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   distDir: "dist",
//   images: {
//     unoptimized: true,
//   },
// };
//
// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all routes
        headers: [
          {
            key: "Referrer-Policy",
            value: "no-referrer", // Preventing referrer exposure
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
