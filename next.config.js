/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['http2.mlstatic.com'],
    formats: ['image/avif', 'image/webp'],
  }
}

module.exports = nextConfig
