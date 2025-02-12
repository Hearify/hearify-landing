import HRIcon from "@/assets/icons/teacher-2.svg";
import EduInstIcon from "@/assets/icons/school2.svg";
import MarketIcon from "@/assets/icons/presentation-chart-line.svg";
import SmallBizIcon from "@/assets/icons/briefcase.svg";
import PartnerIcon from "@/assets/icons/user-group.svg";
import SpecializedIcon from "@/assets/icons/science-2.svg";


export type NavigationItem = {
  i18nKey: string;
  href: string;
  isAnchor?: boolean;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
  subItems?: NavigationItem[];
};

export const headerNavigation: NavigationItem[] = [
  {
    i18nKey: 'business',
    href: '/business',
    subItems: [
      {
        i18nKey: 'HR and Corporate Training',
        href: '/business/ai-corporate-training-for-employees',
        icon: HRIcon,
      },
      {
        i18nKey: 'Small and Medium Businesses',
        href: '/business/ai-quizzes-for-small-businesses',
        icon: SmallBizIcon,
      },
      {
        i18nKey: 'Educational Institutions',
        href: '/business/ai-test-generator-for-teachers',
        icon: EduInstIcon,
      },
      {
        i18nKey: 'Partner Programs and Agencies',
        href: '/business/partner-program-white-label-quizzes-for-agencies',
        icon: PartnerIcon,
      },
      {
        i18nKey: 'Marketing and Customer Engagement',
        href: '/business/lead-generation-quizzes',
        icon: MarketIcon,
      },
      {
        i18nKey: 'Specialized Industries',
        href: '/business/ai-quizzes-for-specialized-industries',
        icon: SpecializedIcon,
      },
    ],
  },
  {
    i18nKey: 'how_it_works',
    href: '/#create-quiz',
    isAnchor: true,
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
    isAnchor: true,
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
