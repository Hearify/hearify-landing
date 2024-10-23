import React from 'react';
import { useTranslation } from 'next-i18next';

import GroupImg from '@/assets/images/business-group.png';
import BusinessHero from './BusinessHero/BusinessHero';
import BusinessForWhom from './BusinessForWhom/BusinessForWhom';
import BusinessInfoBoard from '@/templates/Business/BusinessInfoBoard/BusinessInfoBoard';
import SchoolIcon from '@/assets/business/school.svg';
import BoardIcon from '@/assets/business/board.svg';
import ClockIcon from '@/assets/business/clock.svg';
import ComputerIcon from '@/assets/business/computer.svg';
import CharLineIcon from '@/assets/business/presentation-chart-line.svg';
import AdjustmentsIcon from '@/assets/business/adjustments-horizontal.svg';
import DocumentTextIcon from '@/assets/business/document-text.svg';
import CheckCircleIcon from '@/assets/business/check-circle.svg';
import MegaphoneIcon from '@/assets/business/megaphone.svg';
import UserPlusIcon from '@/assets/business/user-plus.svg';
import CursorIcon from '@/assets/business/cursor-arrow-ripple.svg';
import HandUpIcon from '@/assets/business/hand-thumb-up.svg';
import CircleStackIcon from '@/assets/business/circle-stack.svg';
import DocumentCheckIcon from '@/assets/business/document-check.svg';
import CheckBadgeIcon from '@/assets/business/check-badge.svg';
import ChatIcon from '@/assets/business/chat-bubble-left-right.svg';
import BriefcaseIcon from '@/assets/business/briefcase.svg';
import UserGroupIcon from '@/assets/business/user-group.svg';
import ScienceIcon from '@/assets/business/science.svg';
import TeacherIcon from '@/assets/business/teacher.svg';
import styles from './Business.module.scss';

import type { BusinessInfoBoardProps } from '@/templates/Business/BusinessInfoBoard/BusinessInfoBoard';
import BoostAlert from '@/containers/BoostAlert/BoostAlert';

type DataType = {
  title: string;
  description: string;
  button: string;
  text1: string;
  text2: string;
  text3: string;
};

type AddDataType = {
  href: string;
  addStyles?: boolean;
  showButtonIcon?: boolean;
  backImg: React.FC<React.SVGProps<SVGSVGElement>>;
  image1: React.FC<React.SVGProps<SVGSVGElement>>;
  image2: React.FC<React.SVGProps<SVGSVGElement>>;
  image3: React.FC<React.SVGProps<SVGSVGElement>>;
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
      image1: ClockIcon,
      image2: ComputerIcon,
      image3: CharLineIcon,
    },
    {
      href: 'https://app.hearify.org/signup',
      addStyles: true,
      backImg: SchoolIcon,
      image1: AdjustmentsIcon,
      image2: DocumentTextIcon,
      image3: CheckCircleIcon,
    },
    {
      href: 'https://app.hearify.org/signup',
      backImg: BoardIcon,
      image1: MegaphoneIcon,
      image2: UserPlusIcon,
      image3: CursorIcon,
    },
    {
      href: 'https://app.hearify.org/signup',
      addStyles: true,
      backImg: BriefcaseIcon,
      image1: ClockIcon,
      image2: HandUpIcon,
      image3: CircleStackIcon,
    },
    {
      href: 'https://app.hearify.org/signup',
      backImg: UserGroupIcon,
      image1: DocumentCheckIcon,
      image2: CheckBadgeIcon,
      image3: BoardIcon,
    },
    {
      href: 'https://app.hearify.org/signup',
      addStyles: true,
      backImg: ScienceIcon,
      image1: ComputerIcon,
      image2: DocumentCheckIcon,
      image3: ChatIcon,
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
