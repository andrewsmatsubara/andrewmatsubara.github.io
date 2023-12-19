/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export',
  distDir: 'dist',
  webpack: (config) => {
    const sassRule = config.module.rules.find(
      (rule) => String(rule.test) === String(/\.scss$/)
    );
    if (sassRule) {
      config.module.rules = config.module.rules.filter(
        (rule) => rule !== sassRule
      );
    }
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
      ],
    });

    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: [
        path.resolve(__dirname, 'node_modules/react-responsive-carousel'),
      ],
    });

    return config;
  }
};

module.exports = nextConfig
