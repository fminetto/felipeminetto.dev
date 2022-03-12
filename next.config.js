/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    GRAPHQL_ENDPOINT: "https://graphql.fauna.com/graphql",
  }
}

module.exports = nextConfig
