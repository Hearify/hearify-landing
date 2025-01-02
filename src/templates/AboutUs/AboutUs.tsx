import React from 'react';
import { useTranslation } from 'next-i18next';

import GroupImg from '@/assets/images/about-us/group-about-us.png';
import BoostAlert from '@/containers/BoostAlert/BoostAlert';
import AboutUsCommitted from './AboutUsCommitted/AboutUsCommitted';
import AboutUsValues from './AboutUsValues/AboutUsValues';
import AboutUsTeam from './AboutUsTeam/AboutUsTeam';
import styles from './AboutUs.module.scss';

type DataType = {
  title: string;
  description: string;
};

const AboutUs: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.AboutUs' });

  const data: DataType[] = t('data', { returnObjects: true });

  return (
    <main className={styles.wrapper}>
      <h1 className={styles.title}>{t('title')}</h1>
      <ul className={styles.list}>
        {data.map(item => (
          <li key={item.title} className={styles.item}>
            <h2 className={styles.itemTitle}>{item.title}</h2>
            <p className={styles.description}>{item.description}</p>
          </li>
        ))}
      </ul>
      <AboutUsCommitted />
{/*       <AboutUsTeam /> */}
      <AboutUsValues />
      <div className={styles.box}>
        <h2 className={styles.boxTitle}>{t('bottom-title')}</h2>
        <p className={styles.boxDescription}>{t('description')}</p>
      </div>
      <BoostAlert
        title={t('alert-title')}
        text={t('alert-text')}
        button={t('alert-button')}
        image={GroupImg}
        width={360}
        height={280}
      />
    </main>
  );
};

export default AboutUs;
