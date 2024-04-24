// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hearify',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/logo.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js'
        },
        blog: {
          showReadingTime: true
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    image: 'img/logo.svg',
    navbar: {
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        href: 'https://hearify.org'
      },
      items: [
        {
          to: 'https://hearify.org/#how-it-works-section',
          label: 'How it works',
        },
        {
          to: '/',
          label: 'Blog',
        },
        {
          to: 'https://hearify.org/#faq-section',
          label: 'FAQ',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'How Hearify works',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Blog',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
          ],
        },
        /*{
          title: 'Community',
          items: [
            {
              image: 'img/docusaurus-social-card.jpg',
              label: 'Instagram',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'LinkedIn',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Facebook',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },*/
        {
          title: 'Terms of Use and Privacy Policy.',
          items: [

            {
              label: 'Privacy Policy',
              href: 'https://privacy-policy.hearify.org/',
            },
            {
              label: 'Terms of Service',
              href: 'https://terms-of-service.hearify.org/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Hearify, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },

  // Use customFields to include the redirect route
  customFields: {
    // Add the redirect route
    redirects: [
      {
        from: '/',
        to: '/blog',
      },
    ],
  },
};

export default config;
