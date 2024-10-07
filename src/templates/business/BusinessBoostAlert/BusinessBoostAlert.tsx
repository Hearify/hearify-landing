import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import styles from './BusinessBoostAlert.module.scss';
import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import BusinessGroupImg from '@/assets/images/business-group.png';
import { CalendarIcon } from '@heroicons/react/24/solid';

const BusinessBoostAlert = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.BusinessBoostAlert' });

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>{t('title')}</h3>
        <p className={styles.text}>{t('description')}</p>
        <AppButtonLink className={styles.button} href="https://app.hearify.org/signup" width="240px" size="lg">
          {t('button')}
          <CalendarIcon />
        </AppButtonLink>
      </div>
      <Image className={styles.image} src={BusinessGroupImg} alt="AI group of people" width={380} height={252} />
    </div>
  );
};

export default BusinessBoostAlert;
