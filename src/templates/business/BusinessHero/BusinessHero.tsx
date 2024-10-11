import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { CalendarIcon } from '@heroicons/react/24/solid';

import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import HeroImage from '@/assets/images/big-team-working.png';
import styles from './BusinessHero.module.scss';

const BusinessHero = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.BusinessHomeHero' });

  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>{t('title')}</h1>
        <p className={styles.description}>{t('description')}</p>
        <AppButtonLink className={styles.button} href="https://app.hearify.org/signup" size="lg">
          {t('button')}
          <CalendarIcon />
        </AppButtonLink>
        <Image className={styles.img} src={HeroImage} alt="teamWorking" width={587} height={359} />
      </div>
    </section>
  );
};

export default BusinessHero;
