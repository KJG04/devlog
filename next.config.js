/* eslint-disable @typescript-eslint/no-var-requires */

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: false,
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    config.optimization.minimize = false
    config.optimization.minimizer = []

    return config
  },
  transpilePackages: ['next-mdx-remote'],
}

module.exports = withBundleAnalyzer(nextConfig)
