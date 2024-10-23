import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import GroupImg from '@/assets/images/about-us/group-about-us.png';
import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import styles from './TryBoostAlert.module.scss';

const TryBoostAlert: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.AboutUs' });

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>{t('get_in_touch')}</h3>
        <p className={styles.text}>{t('interested_in_learning')}</p>
        <AppButtonLink className={styles.button} href="https://app.hearify.org/signup" width="240px" size="lg">
          {t('contact_us_alert')}
        </AppButtonLink>
      </div>

      <Image src={GroupImg} alt="AI group of people" width={360} height={280} className={styles.image} />
    </div>
  );
};

export default TryBoostAlert;
