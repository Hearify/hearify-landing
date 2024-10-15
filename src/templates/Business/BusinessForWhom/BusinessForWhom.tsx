import React from 'react';
import Carousel from 'nuka-carousel';
import { useTranslation } from 'next-i18next';

import BusinessForWhomCard from '../BusinessForWhomCard/BusinessForWhomCard';
import TeacherIcon from '@/assets/business/teacher.svg';
import SchoolIcon from '@/assets/business/school.svg';
import BoardIcon from '@/assets/business/board.svg';
import BriefcaseIcon from '@/assets/business/briefcase.svg';
import UserGroupIcon from '@/assets/business/user-group.svg';
import ScienceIcon from '@/assets/business/science.svg';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import styles from './BusinessForWhom.module.scss';

import type { BusinessForWhomCardProps } from '@/templates/Business/BusinessForWhomCard/BusinessForWhomCard';

type DataType = {
  title: string;
  description: string;
};

type ImagesType = {
  image: React.FC<React.SVGProps<SVGSVGElement>>;
};

const BusinessForWhom: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.BusinessForWhom' });
  const { isDeviceLarge } = useDeviceDetect('md');

  const data: DataType[] = t('data', { returnObjects: true });
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const images: ImagesType[] = [
    { image: TeacherIcon },
    { image: SchoolIcon },
    { image: BoardIcon },
    { image: BriefcaseIcon },
    { image: UserGroupIcon },
    { image: ScienceIcon },
  ];

  const combinedData: Array<BusinessForWhomCardProps> = data.map((item, index) => ({
    title: item.title,
    description: item.description,
    image: images[index].image,
  }));

  return (
    <section className={styles.wrapper} id="for-whom">
      <h1 className={styles.title}>{t('title')}</h1>

      {isDeviceLarge ? (
        <div className={styles.list}>
          {combinedData.map(item => (
            <BusinessForWhomCard
              key={item.title} //
              title={item.title}
              description={item.description}
              image={item.image}
            />
          ))}
        </div>
      ) : (
        <Carousel
          className={styles.carousel}
          renderCenterLeftControls={null}
          renderCenterRightControls={null}
          defaultControlsConfig={{
            containerClassName: styles.controls,
            pagingDotsClassName: styles.dots,
          }}
          wrapAround
          autoplay
        >
          {combinedData.map(item => (
            <div key={item.title} className={styles.carouselItem}>
              <BusinessForWhomCard //
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default BusinessForWhom;
