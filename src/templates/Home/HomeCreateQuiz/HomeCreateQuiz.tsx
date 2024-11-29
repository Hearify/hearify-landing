import React, { useState, useEffect } from 'react';
import { useTranslation } from 'next-i18next';

import AppHeading from '@/components/AppHeading/AppHeading';

import styles from './HomeCreateQuiz.module.scss';

type CreateQuizStep = {
  title: string;
  description: string;
};

const HomeCreateQuiz: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.HomeCreateQuiz' });






  return (
    <section className={styles.wrapper} id="create-quiz">
      <AppHeading variant="h2" className={styles.title}>
        {t('title')}
      </AppHeading>

      <video src={'/how_it_works.mp4'} width={'100%'} controls></video>
    </section>
  );
};

export default HomeCreateQuiz;
