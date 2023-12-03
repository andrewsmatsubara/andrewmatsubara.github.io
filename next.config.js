/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  output: 'export',
  distDir: 'dist',
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
  }
};

module.exports = nextConfig
