import { permanentRedirects } from './lib/seo/redirects.ts'

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [...permanentRedirects]
  },
}

export default nextConfig
