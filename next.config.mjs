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
