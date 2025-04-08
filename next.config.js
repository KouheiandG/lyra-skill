// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // ←明示的に設定しておくとVercelが解釈しやすくなる
}

module.exports = nextConfig
