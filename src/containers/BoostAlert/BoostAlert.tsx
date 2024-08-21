import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import BlogGroupImg from '@/assets/images/blog-group.png';
import AppButtonLink from '@/components/AppButtonLink/AppButtonLink';
import styles from './BoostAlert.module.scss';

const BoostAlert: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h3 className={styles.title}>{t('boost_your_knowledge')}</h3>
        <p className={styles.text}>{t('try_out_ai_quiz')}</p>
        <AppButtonLink className={styles.button} href="https://app.hearify.org/signup" width="240px" size="lg">
          {t('try_for_free')}
        </AppButtonLink>
      </div>

      <Image src={BlogGroupImg} alt="AI group of people" width={350} height={300} className={styles.image} />
    </div>
  );
};

export default BoostAlert;
