export type NavigationItem = {
  i18nKey: string;
  href: string;
};

export const headerNavigation: NavigationItem[] = [
  {
    i18nKey: 'how_it_works',
    href: '/#create-quiz',
  },
  {
    i18nKey: 'business',
    href: '/business',
  },
  {
    i18nKey: 'blog',
    href: '/blog',
  },
  {
    i18nKey: 'library',
    href: '/library',
  },
  {
    i18nKey: 'about_us',
    href: '/about-us',
  },
  {
    i18nKey: 'contacts',
    href: '/contact-us',
  },
];

export const footerNavigation: NavigationItem[] = [
  {
    i18nKey: 'how_it_works',
    href: '/#create-quiz',
  },
  {
    i18nKey: 'business',
    href: '/business',
  },
  {
    i18nKey: 'blog',
    href: '/blog',
  },
  {
    i18nKey: 'library',
    href: '/library',
  },
  {
    i18nKey: 'faq',
    href: '/#faq',
  },
  {
    i18nKey: 'contacts',
    href: '/contact-us',
  },
];
