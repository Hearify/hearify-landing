module.exports = {
  i18n: {
    debug: process.env.NODE_ENV === 'development',
    locales: ['en', 'uk', 'en-GB', 'en-CA', 'en-AU'],
    defaultLocale: 'en',
    localeDetection: false,
    domains: [
      {
        domain: 'ca.example',
        defaultLocale: 'en-CA',
      },
      {
        domain: 'au.example',
        defaultLocale: 'en-AU',
      },
      {
        domain: 'ua.example',
        defaultLocale: 'uk',
      },
      {
        domain: 'uk.example',
        defaultLocale: 'en-GB',
      },
      {
        domain: 'example',
        defaultLocale: 'en',
      },
    ],
  },
};
