/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    GRAPHQL_ENDPOINT: "https://graphql.fauna.com/graphql",
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: '@svgr/webpack',
    });
    return config;
  }
}

module.exports = nextConfig
