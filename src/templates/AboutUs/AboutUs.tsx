import React from 'react';
import { useTranslation } from 'next-i18next';

import AboutUsBoostAlert from '@/containers/AboutUsBoostAlert/AboutUsBoostAlert';
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
      <AboutUsTeam />
      <AboutUsValues />
      <div className={styles.box}>
        <h2 className={styles.boxTitle}>{t('bottom-title')}</h2>
        <p className={styles.boxDescription}>{t('description')}</p>
      </div>
      <AboutUsBoostAlert />
    </main>
  );
};

export default AboutUs;
