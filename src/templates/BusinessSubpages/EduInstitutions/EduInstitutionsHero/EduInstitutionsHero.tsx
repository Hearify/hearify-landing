import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { CalendarIcon } from '@heroicons/react/24/solid';

import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import heroEduImage from '@/assets/images/edu_institutions_hero_image.png';
import styles from './EduInstitutionsHero.module.scss';

const EduInstitutionsHero: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.EduInstitutionsHero' });
  const animationRef = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.wrapper} id="hero">
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.description}>{t('description')}</p>
      <AppButtonLink className={styles.button} href="https://app.hearify.org/signup" size="lg">
        {t('button')}
        <CalendarIcon />
      </AppButtonLink>
      <div>
        <Image
          className={styles.img}
          src={heroEduImage}
          alt="Educational Institutions"
          width={590}
          height={360}
          fetchPriority="high"
          priority
        />
      </div>
    </section>
  );
};

export default EduInstitutionsHero;
