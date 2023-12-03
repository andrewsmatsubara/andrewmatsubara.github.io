/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ],
      include: [
        path.resolve(__dirname, 'src/app/components'),
        path.resolve(__dirname, 'src/app'),
        path.resolve(__dirname, './pages'),
      ]
    });

    return config;
  },
  experimental: {
    images: {
      domains: ['andrewsmatsubara.github.io'],
    },
  },
};

module.exports = nextConfig
