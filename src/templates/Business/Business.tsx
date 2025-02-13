import React from 'react';
import { useTranslation } from 'next-i18next';
import { CheckIcon } from '@heroicons/react/24/solid';

import GroupImg from '@/assets/images/business-group.png';
import BoostAlert from '@/containers/BoostAlert/BoostAlert';
import BusinessForWhom from './BusinessForWhom/BusinessForWhom';
import BusinessInfoBoard from '@/templates/Business/BusinessInfoBoard/BusinessInfoBoard';
import BusinessHero from '@/templates/Business/BusinessHero/BusinessHero';
import SchoolIcon from '@/assets/business/school.svg';
import BoardIcon from '@/assets/business/board.svg';
import BriefcaseIcon from '@/assets/business/briefcase.svg';
import UserGroupIcon from '@/assets/business/user-group.svg';
import ScienceIcon from '@/assets/business/science.svg';
import TeacherIcon from '@/assets/business/teacher.svg';
import styles from './Business.module.scss';

import type { BusinessInfoBoardProps } from '@/templates/Business/BusinessInfoBoard/BusinessInfoBoard';

type DataType = {
  title: string;
  description: string;
  button: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
};

type AddDataType = {
  href: string;
  addStyles?: boolean;
  showButtonIcon?: boolean;
  backImg: React.FC<React.SVGProps<SVGSVGElement>>;
  image: React.FC<React.SVGProps<SVGSVGElement>>;
};

const Business: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.BusinessInfoBoard' });

  // TODO(Sasha): Refactor this
  const data: DataType[] = t('data', { returnObjects: true });
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const addData: AddDataType[] = [
    {
      href: 'https://app.hearify.org/signup',
      showButtonIcon: true,
      backImg: TeacherIcon,
      image: CheckIcon,
    },
    {
      href: 'https://app.hearify.org/signup',
      addStyles: true,
      backImg: SchoolIcon,
      image: CheckIcon,
    },
    {
      href: 'https://app.hearify.org/signup',
      backImg: BoardIcon,
      image: CheckIcon,
    },
    {
      href: 'https://app.hearify.org/signup',
      addStyles: true,
      backImg: BriefcaseIcon,
      image: CheckIcon,
    },
    {
      href: 'https://app.hearify.org/signup',
      backImg: UserGroupIcon,
      image: CheckIcon,
    },
    {
      href: 'https://app.hearify.org/signup',
      addStyles: true,
      backImg: ScienceIcon,
      image: CheckIcon,
    },
  ];

  const combinedData: BusinessInfoBoardProps[] = data.map((item, index) => ({
    ...item,
    ...addData[index],
  }));

  return (
    <main className={styles.wrapper}>
      <BusinessHero />
      <BusinessForWhom />

      {combinedData.map(item => (
        // eslint-disable-next-line react/jsx-props-no-spreading
        <BusinessInfoBoard key={item.title} {...item} />
      ))}

      <BoostAlert
        title={t('alert-title')}
        text={t('alert-text')}
        button={t('alert-button')}
        image={GroupImg}
        width={380}
        height={250}
      />
    </main>
  );
};

export default Business;
