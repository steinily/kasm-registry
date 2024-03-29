/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Steinily workspaces',
    description: 'The official store for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://steinily.github.io/kasm-registry/',
    contactUrl: 'https://github.com/steinily/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
