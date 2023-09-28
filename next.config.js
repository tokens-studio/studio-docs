const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_flexsearch: true,
  unstable_staticImage: true
});


module.exports = withNextra({
  images: {
    unoptimized: true
  },

  // i18n: {
  //   locales: ['en' /* 'pt-br' */],
  //   defaultLocale: 'en'
  // },
  redirects: () => {
    return [];
  }
});
