// https://gist.github.com/balupton/4bb9efe0928dc6e326fd41a3b22cd2cc
// https://nextjs.org/docs/api-reference/next.config.js/custom-webpack-config
/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack: (config) => {
    const LicenseWebpackPlugin = require("license-webpack-plugin").LicenseWebpackPlugin;
    config.plugins = config.plugins || [];
    const options = { addBanner: true };
    config.plugins.push(new LicenseWebpackPlugin(options));
    return config;
  },
};
