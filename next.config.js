/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pds-strapi-bucket.s3-accelerate.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'pds-strapi-bucket.s3.ca-central-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
