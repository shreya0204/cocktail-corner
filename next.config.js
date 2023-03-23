/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL: 'https://www.thecocktaildb.com/api/json/v1/1',
  },
  images: {
    domains: ['www.thecocktaildb.com/images/media/drink', 'www.thecocktaildb.com/images/media/drink', 'www.thecocktaildb.com'],
  },
}

module.exports = nextConfig
