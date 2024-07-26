import withMDX from '@next/mdx';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';

const config = {
  reactStrictMode: true,
  basePath: '/blog',
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
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

    return config;
  },
};

export default withMDX({
  options: { remarkPlugins: [remarkSlug, remarkAutolinkHeadings] },
})(config);
