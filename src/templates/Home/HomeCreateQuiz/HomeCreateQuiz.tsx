import React from 'react';
import { useTranslation } from 'next-i18next';

import AppHeading from '@/components/AppHeading/AppHeading';
import styles from './HomeCreateQuiz.module.scss';

const HomeCreateQuiz: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.HomeCreateQuiz' });

  return (
    <section className={styles.wrapper} id="create-quiz">
      <AppHeading variant="h2" className={styles.title}>
        {t('title')}
      </AppHeading>

      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <video src="/how_it_works.mp4" width="100%" controls />
    </section>
  );
};

export default HomeCreateQuiz;
