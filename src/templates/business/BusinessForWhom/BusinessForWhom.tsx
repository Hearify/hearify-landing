import React from 'react';
import Carousel from 'nuka-carousel';
import { useTranslation } from 'next-i18next';

import AppForWhomCard, { AppForWhomCardProps } from './AppForWhomCard/AppForWhomCard';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import TeachercIcon from '@/assets/business/teacher.svg';
import SchoolIcon from '@/assets/business/school.svg';
import BoardIcon from '@/assets/business/board.svg';
import BriefcaseIcon from '@/assets/business/briefcase.svg';
import UserGroupIcon from '@/assets/business/user-group.svg';
import ScienceIcon from '@/assets/business/science.svg';
import styles from './BusinessForWhom.module.scss';

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
  const images: ImagesType[] = [
    { image: TeachercIcon },
    { image: SchoolIcon },
    { image: BoardIcon },
    { image: BriefcaseIcon },
    { image: UserGroupIcon },
    { image: ScienceIcon },
  ];

  const combinedData: Array<AppForWhomCardProps> = data.map((item, index) => ({
    title: item.title,
    description: item.description,
    image: images[index].image,
  }));

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('title')}</h1>
        {isDeviceLarge ? (
          <div className={styles.cardsWrapper}>
            {combinedData.map((item, index) => {
              return (
                <AppForWhomCard key={index} title={item.title} description={item.description} image={item.image} />
              );
            })}
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
            {combinedData.map((item, index) => {
              return (
                <div className={styles.cardsWrapper}>
                  <AppForWhomCard key={index} title={item.title} description={item.description} image={item.image} />
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default BusinessForWhom;
