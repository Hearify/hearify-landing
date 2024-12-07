import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import { CalendarIcon } from '@heroicons/react/24/solid';

import lottie from 'lottie-web';
import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import heroImage from '@/assets/images/big-team-working.png';
import styles from './BusinessHero.module.scss';

const BusinessHero: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.BusinessHomeHero' });
  const animation = useRef(null);

  useEffect(() => {
    if (!animation.current) return;

    lottie.destroy('animation');

    lottie.loadAnimation({
      container: animation.current,
      renderer: 'svg',
      loop: true,
      autoplay: false,
      path: '/animations/animation.json',
      name: 'animation',
    });

    lottie.play('animation');
  }, []);

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
          src={heroImage}
          alt="Team working"
          width={590}
          height={360}
          fetchPriority="high"
          priority
        />
        <div ref={animation} className={styles.animation}></div>
      </div>
    </section>
  );
};

export default BusinessHero;
