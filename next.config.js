/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  publicRuntimeConfig: {
    API_URL: 'https://www.thecocktaildb.com/api/json/v1/1',
  },

}

module.exports = nextConfig
