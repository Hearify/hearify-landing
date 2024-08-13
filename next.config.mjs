import withMDX from '@next/mdx';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';

const config = {
  i18n: {
    locales: ['en', 'uk'],
    defaultLocale: 'en',
  },
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/blog/articles/astronomy-and-space-quiz-test-your-knowledge-of-the-cosmos',
        destination: '/library/astronomy-and-space-quiz-test-your-knowledge-of-the-cosmos',
        permanent: true,
      },
      {
        source: '/blog/articles/world-war-2-quiz-test-your-knowledge-of-history',
        destination: '/library/world-war-2-quiz-test-your-knowledge-of-history',
        permanent: true,
      },
      {
        source: '/blog/articles/periodic-table-quiz-test-your-knowledge-of-elements',
        destination: '/library/periodic-table-quiz-test-your-knowledge-of-elements',
        permanent: true,
      },
      {
        source: '/blog/articles/80s-music-quiz-how-well-do-you-know-the-iconic-hits-of-the-1980s',
        destination: '/library/80s-music-quiz-how-well-do-you-know-the-iconic-hits-of-the-1980s',
        permanent: true,
      },
      {
        source: '/blog/articles/all-american-history-quiz-test-your-knowledge-of-us-history',
        destination: '/library/all-american-history-quiz-test-your-knowledge-of-us-history',
        permanent: true,
      },
      {
        source: '/blog/articles/astronomy-and-space-quiz-test-your-knowledge-of-the-cosmos',
        destination: '/library/astronomy-and-space-quiz-test-your-knowledge-of-the-cosmos',
        permanent: true,
      },
      {
        source: '/blog/articles/the-human-body-quiz-test-your-knowledge-of-human-anatomy',
        destination: '/library/the-human-body-quiz-test-your-knowledge-of-human-anatomy',
        permanent: true,
      },
      {
        source: '/blog/articles/literature-antonyms-and-synonyms-quiz-test-your-vocabulary-skills',
        destination: '/library/literature-antonyms-and-synonyms-quiz-test-your-vocabulary-skills',
        permanent: true,
      },
      {
        source: '/blog/articles/countries-and-capitals-quiz-test-your-geography-knowledge',
        destination: '/library/countries-and-capitals-quiz-test-your-geography-knowledge',
        permanent: true,
      },
      {
        source: '/blog/articles/disney-quiz-how-well-do-you-know-your-disney-classics',
        destination: '/library/disney-quiz-how-well-do-you-know-your-disney-classics',
        permanent: true,
      },
      {
        source: '/blog/articles/who-said-this-famous-quotes-quiz',
        destination: '/library/who-said-this-famous-quotes-quiz',
        permanent: true,
      },
      {
        source: '/blog/articles/match-the-quote-to-the-movie-quiz-test-your-movie-knowledge',
        destination: '/library/match-the-quote-to-the-movie-quiz-test-your-movie-knowledge',
        permanent: true,
      },
      {
        source: '/blog/articles/us-state-capitals-quiz-how-well-do-you-know-your-state-capitals',
        destination: '/library/us-state-capitals-quiz-how-well-do-you-know-your-state-capitals',
        permanent: true,
      },
      {
        source: '/blog/articles/:slug(.*[^md])',
        destination: '/blog/:slug',
        permanent: true,
      },
      {
        source: '/blog/articles',
        destination: '/blog',
        permanent: true,
      }
    ];
  },
  webpack: (config) => {
    // camel-case style names from css modules
    config.module.rules
        .find(({ oneOf }) => !!oneOf).oneOf
        .filter(({ use }) => JSON.stringify(use)?.includes('css-loader'))
        .reduce((acc, { use }) => acc.concat(use), [])
        .forEach(({ options }) => {
          if (options.modules) {
            options.modules.exportLocalsConvention = 'camelCase';
          }
        });

    const svgoConfig = {
      plugins: [
        {
          name: 'preset-default',
          params: {
            overrides: {
              removeViewBox: false,
              cleanupIds: false,
            },
          },
        },
      ],
    };

    config.module.rules.push({
      test: /\.svg$/,
      issuer: /\.[jt]sx?$/,
      loader: '@svgr/webpack',
      options: {
        svgoConfig: svgoConfig,
      },
    })

    return config;
  },
};

export default withMDX({
  options: { remarkPlugins: [remarkSlug, remarkAutolinkHeadings] },
})(config);
