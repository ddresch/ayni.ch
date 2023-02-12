module.exports = {
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    // config.resolve.fallback = {
    //   ...config.resolve.fallback, // if you miss it, all the other options in fallback, specified
    //   fs: false, // the solution
    // };

    if (isServer) {
      require('./scripts/generate-sitemap')
    }

    return config
  },
}
