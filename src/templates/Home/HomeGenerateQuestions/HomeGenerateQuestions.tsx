import React from 'react';
import { useTranslation } from 'next-i18next';

import AppHeading from '@/components/AppHeading/AppHeading';
import styles from './HomeGenerateQuestions.module.scss';

type GenerateQuestionsBlock = {
  title: string;
  text: string;
};

const HomeGenerateQuestions: React.FC = () => {
  const { t } = useTranslation('common', { keyPrefix: 'templates.HomeGenerateQuestions' });

  const blocks: GenerateQuestionsBlock[] = t('blocks', { returnObjects: true });

  return (
    <section className={styles.wrapper} id="generate-questions">
      <AppHeading variant="h2" className={styles.title}>
        {t('title')}
      </AppHeading>

      <div className={styles.list}>
        {blocks.map(item => (
          <div key={item.title} className={styles.item}>
            <h3 className={styles.subtitle}>{item.title}</h3>
            <p className={styles.text}>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeGenerateQuestions;
