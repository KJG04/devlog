/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
  transpilePackages: ['next-mdx-remote'],
}

module.exports = withBundleAnalyzer(nextConfig)
