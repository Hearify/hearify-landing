import React from 'react';
import Carousel from 'nuka-carousel';
import { useTranslation } from 'next-i18next';

import ForWhomCard from '@/containers/ForWhomCard/ForWhomCard';
import TeacherIcon from '@/assets/business/teacher.svg';
import UserPlusIcon from '@/assets/business/user-plus.svg';
import UserIcon from '@/assets/business/user-group.svg';
import useDeviceDetect from '@/hooks/useDeviceDetect';
import styles from './CorporateTrainingForWhom.module.scss';

import type { ForWhomCardProps } from '@/containers/ForWhomCard/ForWhomCard';

const links = [
  "https://app.hearify.org/signup",
  "https://app.hearify.org/signup",
  "https://app.hearify.org/signup",
];

type DataType = {
  title: string;
  description: string;
};

type ImagesType = {
  image: React.FC<React.SVGProps<SVGSVGElement>>;
};

const BusinessForWhom: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.CorporateTrainingForWhom' });
  const { isDeviceLarge } = useDeviceDetect('md');

  const data: DataType[] = t('data', { returnObjects: true });
  /* eslint-disable @typescript-eslint/no-unsafe-assignment */
  const images: ImagesType[] = [
    { image: TeacherIcon },
    { image: UserPlusIcon },
    { image: UserIcon },
  ];

  const combinedData: Array<ForWhomCardProps> = data.map((item, index) => ({
    title: item.title,
    description: item.description,
    image: images[index].image,
    link: links[index],
  }));

  return (
    <section className={styles.wrapper} id="for-whom">
      <h2 className={styles.title}>{t('title')}</h2>

      {isDeviceLarge ? (
        <div className={styles.list}>
          {combinedData.map(item => (
            <ForWhomCard
              key={item.title} //
              title={item.title}
              description={item.description}
              image={item.image}
              link={item.link}
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
              <ForWhomCard //
                title={item.title}
                description={item.description}
                image={item.image}
                link={item.link}
              />
            </div>
          ))}
        </Carousel>
      )}
    </section>
  );
};

export default BusinessForWhom;
