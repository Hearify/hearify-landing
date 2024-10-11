import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { CalendarIcon } from '@heroicons/react/24/solid';

import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import BusinessGroupImg from '@/assets/images/business-group.png';
import styles from './BusinessBoostAlert.module.scss';

const BusinessBoostAlert: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.BusinessBoostAlert' });

  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>{t('title')}</h3>
        <p className={styles.text}>{t('description')}</p>
        <AppButtonLink className={styles.button} href="https://app.hearify.org/signup" width="240px" size="lg">
          {t('button')}
          <CalendarIcon />
        </AppButtonLink>
      </div>
      <Image className={styles.image} src={BusinessGroupImg} alt="AI group of people" width={380} height={252} />
    </section>
  );
};

export default BusinessBoostAlert;
