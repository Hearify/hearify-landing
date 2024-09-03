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
];

export const footerNavigation: NavigationItem[] = [
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
];
