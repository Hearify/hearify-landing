import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import AppHeading from '@/components/AppHeading/AppHeading';
import AboutUsImage1 from '@/assets/images/about-us/about-us-1.png';
import AboutUsImage2 from '@/assets/images/about-us/about-us-2.png';
import AboutUsImage3 from '@/assets/images/about-us/about-us-3.png';
import styles from './HomeAboutUs.module.scss';

type AboutUsBlock = {
  name: string;
  position: string;
};

// TODO: Add linkedin urls. Maybe move avatatar + linkedin in a component
const HomeAboutUs: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.HomeAboutUs' });

  const aboutUsBlocks: AboutUsBlock[] = t('blocks', { returnObjects: true });

  return (
    <section className={styles.wrapper} id="about-us">
      <AppHeading variant="h2" className={styles.title}>
        {t('title')}
      </AppHeading>

      <div className={styles.list}>
        {aboutUsBlocks.map((item, index) => (
          <div key={item.name} className={styles.item}>
            <div className={styles.image}>
              {index === 0 && <Image src={AboutUsImage1} alt={item.name} width={100} height={100} />}
              {index === 1 && <Image src={AboutUsImage2} alt={item.name} width={100} height={100} />}
              {index === 2 && <Image src={AboutUsImage3} alt={item.name} width={100} height={100} />}
            </div>

            <div className={styles.content}>
              <p className={styles.name}>{item.name}</p>
              <p className={styles.position}>{item.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeAboutUs;
