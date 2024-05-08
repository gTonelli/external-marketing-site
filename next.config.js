/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
  output: 'standalone',
  images: {
    domains: ['pds-strapi-bucket.s3-accelerate.amazonaws.com'],
  },
}

module.exports = nextConfig
